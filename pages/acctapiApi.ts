import { APIRequestContext } from '@playwright/test';
import data from '../test-data/actapidata.json';

export class AccountsApi {

    constructor(private request: APIRequestContext) {}

    async getAccounts() {

        return await this.request.get(
            `https://parabank.parasoft.com/parabank/services/bank/customers/${data.customerId}/accounts`
        );
    }
}