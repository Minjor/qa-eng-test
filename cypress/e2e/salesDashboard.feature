Feature: Sales Dashboard

  @dashboards @desktop
  Scenario: Visiting Vristo Sales Dashboard
    When I visit Vristo Sales Dashboard
    Then I should see the Sales Dashboard header details
    And I should see the Sales Dashboard page title
    And I should see the following Sales Widgets:
    | Widget                 |
    | Revenue                |
    | Sales By Category      |
    | Daily Sales            |
    | Summary                |
    | Total Orders           |
    | Recent Activities      |
    | Transactions           |
    | Wallet Balance         |
    | Recent Orders          | 
    | Top Selling Product    |

  @snapshot @desktop
  Scenario: Figma design matches web UI
    When I visit Vristo Sales Dashboard
    Then the page design matches the Figma design for all Widgets:
    | Widget                 |
    | Revenue                |
    | Sales By Category      |
    | Daily Sales            |
    | Summary                |
    | Total Orders           |
    | Recent Activities      |
    | Transactions           |
    | Wallet Balance         |
    | Recent Orders          | 
    | Top Selling Product    |
    And the page design matches the Figma design for the sidebar

  @dashboards @mobile
  Scenario: Visiting Vristo Sales Dashboard on mobile device
    Given I am using a mobile device
    When I visit Vristo Sales Dashboard
    Then I should see the Sales Dashboard header details
    And I should see the Sales Dashboard page title
    And I should see the following Sales Widgets:
    | Widget                 |
    | Revenue                |
    | Sales By Category      |
    | Daily Sales            |
    | Summary                |
    | Total Orders           |
    | Recent Activities      |
    | Transactions           |
    | Wallet Balance         |
    | Recent Orders          | 
    | Top Selling Product    |

  @widgets @mobile
  Scenario: Sales By Category Widget display details on mobile device
    Given I am using a mobile device
    When I visit Vristo Sales Dashboard
    And I click a sales category
    Then I should see the sales category details
