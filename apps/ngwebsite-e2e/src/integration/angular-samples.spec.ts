describe('AngularFeatures', () => {

  it('should visit component interactions page', () => {
    cy.visit('#/form-samples/validation')
    cy.get('h2').contains('Multiple form types and validations')
  });

  it('should visit unique ids in a modal window page', () => {
    cy.visit('#/unique-id-modal')
    cy.get('h1').contains('Unique IDs in a modal window')
    cy.get('[data-cy=openmodal]').click()
  });

});
