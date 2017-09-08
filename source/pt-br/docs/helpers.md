title: Helpers
---
Os Helpers são usados em templates para ajudá-lo a inserir trechos rapidamente. Os helpers não podem ser usados em arquivos de origem.
## URL

### url_for

Retorna uma url com o caminho root prefixado. Você deve usar esse helper em vez de `config.root + path` desde Hexo 2.7.

``` js
<%- url_for(path) %>
```

### relative_url

Retorna o URL relativo de `from` para `to`.

``` js
<%- relative_url(from, to) %>
```

### gravatar

Insere uma imagem Gravatar.
Se você não especificar o parâmetro [options], as opções padrão serão aplicadas. Caso contrário, você pode configurá-lo para um número que será passado como parâmetro de tamanho para o Gravatar. Finalmente, se você configurá-lo para um objeto, ele será convertido em uma seqüência de consulta de parâmetros para o Gravatar.

``` js
<%- gravatar(email, [options]);
```

**Exemplos:**

``` js
<%- gravatar('a@abc.com') %>
// http://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787

<%- gravatar('a@abc.com', 40) %>
// http://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40

<%- gravatar('a@abc.com' {s: 40, d: 'http://example.com/image.png'}) %>
// http://www.gravatar.com/avatar/b9b00e66c6b8a70f88c73cb6bdb06787?s=40&d=http%3A%2F%2Fexample.com%2Fimage.png
```

## HTML Tags

### css

Carrega arquivos CSS. `path` pode ser uma array ou uma string. Se `path` não for prefixado com `/` ou com qualquer protocolo, ele receberá prefixo com o URL de root. Se você não adicionou a extensão `.css` após ` path`, ela será adicionada automaticamente.

``` js
<%- css(path, ...) %>
```

**Exemplos:**

``` js
<%- css('style.css') %>
// <link rel="stylesheet" href="/style.css" type="text/css">

<%- css(['style.css', 'screen.css']) %>
// <link rel="stylesheet" href="/style.css" type="text/css">
// <link rel="stylesheet" href="/screen.css" type="text/css">
```

### js

Carrega arquivos JavaScript. `path` pode ser uma array ou uma string. Se `path` não for prefixado com `/` ou com qualquer protocolo, ele receberá prefixo com o URL de raiz. Se você não adicionou a extensão `.js` após` path`, ela será adicionada automaticamente.

``` js
<%- js(path, ...) %>
```

**Exemplos:**

``` js
<%- js('script.js') %>
// <script type="text/javascript" src="/script.js"></script>

<%- js(['script.js', 'gallery.js']) %>
// <script type="text/javascript" src="/script.js"></script>
// <script type="text/javascript" src="/gallery.js"></script>
```

### link_to

Inserindo link

``` js
<%- link_to(path, [text], [options]) %>
```

Opção | Descrição | Padrão
--- | --- | ---
`external` | Abre o link em uma nova guia | falso
`class` | Nome da classe |
`id` | ID |

**Exemplos:**

``` js
<%- link_to('http://www.google.com') %>
// <a href="http://www.google.com" title="http://www.google.com">http://www.google.com</a>

<%- link_to('http://www.google.com', 'Google') %>
// <a href="http://www.google.com" title="Google">Google</a>

<%- link_to('http://www.google.com', 'Google', {external: true}) %>
// <a href="http://www.google.com" title="Google" target="_blank" rel="external">Google</a>
```

### mail_to

Insere um link de email.

``` js
<%- mail_to(path, [text], [options]) %>
```

Opção | Descrição
--- | ---
`class` | Nome da classe
`id` | ID
`subject` | Assunto do email
`cc` | CC
`bcc` | BCC
`body` | Conteúdo do email

**Exemplos:**

``` js
<%- mail_to('a@abc.com') %>
// <a href="mailto:a@abc.com" title="a@abc.com">a@abc.com</a>

<%- mail_to('a@abc.com', 'Email') %>
// <a href="mailto:a@abc.com" title="Email">Email</a>
```

### image_tag

Inseri uma imagem.

``` js
<%- image_tag(path, [options]) %>
```

Opção | Descrição
--- | ---
`alt` | Alternativa texto ou imagem
`class` | Nome de class
`id` | ID
`width` | Largura da imagem
`height` | Altura da imagem

### favicon_tag

Insere um favico

``` js
<%- favicon_tag(path) %>
```

### feed_tag

Insere um link de feed.

``` js
<%- feed_tag(path, [options]) %>
```

Opção | Descrição | Padrão
--- | --- | ---
`title` | Título do feed |
`type` | Tipo do feed | atom

## Tags condiçionais

### is_current

Verifique se `path` corresponde ao URL da página atual. Use opções `strict` para habilitar um modo strito e correspôndente.

