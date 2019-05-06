import { getGreeting } from '../support/app.po';

describe('Hello Nx', () => {
  beforeEach(() => cy.visit('/'));

  it('should display app title', () => {
    getGreeting().contains('Two Sum');
  });

  it('should fill the form', () => {
    // Update target and number of elements, check the update button
    cy.get('#targeNumber').type('3');
    cy.get('#numelements').type('8');

    cy.get('#two-sums-submit').click();
  });

});
