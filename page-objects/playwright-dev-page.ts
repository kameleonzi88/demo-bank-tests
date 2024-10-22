import { Page } from '@playwright/test';

export class PlaywrightDevPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Example helper method for navigating to a specific URL
  async gotoHomePage() {
    await this.page.goto('https://playwright.dev');
  }

  // Example method to check for specific text in a span
  async findTextInSpan(text: string) {
    const span = await this.page.locator('span');
    await span.waitFor();  // Wait until span is visible
    const spanText = await span.textContent();
    return spanText?.includes(text);
  }
}