``` js
<%- is_current(path, [strict]) %>
```

### is_home

Verifique se a página atual é a pagina inicial.

``` js
<%- is_home() %>
```

### is_post

Verifique se a página atual é uma publicação.

``` js
<%- is_post() %>
```

### is_archive

Verifique se a página atual é uma página de arquivo.

``` js
<%- is_archive() %>
```

### is_year

Verifique se a página atual é uma página de arquivo anual.

``` js
<%- is_year() %>
```

### is_month

Verifique se a página atual é uma página de arquivo mensal.

``` js
<%- is_month() %>
```

### is_category

Verifica se a página atual é uma página de categoria.
Se uma string for dada como parâmetro, verifique se a página atual corresponde à categoria dada.

``` js
<%- is_category() %>
<%- is_category('hobby') %>
```

### is_tag

Verifica se a página atual é uma página de tag.
Se uma string for dada como parâmetro, verifique se a página atual corresponde à tag fornecida.

``` js
<%- is_tag() %>
<%- is_tag('hobby') %>
```

## Manipulação de String

### trim

Remove espaços de prefixo e posterior de uma string.


``` js
<%- trim(string) %>
```

### strip_html

Remove as tags HTML e transforma o conteúdo em string

``` js
<%- strip_html(string) %>
```

**Exemplo:**

``` js
<%- strip_html('It's not <b>important</b> anymore!') %>
// It's not important anymore!
```

### titlecase

Transforme em camelcase o conteúdo ideal.

``` js
<%- titlecase(string) %>
```

**Exemplos:**

``` js
<%- titlecase('this is an apple') %>
# This is an Apple
```

### markdown

Renderiza um conteúdo em markdown

``` js
<%- markdown(str) %>
```

**Exemplos:**

``` js
<%- markdown('make me **strong**') %>
// make me <strong>strong</strong>
```

### render

Renderiza em string.

``` js
<%- render(str, engine, [options]) %>
```

### word_wrap

Coloque uma quebra de linha no texto  apartir de um limite de caracteres, o limite é `length`. `length` é 80 por padrão.

``` js
<%- word_wrap(str, [length]) %>
```

**Exemplos:**

``` js
<%- word_wrap('Once upon a time', 8) %>
// Once upon\n a time
```

### truncate
Trunca o texto após certo `length`. O padrão é 30 caracteres.

``` js
<%- truncate(text, [options]) %>
```

**Examples:**

``` js
<%- truncate('Once upon a time in a world far far away', {length: 17}) %>
// Once upon a ti...

<%- truncate('Once upon a time in a world far far away', {length: 17, separator: ' '}) %>
// Once upon a...

<%- truncate('And they found that many people were sleeping better.', {length: 25, omission: '... (continued)'}) %>
// And they f... (continued)
```

## Templates

### partial

Carrega outros arquivos de template. Você pode definir variáveis locais em `locals`.

``` js
<%- partial(layout, [locals], [options]) %>
```

Opção | Descrição | Padrão
--- | --- | ---
`cache` | Conteúdo da cache (use cache de fragmento) | `false`
`only` | Variáveis locais estritas. Use somente variáveis configuradas `locals` dentro de templates. | `false`

### fragment_cache

Cache o conteúdo em um fragmento. Salva o conteúdo dentro de um fragmento e serve o cache quando a próxima solicitação entrar.

``` js
<%- fragment_cache(id, fn);
```

**Exemplos:**

``` js
<%- fragment_cache('header', function(){
  return '<header></header>';
}) %>
```

## Date & Time

### date

Insere a data formatada. `date` pode ser tempo de unix, string ISO, objeto de data ou objeto [Moment.js]. `format` é ` date_format` a configuração por padrão.

``` js
<%- date(date, [format]) %>
```

**Exemplos:**

``` js
<%- date(Date.now()) %>
// 2013-01-01

<%- date(Date.now(), 'YYYY/M/D') %>
// Jan 1 2013
```

### date_xml

Insere a data no formato XML. `date` pode ser tempo de unix, string ISO, objeto de data ou objeto [Moment.js].

``` js
<%- date_xml(date) %>
```

**Exemplos:**

``` js
<%- date_xml(Date.now()) %>
// 2013-01-01T00:00:00.000Z
```

### time

Insere o tempo formatado. `date` pode ser tempo de unix, string ISO, objeto de data ou objeto [Moment.js]. `format` é a configuração` time_format` por padrão.

``` js
<%- time(date, [format]) %>
```

**Exemplo:**

``` js
<%- time(Date.now()) %>
// 13:05:12

<%- time(Date.now(), 'h:mm:ss a') %>
// 1:05:12 pm
```

