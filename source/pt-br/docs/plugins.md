title: Plugins
---
A Hexo possui um poderoso sistema de plugin, o que facilita a extensão das funções sem modificar o código-fonte do módulo central. Existem dois tipos de plugins no Hexo:

### Script

Se o seu complemento for relativamente simples, recomenda-se usar um script. Tudo o que você precisa fazer é colocar seus arquivos JavaScript na pasta `scripts` e o Hexo irá carregá-los durante a inicialização.

### Plugin

Se seu código é complicado ou se você deseja publicá-lo no registro do NPM, recomendamos usar um plugin. Primeiro, crie uma pasta na pasta `node_modules`. O nome dessa pasta deve começar com `hexo-` ou o Hexo irá ignorá-lo.

Sua nova pasta deve conter pelo menos dois arquivos: um contendo o código JavaScript real e um arquivo `package.json` que descreve a finalidade do plugin e define suas dependências.

``` plain
.
├── index.js
└── package.json
```

No mínimo, você deve definir as entradas `name`,` version` e `main` em` package.json`. Por exemplo:

``` json package.json
{
  "name": "hexo-my-plugin",
  "version": "0.0.1",
  "main": "index"
}
```

Você também precisará listar seu plugin como uma dependência na raiz `package.json` de sua instância hexo para que Hexo a detecte e carregue.

### Tools

Você pode usar as ferramentas oficiais fornecidas pela Hexo para acelerar o desenvolvimento:

- [hexo-fs]: Arquivo IO
- [hexo-util]: Utilitários
- [hexo-i18n]: Localização (i18n)
- [hexo-paginação]: gerar dados de paginação

### Publishing

Quando o seu plug-in está pronto, você pode considerar publicá-lo na [lista de plugins](/plugins) para convidar outras pessoas para começar a usá-lo. Publicar seus próprios plugins é muito semelhante a [atualizar documentação](contributing.html#Updating_Documentation).

1. Fork [hexojs/site]
2. Clone o repositório no seu computador e instale as dependências.

    {% code %}
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    {% endcode %}

3. Edite `source/_data/plugins.yml` e adicione seu plugin. Por exemplo:

    {% code %}
    - name: hexo-server
      description: Server module for Hexo.
      link: https://github.com/hexojs/hexo-server
      tags:
        - official
        - server
        - console
    {% endcode %}

4. Push para a branch.
5. Crie um pull request e descreva as modificações.

[hexo-fs]: https://github.com/hexojs/hexo-fs
[hexo-util]: https://github.com/hexojs/hexo-util
[hexo-i18n]: https://github.com/hexojs/hexo-i18n
[hexo-pagination]: https://github.com/hexojs/hexo-pagination
[hexojs/site]: https://github.com/hexojs/site
