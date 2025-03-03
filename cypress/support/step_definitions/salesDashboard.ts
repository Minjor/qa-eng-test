import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { salesDashboardPage } from "../pages/salesDashboard";
import { sidebar } from "../pages/sidebar";

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
  // Disable scrolling to prevent visual artifacts
  cy.document().then((doc) => {
    doc.body.style.overflow = "hidden";
  });

  let mismatchedPixels = 0;
  const widgets = dataTable.rows();

  // Compare each widget to Figma design
  cy.wrap(null).then(() => {
    widgets.forEach(([title]) => {
      salesDashboardPage.getWidgetByName(title).compareSnapshot(title).then(comparisonResults => {
        mismatchedPixels += comparisonResults?.mismatchedPixels || 0;
      });
    });
  });

  // Fail if match is not pixel-perfect
  cy.then(() => {
    console.log(mismatchedPixels);
    if (mismatchedPixels > 0) {
      throw new Error(`There are ${mismatchedPixels} mismatched pixels in widgets.`);
    }
  });
});

Then("the page design matches the Figma design for the sidebar", () => {
  sidebar.getDashboardMenu().click();
  sidebar.getSidebar().compareSnapshot('Sidebar', { failSilently: false })
});

Given("I am using a mobile device", () => {
    cy.viewport('iphone-xr');
});

When("I click a sales category", () => {
  salesDashboardPage.getSalesByCategory().within(() => {
    salesDashboardPage.getSaleCategory('Sports').click();
  })
});

Then("I should see the sales category details", () => {
  salesDashboardPage.getSalesByCategory().within(() => {
    cy.contains('text', 'Sports').should('exist')
  })
});