### full_date

Insere a data e a hora formatadas. `date` pode ser tempo de unix, string ISO, objeto de data ou objeto [Moment.js]. `format` é a configuração` date_format + time_format` por padrão.

``` js
<%- full_date(date, [format]) %>
```

**Exemplos:**

``` js
<%- full_date(new Date()) %>
// Jan 1, 2013 0:00:00

<%- full_date(new Date(), 'dddd, MMMM Do YYYY, h:mm:ss a') %>
// Tuesday, January 1st 2013, 12:00:00 am
```

### moment

[Moment.js] biblioteca.

## List

### list_categories

Insere uma lista de todas as categorias.

``` js
<%- list_categories([options]) %>
```

Insere uma lista de todas como categorias.

Opção | Descrição | Padrão
--- | --- | ---
`orderby` | Ordem das categorias | name
`order` | Tipo de ordem. `1`,` asc` para ascender; `-1`,` desc` para descer | 1
`show_count` | Exibir o número de postagens para cada categoria | true
`style` | Estilo para exibir a lista de categorias. `list` exibe categorias em uma lista não ordenada. | lsit
`separador` | Separador entre categorias. (Só funciona se `style` não for` list`) | ,
`depth` | Níveis de categorias a serem exibidos. `0` exibe todas as categorias e categorias de crianças; `-1` é semelhante a` 0`, mas exibido em plano; `1` exibe apenas categorias de nível superior. | 0
`class` | Nome da classe da lista de categorias. | category
`transform` | A função que altera a exibição do nome da categoria. |
`suffix`| Adicione um sufixo para vincular. | None

### list_tags

Inseri uma lista de tags

``` js
<%- list_tags([options]) %>
```

Opção | Descrição | Padrão
--- | --- | ---
`orderby` | Ordem das categorias | name
`order` | Tipo de ordem. `1`,` asc` para ascender; `-1`,` desc` para descer | 1
`show_count` | Exibir o número de postagens para cada tag | true
`style` | Estilo para exibir a lista de tags. `list` exibe tags em uma lista não ordenada. | list
`separator`| Separador entre categorias. (Só funciona se `style` não for` list`) | ,
`class` | Nome da classe da lista de etiquetas. | tag
`transform` | A função que altera a exibição do nome da categoria. |
`amount` | O número de tags a exibir (0 = ilimitado) | 0
`suffix` | Adicione um sufixo para vincular. | Nenhum

### list_archives

Inseri uma lista de arquivos

``` js
<%- list_archives([options]) %>
```

Opção | Descrição | Padrão
--- | --- | ---
`tipo` | Tipo. Esse valor pode ser `yearly` ou `monthly`. | monthly
`order` | Tipo de ordem. `1`,` asc` para ascender; `-1`,` desc` para descer | 1
`show_count` | Exibir o número de postagens para cada arquivo | true
`format` | Formato da data | MMMM AAAA
`style` | Estilo para exibir a lista de arquivos. `list` exibe arquivos em uma lista não ordenada. | list
`separador`| Separador entre arquivos. (Só funciona se `style` não for` list`) | ,
`class` | Nome da classe da lista de arquivos. | archive
`transform` | A função que altera a exibição do nome do archive. |

### list_posts

Inseri uma lista de posts

``` js
<%- list_posts([options]) %>
```

Opção | Descrição | Padrão
--- | --- | ---
`orderby` | Ordem de postagens | date
`order` | Tipo de ordem. `1`,` asc` para ascender; `-1`,` desc` para descer | 1
`style` | Estilo para exibir a lista de postagens. `list` exibe postagens em uma lista desordenada. | list
`separador` | Separador entre postagens. (Só funciona se `style` não for` list`) | ,
`class` | Nome da classe da lista de postagem. | post
`amount` | O número de postagens a serem exibidas (0 = ilimitado) | 6
`transform` | A função que altera a exibição do nome do post. |

### tagcloud

Inseri uma nuvem de tags

``` js
<%- tagcloud([tags], [options]) %>
```

