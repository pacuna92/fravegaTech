import { expect } from '@playwright/test';
export function assertionsCreateUser(responseBody: any, expectedData: any, userId: number) {
    expect(responseBody).toEqual(
        expect.objectContaining({
            id: userId,
            name: expectedData.name,
            email: expectedData.email,
            gender: expectedData.gender,
            status: expectedData.status,
        })
    )
}

export function mustHaveProperties(responseBody: any) {
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('name');
    expect(responseBody).toHaveProperty('email');
    expect(responseBody).toHaveProperty('gender');
    expect(responseBody).toHaveProperty('status');
}

export function validateUserValues(responseBody: any) {
    expect(responseBody.id).toBeGreaterThan(0);
    expect(responseBody.name).toBeTruthy();
    expect(responseBody.email).toMatch(/@/);
    expect(['male', 'female']).toContain(responseBody.gender);
    expect(['active', 'inactive']).toContain(responseBody.status);
}