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
Received: 400
```

# Test source

```ts
  1  | import {test,expect} from'@playwright/test';
  2  | import {getCustomerId} from'../../../utils/Cust_idutilities';
  3  | test('transfer funds between accounts comparison',async({request})=>{
  4  | const customerId=await getCustomerId(request);
  5  | const r1=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
  6  | expect(r1.status()).toBe(200);
  7  | const before = await r1.text();
  8  | expect(before).toContain('<accounts>');
  9  | expect(before.length).toBeGreaterThan(0);
  10 | 
  11 | const accountIds = Array.from(before.matchAll(/<id>(\d+)<\/id>/g), (match) => match[1]);
  12 | expect(accountIds.length).toBeGreaterThan(1);
  13 | 
  14 | const transferResponse = await request.post('https://parabank.parasoft.com/parabank/services/bank/transfer', {
  15 |   data: {
  16 |     fromAccountId: accountIds[0],
  17 |     toAccountId: accountIds[1],
  18 |     amount: 100,
  19 |   },
  20 | });
> 21 | expect(transferResponse.status()).toBe(200);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  22 | 
  23 | const r2 = await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
  24 | expect(r2.status()).toBe(200);
  25 | const after = await r2.text();
  26 | expect(after).toContain('<accounts>');
  27 | expect(after.length).toBeGreaterThan(0);
  28 | expect(before).not.toBe(after);
  29 | 
  30 | });
```