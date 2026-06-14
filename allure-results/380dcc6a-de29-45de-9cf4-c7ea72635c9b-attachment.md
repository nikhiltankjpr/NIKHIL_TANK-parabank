# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\ui\transferFunds.spec.ts >> transfer funds
- Location: tests\tests\ui\transferFunds.spec.ts:10:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Open New Account' })
    - waiting for" https://parabank.parasoft.com/parabank/login.htm" navigation to finish...
    - navigated to "https://parabank.parasoft.com/parabank/login.htm"

```

# Test source

```ts
  1  | import{Page}from'@playwright/test';
  2  | 
  3  | export class OpenNewAccountPage{
  4  | constructor(private page:Page){}
  5  | async openAccount(accountType:string,accountIndex:number){
> 6  | await this.page.getByRole('link',{name:'Open New Account'}).click();
     |                                                             ^ Error: locator.click: Target page, context or browser has been closed
  7  | await this.page.locator('#type').selectOption(accountType);
  8  | await this.page.locator('#fromAccountId').selectOption({index:accountIndex});
  9  | await this.page.waitForTimeout(5000);
  10 | await this.page.getByRole('button',{name:'Open New Account'}).click();
  11 | }
  12 | }
```