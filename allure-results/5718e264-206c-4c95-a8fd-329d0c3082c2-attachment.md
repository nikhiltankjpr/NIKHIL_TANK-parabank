# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api\GETacct.spec.ts >> get accounts
- Location: tests\tests\api\GETacct.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
```

# Test source

```ts
  1 | import{test,expect}from'@playwright/test';
  2 | import{AccountsApi}from'../../../pages/acctapiApi';
  3 | test('get accounts',async({request})=>{
  4 | const response=await new AccountsApi(request).getAccounts();
> 5 | expect(response.status()).toBe(200);
    |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  6 | console.log(await response.text());
  7 | });
```