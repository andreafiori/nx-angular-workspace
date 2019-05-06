import { getContentGreeting } from '../support/app.po';

describe('should test the title tag validator', () => {
  beforeEach(() => cy.visit('/description-tag-validator'));

  it('should display welcome message', () => {
    getContentGreeting().contains('Description Content Tag Validator');
  });

  // TODO fill the form with valid an unvalid description, check the analyze button and the output
});
