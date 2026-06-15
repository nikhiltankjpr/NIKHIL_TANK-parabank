# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\e2e\invalidtranfer.spec.ts >> Invalid Transfer with API Check
- Location: tests\tests\e2e\invalidtranfer.spec.ts:8:5

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
  4  | import{getCustomerId}from'../../../utils/Cust_idutilities';
  5  | import loginData from'../../../test-data/logindata.json';
  6  | import itransferfunddata from'../../../test-data/itfd.json';
  7  | 
  8  | test('Invalid Transfer with API Check',async({page,request})=>{
  9  | await page.goto('https://parabank.parasoft.com/parabank');
  10 | await new LoginPage(page).login(loginData.username,loginData.password);
  11 | const customerId=await getCustomerId(request);
  12 | const beforeResponse=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
  13 | const beforeBody=await beforeResponse.text();
  14 | 
> 15 | await page.getByRole('link',{name:'Transfer Funds'}).click();
     |                                                      ^ Error: locator.click: Target page, context or browser has been closed
  16 | 
  17 | await page.waitForFunction(()=>{
  18 | const select=document.querySelector('#toAccountId') as HTMLSelectElement;
  19 | return select&&select.options.length>0;
  20 | });
  21 | await page.goBack();
  22 | await new TransferFundsPage(page).transferFunds(
  23 | itransferfunddata.amount,
  24 | itransferfunddata.toAccountIndex
  25 | );
  26 | const afterResponse=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
  27 | const afterBody=await afterResponse.text();
  28 | expect(afterResponse.status()).toBe(200);
  29 | expect(beforeBody.length).toBeGreaterThan(0);
  30 | expect(afterBody.length).toBeGreaterThan(0);
  31 | await page.screenshot({path:'screenshots/invalid_transfer.png'});
  32 | });
```