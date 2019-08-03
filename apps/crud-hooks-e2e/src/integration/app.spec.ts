import { getGreeting } from '../support/app.po';

describe('HomePage', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to crud-hooks!');
  });
});
