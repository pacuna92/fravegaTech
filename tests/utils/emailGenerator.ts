export function generateUniqueEmail() {
    const timestamp = Date.now();
    return `user${timestamp}@gorest.com`;
};