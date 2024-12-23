import { test, expect, request } from '@playwright/test';
import { userData } from '../fixtures/goRest/dataCreateUser';
import { assertionsCreateUser } from '../helpers/assertions';
import dotenv from 'dotenv';
dotenv.config();
const apiToken = process.env.GOREST_API_TOKEN;

test.describe('GoRest API Testing', () => {
    let userId: number;
    const ENDPOINT_URL = process.env.TEST_API_BASE_URL;
    test('Create new user', async ({ request }) => {
        const response = await request.post(`${ENDPOINT_URL}/users`, {
            headers: {
                Authorization: `Bearer ${apiToken}`
            },
            data: userData
        });
        const responseBody = await response.json();
        expect(response.ok()).toBeTruthy();
        expect(responseBody.id).toBeDefined();
        userId = responseBody.id;
        assertionsCreateUser(responseBody, userData, userId);
    });
})