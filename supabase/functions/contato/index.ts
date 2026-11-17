// Recebe o formulário "Contato / Imprensa" do site, grava no banco e avisa por e-mail (Resend).
// Tabela: public.contatos_site (já existente no projeto, RLS ligado, sem acesso público).
// Segredos: RESEND_API_KEY (obrigatório); CONTATO_DESTINO e CONTATO_REMETENTE (opcionais, com padrão abaixo).
import { createClient } from "npm:@supabase/supabase-js@2";

const ORIGENS = ["https://amadeubrutus.com.br", "https://www.amadeubrutus.com.br"];
const ASSUNTOS = ["Shows e contratações", "Eventos particulares", "Eventos corporativos", "Imprensa e entrevistas", "The Voice Brasil", "Parcerias e publicidade", "Projetos musicais", "Fãs", "Outro assunto"];
const DESTINO = Deno.env.get("CONTATO_DESTINO") ?? "contato@amadeubrutus.com.br";
const REMETENTE = Deno.env.get("CONTATO_REMETENTE") ?? "Amadeu Brutus <contato@amadeubrutus.com.br>";

async function enviarEmail(para: string[], assunto: string, html: string, responderPara?: string) {
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: REMETENTE, to: para, subject: assunto, html, ...(responderPara ? { reply_to: responderPara } : {}) }),
  });
  if (!r.ok) console.error("Resend", r.status, await r.text());
  return r.ok;
}

const cors = (origem: string | null) => ({
  "Access-Control-Allow-Origin": origem && ORIGENS.includes(origem) ? origem : ORIGENS[0],
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type",
  "Vary": "Origin",
});
const resposta = (status: number, corpo: unknown, origem: string | null) =>
  new Response(JSON.stringify(corpo), { status, headers: { ...cors(origem), "Content-Type": "application/json" } });
const limpar = (v: unknown, max: number) => String(v ?? "").replace(/\s+/g, " ").trim().slice(0, max);
const escapar = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

Deno.serve(async (req) => {
  const origem = req.headers.get("origin");
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(origem) });
  if (req.method !== "POST") return resposta(405, { erro: "Método não permitido." }, origem);
  if (origem && !ORIGENS.includes(origem)) return resposta(403, { erro: "Origem não permitida." }, origem);

  let dados: Record<string, unknown>;
  try { dados = await req.json(); } catch { return resposta(400, { erro: "Envio inválido." }, origem); }

  // Campo invisível: robôs preenchem, pessoas não.
  if (limpar(dados.site, 200)) return resposta(200, { ok: true }, origem);

  const nome = limpar(dados.nome, 80);
  const sobrenome = limpar(dados.sobrenome, 80);
  const telefone = limpar(dados.telefone, 30);
  const email = limpar(dados.email, 160).toLowerCase();
  const assunto = limpar(dados.assunto, 60);
  const mensagem = String(dados.mensagem ?? "").trim().slice(0, 4000);

  const faltando: string[] = [];
  if (!nome) faltando.push("nome");
  if (!sobrenome) faltando.push("sobrenome");
  if (telefone.replace(/\D/g, "").length < 10) faltando.push("telefone");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) faltando.push("email");
  if (!ASSUNTOS.includes(assunto)) faltando.push("assunto");
  if (mensagem.length < 5) faltando.push("mensagem");
  if (faltando.length) return resposta(422, { erro: "Confira os campos destacados.", campos: faltando }, origem);

  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

  // Limite simples contra abuso: até 3 mensagens do mesmo e-mail por hora.
  const umaHora = new Date(Date.now() - 3600_000).toISOString();
  const { count } = await supabase.from("contatos_site").select("id", { count: "exact", head: true }).eq("email", email).gte("created_at", umaHora);
  if ((count ?? 0) >= 3) return resposta(429, { erro: "Recebemos suas mensagens. Aguarde um pouco antes de enviar outra." }, origem);

  const { data: linha, error } = await supabase.from("contatos_site")
    .insert({ nome, sobrenome, telefone, email, assunto, mensagem }).select("id").single();
  if (error) { console.error(error); return resposta(500, { erro: "Não foi possível enviar agora. Tente novamente." }, origem); }

  const html = `<h2>Nova mensagem pelo site — ${escapar(assunto)}</h2>
<p><b>Nome:</b> ${escapar(nome)} ${escapar(sobrenome)}<br><b>Telefone:</b> ${escapar(telefone)}<br><b>E-mail:</b> ${escapar(email)}<br><b>Assunto:</b> ${escapar(assunto)}</p>
<p><b>Mensagem:</b><br>${escapar(mensagem).replace(/\n/g, "<br>")}</p>
<p style="color:#888;font-size:12px">Enviado pelo formulário de amadeubrutus.com.br</p>`;

  const avisado = await enviarEmail(DESTINO.split(",").map((x) => x.trim()).filter(Boolean), `[Site] ${assunto} — ${nome} ${sobrenome}`, html, email);

  const confirmacao = `<p>Olá, ${escapar(nome)}!</p>
<p>Recebemos sua mensagem sobre <b>${escapar(assunto)}</b> pelo site de Amadeu Brutus. A equipe responde em breve por este e-mail ou pelo telefone informado.</p>
<p style="color:#666">Sua mensagem:<br>${escapar(mensagem).replace(/\n/g, "<br>")}</p>
<p>Equipe Amadeu Brutus<br><a href="https://www.amadeubrutus.com.br">amadeubrutus.com.br</a></p>`;
  const confirmado = await enviarEmail([email], "Recebemos sua mensagem — Amadeu Brutus", confirmacao, DESTINO.split(",")[0].trim());

  await supabase.from("contatos_site").update({
    email_notificacao_status: avisado ? "enviado" : "falhou",
    email_confirmacao_status: confirmado ? "enviado" : "falhou",
    updated_at: new Date().toISOString(),
  }).eq("id", linha.id);

  // A mensagem já está gravada; mesmo se o e-mail falhar, o visitante recebe confirmação.
  return resposta(200, { ok: true }, origem);
});
