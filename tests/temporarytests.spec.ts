import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from '../page-objects/playwright-dev-page.ts'; // Adjust path as needed

test.only('should verify text in span using PlaywrightDevPage helper', async ({
  page,
}) => {
  // Instantiate the helper class
  const playwrightPage = new PlaywrightDevPage(page);

  // Use the helper method to navigate to the homepage
  await playwrightPage.gotoHomePage();

  // Assert that specific text exists in a span
  const textExists = await playwrightPage.findTextInSpan('Playwright');
  expect(textExists).toBe(true);
});
