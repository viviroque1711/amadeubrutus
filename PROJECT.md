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


## Fechamento da preparação estática — 15/11/2026

- Revisão final confirmou no HTML: H1 com nome completo acessível, foco visível, espaçamento mobile do indicador de rolagem e respeito a `prefers-reduced-motion`.
- Inventário atualizado via árvore Git: 32 arquivos de mídia, 102,23 MB no checkout (imagens: 3,34 MB; áudio: 13,92 MB; vídeos: 70,04 MB; cópia de vídeo na raiz: 14,92 MB).
- O vídeo `WhatsApp Video 2026-11-15 at 11.33.56 AM.mp4` aparece na raiz e em `public/videos/` com o mesmo blob Git. Os dois caminhos foram preservados; o clone/checkout contém os dois arquivos.
- Áudio e vídeo permanecem com extensão MP4. Sem inspeção do codec/stream e reprodução em navegador, não se certifica compatibilidade do áudio; teste está previsto na URL de preview.
- Criado `HOSTINGER_DEPLOYMENT.md` com parâmetros e checklist. README atualizado.
- Configuração indicada: deploy estático da raiz, branch `main`, sem build command e sem output directory separado.
- Últimos commits: acessibilidade `79cb8db28bb54bd343b6a83e6f2512ec80b5d7dc`; ficha `7aa29e80127cf6f877dc09dfbc256ca3fdeab6c9`; README `2bb63044065a2216e7cf772c9c75207c959b9ffa`; checklist Hostinger `fa9148503566cbbc29b603bd85c8c2d683e57a07`.
- Estado: repositório preparado tecnicamente para importação estática. Ainda não importado, não publicado e sem alterações de DNS.

## Publicação em produção — 15/11/2026

- Hostinger exibiu a confirmação “Implantação concluída!” para o repositório `viviroque1711/amadeubrutus`, branch `main`, no domínio `amadeubrutus.com.br`.
- A configuração de publicação indicou o diretório raiz `public_html`.
- A aba de produção aberta em `https://www.amadeubrutus.com.br/` foi lida após a implantação; o conteúdo da home foi entregue, incluindo hero “AMADEU BRUTUS”, links para `shows.html` e `lancamentos.html`, seção de apresentação e controle manual de áudio.
- O repositório GitHub continua como fonte de verdade do código; metadados do repositório confirmam branch padrão `main`.
- Implantação em produção confirmada pela Hostinger e conteúdo da home observado no navegador.
- Ainda pendente: validar as duas subpáginas, funcionamento real do áudio e mídia, responsividade visual desktop/mobile, links, HTTPS/redirecionamento canônico, robots.txt, sitemap.xml, headers/cache e indexação em Search Console/Bing.
- DNS e configuração de e-mail não foram alterados.

## Ajustes pós-publicação — holofotes e crédito institucional

- Solicitação: restaurar/fortalecer os efeitos de holofotes na primeira dobra e inserir crédito da empresa responsável no rodapé.
- Em `index.html`, os elementos de feixe de luz já existiam, mas eram estreitos, com pouca presença e dependiam da animação para ficarem visíveis. A regra de movimento foi substituída por cones de luz mais amplos, com varredura suave; a camada de sombreamento foi posicionada acima dos feixes para dar profundidade.
- Para usuários com `prefers-reduced-motion`, os holofotes permanecem visíveis em posição estática, em vez de desaparecerem.
- Rodapé atualizado com “Desenvolvido por Roque Business Evolution”, link para `https://roquebusinessevolution.com/`, abrindo em nova aba.
- O arquivo oficial do logotipo da Roque Business Evolution não está no repositório Amadeu Brutus e não foi possível confirmar um asset público exato. Não foi criado nem substituído por uma versão improvisada; inserir o logo oficial permanece pendente de recebimento do arquivo.
- Commit: `345771e1bf03fa084da61d387fc463337d21d58b`.
- A atualização está registrada no GitHub `main`. A implantação automática/atualização da hospedagem e a validação visual dos efeitos no domínio de produção ainda precisam ser confirmadas.

## Correção da primeira dobra — aplicação da referência v6

- A pedido da proprietária, a abertura intermediária foi substituída pela referência mais recente recuperada: `Amadeu-Brutus-holofotes-v6.html`.
- Aplicada ao `index.html` a sequência visual da v6: quatro luminárias no topo, feixes cênicos laterais e alternativos em pulsos rápidos, entrada de “AMADEU” contornado e “BRUTUS” preenchido pela fotografia aprovada.
- A imagem incorporada no protótipo v6 foi identificada como `public/images/WhatsApp Image 2026-11-15 at 11.35.46 AM (1).jpeg` e referenciada pelo caminho versionado no Git, sem duplicar o arquivo.
- Preservados os links de agenda e lançamentos, o controle manual de áudio, as seções inferiores e o crédito textual da Roque Business Evolution no rodapé.
- Arquivo alterado: `index.html`.
- Commit: `516427f2c2b1fc31a0c24c97e12ae70f6d0b20dd`.
- A atualização foi gravada no GitHub `main`. A confirmação de novo deploy automático da Hostinger e a inspeção visual pós-deploy ainda estão pendentes.
- O PNG enviado nesta conversa é o logotipo da Roque Business Evolution; ele ainda não foi incorporado como imagem no rodapé. O arquivo oficial do logotipo do Amadeu para favicon também não foi fornecido nesta conversa, portanto não foi inventado nem substituído por uma marca improvisada.

