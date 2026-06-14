import{test,expect}from'@playwright/test';
import{getCustomerId}from'../../../utils/Cust_idutilities';

test('API Response Time',async({request,page})=>{
const customerId=await getCustomerId(request);
const start=Date.now();
const response=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
const end=Date.now();
const responseTime=end-start;
console.log('Response Time:',responseTime,'ms');
expect(response.status()).toBe(200);
expect(responseTime).toBeLessThan(5000);
await page.screenshot({path:'screenshots/api_response_time.png'});
});