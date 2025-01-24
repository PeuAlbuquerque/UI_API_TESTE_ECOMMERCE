import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import produtosPo from "../../../pageObjects/produtos.po";

beforeEach(() => {
  cy.acessoComLogin();
});

Given("que o usuario esta na tela home", () => {
  cy.visit("#/");
});

When("selecionada uma {string} {string}", (categoria, id) => {
  cy.acessarCategoria(categoria, id);
});

Then("deve ser exibida a lista de produtos pesquisados", () => {
  produtosPo.listaDeProdutos().should("not.have.length", 0);
});

When("selecionado um item da lista", () => {
  cy.acessarProduto().click();
});

Then("deve ser exibida a pagina de detalhes do produto", () => {
  produtosPo.btnAdicionarAoCarrinho().should("be.visible");
  produtosPo
    .especificacoesDoProdutoPaginaProduto()
    .should("be.visible")
    .contains("PRODUCT SPECIFICATIONS");
});

When("efetuada a utilizacao dos filtros", () => {
  produtosPo.filtroPesquisa().contains("COLOR").click();
  produtosPo.opcoesFiltroPesquisaCor().click();
});

When(
  "efetuada a busca por meio da barra de pesquisa utilizando um parametro compartilhado por mais de um item",
  () => {
    produtosPo.lupaDePesquisa().should("be.visible").type("laptop{enter}");
  }
);

And("efetue a pesquisa por um item disponivel na plataforma", () => {
  produtosPo.lupaDePesquisa().type("HP CHROMEBOOK 14 G1(ES){enter}");
});

When("efetue a pesquisa por um item inexistente na plataforma", () => {
  produtosPo.lupaDePesquisa().type("Carro de Corrida{enter}");
});

Then("o sistema deve exibir a mensagem de No results for...", () => {
  produtosPo.pesquisaSemResultados().contains("No results for");
  produtosPo
    .pesquisaSemResultados()
    .contains(
      "No search results found. However, you can extend your search through the new SAP user experience (uses SAPUI5)"
    )
    .should("be.visible");
});

When("selecionada a opção See Offer do item promocional", () => {
  produtosPo.btnVerOfertaEspecial().click();
});

When("selecionado o produto dos Itens Populares", () => {
  produtosPo
    .itensPopulares()
    .its("length")
    .then((count) => Cypress._.random(0, count - 1))
    .then((index) => {
      produtosPo.itensPopulares().eq(index).contains("View Details").click();
    });
});