## Ajuste da primeira dobra e navegação principal — 15/11/2026

- A primeira dobra tinha uma sequência CSS que fazia as duas palavras desaparecerem ao fim do ciclo de 9,8 s, deixando a abertura visualmente vazia em parte da repetição.
- Corrigida a sequência: AMADEU entra primeiro e desaparece; BRUTUS entra em seguida e permanece visível. Os fachos laterais passam a varrer a cena continuamente, com movimento reduzido respeitado.
- Criado cabeçalho responsivo com navegação: Shows, Lançamentos, Discografia, Galeria, Contato e The Voice Brasil 2026.
- Shows e Lançamentos apontam para páginas existentes. Os demais itens apontam para seções de destino criadas na home, com conteúdo inicial neutro e sem inventar informações biográficas ou de participação.
- Menu mobile com botão acessível, estado `aria-expanded` e fechamento ao selecionar item.
- Controle de áudio e restante do conteúdo da home preservados.
- Commit: `46f097c2e922db04b88085fc5f6607335e5aa7e6`.
- Pendente: integrar o arquivo de imagem do logotipo oficial do Amadeu ao cabeçalho e favicon; a versão gráfica recebida ainda não foi adicionada ao repositório nesta alteração. Confirmar atualização automática da Hostinger e validar a sequência visual no domínio de produção.

## Hotfix emergencial da primeira dobra — 15/11/2026

- Usuária reportou quebra visual grave após o commit `46f097c`: palavra do artista deslocada para o canto, composição descentrada e flashes de palco ausentes.
- Causa técnica identificada: elementos `.word` com `position:absolute` não tinham coordenadas de centralização explícitas; animações sobrescritas também trocaram flashes intermitentes por fachos contínuos de baixa intensidade.
- Hotfix em `index.html`: wrapper `.hero-title` ocupa a primeira dobra; palavras posicionadas no centro com `left:50%`, `top:50%` e `translate(-50%,-50%)`; keyframes preservam essa translação durante a entrada sequencial.
- Restaurados flashes rápidos e alternados nos fachos de luz; mantida a fotografia real de preenchimento de BRUTUS; removida a legenda adicional da abertura, em conformidade com a especificação aprovada.
- Commit hotfix: `b66dcc37d1ba3125f6088b52991efacf58bbcde3`.
- Estado: código corrigido e enviado ao GitHub `main`; ainda é necessário confirmar a implantação da Hostinger e fazer validação visual real em desktop e mobile antes de declarar a primeira dobra recuperada.

## Primeira dobra refeita — holofotes em batidas e logo oficial — 15/11/2026

- Pedido da proprietária: fundo preto, holofotes de luz natural saindo dos cantos em batidas rápidas ("pá, pá, pá") e mirando a marca; entrada AMADEU, depois BRUTUS, e a marca fica em cena.
- Logo oficial (`public/images/WhatsApp Image 2026-10-20 at 5.09.58 PM (1).jpeg`) recortado com fundo transparente em `public/brand/` (logo da abertura, logo do cabeçalho e ícones 32/180/512 px). Arquivo original preservado.
- CSS antigo da abertura (camadas v6, hotfix e sobrescritas com !important) removido e substituído por um bloco único.
- Seis refletores (quatro cantos e dois no alto) com fachos de luz branca quente; o JavaScript calcula o ângulo de cada facho até o centro do logo e recalcula ao redimensionar.
- Sequência: oito batidas alternando cantos, corrigindo a mira a cada batida (cerca de 2,8 por segundo, abaixo do limite de 3 flashes/s); AMADEU entra e sai; BRUTUS entra e sai; todos os holofotes acertam juntos e o logo AMADEU BRUTUS aparece e permanece. Depois, balanço leve dos fachos e nova rodada de batidas a cada 9 s (pausa com a aba oculta).
- H1 continua com o texto "Amadeu Brutus" para buscadores e leitores de tela; logo da abertura é decorativo dentro do H1.
- Sem JavaScript ou com movimento reduzido: cena final estática (fachos acesos na marca, logo visível).
- Validação local: desktop 1440 px e celular 390 px, sem erros de JavaScript e sem rolagem horizontal.


## Segunda dobra — Próximos Shows — 15/11/2026

