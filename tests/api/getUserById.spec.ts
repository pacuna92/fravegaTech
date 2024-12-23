import { test, expect } from '@playwright/test';
import { getUsers } from '../helpers/getUsers';
import dotenv from 'dotenv';
import { getUsersById } from '../helpers/getUserById';
import { mustHaveProperties, validateUserValues } from '../helpers/assertions';
dotenv.config();

const apiToken = process.env.GOREST_API_TOKEN;
const ENDPOINT_URL = process.env.TEST_API_BASE_URL;

test.describe('GoRest API Testing - Get user by id', () => {

    test('Get user by id', async ({ request }) => {
        if (!apiToken || !ENDPOINT_URL) {
            throw new Error('API token or Base URL is not defined');
        }
        const usersList = await getUsers(request, apiToken, ENDPOINT_URL);

        const userId = usersList[0]?.id;

        expect(userId).toBeDefined();

        const responseBody = await getUsersById(request, apiToken, ENDPOINT_URL, userId);

        mustHaveProperties(responseBody);

        validateUserValues(responseBody);

    });
});