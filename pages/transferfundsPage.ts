
// await page.getByRole('link', { name: 'Transfer Funds' }).click();
// await page.locator('#amount').click();
// await page.locator('#amount').fill('15');
// await page.getByRole('button', { name: 'Transfer' }).click();

// import{Page}from'@playwright/test';

// export class TransferFundsPage{
// constructor(private page:Page){}
// async transferFunds(amount:string){
// await this.page.getByRole('link',{name:'Transfer Funds'}).click();
// await this.page.locator('#amount').fill(amount);
// await this.page.getByRole('button',{name:'Transfer'}).click();
// }
// }

import{Page}from'@playwright/test';

export class TransferFundsPage{
constructor(private page:Page){}
async transferFunds(amount:string,toAccountIndex:number){
await this.page.getByRole('link',{name:'Transfer Funds'}).click();
await this.page.locator('#toAccountId').selectOption({index:toAccountIndex});
await this.page.locator('#amount').fill(amount);
await this.page.getByRole('button',{name:'Transfer'}).click();
}
}