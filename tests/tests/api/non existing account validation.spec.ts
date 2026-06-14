import {test,expect} from '@playwright/test';
test('non existing account validation',async({request})=>{
const r1=await request.get('https://parabank.parasoft.com/parabank/services/bank/customers/99999999/accounts');
console.log('Status :',r1.status());
const body=await r1.text();
console.log(body);
expect(body.length).toBeGreaterThan(0);
});