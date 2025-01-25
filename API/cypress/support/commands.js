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

Cypress.Commands.add("alterarImagem", (idUsuario, source, cor, token) => {
  const queryParams = { product_id: 3 };

  const fileName = "img_laptop.jpg";
  cy.fixture(fileName, "base64").then((fileContent) => {
    const formData = new FormData();
    formData.append(
      "file",
      Cypress.Blob.base64StringToBlob(fileContent, "image/jpeg"),
      fileName
    );
    formData.append("color", "BLUE");
    formData.append("source", "3683D1");
    formData.append("userId", "886994944");

    cy.request({
      method: "POST",
      url: `catalog/api/v1/product/image/${idUsuario}/${source}/${cor}?`,
      qs: queryParams,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

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
      return response.body.statusMessage.token;
    });
});
