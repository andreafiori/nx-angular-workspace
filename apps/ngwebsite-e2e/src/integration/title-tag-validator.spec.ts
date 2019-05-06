import { getContentGreeting } from '../support/app.po';

describe('should test the title tag validator', () => {
  beforeEach(() => cy.visit('/title-tag-validator'));

  it('should display welcome message', () => {
    getContentGreeting().contains('Title Tag Validator');
  });
});
