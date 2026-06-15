import {test,expect} from'@playwright/test';
import {getCustomerId} from'../../../utils/Cust_idutilities';
test('transfer funds validation',async({request})=>{
const customerId=await getCustomerId(request);
const from='12345';
const to='54321';
const amt=100;
const b1=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
expect(b1.status()).toBe(200);
const before=await b1.text();
await request.post(`https://parabank.parasoft.com/parabank/services/bank/transfer`,{
data:{fromAccountId:from,toAccountId:to,amount:amt}
});
const b2=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
expect(b2.status()).toBe(200);
const after=await b2.text();
expect(after).toContain('<accounts>');
expect(after.length).toBeGreaterThan(0);
});


// import {test,expect} from'@playwright/test';
// import {getCustomerId} from'../../../utils/Cust_idutilities';
// test('transfer funds between accounts comparison',async({request})=>{
// const customerId=await getCustomerId(request);
// const r1=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
// expect(r1.status()).toBe(200);
// const before=await r1.text();
// expect(before).toContain('<accounts>');
// expect(before.length).toBeGreaterThan(0);


// await request.post(`https://parabank.parasoft.com/parabank/services/bank/transfer`,{
// data:{fromAccountId:'12345',toAccountId:'54321',amount:100}
// });
// const r2=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
// expect(r2.status()).toBe(200);
// const after=await r2.text();
// expect(after).toContain('<accounts>');
// expect(after.length).toBeGreaterThan(0);
// });