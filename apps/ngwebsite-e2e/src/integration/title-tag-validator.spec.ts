import { getContentGreeting } from '../support/app.po';

describe('should test the title tag validator', () => {

  const titleOk = 'Page title test cypress nx workspace angular framework javascript';

  beforeEach(() => cy.visit('#/seo-tools/title-validator'));

  it('should display welcome message', () => {
    getContentGreeting().contains('Title Tag Validator');
  });

  it('should fill the title and submit', () => {
    cy.get('[data-cy=title]').type(titleOk);
    cy.get('[data-cy=submit]').click();

    cy.get('h3').contains('Greetings!');
    // cy.get('[data-cy=reset]').click();
  });
});
