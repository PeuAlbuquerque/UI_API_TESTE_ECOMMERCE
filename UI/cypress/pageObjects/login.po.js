class Login {
  btnUsuario() {
    return cy.get("#menuUser");
  }

  campoUsuario() {
    return cy.get("[name='username']");
  }

  campoSenha() {
    return cy.get("[name='password']");
  }

  btnAutenticar() {
    return cy.get("#sign_in_btn");
  }
}
export default new Login();
