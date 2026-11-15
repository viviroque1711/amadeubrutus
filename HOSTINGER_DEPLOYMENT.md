# Implantação na Hostinger — Amadeu Brutus

## Classificação técnica

**Tipo:** site estático (HTML + CSS + JavaScript executado no navegador).

Não há framework, bundler, servidor Node.js ou etapa de compilação identificada na estrutura publicada. O aviso de ausência de `package.json` é esperado e não indica defeito neste projeto.

## Configuração Git

- Repositório: https://github.com/viviroque1711/amadeubrutus
- Branch: `main`
- Método: importar via Git na Hostinger
- Seleção: **Implantar como estático**
- Diretório raiz/publicação: raiz do repositório
- Build command: vazio / nenhum
- Output directory: vazio / raiz do projeto

## Arquivos que precisam permanecer juntos

- `index.html`
- `shows.html`
- `lancamentos.html`
- `robots.txt`
- `sitemap.xml`
- `public/images/`
- `public/audio/`
- `public/videos/`

Não mover HTML para subdiretório nem publicar somente a pasta `public`: os caminhos relativos atuais dependem da raiz do repositório.

## Checklist pós-importação (preview Hostinger)

- [ ] Página inicial abre sem erro.
- [ ] `shows.html` e `lancamentos.html` abrem e os links de retorno funcionam.
- [ ] Imagem principal, imagem de fundo e foto do artista carregam.
- [ ] Botão de áudio inicia e pausa a faixa; confirmar compatibilidade do codec MP4/AAC no navegador.
- [ ] Navegação por teclado exibe foco visível nos links e no botão.
- [ ] H1 é anunciado como “AMADEU BRUTUS” por leitor de tela.
- [ ] Layout validado em desktop e mobile.
- [ ] `/robots.txt` e `/sitemap.xml` respondem corretamente.
- [ ] Canonicals e metadados apontam para o domínio final escolhido.
- [ ] HTTPS e redirecionamento canônico verificados.

## Preservação e segurança operacional

- Não alterar nameservers, registros DNS ou configuração de e-mail durante a importação.
- Não conectar o domínio final nem declarar publicação concluída antes da validação da URL de preview.
- Não excluir assets não utilizados sem análise e autorização; o inventário inclui arquivos que podem ser usados em fases futuras.
- A existência de arquivos no GitHub não comprova que o navegador os reproduz corretamente; validar mídia na pré-visualização.

## Situação registrada em 15/11/2026

- Código estático preparado para importação.
- Acessibilidade do H1 e foco de teclado ajustados no commit `79cb8db28bb54bd343b6a83e6f2512ec80b5d7dc`.
- Documentação operacional adicionada.
- Importação Hostinger ainda não executada.
- DNS e e-mail não alterados.
