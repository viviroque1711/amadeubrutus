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

## Refletores fresnel reais e luz prata — 16/11/2026

- Pedido: substituir os círculos pelos holofotes da foto enviada (fresnel com abas), que acompanham o movimento das luzes; cor da luz prata.
- Foto enviada recortada do fundo e convertida para prata em `public/brand/refletor.webp`; cada refletor gira junto com o seu facho (mesmo ângulo nas batidas e no balanço) e é espelhado nos lados direitos para manter a alça para cima.
- Refletores fora do menu: cantos de cima a 17% da altura, dois intermediários a 14%; ficam abaixo do cabeçalho e dos botões.
- Feixes e clarão em prata (antes branco quente).
- Celular: só os quatro refletores dos cantos (os do meio cobriam o rosto).


## Dobra editorial — A carreira — 16/11/2026

- A seção de trajetória após a agenda foi convertida na dobra editorial “A carreira”, preservando o identificador `#trajetoria` e os demais destinos de navegação.
- Narrativa aprovada para revisão: início em meados dos anos 2000 com Visionários S.A.; apresentações, composições autorais e experiência como professor; aberturas de shows e referências a Titãs, Ana Carolina e Roupa Nova; participação no The Voice Brasil 2026, Time Lauana Prado e posterior migração para Time Paulo Ricardo.
- Direção visual: chamada “A carreira” em magenta/vermelho, título condensado em caixa alta, corpo em sans-serif cinza, destaques pontuais em branco/negrito.
- Logotipo existente `public/brand/amadeubrutus-logo.png` aplicado sem moldura, em diagonal, com flutuação lenta; animação desativada para `prefers-reduced-motion`.
- Responsividade: texto e logotipo em colunas no desktop; narrativa seguida do logotipo no mobile.
- Arquivo alterado: `index.html`.
- Commit: `f901b81333e1e3afcd88f424b62de07da5f00a39`.
- A alteração está registrada no GitHub `main`. A documentação de hospedagem ainda registra que a importação Hostinger não foi executada; portanto, não declarar o site publicado até confirmar o deploy na hospedagem.


## Refinamento visual da dobra “A carreira” — 16/11/2026

- Texto integral centralizado: chamada, título, parágrafos, destaques e frase de encerramento.
- Logotipo oficial duplicado em dois cantos: superior esquerdo e inferior direito, ambos inclinados em direções opostas para orientar a composição visual para o centro.
- Os dois logotipos usam o mesmo asset transparente `public/brand/amadeubrutus-logo.png`, sem caixa ou fundo adicional, com movimento sutil em direção ao centro.
- No mobile, a composição mantém o texto centralizado e reduz os logotipos para preservar a leitura.
- Movimento desativado para usuários com preferência por movimento reduzido.
- Arquivo alterado: `index.html`.
- Commit: `5baf28d7531d00d6243211816dd42682d854a174`.
- A alteração está no GitHub `main`; publicação na Hostinger ainda não confirmada.


## Correção de enquadramento da dobra “A carreira” — 16/11/2026

- Subida da chamada “A carreira” e redução do espaço vertical entre chamada, título e narrativa.
- Texto condensado e redistribuído em três parágrafos para caber melhor na dobra, preservando os marcos essenciais da trajetória e os nomes citados.
- Ajustados tamanhos, entrelinhas e margens para desktop e mobile; a seção não cria área interna de rolagem.
- Logotipo superior esquerdo orientado em diagonal para o centro; logotipo inferior direito corrigido para não ficar invertido e também direcionado para o centro. Animações ajustadas para movimentos sutis em direção ao miolo.
- Arquivo alterado: `index.html`.
- Commit: `e2f28f94b6a786dc0b56834c73e43bf68e555e5b`.
- Código no GitHub `main`; deploy Hostinger e validação visual ainda pendentes.


## Correção de orientação dos logotipos — 16/11/2026

