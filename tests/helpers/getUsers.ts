import { APIRequestContext } from '@playwright/test';

export async function getUsers(request: APIRequestContext, apiToken: string, baseUrl: string) {

    const response = await request.get(`${baseUrl}/users`, {
        headers: {
            Authorization: `Bearer ${apiToken}`,
        },
    });

    const usersList = await response.json();
    if (!response.ok()) {
        throw new Error('Failed to get users');
    }

    return usersList;
}