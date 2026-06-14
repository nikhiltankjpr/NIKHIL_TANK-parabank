import{test,expect}from'@playwright/test';
import{LoginPage}from'../../../pages/loginPage';
import{OpenNewAccountPage}from'../../../pages/OpenAccountPage';
import{TransferFundsPage}from'../../../pages/transferfundsPage';
import{getCustomerId}from'../../../utils/Cust_idutilities';
import loginData from'../../../test-data/logindata.json';
import accountData from'../../../test-data/accountData2.json';
import transferData from'../../../test-data/transferFundsData.json';

test('Full Account Lifecycle',async({page,request})=>{
await page.goto('https://parabank.parasoft.com/parabank');
await new LoginPage(page).login(loginData.username,loginData.password);
await page.getByRole('link',{name:'Open New Account'}).click();
await page.waitForFunction(()=>{
const select=document.querySelector('#fromAccountId') as HTMLSelectElement;
return select&&select.options.length>0;
});
await new OpenNewAccountPage(page).openAccount(accountData.accountType,accountData.accountIndex);
const accountNo=await page.locator('#newAccountId').textContent();
await new TransferFundsPage(page).transferFunds(transferData.amount,transferData.toAccountIndex);
await expect(page.getByText('Transfer Complete!')).toBeVisible();
const customerId=await getCustomerId(request);
const response=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
const body=await response.text();
expect(response.status()).toBe(200);
expect(body).toContain(accountNo!.trim());
await page.screenshot({path:'screenshots/full_account_lifecycle.png'});
});