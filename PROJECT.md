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

## Auditoria estática — 15/11/2026

- `index.html`, `shows.html` e `lancamentos.html`: cada página tem um único título HTML, uma URL canônica, um bloco JSON-LD válido e não contém meta robots noindex.
- Página inicial: H1 contém semanticamente o nome completo “AMADEU BRUTUS”.
- Links internos entre as três páginas conferidos no código.
- Caminhos de mídia referenciados pela página inicial encontrados no repositório.
- JSON-LD parseado como JSON válido nas três páginas.
- `robots.txt`: grupos explícitos para Google, Bing, OpenAI, Anthropic, Perplexity, Apple, Meta, Amazon, Mistral e Common Crawl; regra geral também permite rastreamento.
- `sitemap.xml`: contém as três URLs canônicas e está referenciado no robots.txt.
- Inventário de mídia: 32 arquivos, aproximadamente 97,5 MB. Existem vídeos e outros assets que não são usados pelas páginas atuais; foram preservados, sem exclusão.
- Validação visual real, validação em produção, status HTTP, Search Console e indexação permanecem pendentes porque o site ainda não foi publicado.

## Histórico recente de alterações
- Removida a diretiva `noindex,nofollow` das três páginas públicas.
- Criados `robots.txt` e `sitemap.xml`.
- Adicionados canonical, Open Graph, Twitter Cards e dados estruturados JSON-LD.
- Corrigida a documentação do projeto e padronizada a identidade “Amadeu Brutus”.
- Importação Hostinger permanece pendente; DNS não foi alterado.


## Acessibilidade e preparação estática — 15/11/2026

- Removido `aria-hidden="true"` do trecho visual “BRUTUS” dentro do H1; o nome completo “AMADEU BRUTUS” fica disponível à tecnologia assistiva.
- Adicionado indicador de foco visível para links e botões via `:focus-visible`, com contorno amarelo coerente com a paleta aprovada.
- Reposicionado o indicador “Conheça o artista” no mobile para evitar sobreposição com o controle de áudio.
- Revisão do inventário Git: mídia distribuída em `public/images/`, `public/audio/` e `public/videos/`; há uma cópia idêntica (mesmo blob Git) de um vídeo na raiz e em `public/videos/`. Ambos foram preservados para não eliminar asset sem autorização.
- O áudio usado pela home está em `public/audio/amadeubrutus autoral.mp4`; o caminho existe. A compatibilidade de codec e a reprodução real ainda precisam de teste em navegador/produção.
- Arquitetura confirmada como site estático: HTML, CSS e JavaScript no cliente; não há framework ou etapa de compilação identificada nos arquivos de entrada. Não criar `package.json` artificial.
- Preparação Hostinger: publicar a raiz do repositório como site estático; sem comando de build e sem diretório de saída de build. Manter os diretórios `public/` no mesmo nível dos HTML.
- Não houve alteração de DNS, configuração de e-mail, importação ou deploy.

## Registro de mudança
- Data: 15/11/2026.
- Solicitação: corrigir acessibilidade, revisar mídia e preparar importação estática.
- Arquivo alterado nesta etapa: `index.html`.
- Commit de acessibilidade: 79cb8db28bb54bd343b6a83e6f2512ec80b5d7dc.
- Validação: alteração de markup/CSS gravada no GitHub; revisão final do HTML e dos caminhos de mídia em andamento.
- Pendências: teste de teclado e leitor de tela em navegador; teste de áudio e imagens após importação; validação visual desktop/mobile; teste de performance; publicação e DNS.
