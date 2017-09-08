title: Contribuindo
---
## Desenvolvimento

Nós damos o parabéns a você por se juntar ao desenvolvimento do Hexo. Este documento irá ajudá-lo através do processo.

### Antes que você comece

Por favor, siga o estilo de codificação:

- Siga [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html).
- Use soft-tabs com um recuo de dois espaços.
- Não coloque vírgulas primeiro.

### Fluxo de trabalho

1. Fork [hexojs/hexo].
2. Clone o repositório no seu computador e instale as dependências.

    {% code %}
    $ git clone https://github.com/<username>/hexo.git
    $ cd hexo
    $ npm install
    $ git submodule update --init
    {% endcode %}

3. Crie uma branche de feature.

    {% code %}
    $ git checkout -b new_feature
    {% endcode %}

4. Comece o hacking.
5. Push a branch:

    {% code %}
    $ git push origin new_feature
    {% endcode %}

6. Crie um pull request e descreva as mudanças.

### Aviso prévio

- Não modifique o número da versão em`package.json`.
- Seu pedido de pull request só será mesclado quando os testes tiverem passado. Não se esqueça de executar testes antes da submissão.

    {% code %}
    $ npm test
    {% endcode %}

## Atualizado a Documentação

A documentação Hexo é de código aberto e você pode encontrar o código-fonte em [hexojs / site].

### Fluxo de trabalho

1. Fork [hexojs/site]
2. Clonar o repositório no seu computador e instalar dependências.

    {% code %}
    $ git clone https://github.com/<username>/site.git
    $ cd site
    $ npm install
    {% endcode %}

3. Comece a editar a documentação. Você pode iniciar o servidor para visualização ao vivo.

    {% code %}
    $ hexo server
    {% endcode %}

4. Push para a branch.
5. Crie um pull request e descreva as mudanças.

### Traduzindo

1. Adicione uma nova pasta de idioma na pasta `source`. (Todas as letras minúsculas)
2. Copie Markdown e arquivos templates na pasta `source` para a nova pasta de idioma.
3. Adicione o novo idioma a `source/_data/language.yml`.
4. Copie `en.yml` em `themes/navy/languages` e renomeie para o nome do idioma (todas as minúsculas).

## Reportando Issues

Quando você encontra alguns problemas ao usar o Hexo, você pode encontrar as soluções em [Solução de problemas](troubleshooting.html) ou me pergunte no [GitHub](https://github.com/hexojs/hexo/issues) ou [Google Group](https://groups.google.com/group/hexo). Se você não conseguir encontrar a resposta, informe-a no GitHub.

1. Represente o problema em [modo de depuração](commands.html#Debug_mode).
2. Execute `hexo version` e verifique as informações da versão.
3. Poste a mensagem de depuração e informações de versão no GitHub.

[hexojs/hexo]: https://github.com/hexojs/hexo
[hexojs/site]: https://github.com/hexojs/site
