// Import commands.js using ES2015 syntax:
import "@mmisty/cypress-allure-adapter/support";
import "./commands";

Cypress.Allure?.on("test:started", () => {
  Cypress.Allure.host("my-host");
  Cypress.Allure.thread(Cypress.env("thread") ?? "01");
});
