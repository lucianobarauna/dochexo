title: Asset Folders
---
## Pasta global ativos(assets)

Os assets são arquivos não publicados na pasta `source`, como imagens, arquivos CSS ou JavaScript. Por exemplo, se você só vai ter algumas imagens no projeto Hexo, então a maneira mais fácil é mantê-las em um diretório `source / images`. Então, você pode acessá-los usando algo como `![](/ Images / image.jpg)`.

## Post pasta ativos(assets)

Para os usuários que esperam exibir imagens e / ou outros ativos regularmente, e para aqueles que preferem separar seus ativos em uma base pós-publicação, o Hexo também fornece uma maneira mais organizada de gerenciar ativos. Esta abordagem ligeiramente mais envolvida, mas muito conveniente para o gerenciamento de ativos, pode ser ativada definindo a configuração `post_asset_folder` em` _config.yml` como verdadeira.

``` yaml _config.yml
post_asset_folder: true
```

Com o gerenciamento de pastas de ativos habilitado, o Hexo criará uma pasta sempre que você fizer uma nova postagem com o comando `hexo new [layout] <title>`. Esta pasta de ativos terá o mesmo nome que o arquivo de markdown associado à postagem. Coloque todos os recursos relacionados à sua postagem na pasta associada, e você poderá fazer referência a eles usando um caminho relativo, tornando mais fácil e conveniente o fluxo de trabalho.

## Plugins para referência relativa ao caminho relativo

Referenciar imagens ou outros recursos usando sintaxe de markdown normal e caminhos relativos podem fazer com que eles sejam exibidos incorretamente em páginas de arquivo ou índice. Os plugins foram criados pela comunidade para abordar esta questão no Hexo 2. No entanto, com o lançamento do Hexo 3, vários novos plugins de tags foram adicionados ao núcleo. Estes permitem que você faça referência aos seus ativos mais facilmente nas postagens:

```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```

Por exemplo, com as pastas de postagem ativadas, se você colocar uma imagem `example.jpg` na sua pasta de ativos, ela *não* aparecerá na página de índice se você fizer referência a ela usando um caminho relativo com regular`! [] (/ example.jpg) `sintaxe markdown (no entanto, ele funcionará como esperado na publicação em si).

A maneira correta de fazer referência à imagem será, portanto, usar a sintaxe do plugin de tags em vez do markdown:

```
{% asset_img example.jpg This is an example image %}
{% asset_img "spaced asset.jpg" "spaced title" %}
```
Desta forma, a imagem aparecerá dentro da publicação e nas páginas de índice e arquivo.