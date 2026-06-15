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
  14 | const fromAccountId = accountIds[0];
  15 | const toAccountId = accountIds[1];
  16 | 
  17 | const transferResponse = await request.post('https://parabank.parasoft.com/parabank/services/bank/transfer', {
  18 |   data: {
  19 |     fromAccountId,
  20 |     toAccountId,
  21 |     amount: 100,
  22 |   },
  23 | });
> 24 | expect(transferResponse.status()).toBe(200);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  25 | 
  26 | const r2 = await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
  27 | expect(r2.status()).toBe(200);
  28 | const after = await r2.text();
  29 | expect(after).toContain('<accounts>');
  30 | expect(after.length).toBeGreaterThan(0);
  31 | 
  32 | const parseBalance = (xml: string, accountId: string) => {
  33 |   const match = new RegExp(`<id>${accountId}</id>[\\s\\S]*?<amount>([0-9.]+)</amount>`).exec(xml);
  34 |   return match ? parseFloat(match[1]) : null;
  35 | };
  36 | 
  37 | const beforeFromBalance = parseBalance(before, fromAccountId);
  38 | const beforeToBalance = parseBalance(before, toAccountId);
  39 | const afterFromBalance = parseBalance(after, fromAccountId);
  40 | const afterToBalance = parseBalance(after, toAccountId);
  41 | 
  42 | expect(beforeFromBalance).not.toBeNull();
  43 | expect(beforeToBalance).not.toBeNull();
  44 | expect(afterFromBalance).not.toBeNull();
  45 | expect(afterToBalance).not.toBeNull();
  46 | 
  47 | expect(afterFromBalance).toBeCloseTo((beforeFromBalance ?? 0) - 100, 2);
  48 | expect(afterToBalance).toBeCloseTo((beforeToBalance ?? 0) + 100, 2);
  49 | 
  50 | });
```