describe('Sidebar', () => {
    // When the user navigates to Dashboard > Sales, the Sales Dashboard appears
    it('should navigate to Sales Dashboard', () => {
        cy.visit('/apps/calendar')
        cy.get('[data-cy=sidebar]').within(() => {
            cy.get('[data-cy=dashboard]').click()
            cy.get('[data-cy=dashboard] > div').should('have.attr', 'aria-hidden', 'false')
            cy.contains('[data-cy=dashboard] li', 'Sales').click()
        })
        cy.url().should('eq', Cypress.config('baseUrl') + '/')
        cy.title().should('eq', 'Sales Admin | VRISTO - Multipurpose Tailwind Dashboard Template')
        cy.get('[data-cy=content]').should('exist')
    })
})