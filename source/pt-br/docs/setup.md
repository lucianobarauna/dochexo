title: Setup
---
Uma vez instalado o Hexo, execute os seguintes comandos para inicializar um site com Hexo em um diretório `<folder>`.

``` bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```

Após inicializado, o diretório do seu projeto ficará com a seguinte estrutura:

``` plain
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

### _config.yml

Arquivo de [configuração](configuration.html) do site. Você pode definir a maioria das configurações aqui.

### package.json

Arquivo de dados da aplicação. Os renderizadores [Markdown](http://daringfireball.net/projects/markdown/), [EJS](http://embeddedjs.com/) e [Stylus](http://learnboost.github.io/stylus/) são instalados por padrão. Se desejar, você pode desinstalá-los posteriormente.

``` json package.json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": ""
  },
  "dependencies": {
    "hexo": "^3.0.0",
    "hexo-generator-archive": "^0.1.0",
    "hexo-generator-category": "^0.1.0",
    "hexo-generator-index": "^0.1.0",
    "hexo-generator-tag": "^0.1.0",
    "hexo-renderer-ejs": "^0.1.0",
    "hexo-renderer-stylus": "^0.2.0",
    "hexo-renderer-marked": "^0.2.4",
    "hexo-server": "^0.1.2"
  }
}
```

### scaffolds

Pasta [Scaffold](writing.html#Scaffolds). Quando você cria uma nova postagem, a Hexo se baseia nos arquivos da pasta Scaffold.

### source

A pasta `source`. É aqui que você coloca o conteúdo do seu site. Hexo ignora arquivos ocultos e arquivos ou pastas cujos nomes são prefixados com `_` (underline) - exceto a pasta `_posts`. Os arquivos renderizáveis (por exemplo, Markdown, HTML) serão processados e colocados na pasta `public`, enquanto outros arquivos serão simplesmente copiados.


### themes

Diretório de [Temas](themes.html). O Hexo gera um site estático combinando o conteúdo do site com o tema.
