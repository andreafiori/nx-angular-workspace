import { getContentGreeting } from '../support/app.po';

describe('Two Sums', () => {
  beforeEach(() => cy.visit('#/coding-challenges/two-sums'));

  it('should display app title', () => {
    getContentGreeting().contains('Two Sums');
  });

  it('should update target and number of elements', () => {
    cy.get('[data-cy=targeNumber]').type('3');
    cy.get('[data-cy=numelements]').type('8');

    cy.get('[data-cy=submit]').click();
    // cy.get('[data-cy=reload]').click();
  });

});
