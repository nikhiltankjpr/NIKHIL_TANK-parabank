# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\e2e\CreateAccountVerifyAPI.spec.ts >> Create Account UI + Verify API
- Location: tests\tests\e2e\CreateAccountVerifyAPI.spec.ts:7:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#fromAccountId')
    - locator resolved to <select class="input" id="fromAccountId"></select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    46 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - paragraph [ref=e29]: Welcome nikhil tank
        - heading "Account Services" [level=2] [ref=e30]
        - list [ref=e31]:
          - listitem [ref=e32]:
            - link "Open New Account" [ref=e33]:
              - /url: openaccount.htm
          - listitem [ref=e34]:
            - link "Accounts Overview" [ref=e35]:
              - /url: overview.htm
          - listitem [ref=e36]:
            - link "Transfer Funds" [ref=e37]:
              - /url: transfer.htm
          - listitem [ref=e38]:
            - link "Bill Pay" [ref=e39]:
              - /url: billpay.htm
          - listitem [ref=e40]:
            - link "Find Transactions" [ref=e41]:
              - /url: findtrans.htm
          - listitem [ref=e42]:
            - link "Update Contact Info" [ref=e43]:
              - /url: updateprofile.htm
          - listitem [ref=e44]:
            - link "Request Loan" [ref=e45]:
              - /url: requestloan.htm
          - listitem [ref=e46]:
            - link "Log Out" [ref=e47]:
              - /url: logout.htm
      - generic [ref=e50]:
        - heading "Open New Account" [level=1] [ref=e51]
        - generic [ref=e52]:
          - paragraph [ref=e53]: What type of Account would you like to open?
          - combobox [ref=e54]:
            - option "CHECKING"
            - option "SAVINGS" [selected]
          - paragraph [ref=e55]: A minimum of $100.00 must be deposited into this account at time of opening. Please choose an existing account to transfer funds into the new account.
          - combobox [ref=e56]:
            - option "13566" [selected]
          - button "Open New Account" [ref=e58] [cursor=pointer]
  - generic [ref=e60]:
    - list [ref=e61]:
      - listitem [ref=e62]:
        - link "Home" [ref=e63]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e64]:
        - link "About Us" [ref=e65]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e66]:
        - link "Services" [ref=e67]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e68]:
        - link "Products" [ref=e69]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e70]:
        - link "Locations" [ref=e71]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e72]:
        - link "Forum" [ref=e73]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e74]:
        - link "Site Map" [ref=e75]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e76]:
        - link "Contact Us" [ref=e77]:
          - /url: contact.htm
    - paragraph [ref=e78]: © Parasoft. All rights reserved.
    - list [ref=e79]:
      - listitem [ref=e80]: "Visit us at:"
      - listitem [ref=e81]:
        - link "www.parasoft.com" [ref=e82]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export class OpenNewAccountPage {
  4  |     constructor(private page: Page) {}
  5  |     async openAccount(accountType: string, accountIndex: number) {
  6  |         await this.page.getByRole('link', { name: 'Open New Account' }).click();
  7  |         await this.page.locator('#type').selectOption(accountType);
  8  |         await this.page.locator('#fromAccountId')
> 9  |             .selectOption({ index: accountIndex });
     |              ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
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