- Inserida a seção `#proximos-shows` imediatamente após a primeira dobra (`#inicio`) e antes da seção de trajetória.
- A primeira dobra foi preservada; a alteração acrescenta CSS e markup da nova seção, sem modificar o conteúdo interno, as animações ou os controles da abertura.
- Direção visual: fundo preto, título de alto contraste, acento magenta, fotografia vertical do Amadeu aplicada como imagem de fundo lateral com sobreposições escuras para manter a leitura.
- Responsividade: composição desktop com fotografia concentrada à direita; em telas pequenas, fotografia em camada de fundo com contraste reforçado e lista em duas colunas compactas.
- Agenda inicial transcrita do material visual fornecido pela proprietária: 8 apresentações, organizadas por dia da semana e horário. Não foram inferidas datas de calendário, pois o material não as informa.
- Não foram criados links de ingressos, pois nenhum endereço de venda foi fornecido.
- Manutenção semanal: atualizar os elementos `.show-item` dentro de `.shows-list`, mantendo os campos dia, horário, local e endereço. Remover eventos encerrados e inserir os novos na ordem cronológica; preservar CSS e estrutura.
- Arquivo alterado: `index.html`.
- Commit: `035d27f7071942d44d3d14061038993054c9003c`.
- Estado: alteração gravada no GitHub `main`; confirmar implantação automática da Hostinger e fazer validação visual em desktop/mobile antes de considerar a dobra aprovada em produção.
## Ajuste da primeira dobra — artista em cena e brilho nos refletores — 15/11/2026

- Pedido: entrada AMADEU, depois BRUTUS, e ficam os dois juntos; logo apenas no cabeçalho; foto do artista na primeira dobra; mais brilho nas luzes.
- Logo removido da abertura (permanece no cabeçalho e no ícone da aba).
- Foto `public/images/WhatsApp Image 2026-10-20 at 5.10.01 PM.jpeg` recortada do fundo de estúdio para `public/brand/amadeu-palco.webp` (original preservado). O artista surge do escuro no golpe final e os holofotes miram o rosto/peito.
- Cena final: "AMADEU" contornado sobre "BRUTUS" sólido, como H1 em texto real.
- Refletores: lentes brancas com halo e estrela de brilho em camada acima do cabeçalho; fachos com núcleo de luz mais intenso; cabeçalho sem faixa escura sobre o palco (menu com sombra no texto).
- Validação local: desktop 1440 px e celular 390 px, sem erros de JavaScript e sem rolagem horizontal.

## Troca da foto da primeira dobra — 15/11/2026

- A pedido da proprietária, entre duas opções (cantando no palco do The Voice, em close; e tocando violão em palco escuro, de óculos), escolhida a foto cantando: rosto e emoção legíveis, luz de palco e ligação com The Voice Brasil 2026.
- Arquivo: `public/images/WhatsApp Image 2026-11-15 at 11.35.46 AM (1).jpeg` recortado sem a barra de status do celular em `public/brand/amadeu-voz.webp` (original preservado). Bordas da foto se dissolvem no preto do palco.
- Limite: a imagem tem 590 × 1280 px (captura de tela); no computador ela aparece ampliada. Uma versão em alta resolução da mesma foto melhora a nitidez.


## Correção da navegação por âncoras — 15/11/2026

- Menu principal atualizado para apontar às seções da página inicial: `Próximos Shows` → `#proximos-shows`; `Últimos lançamentos` → `#ultimos-lancamentos`.
- Botões da primeira dobra alinhados aos mesmos destinos internos.
- Identificador da seção anteriormente nomeada `discografia` renomeado para `ultimos-lancamentos`.
- Nenhum desses acessos deve direcionar para `shows.html` ou `lancamentos.html` a partir da navegação principal da home.
- Arquivo alterado: `index.html`.
- Commit: `563d6d16fe786a4ec62fe54afa4a6b5f1526eb97`.


## Animação de entrada — Próximos Shows — 15/11/2026

- Adicionada entrada horizontal sequencial aos itens `.show-item`: linhas ímpares deslizam da esquerda e pares da direita.
- Animação é acionada quando cada apresentação entra na área visível, usando `IntersectionObserver`; cada item é revelado uma única vez.
- Cadência escalonada de 130 ms entre itens, com transição suave de opacidade e deslocamento horizontal.
- Em dispositivos com `prefers-reduced-motion: reduce`, os itens permanecem visíveis sem animação.
- Sem suporte a IntersectionObserver ou sem JavaScript, os eventos continuam visíveis; a classe que oculta itens só é ativada quando a animação pode funcionar.
- Arquivo alterado: `index.html`.
- Commit: `fd222570b7fbcc1b159419c9edde4a57594270ed`.
- Publicação visual na hospedagem ainda precisa ser confirmada.

## Holofotes realistas — 16/11/2026

- Pedido: holofote com cara de real, não artificial/"cara de IA".
- Fachos em CSS (cones chapados com borda dura, estrelas de brilho nas lentes) substituídos por uma textura de feixe volumétrico gerada por código em `public/brand/feixe.webp` (transparente): miolo mais forte, borda macia, perda de intensidade ao longo do feixe e fumaça/haze irregular, como luz atravessando névoa de palco.
- Refletores agora parecem aparelhos: corpo escuro com aro e lente quente acesa, sem estrelas.
- Batidas mais secas (acende de uma vez e decai), sem varredura exagerada; fachos parados no artista com oscilação mínima.
- Validação local: desktop 1440 px e celular 390 px, sem erros de JavaScript.
