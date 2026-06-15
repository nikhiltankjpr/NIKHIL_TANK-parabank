# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\e2e\invalidtranfer.spec.ts >> Invalid Transfer with API Check
- Location: tests\tests\e2e\invalidtranfer.spec.ts:8:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Transfer Funds' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
        - heading "Customer Login" [level=2] [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - paragraph [ref=e32]: Username
            - textbox [active] [ref=e34]
            - paragraph [ref=e35]: Password
            - textbox [ref=e37]
            - button "Log In" [ref=e39] [cursor=pointer]
          - paragraph [ref=e40]:
            - link "Forgot login info?" [ref=e41] [cursor=pointer]:
              - /url: lookup.htm
          - paragraph [ref=e42]:
            - link "Register" [ref=e43] [cursor=pointer]:
              - /url: register.htm
      - generic [ref=e44]:
        - heading "Error!" [level=1] [ref=e45]
        - paragraph [ref=e46]: The username and password could not be verified.
  - generic [ref=e48]:
    - list [ref=e49]:
      - listitem [ref=e50]:
        - link "Home" [ref=e51] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e52]:
        - link "About Us" [ref=e53] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e54]:
        - link "Services" [ref=e55] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e56]:
        - link "Products" [ref=e57] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e58]:
        - link "Locations" [ref=e59] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e60]:
        - link "Forum" [ref=e61] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e62]:
        - link "Site Map" [ref=e63] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e64]:
        - link "Contact Us" [ref=e65] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e66]: © Parasoft. All rights reserved.
    - list [ref=e67]:
      - listitem [ref=e68]: "Visit us at:"
      - listitem [ref=e69]:
        - link "www.parasoft.com" [ref=e70] [cursor=pointer]:
          - /url: http://www.parasoft.com/
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
     |                                                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
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