import { Page } from '@playwright/test';

export class DemoBankPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  logoLocator() {
    return this.page.locator('//a[@href="/html/body/header/div/h1/a"]');
  }

  async navigateToHomePage() {
    await this.page.goto('https://demo-bank.vercel.app/');
  }

  async isLogoVisible(): Promise<boolean> {
    await this.logoLocator().waitFor({ state: 'visible', timeout: 5000 });
    return await this.logoLocator().isVisible();
  }
}
