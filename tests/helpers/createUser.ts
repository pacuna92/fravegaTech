import { APIRequestContext } from '@playwright/test';
import { userData } from '../fixtures/goRest/dataCreateUser';

export async function createUser(request: APIRequestContext, apiToken: string, baseUrl: string) {

  const response = await request.post(`${baseUrl}/users`, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
    data: userData
  });

  const responseBody = await response.json();
  if (!response.ok()) {
    throw new Error('Failed to fetch users');
  }

  return responseBody;
}