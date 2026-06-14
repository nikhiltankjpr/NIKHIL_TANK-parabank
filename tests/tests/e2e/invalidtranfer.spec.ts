import{test,expect}from'@playwright/test';
import{LoginPage}from'../../../pages/loginPage';
import{TransferFundsPage}from'../../../pages/transferfundsPage';
import{getCustomerId}from'../../../utils/Cust_idutilities';
import loginData from'../../../test-data/logindata.json';
import itransferfunddata from'../../../test-data/itfd.json';

test('Invalid Transfer with API Check',async({page,request})=>{
await page.goto('https://parabank.parasoft.com/parabank');
await new LoginPage(page).login(loginData.username,loginData.password);
const customerId=await getCustomerId(request);
const beforeResponse=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
const beforeBody=await beforeResponse.text();

await page.getByRole('link',{name:'Transfer Funds'}).click();

await page.waitForFunction(()=>{
const select=document.querySelector('#toAccountId') as HTMLSelectElement;
return select&&select.options.length>0;
});
await page.goBack();
await new TransferFundsPage(page).transferFunds(
itransferfunddata.amount,
itransferfunddata.toAccountIndex
);
const afterResponse=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
const afterBody=await afterResponse.text();
expect(afterResponse.status()).toBe(200);
expect(beforeBody.length).toBeGreaterThan(0);
expect(afterBody.length).toBeGreaterThan(0);
await page.screenshot({path:'screenshots/invalid_transfer.png'});
});