import {test,expect}from'@playwright/test';
import {LoginPage} from '../../../pages/loginPage';
import {OpenNewAccountPage} from '../../../pages/OpenAccountPage';
import {getCustomerId} from '../../../utils/Cust_idutilities';
import loginData from '../../../test-data/logindata.json';
import accountData from '../../../test-data/accountData2.json';

test('Create Account UI + Verify API',async({page,request})=>{
await page.goto('https://parabank.parasoft.com/parabank');
const login=new LoginPage(page);
const account=new OpenNewAccountPage(page);
await login.login(loginData.username,loginData.password);
await page.getByRole('link',{name:'Open New Account'}).click();
await page.waitForFunction(()=>{
const select=document.querySelector('#fromAccountId') as HTMLSelectElement;
return select&&select.options.length>0;
});
await page.waitForTimeout(5000);
await account.openAccount(accountData.accountType,accountData.accountIndex);
const accountNo=await page.locator('#newAccountId').textContent();
console.log('Created Account:',accountNo);
const customerId=await getCustomerId(request);
const response=await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`);
const body=await response.text();
console.log(body);
expect(response.status()).toBe(200);
expect(body).toContain(accountNo!.trim());
await page.screenshot({path:'screenshots/create_account_api_validation.png'});
});