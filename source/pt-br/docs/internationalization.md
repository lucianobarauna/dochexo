title: Internacionalização (i18n)
---
Você pode usar a internacionalização para apresentar seu site em diferentes idiomas. O idioma padrão é definido modificando a configuração `language` em `_config.yml`. Você também pode definir vários idiomas e modificar a ordem dos idiomas padrão.

``` yaml
language: zh-tw

language:
- zh-tw
- en
```

### Arquivo de linguagens

Os arquivos de idioma podem ser arquivos YAML ou JSON. Você deve inseri-los na pasta `languages` no tema. Há suporte para o [printf format] (https://github.com/alexei/sprintf.js) em language files.

### Templates

Use `__` ou `_p` helpers em modelos para obter as cadeias traduzidas. O primeiro é para uso normal e o último é para strings plurais. Por exemplo:

``` yaml en.yml
index:
  title: Home
  add: Add
  video:
    zero: No videos
    one: One video
    other: %d videos
```

``` js
<%= __('index.title') %>
// Home

<%= _p('index.video', 3) %>
// 3 videos
```

### Path

Você pode definir o idioma das páginas em front-matter, ou modificar a configuração `i18n_dir` em `_config.yml` para habilitar a detecção automática pela Hexo.

``` yaml
i18n_dir: :lang
```

O valor padrão da configuração `i18n_dir` é `:lang`, o que significa que o Hexo detectará o idioma dentro do primeiro segmento de URL. Por exemplo:

``` plain
/index.html => en
/archives/index.html => en
/zh-tw/index.html => zh-tw
```

A string só será servida como um idioma quando o arquivo de idioma existir. Então, 'arquivos' em `/archives/index.html` (exemplo 2) não serão atendidos como um idioma.
