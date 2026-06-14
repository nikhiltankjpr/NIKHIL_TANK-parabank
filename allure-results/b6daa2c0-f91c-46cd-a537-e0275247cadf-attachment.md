# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\e2e\CreateAccountVerifyAPI.spec.ts >> Create Account UI + Verify API
- Location: tests\tests\e2e\CreateAccountVerifyAPI.spec.ts:7:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Open New Account' })

```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export class OpenNewAccountPage {
  4  |     constructor(private page: Page) {}
  5  |     async openAccount(accountType: string, accountIndex: number) {
> 6  |         await this.page.getByRole('link', { name: 'Open New Account' }).click();
     |                                                                         ^ Error: locator.click: Target page, context or browser has been closed
  7  |         await this.page.locator('#type').selectOption(accountType);
  8  |         await this.page.locator('#fromAccountId')
  9  |             .selectOption({ index: accountIndex });
  10 |         await this.page.getByRole('button',
  11 |             { name: 'Open New Account' }).click();
  12 |     }
  13 |     async getNewAccountId() {
  14 | 
  15 |         const accountId =
  16 |             await this.page.locator('#newAccountId').textContent();
  17 | 
  18 |         return accountId?.trim();
  19 |     }
  20 | }
```