import {test, expect}from'@playwright/test';
import invalidCustData from '../../../test-data/INVALIDcustid.json';

test('Invalid credentials validation', async ({ request }) => {
    const invalidCustomerId = (invalidCustData as any).customerId ?? (invalidCustData as any).id ?? invalidCustData;
    const r1 = await request.get(`https://parabank.parasoft.com/parabank/services/bank/customers/${invalidCustomerId}/accounts`);
    console.log('Status :', r1.status());
    const body = await r1.text();
    console.log(body);
    expect(body.length).toBeGreaterThan(0);
});