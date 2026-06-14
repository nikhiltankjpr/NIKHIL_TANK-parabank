import{test}from'@playwright/test';
import{RegisterPage}from'../../../pages/RegisterPage';
import data from'../../../test-data/registerdata.json';
import iddata from'../../../test-data/iregistrationdata.json';

test('register',async({page})=>{
await new RegisterPage(page).register(data);

await page.screenshot({ path: 'screenshots/registration.png' });
});

test('register with invalid data',async({page})=>{
await new RegisterPage(page).register(iddata);
await page.waitForTimeout(5000);
await page.screenshot({ path: 'screenshots/invalid_registration.png' });
});


// await page.getByRole('link', { name: 'Register' }).click();
// await page.locator('[id="customer.firstName"]').click();
// await page.locator('[id="customer.firstName"]').fill('Nikhil');
// await page.locator('[id="customer.lastName"]').click();
// await page.locator('[id="customer.lastName"]').fill('Tank');
// await page.locator('[id="customer.address.street"]').click();
// await page.locator('[id="customer.address.street"]').fill('10');
// await page.locator('[id="customer.address.city"]').click();
// await page.locator('[id="customer.address.city"]').fill('jai');
// await page.locator('[id="customer.address.state"]').click();
// await page.locator('[id="customer.address.state"]').fill('raj');
// await page.locator('[id="customer.address.zipCode"]').dblclick();
// await page.locator('[id="customer.address.zipCode"]').fill('302021');
// await page.locator('[id="customer.phoneNumber"]').dblclick();
// await page.locator('[id="customer.phoneNumber"]').fill('8282828282');
// await page.locator('[id="customer.ssn"]').dblclick();
// await page.locator('[id="customer.ssn"]').fill('10');
// await page.locator('[id="customer.username"]').dblclick();
// await page.locator('[id="customer.username"]').fill('Nik@123');
// await page.locator('[id="customer.password"]').dblclick();
// await page.locator('[id="customer.password"]').fill('Nik@123');
// await page.locator('#repeatedPassword').dblclick();
// await page.locator('#repeatedPassword').fill('Nik@123');
// await page.getByRole('button', { name: 'Register' }).click();