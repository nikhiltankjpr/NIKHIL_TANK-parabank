import{test,expect}from'@playwright/test';
import{getCustomerId}from'../../../utils/Cust_idutilities';

test('Concurrent Requests',async({request,page})=>{
const customerId=await getCustomerId(request);
const requests=[
request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`),
request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`),
request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`),
request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`),
request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`)];
const responses=await Promise.all(requests);
for(const response of responses){
expect(response.status()).toBe(200);}
await page.screenshot({path:'screenshots/concurrent_requests.png'});
});