- A captura mobile enviada pela proprietária mostrou que os dois logotipos decorativos da dobra “A carreira” continuavam orientados para fora; o inferior também aparecia invertido.
- Ajustadas as rotações no desktop e no mobile: canto superior esquerdo para `-45deg`; canto inferior direito para `135deg`. Os keyframes foram atualizados para manter essas orientações durante a animação, sem inverter novamente os elementos.
- Arquivo alterado: `index.html`.
- Commit: `e3853945e912a68c11c7e08e0765ae4472b1c668`.
- Código atualizado no GitHub `main`. A captura fornecida orientou a correção; a versão publicada e a renderização pós-deploy ainda precisam ser conferidas no site.

## Correção AMADEU no celular e luz mais intensa — 16/11/2026

- Bug: no celular, a regra `.hero .amadeu{-webkit-text-stroke:1.8px}` redefinia a cor do contorno para a cor do texto (quase transparente), e a palavra AMADEU da entrada sumia. Corrigido para contorno branco de 2 px.
- Animações de entrada sem `filter: blur` (Safari pode não desenhar texto contornado com filtro animado); AMADEU final com leve preenchimento e tamanho maior no celular.
- Luz intensificada: feixe prata mais denso e mais largo, opacidade dos fachos e das lentes maior nas batidas e na cena final.


## Ajuste fino do logotipo inferior direito — 16/11/2026

- A pedido da proprietária, o logotipo “Brutus” no canto inferior direito foi girado mais 30 graus no sentido anti-horário.
- Rotação-base atualizada de `135deg` para `105deg`; o ponto final da animação passou de `132deg` para `102deg`, preservando o movimento sutil sem alterar a orientação solicitada.
- Arquivo alterado: `index.html`.
- Commit: `f1fd759c99306d2604cb70682ab876117e1a1419`.
- Código atualizado no GitHub `main`; conferir a renderização após a atualização da hospedagem.


## Novo ajuste angular do logotipo inferior direito — 16/11/2026

- A pedido da proprietária, o logotipo inferior direito foi girado mais 45 graus no sentido anti-horário para deixar de parecer quase deitado.
- Rotação-base atualizada de `105deg` para `60deg`; ponto final da animação atualizado de `102deg` para `57deg`.
- Arquivo alterado: `index.html`.
- Commit: `e2a8f8cd26b9da6168f39413146e04d27c8f535a`.
- Código atualizado no GitHub `main`; conferir a renderização após a atualização da hospedagem.


## Ajuste adicional de 45 graus — logotipo inferior direito — 16/11/2026

- A pedido da proprietária, o logotipo do canto inferior direito foi girado mais 45 graus no sentido anti-horário.
- Rotação-base atualizada de `60deg` para `15deg`; ponto final da animação atualizado de `57deg` para `12deg`.
- Arquivo alterado: `index.html`.
- Commit: `18dea97f4f32b9ca1451e9f14e2a7e584c08d6b6`.
- Código atualizado no GitHub `main`; renderização no domínio depende da atualização da hospedagem.


## Ajuste angular do logotipo superior esquerdo — 16/11/2026

- A pedido da proprietária, o logotipo do canto superior esquerdo foi girado 45 graus no sentido horário.
- Rotação-base atualizada de `-45deg` para `0deg`; ponto final da animação atualizado de `-42deg` para `3deg`.
- Arquivo alterado: `index.html`.
- Commit: `8f800b2cbf32fe7c8b417d6881d1d5541ae19926`.
- Código atualizado no GitHub `main`; renderização após a atualização da hospedagem ainda precisa ser conferida.


## Refinamento da rotação do logotipo superior esquerdo — 16/11/2026

- A pedido da proprietária (“volte 20 graus”), o logotipo superior esquerdo foi recuado 20 graus no sentido anti-horário a partir da posição neutra.
- Rotação-base atualizada de `0deg` para `-20deg`; ponto final da animação atualizado de `3deg` para `-17deg`.
- Arquivo alterado: `index.html`.
- Commit: `e197937603589682cdf9652b48b4e69aab35f077`.
- Código atualizado no GitHub `main`; conferir visualmente após atualização da hospedagem.


