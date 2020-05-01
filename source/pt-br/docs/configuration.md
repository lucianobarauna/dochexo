---
title: Configuração
---

Você pode modificar as configurações do site em `_config.yml` ou em um [arquivo de configuração alternativo](#Usando-uma-Configuracao-Alternativa).

### Site

Configuração | Descrição
--- | ---
`title` | O título do seu site
`subtitle` | O subtítulo do seu site
`description` | A descrição do seu site
`author` | Seu nome
`language` | O idioma do seu site. Use a [2-lettter ISO-639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). O padrão é `en`.
`timezone` | O fuso horário do seu site. O Hexo usa a configuração do seu computador por padrão. Você pode encontrar a lista de fusos horários disponíveis [aqui](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Alguns exemplos são `America/New_York`, `Japan` e `UTC`.

### URL

Configuração | Descrição | Padrão
--- | --- | ---
`url` | A URL do seu site |
`root` | O diretório raiz do seu site |
`permalink` | O formato de [permalink](permalinks.html) dos artigos | `:year/:month/:day/:title/`
`permalink_defaults` | Valores padrão de cada segmento no permalink |
`pretty_urls` | Rewrite the [`permalink`](variables.html) variables to pretty URLs |
`pretty_urls.trailing_index` | Trailing `index.html`, set to `false` to remove it  | `true`
`pretty_urls.trailing_html` | Trailing `.html`, set to `false` to remove it (_does not apply to trailing `index.html`_)  | `true`

{% note info Site em subdiretório %}
Se o seu site estiver em um subdiretório (como por exemplo `http://example.org/blog`) defina `url` para `http://example.org/blog` e defina `root` para `/blog/`.
{% endnote %}

### Diretório

Configuração | Descrição | Padrão
--- | --- | ---
`source_dir` | Diretório dos fonte. Onde seu conteúdo está armazenado | `source`
`public_dir` | Diretório dos arquivos públicos. Onde o site estático será gerado | `public`
`tag_dir` | Diretório de tags | `tags`
`archive_dir` | Diretório de archives | `archives`
`category_dir` | Diretório de categorias | `categories`
`code_dir` | Diretório de código (subdiretório de `source_dir`) | `downloads/code`
`i18n_dir` | Diretório de internacionalização (i18n) | `:lang`
`skip_render` | Caminhos que não devem ser renderizados. Você pode usar [expressões globais](https://github.com/micromatch/micromatch#extended-globbing) para fazer correspondência de caminho |

### Escrita

Configuração | Descrição | Padrão
--- | --- | ---
`new_post_name` | O formato do nome do arquivo para novas postagens | `:title.md`
`default_layout` | Layout padrão | `post`
`titlecase` | Transformar títulos em maiúsculo? | `false`
`external_link` | Abrir links externos em uma nova aba?
`external_link.enable` | Abrir links externos em uma nova aba? | `true`
`external_link.field` | Applies to the whole `site` or `post` only | `site`
`external_link.exclude` | Exclude hostname. Specify subdomain when applicable, including `www` | `[]`
`filename_case` | Converter nomes de arquivos para minúsculos `1`; maiúsculos `2` | `0`
`render_drafts` | Exibir rascunhos? | `false`
`post_asset_folder` | Ativar o [diretório de Asset](asset-folders.html)? | `false`
`relative_link` | Links para o diretório raiz? | `false`
`future` | Exibir postagens futuras? | `true`
`highlight` | Configurações de bloco de código |
`highlight.enable` | Enable syntax highlight | `true`
`highlight.auto_detect` | Enable auto-detection if no language is specified | `false`
`highlight.line_number` | Display line number<br>_Enabling this option will also enable `wrap` option_ | `true`
`highlight.tab_replace` | Replace tabs by n space(s); if the value is empty, tabs won't be replaced | `''`
`highlight.wrap` | Wrap the code block in [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) | `true`
`highlight.hljs` | Use the `hljs-*` prefix for CSS classes | `false`

### Categoria & Tag

Configuração | Descrição | Padrão
--- | --- | ---
`default_category` | Categoria padrão | `uncategorized`
`category_map` | Mapa de Categoria |
`tag_map` | Mapa de Tag |

### Formato de Data / Hora

Hexo usa [Moment.js](http://momentjs.com/) para processar datas.

Configuração | Descrição | Padrão
--- | --- | ---
`date_format` | Formato de data | `YYYY-MM-DD`
`time_format` | Formado de hora | `HH:mm:ss`
`use_date_for_updated` | Use the date of the post in [`post.updated`](/pt-br/docs/variables#Variaveis-da-Pagina) if no updated date is provided in the front-matter. Typically used with Git workflow | `true`

### Paginação

Configuração | Descrição | Padrão
--- | --- | ---
`per_page` | A quantidade de postagens exibidas em uma única página. `0` desabilita paginação | `10`
`pagination_dir` | Diretório de paginação | `page`

### Extensões

Configuração | Descrição
--- | ---
`theme` | Nome do tema. `false` desabilita o tema
`theme_config` | Configuração do tema. Inclui quaisquer configurações de tema personalizado sob esta chave para substituir os padrões do tema.
`deploy` | Configurações de implantação
`meta_generator` | [Meta generator](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#Attributes) tag. `false` disables injection of the tag.

### Incluir/Excluir Arquivos ou Diretórios

No arquivo de configuração, defina a chave de include/exclude para que o hexo processe ou ignore, explicitamente, determinados arquivos/diretórios.

`include` and `exclude` options only apply to the `source/` folder, whereas `ignore` option applies to all folders.

Configuração | Descrição
--- | ---
`include` | Por padrão, o Hexo ignora os arquivos e diretórios ocultos, mas configurar este campo fará com que o Hexo os processe também
`exclude` | O Hexo irá ignorar os arquivos e diretórios listados abaixo deste campo
`ignore` | Ignore files/folders

Exemplo:
```yaml
# Incluir/Excluir Arquivos/Diretórios
include:
  - ".nojekyll"
  # Include 'source/css/_typing.css'.
  - "css/_typing.css"
  # Include any file in 'source/_css/'.
  - "_css/*"
  # Include any file and subfolder in 'source/_css/'.
  - "_css/**/*"

exclude:
  # Exclude 'source/js/test.js'.
  - "js/test.js"
  # Exclude any file in 'source/js/'.
  - "js/*"
  # Exclude any file and subfolder in 'source/js/'.
  - "js/**/*"
  # Exclude any file with filename that starts with 'test' in 'source/js/'.
  - "js/test*"
  # Exclude any file with filename that starts with 'test' in 'source/js/' and its subfolders.
  - "js/**/test*"
  # Do not use this to exclude posts in the 'source/_posts/'.
  # Use skip_render for that. Or prepend an underscore to the filename.
  # - "_posts/hello-world.md" # Does not work.

ignore:
  # Ignore any folder named 'foo'.
  - "**/foo"
  # Ignore 'foo' folder in 'themes/' only.
  - "**/themes/*/foo"
  # Same as above, but applies to every subfolders of 'themes/'.
  - "**/themes/**/foo"
```

Each value in the list must be enclosed with single/double quotes.

`include:` and `exclude:` do not apply to the `themes/` folder. Either use `ignore:` or alternatively, prepend an underscore to the file/folder name to exclude.

\* Notable exception is the `source/_posts` folder, but any file or folder with a name that starts with an underscore under that folder would still be ignored. Using `include:` rule in that folder is not recommended.


### Usando uma Configuração Alternativa

Um arquivo de configuração personalizado pode ser especificado adicionando o sinalizador `--config` aos comandos do `hexo` com o caminho para o arquivo alternativo de configuração YAML ou JSON, ou até mesmo uma lista separada por vírgulas (sem espaços) de múltiplos arquivos YAML ou JSON.

``` bash
# usando 'custom.yml' no lugar de '_config.yml'
$ hexo server --config custom.yml

# usando 'custom.yml' e 'custom2.json', priorizando 'custom2.json'
$ hexo server --config custom.yml,custom2.json
```

O uso de vários arquivos combina todos os arquivos de configuração e salva as configurações mescladas para `_multiconfig.yml`. Os valores posteriores prevalecem. Este recurso funciona com qualquer quantidade de arquivos JSON e YAML com objetos arbitrariamente profundos. Observe que **nenhum espaço é permitido na lista**.

Por exemplo, no exemplo acima se `foo: bar` estiver em `custom.yml`, mas `"foo": "dinosaur"` estiver em `custom2.json`, `_multiconfig.yml` irá conter `foo: dinosaur`.

### Sobrescrevendo as Configurações do Tema

Os temas do Hexo são projetos independentes, com arquivos `_config.yml` separados.

Em vez de dar fork em um tema e manter uma branch personalizada com suas configurações, você pode configurá-lo a partir do arquivo de configuração principal do seu site.

Exemplo de configuração:

```yml
# _config.yml
theme_config:
  bio: "My awesome bio"
```

```yml
# themes/my-theme/_config.yml
bio: "Some generic bio"
logo: "a-cool-image.png"
```

Resultado da configuração do tema:

```json
{
  bio: "My awesome bio",
  logo: "a-cool-image.png"
}
```
