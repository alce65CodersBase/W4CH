# Week4 Challenges: React + TS

- Day 1. Gentlemen
- Day 2. Formulario
- Day 3. GoT
- Day 4. CRUD List (Robots...)
- Dia 4. Teléfono
- Day 5. WE: Preparar Proyecto de grupo

## Configuraciones

### Instalación de Vite

```shell
npm create vite@latest code -- --template react-ts
```

Alternativa react-swc-ts

#### Resultado

- .gitignore
- package.json
- tsconfig.json
- tsconfig.node.json
- index.html

- carpeta src (contenedor de los challenges)
  - AÑADIR .gitkeep
- carpeta public (assets)
  - AÑADIR .gitkeep

En cuanto a Vite + React equivale a

> ```shell
> npm i react react-dom
> npm i -D vite @vitejs/plugin-react
> ```

En cuanto a TS equivale a:

> ```shell
> npm i -D typescript
> npm i -D @types/react @types/react-dom
> ```

No incluye @types/node

#### Configuraciones TS

- Ajustes config en proyectos sin Vite

- "target": "ESNext"
- "module": "ESNext"
- "rootDir": "./src"
- "moduleResolution": "node"
- "outDir": "./dist"
- "esModuleInterop": true
- "forceConsistentCasingInFileNames": true
- "strict": true
- "skipLibCheck": true

- Config ESLint

```json
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
```

### Configuraciones adicionales

#### Editor y ESLint

- Editor config
- EsLint + Prettier

  - `npm init -y`: se crea package.json
  - `npx eslint --init`: se crea .eslintrc.json (opcionalmente XO)

> Equivale a la siguiente instalación de ESLINT
>
> ```shell
> npm i  -D eslint eslint-config-xo eslint-plugin-react
> npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
> ```

- Instalación y configuración de ESLint-prettier

> ```shell
> npm i -D eslint-config-prettier
> ```

#### Jest + ES6

- Instalación de Jest

> ```shell
> npm i -D jest ts-jest @types/jest jest-ts-webcompat-resolver
> ```

- Testing-Library

- jest-environment-jsdom
- @testing-library/dom -> render, screen...
- @testing-library/jest-dom -> matchers extra
- @testing-library/react
- @testing-library/user-event

> ```shell
> npm i -D jest-environment-jsdom @testing-library/dom @testing-library/jest-dom @testing-library/user-event
> npm i -D @testing-library/react
> ```

- Configuración de ESLint con Jest

  ```json
  "env": {
    "jest": true
  }
  ```

- Script en package.json

  ```json
  "scripts": {
    "test": "jest --watchAll --coverage",
    "test:prod": "jest --watchAll --collect-coverage --watchAll=false --passWithNoTests",
  },
  ```

- Config Jest: jest.config.js

```js
/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist'],
  resolver: 'jest-ts-webcompat-resolver'
};
```

#### Soporte de CSS modules y assets importado en Jest

> ```shell
> npm i -D identity-obj-proxy
> ```

- Config: jest.config.ts

```js
  { moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/assetsMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  }, }
```

File `<rootDir>/__mocks__/assetsMock.js`

```js
module.exports = 'assetsURL';
```

### Git / GitHub

#### Repositorio: Git + Initial commit

- completamos .gitignore
- creamos el repo
- initial commit (sin React + Vite sample)
- conectamos a GitHub
- protegemos la rama: Require a pull request before merging

#### Configuración: rama feature/config

- Husky
- GitHub actions
- SonarCloud

- Modificamos la configuración del repo
  - creamos la rama de trabajo: feature/config
  - añadimos huskies: commit-msg y pre-push
    - comprobamos su efecto: mensajes y nombre de rama
    - con el primer commit, publicamos la rama
    - opcionalmente creamos la PR
  - añadimos GitHub Actions: audit
    - carpeta .github/workflows
    - copiamos audit.yml
      - `npx eclint check` comprueba la validez de editorconfig
      - comprobar node_modules en gitignore
  - añadimos SonarCloud al repo
    - lo incorporamos en la página de Sonar
    - añadimos Secret en GitHub
    - añadimos workflow sonar.yml
    - creamos sonar-project.properties
- Trabajamos en el repo
  - si no existía, creamos la PR de la feature/config
    - en la propia PR se comprueban las GitHub actions
      - audit: se comprueba la valides (e.g. ESLint) de código
      - sonar: se comprueba el código con sonarCloud en la PR
      - mergeamos la PR al finalizar, con todos los checks correctos
      - eliminamos la PR, al menos en GitHub
  - [opción] Creamos la rama de trabajo: features/sample
    - añadimos fichero sample.js y hacemos un commit
    - publicamos rama y creamos la PR
    - modificamos sample.js y hacemos nuevos commits
    - comprobamos la validez da la PR cada vez que se actualiza
    - mergeamos la PR al finalizar, con todos los checks correctos
    - eliminamos la PR, al menos en GitHub


#### GitHub Action de testing

```yml
name: Testing Analysis

on:
  push:
    branches: ['main']
  pull_request:
    types: [opened, synchronize, reopened]
  workflow_dispatch:

jobs:
  Test:
    name: Tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0 # Shallow clones should be disabled for a better relevancy of analysis
      - name: Install modules
        run: npm ci
      - name: Testing coverage
        run: npm run test:prod #Change for a valid npm script
```

#### Coverage en sonar

Ampliar fichero sonar-project.properties

```properties
  sonar.projectKey=alce65CodersBase_W2CH
  sonar.organization=alce65codersbase

  # This is the name and version displayed in the SonarCloud UI.
  #sonar.projectName=W2CH
  #sonar.projectVersion=1.0

  # Path is relative to the sonar-project.properties file. Replace "\" by "/" on Windows.
  sonar.sources=./src
  sonar.test.inclusions=./src/**/*.test.*
  sonar.javascript.lcov.reportPaths=coverage/lcov.info
  sonar.coverage.exclusions=src/**/*.test.*, src/**/index.*
```
