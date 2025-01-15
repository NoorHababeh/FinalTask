const { Given, When, Then } = require('@cucumber/cucumber');

Given('I am logged into Trello with email {string} and password {string}', (email, password) => {
  cy.visit('https://trello.com/login');
  cy.get('#user').type("hababehn@gmail.com");
  cy.get('#password').type("Noorfah@051199");
  cy.get('#login').click();
  cy.url().should('include', '/home');// 
});

Given('I have navigated to the board named {string}', (boardName) => {
  cy.contains(boardName).click();
});

Given('a card named {string} exists on the board', (cardName) => {
  cy.contains(cardName).should('exist');
});

Given('a template named {string} exists', (templateName) => {
  cy.contains(templateName).should('exist');
});

When('I select the card named {string}', (cardName) => {
  cy.contains(cardName).click(); // تحديد البطاقة ديناميكيًا باستخدام اسمها
});

When('I delete the card', () => {
  cy.get('.delete-card-option').click();
  cy.get('.confirm-delete').click();
});

When('I click the {string} button', (buttonText) => {
  cy.contains(buttonText).click();
});

When('I enter {string} as the template name', (templateName) => {
  cy.get('#template-name').type(templateName);
});

When('I enter {string} as the template description', (templateDescription) => {
  cy.get('#template-description').type(templateDescription);
});

When('I save the template', () => {
  cy.get('.save-template-button').click();
});

When('I edit the name to {string}', (newName) => {
  cy.get('#template-name').clear().type(newName);
});

When('I save the changes', () => {
  cy.get('.save-template-button').click();
});

When('I move the template to another list', () => {
  cy.get('.template-card').contains('Template Name').trigger('mousedown');
  cy.get('.target-list').trigger('mousemove').trigger('mouseup');
});

When('I hide the template', () => {
  cy.get('.hide-template-button').click();
});

Then('the card {string} should no longer exist on the board', (cardName) => {
  cy.contains(cardName).should('not.exist'); // تأكد من أن البطاقة لم تعد موجودة
});

Then('the template {string} should exist on the board', (templateName) => {
  cy.contains(templateName).should('exist');
});

Then('the template name should be updated to {string}', (updatedName) => {
  cy.contains(updatedName).should('exist');
});

Then('the template {string} should exist in the target list', (templateName) => {
  cy.get('.target-list').contains(templateName).should('exist');
});

Then('the template {string} should not be visible in the list', (templateName) => {
  cy.contains(templateName).should('not.exist');
});

Then('I take a screenshot named {string}', (screenshotName) => {
  cy.screenshot(screenshotName);
});
