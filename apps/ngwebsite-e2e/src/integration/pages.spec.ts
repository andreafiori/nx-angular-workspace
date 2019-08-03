describe('AngularFeatures', () => {

  it('should visit features page', () => {
    cy.visit('#/pages/ng/features')
    cy.get('h3').contains('Common problems and tasks')
  });

  it('should visit versions page', () => {
    cy.visit('#/pages/ng/versions')
    cy.get('h2').contains('Angular versions')
  });

});
