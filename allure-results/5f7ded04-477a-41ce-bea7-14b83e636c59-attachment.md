# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api\newly created account validation.spec.ts >> newly created account validation
- Location: tests\tests\api\newly created account validation.spec.ts:4:5

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
  3  | 
  4  | test('newly created account validation',async({request})=>{
  5  | const customerId=await getCustomerId(request);
  6  | const r1=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
  7  | const body=await r1.text();
> 8  | expect(r1.status()).toBe(200);
     |                     ^ Error: expect(received).toBe(expected) // Object.is equality
  9  | expect(body).toContain('<id>');
  10 | expect(body).toContain(`<customerId>${customerId}</customerId>`);
  11 | expect(body).toContain('<type>');
  12 | expect(body).toContain('<balance>');
  13 | });
```