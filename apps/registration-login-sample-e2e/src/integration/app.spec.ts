import { getGreeting } from '../support/app.po';

describe('HomePage', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('h2').contains('Login');
    cy.get('[data-cy=registerLink]').click(); // Switch to register
    cy.get('h2').contains('Register');
  });

  // TODO: create user, login, navigate to backend area
});
