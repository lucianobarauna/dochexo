title: Migrator
---
Um migrator ajuda os usuários a migragem seus sistemas para o Hexo.

## Sinopse

``` js
hexo.extend.migrator.register(name, function(args){
  // ...
});
```
O argumento `args` será passado na função. Esse argumento conterá entrada do usuário no terminal
