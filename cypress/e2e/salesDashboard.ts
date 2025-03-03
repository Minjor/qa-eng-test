import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { salesDashboardPage } from "../support/pages/salesDashboard";
import { sidebar } from "../support/pages/sidebar";

When("I visit Vristo Sales Dashboard", () => {
  salesDashboardPage.visit();
  salesDashboardPage.getScreenLoader().should('not.exist');
});

Then("I should see the Sales Dashboard header details", () => {
  salesDashboardPage.getFirstLink().should('contain', 'Dashboard');
  salesDashboardPage.getDashboardType().should('contain', 'Sales');
});

Then("I should see the Sales Dashboard page title", () => {
  cy.title().should('eq', 'Sales Admin | VRISTO - Multipurpose Tailwind Dashboard Template');
});

Then("I should see the following Sales Widgets:", (dataTable: DataTable) => {
  const widgets = dataTable.rows();
  // Iterate through widgets and assert their title content
  widgets.forEach(([title]) => {
    salesDashboardPage.getWidgetByName(title).should('contain', title);
  });
});

Then("the page design matches the Figma design for all Widgets:", (dataTable: DataTable) => {
  const widgets = dataTable.rows();
  // Iterate through widgets and compare snapshots
  widgets.forEach(([title]) => {
    salesDashboardPage.getWidgetByName(title).compareSnapshot(title);
  });
});

Then("the page design matches the Figma design for the sidebar", () => {
  sidebar.getDashboardMenu().click();
  sidebar.getSidebar().compareSnapshot('Sidebar');
});

Given("I am using a mobile device", () => {
    cy.viewport('iphone-xr');
});

When("I click a sales category", () => {
  salesDashboardPage.getSalesByCategory().within(() => {
    salesDashboardPage.getSaleCategory('Apparel').click();
  })
});

Then("I should see the sales category details", () => {
  salesDashboardPage.getSalesByCategory().within(() => {
    cy.contains('text', 'Apparel').should('exist')
  })
});