// https://www.gatsbyjs.org/docs/end-to-end-testing/
/// <reference types="Cypress" />
describe("Accessibility checks", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.injectAxe()
    cy.wait(500)
  })
  it("Has no detectable a11y violations on load", () => {
    cy.checkA11y()
  })
})
