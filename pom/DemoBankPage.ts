import { Page } from '@playwright/test';

export class DemoBankPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  logoLocator() {
    return this.page.locator('a.logo.login');
  }

  async navigateToHomePage() {
    await this.page.goto('https://demo-bank.vercel.app/');
  }

  async isLogoVisible(): Promise<boolean> {
    await this.logoLocator().waitFor({ state: 'visible' });
    return await this.logoLocator().isVisible();
  }
}
