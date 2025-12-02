describe("Create Set Form Tests", () => {
  beforeEach(() => {
    cy.visit("/create");
  });

  it("shows error if submitting empty set name", () => {
    cy.get('[data-cy="submit-set"]').click();
    cy.get('[data-cy="error-message"]').should("be.visible");
  });

  it("creates set successfully (happy path)", () => {
    cy.get('[data-cy="set-name"]').type("My Set");
    cy.get('[data-cy="submit-set"]').click();
    cy.get('[data-cy="success-message"]').should("be.visible");
  });
});
