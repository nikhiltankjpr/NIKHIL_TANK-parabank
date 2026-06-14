import{test,expect}from'@playwright/test';
import{AccountsApi}from'../../../pages/acctapiApi';
test('get accounts',async({request})=>{
const response=await new AccountsApi(request).getAccounts();
expect(response.status()).toBe(200);
console.log(await response.text());
});