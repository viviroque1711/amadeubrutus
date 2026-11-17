// Recebe o formulário "Contato / Imprensa" do site, grava no banco e avisa por e-mail (Resend).
// Tabela: public.contatos_site (já existente no projeto, RLS ligado, sem acesso público).
// Segredos: RESEND_API_KEY (obrigatório); CONTATO_DESTINO e CONTATO_REMETENTE (opcionais, com padrão abaixo).
import { createClient } from "npm:@supabase/supabase-js@2";

const ORIGENS = ["https://amadeubrutus.com.br", "https://www.amadeubrutus.com.br"];
const ASSUNTOS = ["Shows e contratações", "Eventos particulares", "Eventos corporativos", "Imprensa e entrevistas", "The Voice Brasil", "Parcerias e publicidade", "Projetos musicais", "Fãs", "Outro assunto"];
const DESTINO = Deno.env.get("CONTATO_DESTINO") ?? "contato@amadeubrutus.com.br";
const REMETENTE = Deno.env.get("CONTATO_REMETENTE") ?? "Amadeu Brutus <contato@amadeubrutus.com.br>";

const WHATSAPP = "5511987422691";
const linkZap = (texto: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
const INSTAGRAM = "https://www.instagram.com/amadeubrutus/";
const YOUTUBE = "https://www.youtube.com/@AmadeuBrutus";

type Jornada = { area: string; abertura: string; pedido?: string[]; zap?: { rotulo: string; texto: string }; fecho?: string };
const JORNADAS: Record<string, Jornada> = {
  "Shows e contratações": { area: "Comercial",
    abertura: "Que alegria receber seu convite! A produção do Amadeu Brutus vai conferir a agenda e responder com disponibilidade e proposta em até 24 horas.",
    pedido: ["Data", "Cidade e local", "Tipo de evento", "Público estimado", "Duração do show", "Se o local já tem som e palco"],
    zap: { rotulo: "Tem urgência? Fale com a produção pelo WhatsApp", texto: "Olá! Quero contratar o Amadeu Brutus para um show." } },
  "Eventos particulares": { area: "Comercial",
    abertura: "Que honra fazer parte de um momento tão especial! O Amadeu canta em casamentos, aniversários e festas, e a equipe vai montar uma proposta para você em até 24 horas.",
    pedido: ["Data", "Tipo de festa", "Cidade e local", "Número de convidados", "Em que momento quer o show (cerimônia, festa ou os dois)", "Músicas que não podem faltar"],
    zap: { rotulo: "Prefere conversar agora? Chame no WhatsApp", texto: "Olá! Quero o Amadeu Brutus no meu evento." } },
  "Eventos corporativos": { area: "Comercial",
    abertura: "Obrigado pelo interesse em levar o Amadeu Brutus para o seu evento. A equipe comercial responde com a proposta em até 24 horas.",
    pedido: ["Empresa", "Data e horário", "Cidade e local", "Formato (show completo ou acústico)", "Público estimado"],
    zap: { rotulo: "Urgente? Fale pelo WhatsApp", texto: "Olá! Quero o Amadeu Brutus no evento da minha empresa." } },
  "Imprensa e entrevistas": { area: "Imprensa",
    abertura: "Obrigado pelo contato! A assessoria do Amadeu Brutus retorna em até 24 horas.",
    pedido: ["Veículo", "Formato (TV, rádio, podcast ou portal)", "Pauta", "Data e prazo", "Se é ao vivo ou gravado"] },
  "The Voice Brasil": { area: "Imprensa",
    abertura: "Obrigado por acompanhar a trajetória do Amadeu no The Voice Brasil! Sua mensagem chegou à equipe, que responde em até 24 horas quando for um convite ou pedido de entrevista.",
    fecho: "Enquanto isso, acompanhe as novidades no Instagram @amadeubrutus." },
  "Parcerias e publicidade": { area: "Comercial",
    abertura: "Obrigado pelo interesse em criar algo junto com o Amadeu Brutus! A equipe comercial avalia a proposta e responde em até 24 horas.",
    pedido: ["Marca", "Objetivo da ação", "Entregas desejadas (posts, presença em evento, campanha)", "Período", "Verba prevista, se houver"],
    zap: { rotulo: "Fale com a equipe pelo WhatsApp", texto: "Olá! Tenho uma proposta de parceria para o Amadeu Brutus." } },
  "Projetos musicais": { area: "Comercial",
    abertura: "Que bom saber do seu projeto! O Amadeu e a equipe avaliam cada convite com carinho e respondem em até 24 horas.",
    pedido: ["Nome do projeto", "Link de referência (música ou demo)", "O que imagina para a participação dele", "Datas de gravação ou lançamento"] },
  "Fãs": { area: "Fãs",
    abertura: "Muito obrigado pelo carinho! O Amadeu lê as mensagens dos fãs, e cada palavra de apoio faz diferença nessa caminhada.",
    fecho: "Acompanhe a agenda de shows e as novidades no Instagram @amadeubrutus e no YouTube." },
  "Outro assunto": { area: "Geral", abertura: "Recebemos sua mensagem! A equipe do Amadeu Brutus responde em até 24 horas." },
};

function emailConfirmacao(nome: string, assunto: string, mensagem: string) {
  const j = JORNADAS[assunto] ?? JORNADAS["Outro assunto"];
  const p = (txt: string) => `<p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#1d1d24">${txt}</p>`;
  const lista = j.pedido ? p(j.pedido.length ? "Para agilizar, responda este e-mail com:" : "") +
    `<ul style="margin:0 0 20px;padding-left:20px;font-size:15px;line-height:1.7;color:#1d1d24">${j.pedido.map((x) => `<li>${escapar(x)}</li>`).join("")}</ul>` : "";
  const zap = j.zap ? `<p style="margin:0 0 8px;font-size:15px;color:#1d1d24">${escapar(j.zap.rotulo)}:</p>
<p style="margin:0 0 24px"><a href="${linkZap(j.zap.texto)}" style="display:inline-block;padding:13px 22px;background:#25d366;color:#fff;text-decoration:none;border-radius:6px;font-weight:700;font-size:15px">Conversar no WhatsApp</a></p>` : "";
  const redes = j.fecho ? p(escapar(j.fecho)) + `<p style="margin:0 0 24px;font-size:15px"><a href="${INSTAGRAM}" style="color:#ff263d;font-weight:700">Instagram</a> &nbsp;·&nbsp; <a href="${YOUTUBE}" style="color:#ff263d;font-weight:700">YouTube</a></p>` : "";
  return `<div style="background:#f3f3f5;padding:24px 12px;font-family:Arial,Helvetica,sans-serif">
<div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden">
<div style="background:#0b0b10;padding:22px 28px;color:#fff;font-family:Impact,'Arial Narrow',Arial,sans-serif;font-size:26px;letter-spacing:1px">AMADEU <span style="color:#ff263d">BRUTUS</span></div>
<div style="padding:28px">
${p(`Olá, ${escapar(nome)}!`)}
${p(escapar(j.abertura))}
${lista}${zap}${redes}
<p style="margin:24px 0 6px;font-size:13px;color:#777">Sua mensagem (${escapar(assunto)}):</p>
<p style="margin:0 0 24px;padding:12px 14px;background:#f6f6f8;border-left:3px solid #ff263d;font-size:14px;line-height:1.6;color:#444">${escapar(mensagem).replace(/\n/g, "<br>")}</p>
<p style="margin:0;font-size:16px;color:#1d1d24">Abraços,<br><b>Equipe Amadeu Brutus</b></p>
</div>
<div style="padding:16px 28px;background:#fafafa;font-size:12px;color:#888"><a href="https://www.amadeubrutus.com.br" style="color:#888">amadeubrutus.com.br</a></div>
</div></div>`;
}

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


  const confirmacao = emailConfirmacao(nome, assunto, mensagem);
  const area = (JORNADAS[assunto] ?? JORNADAS["Outro assunto"]).area;
  // Os dois e-mails saem ao mesmo tempo, para o visitante esperar menos.
  const [avisado, confirmado] = await Promise.all([
    enviarEmail(DESTINO.split(",").map((x) => x.trim()).filter(Boolean), `[${area}] ${assunto} — ${nome} ${sobrenome}`, html, email),
    enviarEmail([email], assunto === "Fãs" ? "Obrigado pelo carinho — Amadeu Brutus" : "Recebemos seu contato — Amadeu Brutus", confirmacao, DESTINO.split(",")[0].trim()),
  ]);

  await supabase.from("contatos_site").update({
    email_notificacao_status: avisado ? "enviado" : "falhou",
    email_confirmacao_status: confirmado ? "enviado" : "falhou",
    updated_at: new Date().toISOString(),
  }).eq("id", linha.id);

  // A mensagem já está gravada; mesmo se o e-mail falhar, o visitante recebe confirmação.
  return resposta(200, { ok: true }, origem);
});
