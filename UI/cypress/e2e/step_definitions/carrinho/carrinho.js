import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import carrinhoPo from "../../../pageObjects/carrinho.po";
import produtosPo from "../../../pageObjects/produtos.po";

Given("que o usuário acesse um produto", () => {
  cy.acessarCategoria("Speakers", "4");
  cy.acessarProduto().click();
});

When("selecionada a opção Add To Cart", () => {
  produtosPo.btnAdicionarAoCarrinho().click();
});

Then("o produto deve ser adicionado no carrinho", () => {
  carrinhoPo.btnFinalizarPedidoIcone().should("be.visible");
  carrinhoPo.totalItensIconeCarrinho().contains("TOTAL");
});

Given("que o usuário possua produto no carrinho", () => {
  cy.acessarCategoria("Speakers", "4");
  cy.acessarProduto().click();
  produtosPo.btnAdicionarAoCarrinho().click();
});

And("acesse o carrinho", () => {
  carrinhoPo.menuCarrinho().click();
});

And("selecionado o botão X do icone carrinho", () => {
  carrinhoPo.btnRemoverIconeCarrinho().click();
});

When("selecionada a opção Edit", () => {
  carrinhoPo.editarProdutoMenuCarrinho().should("be.visible").click();
});

Then(
  "deve ser exibida a mensagem Your shopping cart is empty indicando que os itens foram removidos do carrinho",
  () => {
    carrinhoPo
      .mensagemCarrinhoVazioIcone()
      .should("be.visible")
      .contains("Your shopping cart is empty");
  }
);

When("selecionada a opção Remove", () => {
  carrinhoPo.btnRemoverMenuCarrinho().click();
});

Then(
  "deve ser exibida a mensagem Your shopping cart is empty na pagina menu carrinho",
  () => {
    carrinhoPo
      .mensagemCarrinhoVazioMenuCarrinho()
      .should("be.visible")
      .contains("Your shopping cart is empty");
    carrinhoPo
      .btnContinueComprando()
      .should("be.visible")
      .contains("CONTINUE SHOPPING");
  }
);

When("selecionado o botão Checkout pelo icone", () => {
  carrinhoPo.btnFinalizarPedidoIcone().should("be.visible").click();
});

Then(
  "o usuário deve ser direcionado para a tela Order Payment com as informações dos itens incluídos no carrinho",
  () => {
    carrinhoPo
      .tituloTelaPagamentoPedido()
      .should("be.visible")
      .contains("ORDER PAYMENT");
    carrinhoPo.resumoPedido().should("be.visible").contains("ORDER SUMMARY");
  }
);

When("selecionado o botão Checkout do Menu Carrinho", () => {
  carrinhoPo.btnFinalizarPedidoMenuCarrinho().click();
});

Then(
  "o usuário deve ser direcionado para a tela Order Payment exibindo os campos para login ou registro na plataforma",
  () => {
    carrinhoPo
      .tituloTelaPagamentoPedido()
      .should("be.visible")
      .contains("ORDER PAYMENT");
    carrinhoPo.resumoPedido().should("be.visible").contains("ORDER SUMMARY");
    carrinhoPo
      .acessoAConta()
      .should("be.visible")
      .contains("Already have an account?");
    carrinhoPo.acessoAConta().contains("New user?");
    carrinhoPo.btnRegistroNaPlataforma().should("be.visible");
  }
);

Given("que o usuário acesse a plataforma com as credenciais", () => {
  cy.autenticar();
});

And("incluir produto no carrinho", () => {
  produtosPo.lupaDePesquisa().type("laptop{enter}");
  cy.acessarProduto().click();
});

Then(
  "o usuário deve ser direcionado para a tela Order Payment exibindo os detalhes de envio do pedido",
  () => {
    carrinhoPo
      .detalhesDeEnvio()
      .should("be.visible")
      .contains("1. SHIPPING DETAILS ");
    carrinhoPo.edicaoDadosDeEnvio().contains("Edit shipping details");
    carrinhoPo
      .tituloTelaPagamentoPedido()
      .should("be.visible")
      .contains("ORDER PAYMENT");
    carrinhoPo.resumoPedido().should("be.visible").contains("ORDER SUMMARY");
  }
);

Then("deve ser exibida a pagina de detalhes do produto", () => {
  produtosPo.btnAdicionarAoCarrinho().should("be.visible");
  produtosPo
    .especificacoesDoProdutoPaginaProduto()
    .should("be.visible")
    .contains("PRODUCT SPECIFICATIONS");
});
