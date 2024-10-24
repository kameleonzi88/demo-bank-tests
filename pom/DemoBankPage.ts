import { Page } from '@playwright/test';

export class DemoBankPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  logoLocator() {
    return this.page.locator('.logo login');
  }

  async navigateToHomePage() {
    await this.page.goto('https://demo-bank.vercel.app/');
  }

  async isLogoVisible(): Promise<boolean> {
    return await this.logoLocator().isVisible();
  }
}
