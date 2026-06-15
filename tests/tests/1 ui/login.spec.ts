import {test,expect} from '@playwright/test';
import {LoginPage} from '../../../pages/loginPage';
import logindata from '../../../test-data/logindata.json';

test('login',async({page})=>{
const login=new LoginPage(page);
await page.goto('https://parabank.parasoft.com/parabank');
await login.login(logindata.username,logindata.password);
await expect(page.getByText('Accounts Overview')).toBeVisible();
await page.screenshot({path:'login.png'});
});