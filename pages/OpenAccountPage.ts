import { Page, expect } from '@playwright/test';

export class OpenNewAccountPage {
  constructor(private page: Page) {}

  async openAccount(accountType: string) {

    await this.page.getByRole('link', {
      name: 'Open New Account'
    }).click();

    await this.page.locator('#type')
      .selectOption(accountType);

    // wait until accounts are loaded
    await expect(this.page.locator('#fromAccountId'))
      .toBeVisible();

    await this.page.waitForFunction(() => {
      const select =
        document.querySelector('#fromAccountId') as HTMLSelectElement;
      return select && select.options.length > 0;
    });

    await this.page.locator('#fromAccountId')
      .selectOption({ index: 0 });

    await this.page.getByRole('button', {
      name: 'Open New Account'
    }).click();
  }

  async getAccountNumber() {
    const accountNo =
      await this.page.locator('#newAccountId').textContent();

    return accountNo?.trim();
  }
}