Opção | Descrição | Padrão
--- | --- | ---
`min_font` | Minimal font size | 10
`max_font` | Maximum font size | 20
`unit` | Unit of font size | px
`amount` | Total amount of tags | 40
`orderby` | Order of tags | name
`order` | Sort order. `1`, `sac` as ascending; `-1`, `desc` as descending | 1
`color` | Colorizes the tag cloud | false
`start_color` | Start color. You can use hex (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`) or [color keywords]. This option only works when `color` is true. |
`end_color` | End color. You can use hex (`#b700ff`), rgba (`rgba(183, 0, 255, 1)`), hsla (`hsla(283, 100%, 50%, 1)`) or [color keywords]. This option only works when `color` is true. |

`min_font` | Tamanho mínimo da fonte | 10
`max_font` | Tamanho máximo da fonte | 20
`unidade` | Unidade de tamanho da fonte | px
`amount` | Quantidade total de tags | 40
`orderby` | Ordem de etiquetas | name
`order` | Ordem de classificação. `1`,`sac` como ascendente; `-1`,` desc` como descendente | 1
`cor`| Coloriza a nuvem de etiquetas | falso
`start_color` | Comece a cor. Você pode usar hex (`#b700ff`), rgba (`rgba (183, 0, 255, 1)`), hsla (`hsla (283, 100%, 50%, 1)`) ou [palavras-chave coloridas]. Esta opção só funciona quando a cor é true. |
`end_color` | Cor final. Você pode usar hex (`#b700ff`), rgba (`rgba (183, 0, 255, 1)`), hsla (` sla (283, 100%, 50%, 1)`) ou [palavras-chave coloridas]. Esta opção só funciona quando a cor é true. |

## Diversos

### paginator

Inseri uma paginação.

``` js
<%- paginator(options) %>
```

Opção | Descrição | Padrão
--- | --- | ---
`base` | URL básico | /
`format` | Formato de URL | página /%d /
`total` | O número de páginas | 1
`current` | Número da página atual | 0
`prev_text` | O texto do link da página anterior. Funciona apenas se `prev_next` estiver definido como true. | Prev
`next_text` | O texto do link da próxima página. Funciona apenas se `prev_next` estiver definido como true. | Next
`espaço` | O texto do espaço | &hellp;
`prev_next` | Exibir os links anteriores e seguintes | true
`end_size` | O número de páginas exibidas no início e no final | 1
`mid_size` | O número de páginas exibidas entre a página atual, mas não incluindo a página atual | 2
`show_all` | Exibir todas as páginas. Se isso for definido como verdade, `end_size` e` mid_size` não funcionarão. | false

### search_form

Inseri o form de pesquisa do Google

``` js
<%- search_form(options) %>
```

Opção | Descrição | Padrão
--- | --- | ---
`class` | O nome da classe do formulário | search-form
`text`| Palavra de sugestão de pesquisa | Search
`button`| Exibir o botão de pesquisa. O valor pode ser um booleano ou uma string. Quando o valor é uma string, será o texto do botão. | false

### number_format

Formate um número

``` js
<%- number_format(number, [options]) %>
```

Opção | Descrição | Padrão
--- | --- | ---
`precision` | A precisão do número. O valor pode ser `false` ou um número inteiro não negativo. | false
`delimiter` | O delimitador de milhares | ,
`separator` | O separador entre os dígitos fracionários e inteiros. | .

**Exemplos:**

``` js
<%- number_format(12345.67, {precision: 1}) %>
// 12,345.68

<%- number_format(12345.67, {precision: 4}) %>
// 12,345.6700

<%- number_format(12345.67, {precision: 0}) %>
// 12,345

<%- number_format(12345.67, {delimiter: ''}) %>
// 12345.67

<%- number_format(12345.67, {separator: '/'}) %>
// 12,345/67
```

### open_graph

Insere dados [Gráfico aberto].

``` js
<%- open_graph([options]) %>
```

Opção | Descrição | Padrão
--- | --- | ---
`title` | Título da página (`og: title`) | `page.title`
`tipo` | Tipo de página (`og:type`) | blog
`url` | URL da página (`og:url`) | `url`
`imagem` | Capa da página (`og:image`) | Primeira imagem no conteúdo
`site_name` | Nome do site (`og:site_name`) | `config.title`
`description`| Descrição da página (`og: desription`) | Excerto de página ou 200 caracteres do conteúdo
`twitter_card` | Tipo de cartão do Twitter (`twitter: cartão`) | resumo
`twitter_id` | Twitter ID (`twitter: creator`) |
`twitter_site` | Site do Twitter (`twitter: site`) |
`google_plus` | Link de perfil do Google+ |
`fb_admins` | ID de administrador do Facebook |
`fb_app_id` | ID da aplicação do Facebook |

### toc

Analisa todas as tags de título (h1 ~ h6) no conteúdo e insere um índice.

``` js
<%- toc(str, [options]) %>
```

Opção | Descrição | Padrão
--- | --- | ---
`class` | Nome da classe | toc
`list_number` | Exibe o número da lista | true
`max_depth` | Profundidade máxima do cabeçalho gerado | 6

**Exemplos:**

``` js
<%- toc(page.content) %>
```

[color keywords]: http://www.w3.org/TR/css3-color/#svg-color
[Moment.js]: http://momentjs.com/
[Open Graph]: http://ogp.me/
