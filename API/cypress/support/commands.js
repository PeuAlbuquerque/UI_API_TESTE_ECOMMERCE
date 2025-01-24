const path = require("path");
const FormData = require("form-data");
const fs = require("fs");

Cypress.Commands.add("listarProdutos", (id = "") => {
  const url = id ? `catalog/api/v1/products/${id}` : `catalog/api/v1/products`;
  cy.request({
    method: "GET",
    url: url,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("listarProdutosPorNome", (nomeProduto) => {
  cy.request({
    method: "GET",
    url: `catalog/api/v1/products/search?name=${nomeProduto}&quantityPerEachCategory=-1`,
  });
});

Cypress.Commands.add("listarProdutosPorCategoria", (idCategoria) => {
  cy.request({
    method: "GET",
    url: `catalog/api/v1/categories/${idCategoria}/products`,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add(
  "alterarImagem",
  (idUsuario, source, cor, productId, token) => {
    // Carregar o arquivo da pasta fixtures
    cy.fixture("img_laptop.jpg", "binary").then((fileContent) => {
      // Criar um blob a partir do conteúdo do arquivo
      const blob = Cypress.Blob.binaryStringToBlob(fileContent, "image/jpg");

      // Criar o FormData e anexar o arquivo
      const formData = new FormData();
      formData.append("file", blob, "img_laptop.jpg");

      // Fazer a requisição
      cy.request({
        method: "POST",
        url: `catalog/api/v1/product/image/${idUsuario}/${source}/${cor}?product_id=${productId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }).then((response) => {
        cy.log("Teste 01", response);
      });
    });
  }
);

Cypress.Commands.add("token", (email, senha, usuario) => {
  return cy
    .request({
      method: "POST",
      url: "accountservice/accountrest/api/v1/login",
      body: {
        email: email,
        loginPassword: senha,
        loginUser: usuario,
      },
    })
    .then((response) => {
      return response.body.statusMessage.token; // Retorna o token
    });
});
