import{test}from'@playwright/test';
import{LoginPage}from'../../../pages/loginPage';
import{TransferFundsPage}from'../../../pages/transferfundsPage';
import{OpenNewAccountPage}from'../../../pages/OpenAccountPage';
import loginData from'../../../test-data/logindata.json';
import transferData from'../../../test-data/transferFundsData.json';
import itransferfunddata from'../../../test-data/itransferfunddata.json';
import accountData from'../../../test-data/accountData.json';

test('transfer funds',async({page})=>{
await page.goto('https://parabank.parasoft.com/parabank');
await new LoginPage(page).login(loginData.username,loginData.password);
await new OpenNewAccountPage(page).openAccount(accountData.accountType,accountData.accountIndex);
await new TransferFundsPage(page).transferFunds(transferData.amount,transferData.toAccountIndex);
await page.waitForTimeout(5000);
await page.screenshot({ path: 'screenshots/valid_transfer.png' });
});

test('transfer funds with invalid data that is large amount of money',async({page})=>{
await page.goto('https://parabank.parasoft.com/parabank');
await new LoginPage(page).login(loginData.username,loginData.password);
await new TransferFundsPage(page).transferFunds(itransferfunddata.amount,transferData.toAccountIndex);
await page.waitForTimeout(5000);
await page.screenshot({ path: 'screenshots/invalid_transfer.png' });
});
// test('transfer funds with invalid data that is large amount of money',async({page})=>{
// await page.goto('https://parabank.parasoft.com/parabank');
// await new LoginPage(page).login(loginData.username,loginData.password);
// await new TransferFundsPage(page).transferFunds(itransferfunddata.amount);
// await page.waitForTimeout(5000);
// await page.screenshot({ path: 'screenshots/invalid_transfer.png' });
// });

// await page.locator('input[name="username"]').click();
// await page.locator('input[name="username"]').fill('Nikhil@123');
// await page.locator('input[name="password"]').click();
// await page.locator('input[name="password"]').fill('Nikhil@123');
// await page.getByRole('button', { name: 'Log In' }).click();
// await page.locator('input[name="username"]').click();
// await page.locator('input[name="username"]').fill('Nikhil@123');
// await page.locator('input[name="password"]').click();
// await page.locator('input[name="password"]').fill('Nikhil@123');
// await page.getByRole('button', { name: 'Log In' }).click();
// await page.getByRole('link', { name: 'Open New Account' }).click();
// await page.locator('#type').selectOption('1');
// await page.getByRole('button', { name: 'Open New Account' }).click();
// await page.getByRole('link', { name: 'Transfer Funds' }).click();
// await page.locator('#toAccountId').selectOption('14232');
// await page.locator('#amount').click();
// await page.locator('#amount').fill('100');
// await page.getByRole('button', { name: 'Transfer' }).click();