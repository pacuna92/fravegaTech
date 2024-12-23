import { Page } from '@playwright/test';

class ZipCodePopUp {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    get zipCodeInput() {
        return this.page.locator('data-test-id=header-geo-location-form-postal-number');
    }
    get saveButton() {
        return this.page.locator('data-test-id=button-save-postal-code');
    }
    get closeButton() {
        return this.page.locator('data-test-id=close-modal-button');
    }

    get modal() {
        return this.page.locator('data-test-id=geo-modal-wrapper');
    }

    // Methods
    async enterPostalCode(postalCode: string): Promise<void> {
        await this.waitForModalToLoad();
        await this.zipCodeInput.waitFor({ state: 'visible' });
        await this.zipCodeInput.click({timeout: 10000});
        await this.zipCodeInput.fill(postalCode);
        await this.saveButton.click();
    }

    async closePopup(): Promise<void> {
        if (await this.closeButton.isVisible()) {
            await this.closeButton.click();
        }
    }

    async waitForModalToLoad() {
        await this.modal.waitFor({ state: 'visible' });
    }
}

export default ZipCodePopUp;