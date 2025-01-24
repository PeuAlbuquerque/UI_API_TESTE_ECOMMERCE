# Cypress Automation Project UI and API

Este repositório contém um projeto de automação utilizando Cypress, dividido em duas partes principais: **UI** (testes de usabilidade) e **API** (testes de endpoints). Cada parte foi configurada com dependências específicas e scripts de execução.

---

## Estrutura do Projeto

### UI

A pasta **UI** representa os testes de usabilidade e segue a organização abaixo:

#### Estrutura de Pastas

- **`cypress/e2e`**:

  - **`carrinho.feature`**: Scripts de teste para funcionalidade do carrinho.
  - **`produtos.feature`**: Scripts de teste para funcionalidade de produtos.

- **`cypress/e2e/step_definitions`**:

  - **`carrinho/carrinho.js`**: Métodos e funções relacionadas ao arquivo `carrinho.feature`.
  - **`produtos/produtos.js`**: Métodos e funções relacionadas ao arquivo `produtos.feature`.
  - **`login/login.js`**: Funções compartilhadas entre outras features.

- **`cypress/PageObjects`**:

  - **`carrinho.po.js`**: Seletores da página do carrinho.
  - **`login.po.js`**: Seletores da página de login.
  - **`produtos.po.js`**: Seletores da página de produtos.

- **`cypress/support`**:
  - **`commands.js`**: Comandos customizados.
  - **`e2e.js`**: Configurações adicionais do Cypress.

#### Configurações e Dependências

- **`cypress.config.js`**: Configurações principais do Cypress.
- **`cypress.env.json`**: Contém variáveis globais e dados sensíveis (incluído no `.gitignore`).
- **`package.json`**: Dependências e scripts do projeto:
  ```json
  "devDependencies": {
      "@shelex/cypress-allure-plugin": "^2.40.0",
      "allure-commandline": "^2.23.0",
      "cypress": "^14.0.0",
      "cypress-cucumber-preprocessor": "^4.3.1",
      "mocha": "^11.1.0"
  },
  "dependencies": {
      "@mmisty/cypress-allure-adapter": "^0.11.0"
  },
  "cypress-cucumber-preprocessor": {
      "nonGlobalStepDefinitions": true,
      "stepDefinitions": "cypress/e2e/step_definitions"
  }
  ```

### API

A pasta **API** representa os testes de endpoints e segue a organização abaixo:

#### Estrutura de Pastas

- **`cypress/e2e`**:

  - **`carrinho.cy.js`**: Scripts de teste para o endpoint do carrinho.
  - **`produtos.cy.js`**: Scripts de teste para o endpoint de produtos.

- **`cypress/support`**:
  - **`commands.js`**: Comandos customizados.
  - **`e2e.js`**: Configurações adicionais do Cypress.

#### Configurações e Dependências

- **`cypress.config.js`**: Configurações principais do Cypress.
- **`cypress.env.json`**: Contém variáveis globais e dados sensíveis (incluído no `.gitignore`).
- **`package.json`**: Dependências e scripts do projeto:
  ```json
  "devDependencies": {
      "@shelex/cypress-allure-plugin": "^2.40.0",
      "allure-commandline": "^2.23.0",
      "cypress": "^14.0.0"
  },
  "dependencies": {
      "@mmisty/cypress-allure-adapter": "^0.11.0",
      "form-data": "^4.0.1"
  }
  ```

---

## Requisitos

- **Node.js**: Certifique-se de instalar a versão mais recente de [Node.js](https://nodejs.org/).
- **Gerenciador de pacotes**: Utilize `npm` ou `yarn` para instalar as dependências do projeto.

---

## Instalação

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   ```

2. Acesse o diretório do projeto e instale as dependências:
   ```bash
   npm install
   ```

---

## Scripts Disponíveis

- **Abrir a interface do Cypress**:

  ```bash
  npm run cy:open
  ```

- **Executar os testes em modo headless**:

  ```bash
  npm run cy:run
  ```

- **Gerar e abrir o Allure Report**:
  ```bash
  npm run allure:report:open
  ```

---

## Observações Importantes

- O arquivo `cypress.env.json` contém dados sensíveis e está excluído do controle de versão por meio do `.gitignore`.
- Utilize o comando `npm install` sempre que houver alterações nas dependências listadas no `package.json`.

---

## Suporte

Caso encontre problemas ou tenha dúvidas sobre este projeto, sinta-se à vontade para criar uma **issue** ou entrar em contato com o responsável pelo repositório.
