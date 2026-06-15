# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api\acct & balance validation.spec.ts >> acct & balance validation
- Location: tests\tests\api\acct & balance validation.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | import {getCustomerId} from '../../../utils/Cust_idutilities';
  3  | test('acct & balance validation',async({request})=>{
  4  | const customerId=await getCustomerId(request);
  5  | const r1=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
  6  | const body=await r1.text();
  7  | console.log(body);
> 8  | expect(r1.status()).toBe(200);
     |                     ^ Error: expect(received).toBe(expected) // Object.is equality
  9  | expect(body).toContain(`<customerId>${customerId}</customerId>`);
  10 | expect(body).toContain('<type>CHECKING</type>');
  11 | expect(body).toContain('<balance>');
  12 | });
```