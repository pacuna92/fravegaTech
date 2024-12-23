import { test, expect } from '@playwright/test';
import { userData } from '../fixtures/goRest/dataCreateUser';
import { assertionsCreateUser } from '../helpers/assertions';
import dotenv from 'dotenv';
import { createUser } from '../helpers/createUser';
dotenv.config();
const apiToken = process.env.GOREST_API_TOKEN;

test.describe('GoRest API Testing', () => {
    let userId: number;

    const ENDPOINT_URL = process.env.TEST_API_BASE_URL;

    test('Create new user', async ({ request }) => {

        if (!apiToken || !ENDPOINT_URL) {

            throw new Error('API token or Base URL is not defined');

        }
        const responseBody = await createUser(request, apiToken, ENDPOINT_URL);

        expect(responseBody.id).toBeDefined();

        userId = responseBody.id;

        assertionsCreateUser(responseBody, userData, userId);

    });
})