describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("navigates to About page", () => {
    cy.get('[data-cy="nav-about"]').click();
    cy.url().should("include", "/about");
    cy.get('[data-cy="about-title"]').should("be.visible");
  });

  it("navigates to Create Set page", () => {
    cy.get('[data-cy="nav-create"]').click();
    cy.url().should("include", "/create");
    cy.get('[data-cy="create-title"]').should("be.visible");
  });

  it("navigates to Flashcards page", () => {
    cy.get('[data-cy="nav-cards"]').click();
    cy.url().should("include", "/flashcards");
    cy.get('[data-cy="flashcards-title"]').should("be.visible");
  });
});
