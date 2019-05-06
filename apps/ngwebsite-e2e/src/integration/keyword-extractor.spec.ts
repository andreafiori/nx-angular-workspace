import { getContentGreeting } from '../support/app.po';

describe('should test the title tag validator', () => {
  beforeEach(() => cy.visit('/keywords-extractor'));

  it('should display welcome message', () => {
    getContentGreeting().contains('Keywords Extractor');
  });

  // TODO fill the form and extract \ test result, check navbar active link
});
