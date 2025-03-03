Feature: Sidebar
  Scenario: Navigate to Sales Dashboard from Sidebar
    Given I am not on the Sales Dashboard page
    When I navigate using Dashboard > Sales
    Then I should see the Sales Dashboard