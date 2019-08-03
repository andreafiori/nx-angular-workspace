import { getGreeting } from '../support/app.po';

describe('HomePage', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the home page', () => {
    getGreeting().contains('NG Website');
  });
});
