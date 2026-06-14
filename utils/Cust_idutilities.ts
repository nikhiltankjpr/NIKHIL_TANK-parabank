import {APIRequestContext}from'@playwright/test';
import loginData from '../test-data/logindata.json';
export async function getCustomerId(request:APIRequestContext):Promise<string|undefined>{
const response=await request.get(`https://parabank.parasoft.com/parabank/services/bank/login/${loginData.username}/${loginData.password}`);
const body=await response.text();
const customerId=body.match(/<id>(\d+)<\/id>/)?.[1];
return customerId;
}