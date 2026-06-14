# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\e2e\invalidtranfer.spec.ts >> Invalid Transfer with API Check
- Location: tests\tests\e2e\invalidtranfer.spec.ts:7:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Transfer Funds' })

```

# Test source

```ts
  1  | import{test,expect}from'@playwright/test';
  2  | import{LoginPage}from'../../../pages/loginPage';
  3  | import{TransferFundsPage}from'../../../pages/transferfundsPage';
  4  | import loginData from'../../../test-data/logindata.json';
  5  | import itransferfunddata from'../../../test-data/itfd.json';
  6  | 
  7  | test('Invalid Transfer with API Check',async({page,request})=>{
  8  | await page.goto('https://parabank.parasoft.com/parabank');
  9  | await new LoginPage(page).login(loginData.username,loginData.password);
  10 | 
  11 | const beforeResponse=await request.get('https://parabank.parasoft.com/parabank/services/bank/customers/12212/accounts');
  12 | const beforeBody=await beforeResponse.text();
  13 | 
> 14 | await page.getByRole('link',{name:'Transfer Funds'}).click();
     |                                                      ^ Error: locator.click: Target page, context or browser has been closed
  15 | 
  16 | await page.waitForFunction(()=>{
  17 | const select=document.querySelector('#toAccountId') as HTMLSelectElement;
  18 | return select&&select.options.length>0;
  19 | });
  20 | 
  21 | await page.goBack();
  22 | 
  23 | await new TransferFundsPage(page).transferFunds(
  24 | itransferfunddata.amount,
  25 | itransferfunddata.toAccountIndex
  26 | );
  27 | 
  28 | const afterResponse=await request.get('https://parabank.parasoft.com/parabank/services/bank/customers/12212/accounts');
  29 | const afterBody=await afterResponse.text();
  30 | 
  31 | expect(afterResponse.status()).toBe(200);
  32 | expect(beforeBody.length).toBeGreaterThan(0);
  33 | expect(afterBody.length).toBeGreaterThan(0);
  34 | });
```