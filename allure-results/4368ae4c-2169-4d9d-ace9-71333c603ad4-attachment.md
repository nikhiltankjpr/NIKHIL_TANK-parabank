# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api\transfer funds between accounts comparison.spec.ts >> transfer funds between accounts comparison
- Location: tests\tests\api\transfer funds between accounts comparison.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import {test,expect} from'@playwright/test';
  2  | import {getCustomerId} from'../../../utils/Cust_idutilities';
  3  | test('transfer funds between accounts comparison',async({request})=>{
  4  | const customerId=await getCustomerId(request);
  5  | const r1=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
> 6  | expect(r1.status()).toBe(200);
     |                     ^ Error: expect(received).toBe(expected) // Object.is equality
  7  | const before=await r1.text();
  8  | const r2=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
  9  | expect(r2.status()).toBe(200);
  10 | const after=await r2.text();
  11 | expect(after).toContain('<accounts>');
  12 | expect(after.length).toBeGreaterThan(0);
  13 | });
```