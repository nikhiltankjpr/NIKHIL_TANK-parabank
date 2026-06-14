import{Page}from'@playwright/test';

export class RegisterPage{
constructor(private page:Page){}
async register(data:any){
await this.page.goto('https://parabank.parasoft.com/parabank');
await this.page.getByRole('link',{name:'Register'}).click();
await this.page.locator('#customer\\.firstName').fill(data.firstName);
await this.page.locator('#customer\\.lastName').fill(data.lastName);
await this.page.locator('#customer\\.address\\.street').fill(data.street);
await this.page.locator('#customer\\.address\\.city').fill(data.city);
await this.page.locator('#customer\\.address\\.state').fill(data.state);
await this.page.locator('#customer\\.address\\.zipCode').fill(data.zipCode);
await this.page.locator('#customer\\.phoneNumber').fill(data.phone);
await this.page.locator('#customer\\.ssn').fill(data.ssn);
await this.page.locator('#customer\\.username').fill(data.username);
await this.page.locator('#customer\\.password').fill(data.password);
await this.page.locator('#repeatedPassword').fill(data.password);
await this.page.getByRole('button',{name:'Register'}).click();
}
}