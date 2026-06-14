# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\performance\apiresponsetime.spec.ts >> API Response Time
- Location: tests\tests\performance\apiresponsetime.spec.ts:3:5

# Error details

```
ReferenceError: page is not defined
```

# Test source

```ts
  1  | import{test,expect}from'@playwright/test';
  2  | 
  3  | test('API Response Time',async({request})=>{
  4  | const start=Date.now();
  5  | 
  6  | const response=await request.get(
  7  | 'https://parabank.parasoft.com/parabank/services/bank/customers/12212/accounts'
  8  | );
  9  | 
  10 | const end=Date.now();
  11 | 
  12 | const responseTime=end-start;
  13 | 
  14 | console.log('Response Time:',responseTime,'ms');
  15 | 
  16 | expect(response.status()).toBe(200);
  17 | expect(responseTime).toBeLessThan(5000);
  18 | 
> 19 | await page.screenshot({ path: 'screenshots/api_response_time.png' });
     |  ^ ReferenceError: page is not defined
  20 | });
```