# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\e2e\CreateAccountVerifyAPI.spec.ts >> Create Account UI + Verify API
- Location: tests\tests\e2e\CreateAccountVerifyAPI.spec.ts:7:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('link', { name: 'Open New Account' })

```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | 
  3  | export class OpenNewAccountPage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   async openAccount(accountType: string) {
  7  | 
  8  |     await this.page.getByRole('link', {
  9  |       name: 'Open New Account'
> 10 |     }).click();
     |        ^ Error: locator.click: Test ended.
  11 | 
  12 |     await this.page.locator('#type')
  13 |       .selectOption(accountType);
  14 | 
  15 |     // wait until accounts are loaded
  16 |     await expect(this.page.locator('#fromAccountId'))
  17 |       .toBeVisible();
  18 | 
  19 |     await this.page.waitForFunction(() => {
  20 |       const select =
  21 |         document.querySelector('#fromAccountId') as HTMLSelectElement;
  22 |       return select && select.options.length > 0;
  23 |     });
  24 | 
  25 |     await this.page.locator('#fromAccountId')
  26 |       .selectOption({ index: 0 });
  27 | 
  28 |     await this.page.getByRole('button', {
  29 |       name: 'Open New Account'
  30 |     }).click();
  31 |   }
  32 | 
  33 |   async getAccountNumber() {
  34 |     const accountNo =
  35 |       await this.page.locator('#newAccountId').textContent();
  36 | 
  37 |     return accountNo?.trim();
  38 |   }
  39 | }
```