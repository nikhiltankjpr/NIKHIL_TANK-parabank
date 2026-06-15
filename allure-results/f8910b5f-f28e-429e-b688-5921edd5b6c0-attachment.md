# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\performance\apiresponsetime.spec.ts >> API Response Time
- Location: tests\tests\performance\apiresponsetime.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import{test,expect}from'@playwright/test';
  2  | import{getCustomerId}from'../../../utils/Cust_idutilities';
  3  | 
  4  | test('API Response Time',async({request,page})=>{
  5  | const customerId=await getCustomerId(request);
  6  | const start=Date.now();
  7  | const response=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
  8  | const end=Date.now();
  9  | const responseTime=end-start;
  10 | console.log('Response Time:',responseTime,'ms');
> 11 | expect(response.status()).toBe(200);
     |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  12 | expect(responseTime).toBeLessThan(5000);
  13 | await page.screenshot({path:'screenshots/api_response_time.png'});
  14 | });
```