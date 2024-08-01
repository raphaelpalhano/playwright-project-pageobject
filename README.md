## Baseline - Automação Front-end com Playwright

  

### Descrição

Olá! Esse projeto contém uma baseline de um projeto referente a automação de páginas web e mobile responsive com a ferramenta Playwright, afim de otimizar o início de um novo projeto aqui na QualityMap.



> Testes em

>  [https://serverest.dev/](https://serverest.dev/)

> usando [Playwright](https://playwright.dev/)

  

### :information_source: Pré-requisitos

  

-  [Node.js](https://nodejs.org/) v18.17.0 ou +

-  [Npm](https://www.npmjs.com/package/npm) v9.8.1 ou +

-  [VSCode](https://code.visualstudio.com/) v1.80.1 ou +

-  [Playwright](https://playwright.dev/) v1.38.0 ou +

  
  

### ![:ladder:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/google-medium/1fa9c.png) Dependências do projeto

-  [@playwright/test](https://www.npmjs.com/package/@playwright/test)

-  [@types/node](https://www.npmjs.com/package/@types/node)

-  [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker)
  


### :bulb: Clonando o projeto

  

1. Para realizar o clone do projeto através do método HTTPS, utilize o comando `https://gitlab.com/qualitymap/baselines/front-end/pw-web.git`

2. É possível clonar o o projeto através do SourceTree, clicando em “+”, e sem seguida em “Clone”, onde você irá colar o comando informado acima;

3. Você precisará ter uma pasta em seu computador para salvar o projeto clonado no Sourcetree, e é essa mesma pasta que você irá usar para abrir o projeto no VSCode.

  
  

### ![:dna:](https://a.slack-edge.com/production-standard-emoji-assets/14.0/google-medium/1f9ec.png) Configuração e Instalação

  

1. No VS Code, clique em “File” e em seguida em “Open Folder”, ali você irá abrir a pasta em que salvou o projeto clonado com o SourceTree;

2. Ao abrir o projeto, é necessário fazer a instalação e configurações de dependências do Playwright:

a. No terminal, execute o comando: `npm install playwright -g` para instalar a ferramenta playwright na sua máquina;

b. Ainda no terminal, acesse a pasta que está localizado o projeto clonado e execute o comando: `npm install`para instalar as bibliotecas necessárias do projeto;

  
  

### :rocket: Executando os testes

  

- Para executar os testes, no terminal do Vscode digite o comando:

-  `npm run test-ui`

- Quando o Playwright Test abrir, clique no botão **Run all**.

- Outra forma de executar é digitando no terminal, o comando:

-  `npm run test`

  
  

### :bar_chart: Report

  

O report é gerado automaticamente pela ferramenta quando usamos o comando `npm run test`, para rodar os testes no terminal.

  
  

### :bulb: Organização dos testes

  

- No diretório **support/pages/** você encontra as pastas das páginas do site, e dentro delas ficam as classes e também os locators;

- Na pasta **tests/**, é onde ficam as suítes de teste em arquivos do tipo `.spec.ts`, que poderão ser executados;

- Na pasta **test-results/** é onde são guardados os resultados dos testes , junto com os prints das execuções.



### :cyclone: Pipeline

