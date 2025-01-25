/// <reference types="cypress" />

describe("Funcionalidade Alterar Imagem", () => {
  let token;

  beforeEach(() => {
    const { EMAIL, SENHA, USUARIO } = Cypress.env();

    cy.token(EMAIL, SENHA, USUARIO).then((tkn) => {
      token = tkn;
    });
  });

  it("Deve alterar a Imagem de um produto", () => {
    cy.alterarImagem("886994944", "3683D1", "BLUE", token);
  });
});
