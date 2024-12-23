import { expect } from '@playwright/test';
export function assertionsCreateUser(responseBody: any, expectedData: any, id: number) {
    expect(responseBody).toEqual(
        expect.objectContaining({
            id: expect.any(Number),
            name: expectedData.name,
            email: expectedData.email,
            gender: expectedData.gender,
            status: expectedData.status,
        })
    )
}