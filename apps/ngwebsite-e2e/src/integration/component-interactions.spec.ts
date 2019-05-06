import { getGreeting } from '../support/app.po';

describe('Component Interactions', () => {
  beforeEach(() => cy.visit('/component-interactions'));

  it('should display welcome message', () => {
    getGreeting().contains('Angular Components Interactions');
  });

  // Change input text value and see if shared vars above are equals
  it('should update the input text', () => {
    const testUpdate = 'Making a simple type test!';
    cy.get('input').clear();
    cy.get('input').type(testUpdate);
    cy.get('[data-testid=sharedVarParent]').should('contain', testUpdate);
  });
});
