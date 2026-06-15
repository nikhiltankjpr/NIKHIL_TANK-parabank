import{test}from'@playwright/test';
import{LoginPage}from'../../../pages/loginPage';
import{OpenNewAccountPage}from'../../../pages/OpenAccountPage';
import loginData from'../../../test-data/logindata.json';
import accountData from'../../../test-data/accountData.json';

test('open savings account',async({page})=>{
await page.goto('https://parabank.parasoft.com/parabank');
await new LoginPage(page).login(loginData.username,loginData.password);
await new OpenNewAccountPage(page).openAccount(accountData.accountType);

await page.screenshot({ path: 'screenshots/open_new_account.png' });
});