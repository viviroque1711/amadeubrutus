# Amadeu Brutus — presença digital oficial

Projeto de desenvolvimento do site oficial de **Amadeu Brutus**, com foco em presença digital, divulgação de música, agenda de apresentações, lançamentos e conversão de oportunidades de contratação.

## Repositório e publicação

- Repositório: https://github.com/viviroque1711/amadeubrutus
- Branch principal: `main`
- Domínio de produção previsto: https://www.amadeubrutus.com.br/
- Hospedagem prevista: Hostinger Business
- Tipo de publicação: site estático HTML, CSS e JavaScript; não depende de `package.json`.

## Estrutura atual

- `index.html`: página principal.
- `shows.html`: agenda de apresentações.
- `lancamentos.html`: músicas e lançamentos.
- `public/images/`: imagens.
- `public/audio/`: áudio.
- `public/videos/`: vídeos.
- `robots.txt`: diretivas públicas de rastreamento.
- `sitemap.xml`: URLs públicas previstas.

## Diretrizes de identidade e conteúdo

- Nome artístico oficial: **Amadeu Brutus**.
- Não usar “Amadeu” isoladamente como nome principal da marca.
- Preservar a direção visual aprovada: palco cinematográfico, base preta e acentos vermelho, azul e amarelo.
- Não publicar datas, apresentações, músicas, conquistas ou informações biográficas sem confirmação.
- Preservar as fotografias e os arquivos oficiais existentes.

## SEO, GEO e AEO

O conteúdo principal deve estar presente no HTML inicial, com HTML semântico, metadados por página, URL canônica, Open Graph, dados estruturados Schema.org, sitemap e diretivas de rastreamento documentadas. JavaScript deve ser progressivo e não pode ser requisito para exibir o conteúdo textual essencial.

A autorização em `robots.txt` é uma diretiva de rastreamento, não um controle de segurança nem garantia de indexação, citação ou treinamento. Os identificadores de robôs devem ser revisados periodicamente nas documentações oficiais dos respectivos fornecedores.

## Governança

- O GitHub é a fonte oficial do código e do histórico.
- Não alterar silenciosamente decisões aprovadas.
- Não substituir imagens, textos ou componentes sem justificativa e autorização quando a mudança afetar identidade ou escopo.
- Não considerar o site publicado até a implantação na Hostinger e os testes de produção serem concluídos.
- Consultar o Documento Mestre de Governança da Roque Business Evolution e esta ficha antes de mudanças relevantes.

## Estado registrado

- Site em preparação para primeira publicação.
- SEO técnico inicial em implementação.
- Importação pela Hostinger ainda não autorizada/concluída.
- Páginas de agenda e lançamentos mantêm conteúdo provisório até receberem informações confirmadas.


## Implantação na Hostinger — site estático

A estrutura atual é um site estático convencional. Os arquivos HTML estão na raiz e os recursos estão em `public/`. Não existe etapa de compilação identificada e não é necessário criar um `package.json` apenas para satisfazer o instalador.

Configuração de implantação:
- Método: importar o repositório Git e escolher **Implantar como estático**.
- Branch: `main`.
- Diretório de publicação/raiz do site: raiz do repositório (diretório `/`).
- Comando de build: nenhum / deixar vazio.
- Diretório de saída: raiz / nenhum diretório de build.
- Preservar a estrutura de diretórios, especialmente `public/images/`, `public/audio/` e `public/videos/`.

Antes de conectar o domínio, validar a URL de pré-visualização fornecida pela Hostinger, as três páginas, imagens, áudio, caminhos de mídia e versão mobile. A importação não altera por si só a decisão de DNS: nameservers, registros DNS e e-mail devem permanecer intactos até a etapa de conexão de domínio, que será tratada separadamente.

Consulte também [HOSTINGER_DEPLOYMENT.md](HOSTINGER_DEPLOYMENT.md) para o checklist operacional.
