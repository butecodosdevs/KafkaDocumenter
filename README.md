# Como colaborar?

O objetivo desse projeto é realizar a tradução [dessa página](https://data-flair.training/blogs/kafka-tutorials-home/). Entre no site e selecione algum tópico para realizar a tradução.

## Como realizar a tradução?

- Escolha alguma das issues do repositório. Todas as issues marcadas como `documentation` são páginas que ainda precisam ser traduzidas.
- Clone o repositório e crie uma branch com o seguinte nome: `doc: nome do titulo da págian`.
- Crie um arquivo com o nome do título na pasta `docs` na raiz do projeto.
- Realize a tradução.
- Assim que terminar, realize o commit das suas alterações.
- Acesse a página do github e crie um `merge request` para a branch `main`.

Assim que a tradução for aceita, ela irá ser mergeada e aparecerá no menu lateral do site.

## Como realizar uma correção?

Em casos onde um erro de tradução é identificado, uma issue deve ser criada no github com a label `translate_fix` especificando qual documento e qual porção está com erro de tradução.

- Escolha uma issue marcada como `translate_fix`.
- Clone o repositório e crie uma branch com o seguinte nome: `doc_fix: nome do titulo da página`.
- Acesse o arquivo contendo o problema de tradução.
- Realize e dê commit nos ajustes de tradução.
- Acesse a página do github e crie um `merge request` para a branch `main`. Além disso, associe a branch a issue.

Assim que a tradução for aceita, ela irá ser mergeada e aparecerá no menu lateral do site.

## Como adicionar imagens?

Para adicionar images na sua tradução, você pode adicioná-las através de links externos ou internamente. 

### Adicionando imagens externamente

Para adicionar imagens externas, basta copiar o link da imagem e seguir a sintaxe do [Markdown](https://www.markdownguide.org/basic-syntax/).

### Adicionando imagens internamente

Para adicionar imagens internamente, você precisa realizar os seguintes passos:

- Realize o download da imagem.
- Coloque a imagem no diretório: `public/assets`
- Na porção desejada, siga a sintaxe do [Markdown](https://www.markdownguide.org/basic-syntax/) para adicionar a imagem.
- No link para imagem, coloque `/assets/nome_da_imagem.extensao`.

## Detectou um problema no site?

Em casos onde um problema no site é encontrado, deve ser reportado através de issues marcadas com a label `bug`
