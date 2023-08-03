/// <reference types="cypress" />

// import { validateHolder, validateNumber, validateCVV } from "./validate";

describe("Валидное заполнение данных", () => {
  it("Правильное заполение", () => {
    cy.visit("http://127.0.0.1:5500");
    cy.get("#name").type("CALVIN CLEIN");
    cy.get("#cardnumber").type("2222 2222 2222 2222");
    cy.get("#securitycode").type("222");
    cy.get(".btn__sumbit").click();
  });

  it("Неправильное заполнение", () => {
    cy.visit("http://127.0.0.1:5500");
    cy.get("#name").type("CALVIN");
    cy.get(".btn__sumbit").click();
    cy.get(".warn__message");
  });
});
