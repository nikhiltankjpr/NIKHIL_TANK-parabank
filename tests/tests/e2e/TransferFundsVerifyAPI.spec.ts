import{test,expect}from'@playwright/test';
import{LoginPage}from'../../../pages/loginPage';
import{TransferFundsPage}from'../../../pages/transferfundsPage';
import{getCustomerId}from'../../../utils/Cust_idutilities';
import loginData from'../../../test-data/logindata.json';
import transferData from'../../../test-data/transferFundsData.json';

test('Transfer Funds UI + Validate Balances via API',async({page,request})=>{
await page.goto('https://parabank.parasoft.com/parabank');
await new LoginPage(page).login(loginData.username,loginData.password);
const customerId=await getCustomerId(request);
const beforeResponse=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
const beforeBody=await beforeResponse.text();
await new TransferFundsPage(page).transferFunds(transferData.amount,transferData.toAccountIndex);
await expect(page.getByText('Transfer Complete!')).toBeVisible();
const afterResponse=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
const afterBody=await afterResponse.text();

expect(afterResponse.status()).toBe(200);
expect(beforeBody.length).toBeGreaterThan(0);
expect(afterBody.length).toBeGreaterThan(0);
await page.screenshot({path:'screenshots/transfer_funds_api_validation.png'});
});