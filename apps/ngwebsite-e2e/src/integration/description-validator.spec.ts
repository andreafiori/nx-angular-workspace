import { getContentGreeting } from '../support/app.po';

describe('should test the meta description tag validator', () => {
  beforeEach(() => cy.visit('#/seo-tools/description-validator'));

  it('should display welcome message', () => {
    getContentGreeting().contains('Description Content Tag Validator');
  });

});