## Menu mobile — somente ícone hamburger — 16/11/2026

- A pedido da proprietária, removido o texto visível “Menu” do botão mobile.
- O botão agora exibe apenas o ícone hamburger (☰), mantendo nome acessível “Abrir menu” para leitores de tela e preservando `aria-expanded` e `aria-controls`.
- Navegação desktop e comportamento de abrir/fechar o menu permanecem inalterados.
- Arquivo alterado: `index.html`.
- Commit: `c3f5f935fb5fc3c1728eea287edd8e652f039639`.
- Código atualizado no GitHub `main`; confirmar a renderização no mobile após atualização da hospedagem.


## Dobra Discografia — estética vintage e Spotify — 16/11/2026

- A seção provisória “Últimos lançamentos” foi transformada em uma dobra editorial de discografia, mantendo o identificador `#ultimos-lancamentos` para preservar os links do menu e dos botões existentes.
- Direção visual baseada na referência mobile enviada: fundo ameixa/roxo escuro, textura discreta, acentos magenta, tipografia condensada de alto impacto e apresentação editorial retrô, evocando a estética do álbum de 2002 sem inventar capa ou metadados.
- Título: “Ouça agora no Spotify”; texto introdutório e CTA externo para o perfil oficial informado pela proprietária.
- Incorporado o player oficial do Spotify para o artista `0eRoINMstkO2cT60xL0uzo`, em iframe responsivo com título acessível.
- O link fornecido é de perfil de artista, não de álbum específico. Por isso, o embed abre o perfil do artista; não foi presumido nem fabricado um URI de álbum.
- Layout responsivo: texto e player lado a lado em telas largas; empilhados no mobile.
- Arquivo alterado: `index.html`.
- Commit: `dd997d704224f988cf1b09c65b7258321c8eb248`.
- Código atualizado no GitHub `main`. Conferir carregamento do iframe e aparência em dispositivos reais após atualização da hospedagem.


## Consolidação das dobras “A carreira” e “O artista” — 16/11/2026

- A proprietária identificou repetição de mensagem entre a terceira dobra (`#trajetoria`, “A carreira”) e a quarta (`#o-artista`, “A voz tem uma história”).
- Removida a dobra redundante `#o-artista`; a dobra “A carreira” permanece como a apresentação única da trajetória e identidade artística.
- A dobra de Spotify passa a ocupar a quarta posição e seu rótulo editorial foi alterado para “Últimos lançamentos”.
- Mantido o ID `#ultimos-lancamentos`, preservando links existentes do menu e dos botões.
- Arquivo alterado: `index.html`.
- Commit: `018ae5a43ad25e0da3c3092e7b116c510323b77d`.
- Código atualizado no GitHub `main`; validar a sequência e o espaçamento das dobras no desktop/mobile após atualização da hospedagem.


## Separação entre arquivo musical e últimos lançamentos — 16/11/2026

- Correção de conceito solicitada pela proprietária: o player/perfil Spotify enviado corresponde a material de uma fase anterior, não deve ser apresentado como “Últimos lançamentos” nem sugerir que representa a voz/formação artística atual.
- A antiga dobra Spotify agora é “Uma viagem no tempo”, com título “Uma viagem ao passado”, mantendo a estética vintage e o embed do perfil informado.
- O ID foi alterado para `#discografia`; o item de navegação correspondente foi renomeado para “Uma viagem no tempo”.
- Criada uma dobra separada `#ultimos-lancamentos`, com o título “Últimos lançamentos”, reservada para os lançamentos atuais. O conteúdo musical dessa seção ainda depende de materiais/links oficiais fornecidos e não foi inventado.
- Arquivo alterado: `index.html`.
- Commit: `c95f855ea0151d173e56466cf4f6ddf9887e031e`.
- Código atualizado no GitHub `main`; conferir visualmente após deploy.


