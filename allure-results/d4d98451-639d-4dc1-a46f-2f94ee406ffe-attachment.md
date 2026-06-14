# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\ui\transferFunds.spec.ts >> transfer funds with invalid data that is large amount of money
- Location: tests\tests\ui\transferFunds.spec.ts:19:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - paragraph [ref=e29]: Welcome nikhil tank
        - heading "Account Services" [level=2] [ref=e30]
        - list [ref=e31]:
          - listitem [ref=e32]:
            - link "Open New Account" [ref=e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=e34]:
            - link "Accounts Overview" [ref=e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=e36]:
            - link "Transfer Funds" [ref=e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=e38]:
            - link "Bill Pay" [ref=e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=e40]:
            - link "Find Transactions" [ref=e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=e42]:
            - link "Update Contact Info" [ref=e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=e44]:
            - link "Request Loan" [ref=e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=e46]:
            - link "Log Out" [ref=e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=e50]:
        - heading "Transfer Complete!" [level=1] [ref=e51]
        - paragraph [ref=e52]: "$1500000.00 has been transferred from account #14121 to account #14343."
        - paragraph [ref=e53]: See Account Activity for more details.
  - generic [ref=e55]:
    - list [ref=e56]:
      - listitem [ref=e57]:
        - link "Home" [ref=e58] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e59]:
        - link "About Us" [ref=e60] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e61]:
        - link "Services" [ref=e62] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e63]:
        - link "Products" [ref=e64] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e65]:
        - link "Locations" [ref=e66] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e67]:
        - link "Forum" [ref=e68] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e69]:
        - link "Site Map" [ref=e70] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e71]:
        - link "Contact Us" [ref=e72] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e73]: © Parasoft. All rights reserved.
    - list [ref=e74]:
      - listitem [ref=e75]: "Visit us at:"
      - listitem [ref=e76]:
        - link "www.parasoft.com" [ref=e77] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import{test}from'@playwright/test';
  2  | import{LoginPage}from'../../../pages/loginPage';
  3  | import{TransferFundsPage}from'../../../pages/transferfundsPage';
  4  | import{OpenNewAccountPage}from'../../../pages/OpenAccountPage';
  5  | import loginData from'../../../test-data/logindata.json';
  6  | import transferData from'../../../test-data/transferFundsData.json';
  7  | import itransferfunddata from'../../../test-data/itransferfunddata.json';
  8  | import accountData from'../../../test-data/accountData.json';
  9  | 
  10 | test('transfer funds',async({page})=>{
  11 | await page.goto('https://parabank.parasoft.com/parabank');
  12 | await new LoginPage(page).login(loginData.username,loginData.password);
  13 | await new OpenNewAccountPage(page).openAccount(accountData.accountType,accountData.accountIndex);
  14 | await new TransferFundsPage(page).transferFunds(transferData.amount,transferData.toAccountIndex);
  15 | await page.waitForTimeout(5000);
  16 | await page.screenshot({ path: 'screenshots/valid_transfer.png' });
  17 | });
  18 | 
  19 | test('transfer funds with invalid data that is large amount of money',async({page})=>{
  20 | await page.goto('https://parabank.parasoft.com/parabank');
  21 | await new LoginPage(page).login(loginData.username,loginData.password);
  22 | await new TransferFundsPage(page).transferFunds(itransferfunddata.amount,transferData.toAccountIndex);
> 23 | await page.waitForTimeout(5000);
     |            ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  24 | await page.screenshot({ path: 'screenshots/invalid_transfer.png' });
  25 | });
  26 | // test('transfer funds with invalid data that is large amount of money',async({page})=>{
  27 | // await page.goto('https://parabank.parasoft.com/parabank');
  28 | // await new LoginPage(page).login(loginData.username,loginData.password);
  29 | // await new TransferFundsPage(page).transferFunds(itransferfunddata.amount);
  30 | // await page.waitForTimeout(5000);
  31 | // await page.screenshot({ path: 'screenshots/invalid_transfer.png' });
  32 | // });
  33 | 
  34 | // await page.locator('input[name="username"]').click();
  35 | // await page.locator('input[name="username"]').fill('Nikhil@123');
  36 | // await page.locator('input[name="password"]').click();
  37 | // await page.locator('input[name="password"]').fill('Nikhil@123');
  38 | // await page.getByRole('button', { name: 'Log In' }).click();
  39 | // await page.locator('input[name="username"]').click();
  40 | // await page.locator('input[name="username"]').fill('Nikhil@123');
  41 | // await page.locator('input[name="password"]').click();
  42 | // await page.locator('input[name="password"]').fill('Nikhil@123');
  43 | // await page.getByRole('button', { name: 'Log In' }).click();
  44 | // await page.getByRole('link', { name: 'Open New Account' }).click();
  45 | // await page.locator('#type').selectOption('1');
  46 | // await page.getByRole('button', { name: 'Open New Account' }).click();
  47 | // await page.getByRole('link', { name: 'Transfer Funds' }).click();
  48 | // await page.locator('#toAccountId').selectOption('14232');
  49 | // await page.locator('#amount').click();
  50 | // await page.locator('#amount').fill('100');
  51 | // await page.getByRole('button', { name: 'Transfer' }).click();
```