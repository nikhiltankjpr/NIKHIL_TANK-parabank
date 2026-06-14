# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\ui\transferFunds.spec.ts >> transfer funds with invalid data that is large amount of money
- Location: tests\tests\ui\transferFunds.spec.ts:19:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('link', { name: 'Transfer Funds' })

```

# Test source

```ts
  1  | 
  2  | // await page.getByRole('link', { name: 'Transfer Funds' }).click();
  3  | // await page.locator('#amount').click();
  4  | // await page.locator('#amount').fill('15');
  5  | // await page.getByRole('button', { name: 'Transfer' }).click();
  6  | 
  7  | // import{Page}from'@playwright/test';
  8  | 
  9  | // export class TransferFundsPage{
  10 | // constructor(private page:Page){}
  11 | // async transferFunds(amount:string){
  12 | // await this.page.getByRole('link',{name:'Transfer Funds'}).click();
  13 | // await this.page.locator('#amount').fill(amount);
  14 | // await this.page.getByRole('button',{name:'Transfer'}).click();
  15 | // }
  16 | // }
  17 | 
  18 | import{Page}from'@playwright/test';
  19 | 
  20 | export class TransferFundsPage{
  21 | constructor(private page:Page){}
  22 | async transferFunds(amount:string,toAccountIndex:number){
> 23 | await this.page.getByRole('link',{name:'Transfer Funds'}).click();
     |                                                           ^ Error: locator.click: Test ended.
  24 | await this.page.locator('#toAccountId').selectOption({index:toAccountIndex});
  25 | await this.page.locator('#amount').fill(amount);
  26 | await this.page.getByRole('button',{name:'Transfer'}).click();
  27 | }
  28 | }
```