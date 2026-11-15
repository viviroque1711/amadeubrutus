# Ficha do Projeto — Amadeu Brutus

## Identificação
- Nome do projeto: Site oficial Amadeu Brutus
- Domínio previsto: https://www.amadeubrutus.com.br/
- Repositório: https://github.com/viviroque1711/amadeubrutus
- Branch: main
- Hospedagem: Hostinger Business (plano informado pela proprietária; expiração exibida em 28/01/2030)
- Status: preparação e auditoria pré-publicação; ainda não implantado.

## Objetivo
Construir presença digital oficial para apresentar o artista, sua música, trajetória, agenda e lançamentos, com caminho claro para futuras oportunidades de contratação. O conteúdo factual deve ser confirmado antes da publicação.

## Identidade aprovada
- Nome artístico: **Amadeu Brutus**.
- Grafia contínua para identificadores: `amadeubrutus`.
- Não usar “Amadeu” isoladamente como nome principal da marca.
- Direção visual: palco cinematográfico; base preta; acentos vermelho, azul e amarelo.
- Preservar fotografias e assets originais aprovados.

## Arquitetura
- Site estático HTML, CSS e JavaScript.
- Sem dependência de `package.json` ou etapa de build Node para a estrutura atual.
- Arquivos de entrada na raiz: `index.html`, `shows.html`, `lancamentos.html`.
- Assets em `public/images/`, `public/audio/` e `public/videos/`.
- GitHub `main` é a fonte de verdade do código.
- Hostinger é destino de hospedagem/publicação, não ferramenta de desenvolvimento.

## Decisões de SEO, GEO e AEO
- Conteúdo textual essencial deve existir no HTML inicial, não depender de execução JavaScript.
- HTML semântico, títulos e descrições específicos por URL, canonical, Open Graph e Twitter Cards.
- Dados estruturados Schema.org apenas com fatos sustentados.
- Sitemap XML e robots.txt na raiz do domínio.
- Política atual: permitir rastreamento de buscadores e crawlers de IA, inclusive agentes documentados de treinamento, conforme decisão expressa da proprietária.
- Robots.txt é sinal de rastreamento voluntário, não autenticação, firewall ou garantia de indexação/treinamento.
- Revisar os tokens com documentação oficial dos fornecedores periodicamente.
- Não usar `noindex,nofollow` em páginas públicas de produção.

## Redes oficiais conhecidas
- Instagram: https://www.instagram.com/amadeubrutus/
- YouTube: https://www.youtube.com/@AmadeuBrutus
- TikTok: URL anteriormente compartilhada era uma URL de busca, não perfil confirmado; não usar como identidade estruturada até confirmar.

## Estado do conteúdo
- Página inicial: abertura cinematográfica, botões para agenda e lançamentos, faixa de trajetória e apresentação do artista.
- Agenda: página provisória; nenhuma data de show confirmada inserida.
- Lançamentos: página provisória; nenhum lançamento ou link musical confirmado inserido.
- Não afirmar números de shows, participações com artistas ou conquistas sem fonte/validação.

## Validação pendente
- Auditoria visual real em desktop e mobile.
- Verificação de links, áudio, imagens e caminhos após publicação.
- Validar JSON-LD com ferramenta de teste.
- Validar sitemap e robots.txt servidos pelo domínio.
- Configurar/validar Google Search Console e Bing Webmaster Tools após domínio publicado e verificado.
- Conferir redirecionamento canônico entre domínio com e sem www.
- Testar status HTTP, HTTPS, headers, cache e indexabilidade.
- Só marcar deploy concluído após confirmação e testes de produção.

## Último estado de governança
- Últimas mudanças de SEO gravadas em commits no GitHub `main`.
- Importação Git na Hostinger ainda não executada.
- Nenhuma alteração de DNS autorizada ou executada.
