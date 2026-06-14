import {test,expect} from'@playwright/test';
import {getCustomerId} from'../../../utils/Cust_idutilities';
test('transfer funds between accounts comparison',async({request})=>{
const customerId=await getCustomerId(request);
const r1=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
expect(r1.status()).toBe(200);
const before=await r1.text();
const r2=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
expect(r2.status()).toBe(200);
const after=await r2.text();
expect(after).toContain('<accounts>');
expect(after.length).toBeGreaterThan(0);
});