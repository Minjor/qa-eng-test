import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { salesDashboardPage } from "../support/pages/salesDashboard";
import { sidebar } from "../support/pages/sidebar";

Given("I am not on the Sales Dashboard page", () => {
  // Could be any page other than Sales Dashboard
  cy.visit('/apps/calendar');
});

When("I navigate using Dashboard > Sales", () => {
  sidebar.getSidebar().within(() => {
    sidebar.getDashboardMenu().click();
    sidebar.getDashboardList().should('have.attr', 'aria-hidden', 'false');
    sidebar.getDashboardItem('Sales').click();
  });
});

Then("I should see the Sales Dashboard", () => {
  cy.url().should('eq', Cypress.config('baseUrl') + '/');
  cy.title().should('eq', 'Sales Admin | VRISTO - Multipurpose Tailwind Dashboard Template');
  salesDashboardPage.getContent().should('exist');
});
