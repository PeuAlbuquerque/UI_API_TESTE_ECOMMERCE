/// <reference types="cypress" />

describe("Funcionalidade Alterar Imagem", () => {
  let token;

  beforeEach(() => {
    // Captura o token antes de cada teste
    cy.token("TEste@gmailteste.com", "Teste@123", "TesteTester").then((tkn) => {
      token = tkn;
    });
  });

  // it("Deve alterar a Imagem de um produto", () => {
  //   cy.alterarImagem("886994944", "2", "PINK", "10", token);
  // });

  // NAO FOI POSSIVEL AUTOMATIZAR O CENARIO, TESTE EFETUADO PELO POSTMAN
});
