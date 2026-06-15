# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\1 ui\1newregister.spec.ts >> register with invalid data
- Location: tests\tests\1 ui\1newregister.spec.ts:12:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Register' })

```

# Test source

```ts
  1  | import{Page}from'@playwright/test';
  2  | 
  3  | export class RegisterPage{
  4  | constructor(private page:Page){}
  5  | async register(data:any){
  6  | await this.page.goto('https://parabank.parasoft.com/parabank');
> 7  | await this.page.getByRole('link',{name:'Register'}).click();
     |                                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  8  | await this.page.locator('#customer\\.firstName').fill(data.firstName);
  9  | await this.page.locator('#customer\\.lastName').fill(data.lastName);
  10 | await this.page.locator('#customer\\.address\\.street').fill(data.street);
  11 | await this.page.locator('#customer\\.address\\.city').fill(data.city);
  12 | await this.page.locator('#customer\\.address\\.state').fill(data.state);
  13 | await this.page.locator('#customer\\.address\\.zipCode').fill(data.zipCode);
  14 | await this.page.locator('#customer\\.phoneNumber').fill(data.phone);
  15 | await this.page.locator('#customer\\.ssn').fill(data.ssn);
  16 | await this.page.locator('#customer\\.username').fill(data.username);
  17 | await this.page.locator('#customer\\.password').fill(data.password);
  18 | await this.page.locator('#repeatedPassword').fill(data.password);
  19 | await this.page.getByRole('button',{name:'Register'}).click();
  20 | }
  21 | }
```