# typescript-boilerplate

![Typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label=4.4.4)&nbsp;
![NodeJs](https://img.shields.io/node/v/typescript?label=nodejs&logo=node.js)

🔥 Pronto para desenvolver! Esse template foi criado para servir como base para qualquer projeto NodeJS.

🏴󠁫󠁧󠁧󠁯󠁿 Todas as ferramentas básicas incluídas e configuradas:

- [TypeScript][typescript] [4.4][typescript-4-4]
- O Básico de [docker][docker] para dev
- Testes unitários e coverage com [Jest][jest]
- Configurações iniciais do [ESLint][eslint]
- [Prettier][prettier] para formatação de código
- NPM [scripts](#npm-scripts)
- Configuração padrão de arquivo em .editorconfig
- Configuração para husky: pre commit e pre push

<br>
<br>

## Getting Started 🤩

A recomendação é utilizar esse template na versão LTS do [Node.js][nodejs].

<br>

### Iniciar usando como template

Para iniciar, clique neste link **[usar este template][repo-template-action]** ou no botão verde mais acima. Coloque seu código-fonte no diretório `src` e seus testes no diretório `tests`.

<br>

### Iniciar fazendo clone do projeto

Para clonar o projeto, siga as instruções:

```sh
git clone https://github.com/flavionobre11/typescript-boilerplate
cd typescript-boilerplate
docker-compose up # ou npm install
```

<br>
<br>

## NPM scripts

- `format` - formata o código fonte em `src` e `tests` utilizando prettier
- `lint` - faz o processo de lint no código fonte
- `prebuild` - faz o processo de lint no código fonte e exclui arquivos de build anterior
- `build` - transpila typescript para ES6
- `start` - inicia a aplicação usando build criado
- `env` - carrega envs
- `start:dev` - inicia a aplicação em modo desenvolvimento
- `test` - inicia testes
- `test:e2e` - inicia testes end to end
- `prepare` - inicializa o husky para usar `precommit` e `prepush`
- `precommit` - roda o `lint` e o `format`
- `prepush` - roda o `lint`

Nota: todos os scripts de inicialização já carregam a dependência dotenv.

[nodejs]: https://nodejs.org/dist/latest-v14.x/docs/api/
[typescript]: https://www.typescriptlang.org/
[typescript-4-4]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[prettier]: https://prettier.io
[docker]: https://www.docker.com/
[repo-template-action]: https://github.com/flavionobre11/typescript-boilerplate/generate
