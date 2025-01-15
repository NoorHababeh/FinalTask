
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = {
  projectId: 'etwpve',
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      // implement node event listeners here
    },
  },
};
