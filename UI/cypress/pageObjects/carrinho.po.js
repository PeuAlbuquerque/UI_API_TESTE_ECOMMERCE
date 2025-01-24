class Carrinho {
  btnFinalizarPedidoIcone() {
    return cy.get("[id*=checkOutPopUp]");
  }

  totalItensIconeCarrinho() {
    return cy.get(".roboto-medium.ng-binding");
  }

  menuCarrinho() {
    return cy.get("[id*=menuCart]");
  }

  editarProdutoMenuCarrinho() {
    return cy.get(".edit.ng-scope");
  }

  btnRemoverIconeCarrinho() {
    return cy.get(".removeProduct");
  }

  mensagemCarrinhoVazioIcone() {
    return cy.get(".center.roboto-medium");
  }

  btnRemoverMenuCarrinho() {
    return cy.get(".remove.red");
  }

  mensagemCarrinhoVazioMenuCarrinho() {
    return cy.get(".roboto-bold.ng-scope");
  }

  btnContinueComprando() {
    return cy.get(".a-button.ng-scope");
  }

  tituloTelaPagamentoPedido() {
    return cy.get("[translate='ORDER_PAYMENT']");
  }

  resumoPedido() {
    return cy.get("[id*=userCart]");
  }

  btnFinalizarPedidoMenuCarrinho() {
    return cy.get("[id*=checkOutButton]");
  }

  acessoAConta() {
    return cy.get(".noUserSection");
  }

  btnRegistroNaPlataforma() {
    return cy.get("#registration_btn");
  }

  detalhesDeEnvio() {
    return cy.get("#detailslink");
  }

  edicaoDadosDeEnvio() {
    return cy.get("[translate='Edit_shipping_Details']");
  }
}
export default new Carrinho();
