title: Implantação
---

A Hexo fornece uma estratégia de implantação rápida e fácil. Você só precisa de um único comando para implantar seu site em seus servidores.

``` bash
$ hexo deploy
```

Antes da sua primeira implantação, você terá que modificar algumas configurações em `_config.yml`. Uma configuração de implantação válida deve ter um campo `type`. Por exemplo:

``` yaml
deploy:
  type: git
```

Você pode usar múltiplos implementadores. O Hexo executará cada implementador em ordem.

``` yaml
deploy:
- type: git
  repo:
- type: heroku
  repo:
```

## Git

Instale [hexo-deployer-git].

``` bash
$ npm install hexo-deployer-git --save
```

Editando configurações.

``` yaml
deploy:
  type: git
  repo: <repository url>
  branch: [branch]
  message: [message]
```

Opções | Descrição
--- | ---
`repo` | GitHub/Bitbucket/Coding/GitLab URL do repositório
`branch` | Nome da branch. O implementador detectará o branch automaticamente se estiver usando o GitHub or GitCafe.
`message` | Customizando a mensagem de commit (Padrão é `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)


## Heroku

Instale [hexo-deployer-heroku].

``` bash
$ npm install hexo-deployer-heroku --save
```

Editando configurações.

``` yaml
deploy:
  type: heroku
  repo: <repository url>
  message: [message]
```

Option | Description
--- | ---
`repo`, `repository` | Heroku URL do repositório
`message` | Customizando a mensagem de commit (Padão é: `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## Rsync

Instale [hexo-deployer-rsync].

``` bash
$ npm install hexo-deployer-rsync --save
```

Editando configurações.

``` yaml
deploy:
  type: rsync
  host: <host>
  user: <user>
  root: <root>
  port: [port]
  delete: [true|false]
  verbose: [true|false]
  ignore_errors: [true|false]
```

Opção | Descrição | Padão
--- | --- | ---
`host` | Endereço do host remoto |
`user` | Nome de usuário |
`root` | Diretório raiz do host remoto |
`port` | Porta | 22
`delete` | Excluir arquivos antigos no host remoto | true
`verbose` | Exibir mensagens detalhadas | true
`ignore_errors` | Ignorar erros | false

## OpenShift

Instale [hexo-deployer-openshift].

``` bash
$ npm install hexo-deployer-openshift --save
```

Editar configurações.

``` yaml
deploy:
  type: openshift
  repo: <repository url>
  message: [message]
```

Opções | Descrição
--- | ---
`repo` | OpenShift URL do repositório
`message` | Customizando a menssagem de commit (Padrão é `Site updated: {% raw %}{{ now('YYYY-MM-DD HH:mm:ss') }}{% endraw %}`)

## FTPSync

Instale [hexo-deployer-ftpsync].

``` bash
$ npm install hexo-deployer-ftpsync --save
```

Editando configurações.

``` yaml
deploy:
  type: ftpsync
  host: <host>
  user: <user>
  pass: <password>
  remote: [remote]
  port: [port]
  ignore: [ignore]
  connections: [connections]
  verbose: [true|false]
```

Opções | Descrição | Padrão
--- | --- | ---
`host` | Endereço do host remoto |
`user` | Nome de usuário |
`pass` | Senha |
`remote` | Diretório raiz do host remoto | `/`
`port` | Porta | 21
`ignore` | Ignore os arquivos no host ou no controle remoto  |
`connections` | Número de conexões | 1
`verbose` | Exibir mensagens detalhadas | false


## SFTP

Instale [hexo-deployer-sftp]. Implementa o site via SFTP, permitindo conexões sem senhas usando ssh-agent.

``` bash
$ npm install hexo-deployer-sftp --save
```

Editando configurações.

``` yaml
deploy:
  type: sftp
  host: <host>
  user: <user>
  pass: <password>
  remotePath: [remote path]
  port: [port]
  privateKey: [path/to/privateKey]
  passphrase: [passphrase]
  agent: [path/to/agent/socket]
  remotePath: [remotePath]
```

Opção | Descrição | Padrão
--- | --- | ---
`host` | Endereço do host remoto |
`user` | Nome de usuário |
`pass` | Senha |
`remotePath` | Diretório raiz do host remoto | `/`
`port` | Porto | 22
`privateKey` | Caminho para uma chave privada do ssh |
`passphrase` | Frase secreta opcional para a chave privada |
`agent` | Caminho para o ssh do agente ssh | `$SSH_AUTH_SOCK`


## Outros metódos

Todos os arquivos gerados são salvos na pasta `public`. Você pode copiá-los para onde quiser.

[hexo-deployer-git]: https://github.com/hexojs/hexo-deployer-git
[hexo-deployer-heroku]: https://github.com/hexojs/hexo-deployer-heroku
[hexo-deployer-rsync]: https://github.com/hexojs/hexo-deployer-rsync
[hexo-deployer-openshift]: https://github.com/hexojs/hexo-deployer-openshift
[hexo-deployer-ftpsync]: https://github.com/hexojs/hexo-deployer-ftpsync
