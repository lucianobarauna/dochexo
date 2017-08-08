title: Arquivo de dados
---
Às vezes, você pode precisar usar alguns dados em modelos que não estão diretamente disponíveis em suas postagens, ou você deseja reutilizar os dados em outro lugar. Para esses casos de uso, o Hexo 3 introduziu os novos **arquivos de dados**. Esse recurso carrega arquivos YAML ou JSON na pasta `source/_data` para que você possa usá-los em seu site.

Por exemplo, adicione `menu.yml` na pasta `source / _data`.

``` yaml
Home: /
Gallery: /gallery/
Archives: /archives/
```

E você pode usá-los em modelos:

```
<% for (var link in site.data.menu) { %>
  <a href="<%= site.data.menu[link] %>"> <%= link %> </a>
<% } %>
```

Renderizado assim:

```
<a href="/"> Home </a>
<a href="/gallery/"> Gallery </a>
<a href="/archives/"> Archives </a>
```