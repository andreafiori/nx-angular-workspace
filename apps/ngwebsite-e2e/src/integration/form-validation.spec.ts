describe('FormValidation', () => {
  beforeEach(() => cy.visit('#/form-samples/validation'));

  it('should display form welcome messages', () => {
    cy.get('[data-cy=formTitle]').contains('Form validation on submit');
    cy.get('[data-cy=formTitle]').contains('Template Driven Form');
    cy.get('[data-cy=formTitle]').contains('Data Driven (Reactive) Form');
    cy.get('[data-cy=formTitle]').contains('Form with Validations');
    cy.get('[data-cy=formTitle]').contains('Login Form');
  });

  it('should fill fields on first form', () => {
    cy.get('#name').type('Andrea');
    cy.get('#email').type('john.doe@email.com');
    cy.get('#street').type('Rue Morgue');
    cy.get('#street2').type('Route 66');
    cy.get('#zipCode').type('50137');
    cy.get('#city').type('Florence');
    cy.get('#state').type('Tuscany');
    cy.get('#country').type('Italy');
  });

  it('should fill fields on login form', () => {
    cy.get('#loginFormEmail').type('john.doe@email.com');
    cy.get('#loginFormPassword').type('mysecretpwd123');
  });

  it('should fill fields on data driven (Reactive) Form', () => {
    cy.get('#loginFormEmail').type('john.doe@email.com');
    cy.get('#loginFormPassword').type('mysecretpwd123');
  });
});
