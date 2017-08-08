title: API
---
Essa documentação fornece informações mais detalhadas sobre a API e será útil para pessoas que desejam modificar o código-fonte do Hexo ou escrever novos plugins. Se você está interessado em um uso mais basico do Hexo, consulte as [documentações](../docs).

Por favir, note que essa documentação é válida apenas para o Hexo 3 ou superior.

## Iniciando
## Initialize

Primeiro, temos que criar uma instancia Hexo. Uma nova instancia recebe dois argumentos: o diretório raiz do site, `base_dir`, e um objeto com a opções de inicialização. Em seguida, inicializamos essa instância chamando o método `init`, que irá carregar as configurações e plugins do Hexo.

``` js
var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

hexo.init().then(function(){
  // ...
});
```

Opção | Descrição | Padrão
--- | --- | ---
`debug` | Habilita o modo debug. Mostra as messagens de debug no terminal e cria o arquivo `debug.log` no diretório raiz. | `false`
`safe` | Habilita o modo seguro. Não carrega nenhum plugin. | `false`
`silent` | Habilita o modo silencioso. Não mostra nenhuma mensagem no terminal. | `false`
`config` | Especifique o caminho do arquivo de configuração. | `_config.yml`

## Load Files

Hexo provides two methods for loading files: `load` and `watch`. `load` is used for loading all files in the `source` folder as well as the theme data. `watch` does the same things `load` does, but will also start watching for file changes continuously.

Both methods will load the list of files and pass them to the corresponding processors. After all files have been processed, they will call upon the generators to create the routes.

``` js
hexo.load().then(function(){
  // ...
});

hexo.watch().then(function(){
  // You can call hexo.unwatch() later to stop watching.
});
```

## Execute Commands

Any console command can be called explicitly using the `call` method on the Hexo instance. Such a call takes two arguments: the name of the console command, and an options argument. Different options are available for the different console commands.

``` js
hexo.call('generate', {}).then(function(){
  // ...
});
```

## Exit

You should call the `exit` method upon successful or unsuccessful completion of a console command. This allows Hexo to exit gracefully and finish up important things such as saving the database.

``` js
hexo.call('generate').then(function(){
  return hexo.exit();
}).catch(function(err){
  return hexo.exit(err);
});
```
