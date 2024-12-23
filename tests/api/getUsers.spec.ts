import { test } from '@playwright/test';
import { mustHaveProperties, validateUserValues } from '../helpers/assertions';
import dotenv from 'dotenv';
import { getUsers } from '../helpers/getUsers';
dotenv.config();

const apiToken = process.env.GOREST_API_TOKEN;
const MIN_USERS_COUNT = 1;

test.describe('GoRest API Testing - get list of users', () => {

    const ENDPOINT_URL = process.env.TEST_API_BASE_URL;

    test('Get users', async ({ request }) => {

        if (!apiToken || !ENDPOINT_URL) {
            throw new Error('API token or Base URL is not defined');
        }
        const usersList = await getUsers(request, apiToken, ENDPOINT_URL);

        if (usersList.length >= MIN_USERS_COUNT) {

            usersList.forEach((user: any) => {

                mustHaveProperties(user);

                validateUserValues(user);

            })
        }
    })
})