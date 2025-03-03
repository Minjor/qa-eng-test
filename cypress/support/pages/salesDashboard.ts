class SalesDashboardPage {
  visit() {
    cy.visit('/');
  }

  getWidgetByName(widgetName: string): Cypress.Chainable<JQuery<HTMLElement>> {
    switch (widgetName) {
      case 'Revenue':
        return cy.get('[data-cy=revenue-chart]');
      case 'Sales By Category':
        return cy.get('[data-cy=sales-by-category]');
      case 'Daily Sales':
        return cy.get('[data-cy=daily-sales]');
      case 'Summary':
        return cy.get('[data-cy=summary]');
      case 'Total Orders':
        return cy.get('[data-cy=total-orders]');
      case 'Recent Activities':
        return cy.get('[data-cy=recent-activities]');
      case 'Transactions':
        return cy.get('[data-cy=transactions]');
      case 'Wallet Balance':
        return cy.get('[data-cy=wallet-balance]');
      case 'Recent Orders':
        return cy.get('[data-cy=recent-orders]');
      case 'Top Selling Product':
        return cy.get('[data-cy=top-selling-product]');
      default:
        throw new Error(`Widget with name "${widgetName}" not found`);
    }
  }

  getRevenueChart(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=revenue-chart]');
  }

  getSalesByCategory(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=sales-by-category]');
  }

  getDailySales(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=daily-sales]');
  }

  getSummary(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=summary]');
  }

  getTotalOrders(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=total-orders]');
  }

  getRecentActivities(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=recent-activities]');
  }

  getTransactions(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=transactions]');
  }

  getWalletBalance(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=wallet-balance]');
  }

  getRecentOrders(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=recent-orders]');
  }

  getTopSellingProduct(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=top-selling-product]');
  }

  getScreenLoader(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=screen-loader]');
  }

  getContent(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=content]');
  }

  getFirstLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=content] [href="/"]')
  }

  getDashboardType(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=content] ul')
  }

  getSaleCategory(category: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`svg [seriesName=${category}]`)
  }
};

export const salesDashboardPage = new SalesDashboardPage();
