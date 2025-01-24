import loginPo from "../pageObjects/login.po";
import produtosPo from "../pageObjects/produtos.po";

Cypress.Commands.add("acessarCategoria", (categoria, id) => {
  cy.visit(`#/category/${categoria}/${id}`);
});

Cypress.Commands.add("acessarProduto", () => {
  produtosPo
    .listaDeProdutos()
    .its("length")
    .then((count) => Cypress._.random(0, count - 1))
    .then((index) => {
      produtosPo.listaDeProdutos().eq(index);
    });
});

Cypress.Commands.add("autenticar", () => {
  const { USUARIO, SENHA } = Cypress.env();

  cy.visit("#/");
  loginPo.btnUsuario().click();
  loginPo.campoUsuario().type(USUARIO);
  loginPo.campoSenha().type(SENHA);
  loginPo.btnAutenticar().click();
});

Cypress.Commands.add("acessoComLogin", () => {
  const { USUARIO, SENHA } = Cypress.env();

  cy.session([USUARIO], () => {
    cy.clearLocalStorage();
    cy.visit("#/");
    loginPo.btnUsuario().click();
    loginPo.campoUsuario().type(USUARIO);
    loginPo.campoSenha().type(SENHA);
    loginPo.btnAutenticar().click();
  });
});
