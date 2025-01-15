Feature: Trello Board Functionality Testing

  Background:
    Given I am logged into Trello with email "hababehn@gmail.com" and password "Noorfah@051199"
    And I have navigated to the board named "QA course"

  Scenario: R_0 User Can Delete Existing Card
    Given a card named "Card Name" exists on the board
    When I select the card named "Card Name"
    And I delete the card
    Then the card "Card Name" should no longer exist on the board
    And I take a screenshot named "board-after-delete"

  Scenario: R_1 User Can Create New Template “Card Template”
    When I click the "Create Template" button
    And I enter "New Card Template" as the template name
    And I enter "Template Description" as the template description
    And I save the template
    Then the template "New Card Template" should exist on the board
    And I take a screenshot named "new-card-template"

  Scenario: R_2 User Can Update Name Of Template
    Given a template named "Existing Template Name" exists
    When I select the template
    And I edit the name to "Updated Template Name"
    And I save the changes
    Then the template name should be updated to "Updated Template Name"
    And I take a screenshot named "updated-template-name"

  Scenario: R_3 User Can Move Template To Any List
    Given a template named "Template Name" exists in a list
    When I move the template to another list
    Then the template "Template Name" should exist in the target list
    And I take a screenshot named "template-moved-to-list"

  Scenario: R_4 User Can Hide Template From List
    Given a template named "Template Name" exists
    When I hide the template
    Then the template "Template Name" should not be visible in the list
    And I take a screenshot named "template-hidden"
