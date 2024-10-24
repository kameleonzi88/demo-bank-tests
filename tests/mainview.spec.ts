import { test, expect } from '@playwright/test';
import { DemoBankPage } from '../pom/DemoBankPage.ts';

test.only('Confirming main page logo is present', async ({ page }) => {
  const demoBankPage = new DemoBankPage(page);

  await demoBankPage.navigateToHomePage();

  const isLogoVisible = await demoBankPage.isLogoVisible();
  expect(isLogoVisible).toBe(true);
});
