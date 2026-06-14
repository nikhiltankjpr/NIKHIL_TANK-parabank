import {test,expect} from '@playwright/test';
import {getCustomerId} from '../../../utils/Cust_idutilities';
test('acct & balance validation',async({request})=>{
const customerId=await getCustomerId(request);
const r1=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
const body=await r1.text();
console.log(body);
expect(r1.status()).toBe(200);
expect(body).toContain(`<customerId>${customerId}</customerId>`);
expect(body).toContain('<type>CHECKING</type>');
expect(body).toContain('<balance>');
});