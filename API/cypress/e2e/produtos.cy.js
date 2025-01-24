///<reference types="cypress"/>

describe("Funcionalidade Pesquisar Produtos", () => {
  it("Deve listar Todos os Produtos", () => {
    cy.listarProdutos().should((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("products");
      expect(response.body.products).to.have.length.greaterThan(0);
    });
  });

  it("Deve listar Produto por ID", () => {
    cy.listarProdutos(2).should((response) => {
      expect(response.status).to.equal(200);
      expect(response.body)
        .to.have.property("productId")
        .that.is.a("number")
        .and.equals(2);
      expect(response.body).to.have.property("categoryId").that.is.a("number");
      expect(response.body).to.have.property("productName").that.is.a("string");
      expect(response.body).to.have.property("price").that.is.a("number");
      expect(response.body).to.have.property("description").that.is.a("string");
      expect(response.body).to.have.property("imageUrl").that.is.a("string");
      expect(response.body).to.have.property("attributes").that.is.an("array");
      expect(response.body).to.have.property("colors").that.is.an("array");
      expect(response.body).to.have.property("images").that.is.an("array");
      expect(response.body)
        .to.have.property("productStatus")
        .that.is.a("string");
    });
  });

  it("Deve efetuar pesquisa por ID de Produto Inexistente", () => {
    cy.listarProdutos(24114).should((response) => {
      expect(response.status).to.equal(404);
    });
  });

  it("Deve efetuar a pesquisa pelo Nome do produto", () => {
    const productName = "HP S9500 Bluetooth Wireless Speaker";

    cy.listarProdutosPorNome(productName).should((response) => {
      expect(response.status).to.be.equal(200);

      const products = response.body[0].products;
      expect(products).to.be.an("array").that.is.not.empty;

      const returnedProductName = products[0].productName;
      expect(returnedProductName).to.equal(productName);
    });
  });

  it("Deve efetuar a pesquisa por Categoria", () => {
    const idCategoria = 4;

    cy.listarProdutosPorCategoria(idCategoria).should((response) => {
      expect(response.status).to.be.equal(200);

      const products = response.body.products;
      expect(products).to.be.an("array").that.is.not.empty;

      products.forEach((product) => {
        expect(product.categoryId).to.equal(idCategoria);
      });
    });
  });

  it("Deve efetuar a pesquisa por Categoria Inexistente", () => {
    cy.listarProdutosPorCategoria(7352727).should((response) => {
      expect(response.status).to.be.equal(404);
    });
  });
});
