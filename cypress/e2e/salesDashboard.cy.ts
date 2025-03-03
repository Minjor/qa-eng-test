describe('Sales Dashboard', () => {
  const assertSalesDashboard = () => {
    cy.title().should('eq', 'Sales Admin | VRISTO - Multipurpose Tailwind Dashboard Template')
    cy.get('[data-cy=content] [href="/"]').should('contain', 'Dashboard')
    cy.get('[data-cy=content] ul').should('contain', 'Sales')
    cy.get('[data-cy=revenue-chart]').should('contain', 'Revenue')
    cy.get('[data-cy=sales-by-category]').should('contain', 'Sales By Category')
    cy.get('[data-cy=daily-sales]').should('contain', 'Daily Sales')
    cy.get('[data-cy=summary]').should('contain', 'Summary')
    cy.get('[data-cy=total-orders]').should('contain', 'Total Orders')
    cy.get('[data-cy=recent-activities]').should('contain', 'Recent Activities')
    cy.get('[data-cy=transactions]').should('contain', 'Transactions')
    cy.get('[data-cy=wallet-balance]').should('contain', 'Wallet Balance')
    cy.get('[data-cy=recent-orders]').should('contain', 'Recent Orders')
    cy.get('[data-cy=top-selling-product]').should('contain', 'Top Selling Product')
  }

  // There is a Sales Dashboard
  it('should render the Sales Dashboard', () => {
    cy.visit('/')
    cy.get('[data-cy="screen-loader"]').should('not.exist')
    assertSalesDashboard()
  })

  // The design matches the provided Figma design exactly (pixel-perfect) on desktops
  it('should match the Figma design on desktop viewport', () => {
    cy.visit('/')
    cy.get('[data-cy="screen-loader"]').should('not.exist')

    // Check sidebar for visual regressions
    cy.get('[data-cy=sidebar] [data-cy="dashboard"]').click()
    cy.get('[data-cy=sidebar]').compareSnapshot('Sidebar')

    // Check widgets for visual regressions
    cy.get('[data-cy=revenue-chart]').compareSnapshot('Revenue')
    cy.get('[data-cy=sales-by-category]').compareSnapshot('Sales by Category')
    cy.get('[data-cy=daily-sales]').compareSnapshot('Daily Sales')
    cy.get('[data-cy=summary]').compareSnapshot('Summary')
    cy.get('[data-cy=total-orders]').compareSnapshot('Total Orders')
    cy.get('[data-cy=recent-activities]').compareSnapshot('Recent Activities')
    cy.get('[data-cy=transactions]').compareSnapshot('Transactions')
    cy.get('[data-cy=wallet-balance]').compareSnapshot('Wallet Balance')
    cy.get('[data-cy=recent-orders]').compareSnapshot('Recent Orders')
    cy.get('[data-cy=top-selling-product]').compareSnapshot('Top Selling Product')
  })

  // The design looks good on mobile devices
  it('should render the Sales Dashboard on mobile viewport', () => {
    cy.viewport('iphone-xr')
    cy.visit('/')
    cy.get('[data-cy=screen-loader]').should('not.exist')
    assertSalesDashboard()
  })

  // All features are usable on mobile devices (Sales by Category)
  describe('Sales by Category', () => {
    it('should display details when clicked on mobile devices', () => {
      cy.viewport('iphone-xr')
      cy.visit('/')
      cy.get('[data-cy="screen-loader"]').should('not.exist')
      cy.get('[data-cy=sales-by-category]').within(() => {
        cy.get('svg [seriesName=Apparel]').click()
        cy.contains('text', 'Apparel').should('exist')
      })
    })
  })
})