## Dobra “Fotos oficiais” — 16/11/2026

- A seção antes identificada como “Galeria” foi renomeada para “Fotos oficiais”; o link de navegação também foi atualizado para `#fotos-oficiais`.
- Estrutura visual criada como galeria editorial responsiva, com fundo escuro, acentos magenta/ameixa, título condensado e imagens em composição assimétrica no desktop e empilhadas no mobile.
- Utilizados somente dois arquivos de imagem já existentes no repositório: `public/brand/amadeu-palco.webp` e `public/brand/amadeu-voz.webp`. Nenhuma foto foi gerada ou alterada.
- Legendas e textos são descritivos e não atribuem eventos, datas ou contextos não confirmados.
- Arquivo alterado: `index.html`.
- Commit: `7d9b617d9436eddd4ecbf839b51ff6a651fcf067`.
- Código atualizado no GitHub `main`; conferir enquadramento, qualidade e responsividade após deploy.


## Otimização inicial de SEO — 16/11/2026

- Posicionamento orgânico principal: “Amadeu Brutus | Cantor, Músico e Compositor”.
- Atualizado o `<title>` da página inicial e a meta description, com descrição objetiva da atuação artística e referências à trajetória, apresentações ao vivo e participação no The Voice Brasil 2026.
- Alinhados Open Graph e Twitter Cards ao mesmo posicionamento e à descrição revisada.
- Enriquecido o JSON-LD existente: entidade `Person` passa a declarar `jobTitle` (Cantor, Músico e Compositor), descrição e perfil oficial do Spotify em `sameAs`. O tipo `WebSite` e a estrutura `WebPage` foram preservados.
- Canonical e URL oficial preservados. Não foram adicionadas palavras-chave artificiais nem alterados conteúdo visual, navegação ou primeira dobra.
- Arquivo alterado: `index.html`.
- Commit: `fd8a67fe315d5a1c4a909373d160db16801411a6`.
- Estado: alteração registrada no GitHub `main`. Ainda é necessário validar o HTML estruturado e metadados em ferramentas de inspeção, confirmar o deploy Hostinger e solicitar nova indexação no Google Search Console, se a propriedade estiver configurada.
- Próximas etapas recomendadas: revisar conteúdo textual indexável das seções, conferir sitemap.xml e robots.txt, validar dados estruturados e acompanhar cobertura/indexação no Search Console.


## Auditoria SEO técnico e semântico — 16/11/2026

**Escopo:** revisão estática do repositório `main`, contemplando sitemap, robots.txt, semântica HTML, imagens, dados estruturados e preparação para Search Console. A inspeção do domínio publicado não foi concluída: as URLs públicas não puderam ser acessadas pelo verificador nesta sessão, e o registro operacional Hostinger ainda informa que a importação não foi executada.

### 1. Sitemap.xml
- Arquivo presente e XML com estrutura `urlset` e três URLs: home, `shows.html` e `lancamentos.html`.
- As três URLs correspondem a páginas existentes e têm canonical próprio no código.
- Não há `lastmod`; campo opcional. Recomendação: preencher apenas quando houver rotina confiável de atualização, sem datas artificiais.
- Ponto de atenção: as páginas de shows e lançamentos são páginas de atualização/placeholder; avaliar se devem permanecer indexáveis e no sitemap até receberem conteúdo próprio substancial.

### 2. Robots.txt
- Arquivo presente, sem diretivas `Disallow` que bloqueiem o site.
- Permite rastreamento para Googlebot, Bingbot, crawlers de IA e demais agentes por regra geral.
- Declara sitemap em `https://www.amadeubrutus.com.br/sitemap.xml`.
- A existência no repositório não comprova resposta HTTP 200 na hospedagem; validar após deploy.

