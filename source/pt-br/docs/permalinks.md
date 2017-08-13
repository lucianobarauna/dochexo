title: Permalinks
---
Você pode especificar os permalinks para o seu site em `_config.yml` ou em primeira linha para cada publicação.

### Variáveis

Além das seguintes variáveis, você pode usar todos os atributos no permalink.

Variável | Descrição
--- | ---
`:year` | Ano de publicação do post (4 dígitos)
`:month` | Mês de postagem do post (2 dígitos)
`:i_month` | Mês publicado do post (sem zeros)
`:day` | Dia de publicação do post (2-digit)
`:i_day` | Dia de publicação do post (sem zeros a esquerda)
`:title` | Nome do arquivo
`:id` | ID do post
`:category` | Categorias. Se a postagem não for categorizada, ela usará o valor `default_category`.

Você pode definir o valor padrão de cada variável no permalink através da configuração `permalink defaults`:

``` yaml
permalink_defaults:
  lang: en
```

### Exemplos

Criando um post chamado `hello-world.md` na pasta `source/_posts` com o seguinte conteúdo.

``` yaml
title: Hello World
date: 2013-07-14 17:01:34
categories:
- foo
- bar
```

Configurações | Padrão
--- | ---
`:year/:month/:day/:title/` | 2013/07/14/hello-world
`:year-:month-:day-:title.html` | 2013-07-14-hello-world.html
`:category/:title` | foo/bar/hello-world

### Suporte a multi-idioma

Para criar um site multi-idioma, você pode modificar as configurações `new_post_name` e` permalink` dessa forma:

``` yaml
new_post_name: :lang/:title.md
permalink: :lang/:title/
```

Quando você criar uma nova postagem, a postagem será salva em:

``` bash
$ hexo new "Hello World" --lang tw
# => source/_posts/tw/Hello-World.md
```

e a URL será:

``` plain
http://localhost:4000/tw/hello-world/
```
