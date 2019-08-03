import { getContentGreeting } from '../support/app.po';

describe('should test the meta keywords tag validator', () => {
  beforeEach(() => cy.visit('#/seo-tools/keywords-extractor'))

  it('should display welcome message', () => {
    getContentGreeting().contains('Keywords Extractor')
  });

  it('should fill the form and submit', () => {
    cy.get('[data-cy=description]').type('test description of a javascript angular nx workspace cypress.io e2e browser automation')
    cy.get('[data-cy=submit]').click()
  });

});
