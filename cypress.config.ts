import { defineConfig } from "cypress";
import { configureVisualRegression } from'cypress-visual-regression';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configureVisualRegression(on);
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
