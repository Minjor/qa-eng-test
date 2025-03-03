class Sidebar {
  getSidebar(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=sidebar]');
  }

  getDashboardMenu(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=dashboard]');
  }

  getDashboardList(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=dashboard] > div');
  }

  getDashboardItem(item: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.contains('[data-cy=dashboard] li', item);
  }
};

export const sidebar = new Sidebar();
