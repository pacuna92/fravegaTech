import { APIRequestContext } from '@playwright/test';

export async function getUsersById(request: APIRequestContext, apiToken: string, baseUrl: string, userId: string) {
    const response = await request.get(`${baseUrl}/users/${userId}`, {
        headers: {
            Authorization: `Bearer ${apiToken}`,
        },
    });

    const responseBody = await response.json();
    if (!response.ok()) {
        throw new Error('Failed to search for user by id');
    }

    return responseBody;
}