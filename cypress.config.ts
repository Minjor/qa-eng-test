import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { configureVisualRegression } from'cypress-visual-regression';
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      await configureVisualRegression(on);
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {
      visualRegressionType: 'regression',
      visualRegressionFailSilently: true,
    },
    screenshotsFolder: './cypress/snapshots/actual',
  },
});
