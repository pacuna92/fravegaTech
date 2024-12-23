import { test, expect } from '@playwright/test';
import { mustHaveProperties, validateUserValues } from '../helpers/assertions';
import dotenv from 'dotenv';
dotenv.config();
const apiToken = process.env.GOREST_API_TOKEN;
const MAX_PER_PAG = 10
const MIN_USERS_COUNT = 1;
test.describe('GoRest API Testing - get list of users', () => {
    const ENDPOINT_URL = process.env.TEST_API_BASE_URL;
    test('Get users', async ({ request }) => {
        const response = await request.get(`${ENDPOINT_URL}/users?${MAX_PER_PAG}`, {
            headers: {
                Authorization: `Bearer ${apiToken}`
            }
        });
        const responseBody = await response.json();
        expect(response.ok()).toBeTruthy();
        if (responseBody.length >= MIN_USERS_COUNT) {
            responseBody.forEach((user: any) => {
                mustHaveProperties(user);
                validateUserValues(user);
            })
        }
    })
})