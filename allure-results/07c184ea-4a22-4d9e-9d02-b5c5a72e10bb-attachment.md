# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\e2e\FullAccountLifecycle.spec.ts >> Full Account Lifecycle
- Location: tests\tests\e2e\FullAccountLifecycle.spec.ts:10:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Open New Account' })

```

# Test source

```ts
  1  | import{test,expect}from'@playwright/test';
  2  | import{LoginPage}from'../../../pages/loginPage';
  3  | import{OpenNewAccountPage}from'../../../pages/OpenAccountPage';
  4  | import{TransferFundsPage}from'../../../pages/transferfundsPage';
  5  | import{getCustomerId}from'../../../utils/Cust_idutilities';
  6  | import loginData from'../../../test-data/logindata.json';
  7  | import accountData from'../../../test-data/accountData2.json';
  8  | import transferData from'../../../test-data/transferFundsData.json';
  9  | 
  10 | test('Full Account Lifecycle',async({page,request})=>{
  11 | await page.goto('https://parabank.parasoft.com/parabank');
  12 | await new LoginPage(page).login(loginData.username,loginData.password);
> 13 | await page.getByRole('link',{name:'Open New Account'}).click();
     |                                                        ^ Error: locator.click: Target page, context or browser has been closed
  14 | await page.waitForFunction(()=>{
  15 | const select=document.querySelector('#fromAccountId') as HTMLSelectElement;
  16 | return select&&select.options.length>0;
  17 | });
  18 | await new OpenNewAccountPage(page).openAccount(accountData.accountType,accountData.accountIndex);
  19 | const accountNo=await page.locator('#newAccountId').textContent();
  20 | await new TransferFundsPage(page).transferFunds(transferData.amount,transferData.toAccountIndex);
  21 | await expect(page.getByText('Transfer Complete!')).toBeVisible();
  22 | const customerId=await getCustomerId(request);
  23 | const response=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
  24 | const body=await response.text();
  25 | expect(response.status()).toBe(200);
  26 | expect(body).toContain(accountNo!.trim());
  27 | await page.screenshot({path:'screenshots/full_account_lifecycle.png'});
  28 | });
```