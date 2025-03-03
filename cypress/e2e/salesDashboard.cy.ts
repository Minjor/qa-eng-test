import { salesDashboardPage } from "../support/pages/salesDashboard"

describe('Sales Dashboard', () => {
  const verifySalesDashboardWidgets = () => {
    cy.title().should('eq', 'Sales Admin | VRISTO - Multipurpose Tailwind Dashboard Template')
    salesDashboardPage.getFirstLink().should('contain', 'Dashboard')
    salesDashboardPage.getDashboardType().should('contain', 'Sales')
    salesDashboardPage.getRevenueChart().should('contain', 'Revenue')
    salesDashboardPage.getSalesByCategory().should('contain', 'Sales By Category')
    salesDashboardPage.getDailySales().should('contain', 'Daily Sales')
    salesDashboardPage.getSummary().should('contain', 'Summary')
    salesDashboardPage.getTotalOrders().should('contain', 'Total Orders')
    salesDashboardPage.getRecentActivities().should('contain', 'Recent Activities')
    salesDashboardPage.getTransactions().should('contain', 'Transactions')
    salesDashboardPage.getWalletBalance().should('contain', 'Wallet Balance')
    salesDashboardPage.getRecentOrders().should('contain', 'Recent Orders')
    salesDashboardPage.getTopSellingProduct().should('contain', 'Top Selling Product')
  }

  // There is a Sales Dashboard
  it('should render the Sales Dashboard', () => {
    salesDashboardPage.visit()
    salesDashboardPage.getScreenLoader().should('not.exist')
    verifySalesDashboardWidgets()
  })

  // The design matches the provided Figma design exactly (pixel-perfect) on desktops
  it('should match the Figma design on desktop viewport', () => {
    salesDashboardPage.visit()
    salesDashboardPage.getScreenLoader().should('not.exist')

    // Check sidebar for visual regressions
    cy.get('[data-cy=sidebar] [data-cy="dashboard"]').click()
    cy.get('[data-cy=sidebar]').compareSnapshot('Sidebar')

    // Check invididual widgets for visual regressions
    salesDashboardPage.getRevenueChart().compareSnapshot('Revenue');
    salesDashboardPage.getSalesByCategory().compareSnapshot('Sales By Category');
    salesDashboardPage.getDailySales().compareSnapshot('Daily Sales');
    salesDashboardPage.getSummary().compareSnapshot('Summary');
    salesDashboardPage.getTotalOrders().compareSnapshot('Total Orders');
    salesDashboardPage.getRecentActivities().compareSnapshot('Recent Activities');
    salesDashboardPage.getTransactions().compareSnapshot('Transactions');
    salesDashboardPage.getWalletBalance().compareSnapshot('Wallet Balance');
    salesDashboardPage.getRecentOrders().compareSnapshot('Recent Orders');
    salesDashboardPage.getTopSellingProduct().compareSnapshot('Top Selling Product');

    // Check for failures and throw error

  })

  // The design looks good on mobile devices
  it('should render the Sales Dashboard on mobile viewport', () => {
    cy.viewport('iphone-xr')
    salesDashboardPage.visit()
    salesDashboardPage.getScreenLoader().should('not.exist')
    verifySalesDashboardWidgets()
  })

  // All features are usable on mobile devices (Sales by Category)
  describe('Sales by Category Widget', () => {
    it('should display details when clicked on mobile devices', () => {
      cy.viewport('iphone-xr')
      salesDashboardPage.visit()
      salesDashboardPage.getScreenLoader().should('not.exist')
      salesDashboardPage.getSalesByCategory().within(() => {
        cy.get('svg [seriesName=Apparel]').click()
        cy.contains('text', 'Apparel').should('exist')
      })
    })
  })
})