### 3. SEO semântico e estrutura HTML
- Documento em `pt-BR`, um H1 na home (“Amadeu Brutus”) e hierarquia H2/H3 coerente nas seções e agenda.
- Conteúdo editorial descreve trajetória, composição, apresentações e participação no The Voice Brasil 2026.
- A descrição distingue corretamente “Uma viagem ao passado” (arquivo histórico) de “Últimos lançamentos” (espaço futuro para material atual).
- O texto da seção de lançamentos na home e a página `lancamentos.html` permanecem genéricos/placeholder; enriquecer apenas com informações e lançamentos confirmados.
- A agenda na home contém dias da semana e horários, sem datas de calendário; não gerar marcação Event/Concert enquanto datas e detalhes necessários não estiverem confirmados.

### 4. SEO de imagens
- Imagem principal tem ALT descritivo; fotos oficiais têm ALT específico.
- Refletores e logotipos decorativos usam ALT vazio e `aria-hidden`, adequado para elementos decorativos.
- A imagem Open Graph/Twitter utiliza arquivo existente no repositório.
- Nomes de arquivos de imagem são majoritariamente nomes técnicos/WhatsApp; ALT e contexto textual ajudam, mas recomenda-se criar nomes amigáveis somente em futuras otimizações com atualização controlada de referências.
- Revisar dimensões declaradas da imagem principal e dimensões intrínsecas para evitar deslocamento de layout (CLS); validar carregamento e compressão no domínio após deploy.

### 5. Dados estruturados
- JSON-LD da home parseado com sucesso; grafo contém `WebSite`, `Person` e `WebPage`.
- Entidade Person declara nome, descrição, `jobTitle` (Cantor, Músico e Compositor), imagem e perfis oficiais Instagram, YouTube e Spotify.
- JSON-LD das páginas `shows.html` e `lancamentos.html` também parseia corretamente e referencia a entidade do artista.
- Não incluir dados de evento sem datas/locais e condições de participação confirmados.

### 6. Google Search Console e indexação
- Não foi possível verificar propriedade, cobertura, sitemap processado, páginas indexadas, ações manuais ou inspeção de URL, pois não há acesso ao Search Console nesta auditoria.
- O domínio publicado e os endpoints `/robots.txt` e `/sitemap.xml` também precisam de confirmação HTTP pós-deploy.
- Após publicação: validar HTTPS e domínio canônico, adicionar/enviar sitemap no Search Console, inspecionar a home e solicitar indexação; monitorar cobertura e consultas.

### Resultado e pendências
- Auditoria estática concluída nos seis tópicos; nenhum arquivo de site foi alterado nesta etapa.
- Validações técnicas executadas: extração dos metadados das três páginas, contagem de H1, leitura de canonical, parsing dos três blocos JSON-LD, leitura do robots.txt e leitura das URLs do sitemap.
- Pendências externas: deploy Hostinger, teste HTTP do domínio, acesso ao Google Search Console e validação visual/real de carregamento.
- Prioridade recomendada: (1) confirmar deploy; (2) validar robots/sitemap no domínio; (3) decidir indexabilidade das páginas placeholder `shows.html` e `lancamentos.html`; (4) revisar dimensão/CLS das imagens; (5) enviar sitemap e acompanhar indexação.


## Otimização de nomes e referências de imagens — 16/11/2026

- Renomeados quatro arquivos de imagem com nomes descritivos, em minúsculas e separados por hífens, sem alterar o conteúdo binário das imagens:
  - `public/brand/amadeu-palco.webp` → `public/brand/amadeu-brutus-apresentacao-ao-vivo.webp`.
  - `public/brand/amadeu-voz.webp` → `public/brand/amadeu-brutus-cantor-no-palco.webp`.
  - `public/images/WhatsApp Image 2026-10-20 at 5.12.11 PM.jpeg` → `public/images/amadeu-brutus-foto-oficial-destaque.jpeg`.
  - `public/images/WhatsApp Image 2026-11-15 at 11.35.45 AM.jpeg` → `public/images/amadeu-brutus-foto-agenda-de-shows.jpeg`.
