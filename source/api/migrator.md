title: Migrador
---

Um migrador ajuda os usuários a migrar de outros sistemas para o Hexo.

## Resumo

``` js
hexo.extend.migrator.register(name, function(args){
  // ...
});
```

Um argumento `args` será passado dentro da função. Esse argumento conterá a entrada do usuário no terminal.