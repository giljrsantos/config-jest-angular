# Config. Jest Angular

Nesse projeto, é um projeto de configuração da dependencia de teste unitário Jest no Angular2+.

## Versões
```json
Angular CLI: 16.2.11
Node: 18.16.0
Package Manager: npm 9.5.1
```

Quando você cria algum projeto angular `ng new <NomeProjeto>`, como padrão o `CLI` instala e configura as dependências de teste unitário, como o `Jasmine` e o `Karma`
```json
  "devDependencies": {
    "@types/jasmine": "~4.3.0",
    "jasmine-core": "~4.6.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
  }
```

# Passo a Passo

## 1 - Removendo qualquer referência de Jasmine / Karma do arquivo package.json
    npm remove @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-repo


## 2 - Instalando o Jest
    npm install --save-dev jest jest-preset-angular @types/jest

## 3 - Criando o arquivo `setup-jest.ts` na raiz do projeto.
Após criar esse arquivo, é necessário importar `import 'jest-preset-angular/setup-jest';`

## 4 - Adicionando a configuração do Jest no `package.json`
No final do arquivo, logo após o fechamento do objeto `"devDependencies":{}`, adicione o objeto com a configuração do `JEST`.
```json
  "jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/setup-jest.ts"
    ],
    "globalSetup": "jest-preset-angular/global-setup"
  }
```
## 5 - Configurando JEST no arquivo `tsconfig.json/tsconfig.spec.json`
No `tsconfig.json`, dentro do ojeto `"compilerOptions":{}`, no final do objeto inclui a configuração do `JEST`.
```json
    "types": [
      "jest"
    ],
    "esModuleInterop": true
```
A configuração do arquivo `tsconfig.spec.ts`, dentro do objeto `"compilerOptions":{}` o `"types"` vai estar com o valor padrão do momento da criação do projeto `jasmine`. Altere para `jest`.
```json
    "types": [
      "jest"
    ]
```

## 6 - Configurando o arquivo `package.json` para executar os testes
A configuração do arquivo `package.json` é simples. Dentro do objeto `"scripts":{}` adicione

     "test": "jest --no-cache --coverage",
     "test:watch": "jest --no-cache --watchAll "

o `--coverage` é para criar um report para mostrar quais as funções, os testes estão passando/ou não, e a porcentagem de cobertura. Veja a imagem abaixo:

### screen
1 - Mostrado o Relatório no browser - Por esse relatório, você consegui navegar dentro de arquivo de seu projeto, e verificar quais funções estão sendo coberto pelo teste. 
<img src="src\assets\img\screen-1.png" width="100%">

2 - Neste relatório que mostra no termial onde esta rodando o teste, você tem uma prévia para saber quantos testes passaram/ou quantos deram erro. E consegui ver também a porcentagem de cada arquivo.
<img src="src\assets\img\screen-2.png" width="100%">

<h1 align="center">💻 Desenvolvido Por: Gilberto Júnior</h1>
