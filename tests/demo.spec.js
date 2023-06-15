// @ts-check
const { test, expect } = require('@playwright/test');
const { DemoPage } = require('../POM/Pages/demo-page');
const { demoText } = require('../TestData/TestData');

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
  });

  test.afterEach(async ({ page }) => {
    // do something each test.
  });
  

  test('getting started should contain table of contents', async ({ page }) => {
  const playwrightDev = new DemoPage(page);
  await playwrightDev.goto();
  await playwrightDev.getStarted();
  await expect(playwrightDev.tocList).toHaveText([
    `How to install Playwright`,
    `What's Installed`,
    `How to run the example test`,
    `How to open the HTML test report`,
    `Write tests using web first assertions, page fixtures and locators`,
    `Run single test, multiple tests, headed mode`,
    `Generate tests with Codegen`,
    `See a trace of your tests`
  ]);
  });

  test('should show Page Object Model article', async ({ page }) => {
  const playwrightDev = new DemoPage(page);
  await playwrightDev.goto();
  await playwrightDev.pageObjectModel();
  await expect(page.locator('article')).toContainText(demoText);
  });

});