- Atualizadas todas as referências encontradas em `index.html`: imagem principal, pré-carregamento, CSS de fundo, Open Graph, Twitter Card e JSON-LD Person.
- Mantidos os textos ALT descritivos já existentes para a imagem principal e para a galeria oficial; elementos puramente decorativos continuam com ALT vazio/ocultos para tecnologias assistivas.
- Imagens decorativas, logotipos, ícones, textura do título e arquivos de vídeo/áudio não foram renomeados, pois seus nomes não melhorariam a descoberta de imagens ou poderiam sugerir conteúdo incorreto.
- As imagens não foram recomprimidas nem convertidas. A mudança trata de nomenclatura e referências, não de tamanho/velocidade de carregamento.
- Alterações preparadas em um único commit atômico para evitar caminhos quebrados entre commits.
- Deploy Hostinger e validação visual no domínio continuam pendentes.


## Padronização integral dos nomes dos arquivos de mídia — 16/11/2026

- Segunda etapa da padronização: renomeados os arquivos de mídia restantes que ainda tinham nomes de exportação do WhatsApp, nomes com espaços ou nomenclatura inconsistente.
- **Imagens:** 17 fotos de origem WhatsApp passaram a `foto-amadeu-01.jpeg` até `foto-amadeu-17.jpeg`; fundo de chroma passou a `fundo-verde-croma.png`.
- **Vídeos:** os seis vídeos da pasta `public/videos/` passaram a `video-amadeu-brutus-01.mp4` até `video-amadeu-brutus-06.mp4`. A cópia idêntica mantida na raiz foi renomeada para `video-amadeu-brutus-original.mp4`; os bytes foram preservados.
- **Áudios:** os três arquivos de áudio recebidos via WhatsApp passaram a `audio-amadeu-brutus-01.mp4` até `audio-amadeu-brutus-03.mp4`; a faixa usada pelo botão de música passou a `faixa-autoral-amadeu-brutus.mp4`.
- **Identidade visual e interface:** padronizados nomes do recorte do artista, logotipos, textura do feixe, refletor, favicon e apple touch icon para nomes descritivos e sem espaços.
- Atualizadas as referências operacionais em `index.html`, `shows.html` e `lancamentos.html`, inclusive imagens Open Graph, Twitter Cards, JSON-LD, CSS, cabeçalho, player de áudio e favicons.
- Os arquivos de mídia foram movidos por referência ao mesmo blob Git: conteúdo binário e extensão foram preservados, sem recompressão ou conversão.
- As fotos sem uso identificado no HTML receberam nomes neutros numerados (`foto-amadeu-XX`), sem atribuir conteúdo visual que não foi verificado.
- Os registros históricos anteriores deste documento foram mantidos como histórico; os caminhos atuais são os listados no inventário do repositório.
- Validação pendente após o commit: busca por referências antigas em todos os arquivos ativos e confirmação do deploy na Hostinger.


## Correção da convenção de nomes — marca AMADEU BRUTUS — 16/11/2026

- Correção solicitada pela proprietária: a comunicação pública e a identificação dos arquivos devem usar sempre o nome artístico completo **Amadeu Brutus**, nunca “Amadeu” isoladamente.
- Corrigidos os 17 nomes genéricos `foto-amadeu-XX.jpeg` para `foto-amadeu-brutus-XX.jpeg` (01 a 17).
- Atualizadas as referências correspondentes nos arquivos HTML ativos (`index.html`, `shows.html` e `lancamentos.html`).
- A alteração é exclusivamente de nomenclatura e referências: os arquivos de imagem mantêm o mesmo conteúdo binário, formato e qualidade.
- Convenção obrigatória daqui em diante: quando o nome do artista aparecer no nome de um arquivo, usar **amadeu-brutus** como identificador completo. Nomes técnicos genéricos sem referência ao artista (por exemplo, favicon e efeitos de luz) podem permanecer genéricos.
- Validação: confirmar ausência de `foto-amadeu-` sem `-brutus` nos caminhos atuais e verificar todas as referências locais dos HTML.


