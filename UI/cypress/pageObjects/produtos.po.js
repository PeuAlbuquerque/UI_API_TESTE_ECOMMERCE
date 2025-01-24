class Produtos {
  listaDeProdutos() {
    return cy.get(".cell.categoryRight ul li");
  }

  btnAdicionarAoCarrinho() {
    return cy.get('button[name*="save_to_cart"]');
  }

  especificacoesDoProdutoPaginaProduto() {
    return cy.get(".roboto-regular.product_specifications").scrollIntoView();
  }

  filtroPesquisa() {
    return cy.get(".accordion.roboto-regular.arrowDown");
  }

  opcoesFiltroPesquisaCor() {
    return cy.get('.productColor[title="BLACK"]');
  }

  lupaDePesquisa() {
    return cy.get("#mobileSearch > .roboto-medium");
  }

  pesquisaSemResultados() {
    return cy.get(".ng-binding");
  }

  btnVerOfertaEspecial() {
    return cy.get("[id*=see_offer_btn]").scrollIntoView();
  }

  itensPopulares() {
    return cy.get("[id*=popular_items]").find("label");
  }
}
export default new Produtos();
