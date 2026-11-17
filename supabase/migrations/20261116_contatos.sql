-- Mensagens do formulário "Contato / Imprensa" do site amadeubrutus.com.br
create table if not exists public.contatos (
  id uuid primary key default gen_random_uuid(),
  criado_em timestamptz not null default now(),
  nome text not null check (char_length(nome) between 1 and 80),
  sobrenome text not null check (char_length(sobrenome) between 1 and 80),
  telefone text not null check (char_length(telefone) between 8 and 30),
  email text not null check (char_length(email) between 5 and 160),
  assunto text not null check (assunto in ('Imprensa','Booking','Outro')),
  mensagem text not null check (char_length(mensagem) between 5 and 4000),
  email_enviado boolean not null default false,
  pagina text
);
-- Só a função do servidor (chave de serviço) grava e lê; o navegador não acessa a tabela.
alter table public.contatos enable row level security;
revoke all on public.contatos from anon, authenticated;
create index if not exists contatos_criado_em_idx on public.contatos (criado_em desc);