## Padronização dos nomes dos vídeos com a marca Amadeu Brutus — 16/11/2026

- A pedido da proprietária, os sete arquivos de vídeo foram renomeados para iniciar pelo nome artístico completo: `amadeu-brutus-video`.
- Vídeos numerados: `public/videos/amadeu-brutus-video-01.mp4` a `public/videos/amadeu-brutus-video-06.mp4`.
- Cópia original na raiz: `amadeu-brutus-video-original.mp4`.
- Atualizadas as referências encontradas nos arquivos HTML ativos.
- Conteúdo binário, extensão e qualidade dos vídeos preservados; operação realizada por reutilização dos mesmos blobs Git.
- Convenção: arquivos que identificam o artista devem conter o nome completo `amadeu-brutus`; a marca deve vir antes do tipo de mídia e da descrição.


## Reorganização das dobras — lançamentos e notícias — 16/11/2026

- Sequência aprovada para o início da página: 1ª dobra Abertura; 2ª Próximos Shows; 3ª Últimos lançamentos; 4ª Últimas notícias.
- A seção “Últimos lançamentos” foi movida para imediatamente depois de “Próximos Shows”, sem alterar seu identificador `#ultimos-lancamentos` nem seu conteúdo atual.
- Criada a seção “Últimas notícias” com identificador `#ultimas-noticias` logo após lançamentos. O texto é um espaço editorial provisório; nenhuma notícia foi inventada.
- A trajetória, a discografia histórica (“Uma viagem ao passado”), as fotos oficiais, contato e The Voice permanecem preservados depois dessas quatro primeiras dobras.
- Menu principal reorganizado e atualizado com o novo link “Últimas notícias”.
- Arquivo alterado: `index.html`.
- Validação técnica: verificar ordem dos IDs, unicidade dos IDs e destino dos links de navegação. A validação visual desktop/mobile e o deploy Hostinger permanecem pendentes.


## Inclusão das matérias oficiais do The Voice Brasil — 16/11/2026

- A seção `#ultimas-noticias` da home deixou de ser um texto provisório e passou a exibir dois cards editoriais responsivos com links externos para as matérias oficiais do SBT.
- Matéria 1: “Amadeu Brutus conquista Diogo e Lauana nas Audições às Cegas”. Resumo: interpretação de “Ordinary”, conquista de duas cadeiras e escolha por seguir com Lauana Prado.
- Matéria 2: “Damatta e Amadeu Brutus dão novas vozes ao clássico de Zé Ramalho”. Resumo: interpretação de “Chão de Giz” nas Batalhas e resgate de Amadeu por Paulo Ricardo.
- Os títulos e resumos foram conferidos nas páginas indexadas do portal oficial The Voice Brasil/SBT. Os cards não reproduzem imagens externas nem inventam datas; cada CTA abre a matéria original em nova aba.
- Direção visual: fundo escuro ameixa/preto, acentos magenta e lavanda, hierarquia tipográfica condensada, cartões com bordas sutis e interação hover; grade em duas colunas no desktop e coluna única no mobile.
- Arquivo alterado: `index.html`. Deploy Hostinger e validação visual no domínio continuam pendentes.


## Ajuste visual das notícias — fotos do artista e fundo preto — 16/11/2026

- A pedido da proprietária, os cards de “Últimas notícias” passaram a exibir fotografias existentes de Amadeu Brutus, em vez de cards apenas tipográficos.
- Primeiro card utiliza `public/images/amadeu-brutus-foto-oficial-destaque.jpeg`; segundo utiliza `public/brand/amadeu-brutus-apresentacao-ao-vivo.webp`.
- Fundo da seção e dos cards alterado para preto, removendo o fundo ameixa/gradiente anterior.
- Mantidos títulos, resumos, acessibilidade (ALT das imagens), links oficiais do SBT e comportamento responsivo.
- Arquivo alterado: `index.html`. Publicação na Hostinger e conferência visual no domínio ainda pendentes.
