title: Solução de problema
---

No caso de você tem problemas com o uso do Hexo, aqui está uma lista de soluções para alguns problemas freqüentemente encontrados. Se esta página não o ajudar a resolver seu problema, tente fazer uma pesquisa em [GitHub](https://github.com/hexojs/hexo/issues) ou nosso Google Group](https://groups.google.com/group/hexo).

## YAML Parsing Error

``` plain
JS-YAML: incomplete explicit mapping pair; a key node is missed at line 18, column 29:
      last_updated: Last updated: %s
```

Envolva a string com aspas se ela contiver dois pontos.

``` plain
JS-YAML: bad indentation of a mapping entry at line 18, column 31:
      last_updated:"Last updated: %s"
```

Certifique-se de que está usando abas flexíveis e adicione um espaço após os dois pontos

Você pode ver em [YAML Spec](http://www.yaml.org/spec/1.2/spec.html) para mais informações.

## EMFILE Error

``` plain
Error: EMFILE, too many open files
```

Embora o Node.js tenha I/O não-bloqueadoras, o número máximo de I/O síncronas ainda é limitado pelo sistema. Você pode encontrar um erro EMFILE ao tentar gerar uma grande quantidade de arquivos. Você pode tentar executar o seguinte comando para aumentar o número de operações de I/O síncronas permitidas.

``` bash
$ ulimit -n 10000
```

## Processos com pouca memeória

Quando você encontrar esse erro durante a geração:
```
FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - process out of memory
```

Aumente o tamanho da memória de pilha Node.js alterando a primeira linha de `hexo-cli` (`which hexo` para procurar o arquivo).
```
#!/usr/bin/env node --max_old_space_size=8192
```

[Sem memória ao gerar um enorme blog · Edição # 1735 · hexojs / hexo](https://github.com/hexojs/hexo/issues/1735)

## Git Problemas de deploy

``` plain
error: RPC failed; result=22, HTTP code = 403

fatal: 'username.github.io' does not appear to be a git repository
```

Assegure-se de ter [configurado o git](https://help.github.com/articles/set-up-git) no seu computador corretamente ou tente usar o URL do repositório HTTPS em vez disso.

## Problemas de servidor

``` plain
Error: listen EADDRINUSE
```

Você pode ter iniciado dois servidores Hexo ao mesmo tempo ou pode haver outro aplicativo usando a mesma porta. Tente modificar a configuração `port` ou iniciar o servidor Hexo com o sinalizador` -p`.

``` bash
$ hexo server -p 5000
```

## Problemas na intalação de plugins

``` plain
npm ERR! node-waf configure build
```

Esse erro pode ocorrer ao tentar instalar um plugin escrito em C, C ++ ou outro idioma não-JavaScript. Verifique se você instalou o compilador correto em seu computador.

## Error com DTrace (Mac OS X)

```plain
{ [Error: Cannot find module './build/Release/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/default/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
{ [Error: Cannot find module './build/Debug/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND' }
```

A instalação do DTrace pode ter problemas, use isso:
```sh
$ npm install hexo --no-optional
```
See [#1326](https://github.com/hexojs/hexo/issues/1326#issuecomment-113871796)

## Interando Data Model em Jade ou Swig

A Hexo usa [Warehouse] para o seu modelo de dados. Não é um array para que você possa ter que transformar objetos em iteráveis.
```
{% for post in site.posts.toArray() %}
{% endfor %}
```

## Data não atualizada

Alguns dados não podem ser atualizados, ou os arquivos recém-gerados são idênticos aos da última versão. Limpe o cache e tente novamente.
``` bash
$ hexo clean
```

## Nenhum comando é executado

Quando você não pode obter nenhum comando, exceto `help`,`init` e `version` para funcionar e você continua recebendo conteúdo de `hexo help`, ele pode ser causado por um `hexo` que falta no `package.json`:

```json
{
  "hexo": {
    "version": "3.2.2"
  }
}
```

## Ecapando conteúdos

Hexo usa [Nunjucks] para renderizar posts ([Swig] foi usado na versão mais antiga, que compartilha uma sintaxe semelhante). O conteúdo enrolado com `{% raw%} {{}} {% endraw%}` ou `{% raw%} {%%} {% endraw%}` será analisado e pode causar problemas. Você pode conter conteúdo sensível com o plugin de tag `raw`.

```
{% raw %}
Hello {{ sensitive }}
{% endraw %}
```

## ENOSPC Error (Linux)

Às vezes, ao executar o comando `$ hexo server`, ele retorna um erro:
```
Error: watch ENOSPC ...
```
It can be fixed by running `$ npm dedupe` or, if that doesn't help, try the following in the Linux console:
```
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
Isso aumentará o limite para o número de arquivos que você pode assistir.

## EMPERM Error (Windows Subsystem for Linux)

Ao executar `$ hexo server` em um ambiente BashOnWindows, ele retorna o seguinte erro:
```
Error: watch /path/to/hexo/theme/ EMPERM
```
Infelizmente, o WSL atualmente não suporta os observadores do sistema de arquivos. Portanto, o recurso de atualização ao vivo do servidor do hexo não está disponível no momento. Você ainda pode executar o servidor a partir de um ambiente WSL primeiro gerando os arquivos e depois executá-lo como um servidor estático:
``` sh
$ hexo generate
$ hexo server -s
```

Este é [um problema BashOnWindows conhecido](https://github.com/Microsoft/BashOnWindows/issues/216), e em 15 de agosto de 2016, a equipe do Windows disse que eles trabalhariam nisso. Você pode obter atualizações de progresso e encorajá-las a priorizá-la na [página de sugestão UserVoice do problema](https://wpdev.uservoice.com/forums/266908-command-prompt-console-bash-on-ubuntu-on-windo/suggestions/13469097-support-for-filesystem-watchers-like-inotify).

## Erro de renderização de template

Às vezes, ao executar o comando `$ hexo generate`, ele retorna um erro:
```
FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
Template render error: (unknown path)
```
Isso significa que existem algumas palavras irreconhecíveis no seu arquivo. Existem duas possibilidades. Uma é sua nova page/post, e a outra é `_config.yml`.
Em `_config.yml`, não esqueça de adicionar espaços em branco antes de uma lista no hash. Existe a página wiki sobre [YAML] (https://en.wikipedia.org/wiki/YAML).
O erro um:
```
plugins:
- hexo-generator-feed
- hexo-generator-sitemap
```
A correta:
```
plugins:
  - hexo-generator-feed
  - hexo-generator-sitemap
```

[Warehouse]: https://github.com/tommy351/warehouse
[Swig]: http://paularmstrong.github.io/swig/
[Nunjucks]: http://mozilla.github.io/nunjucks/
