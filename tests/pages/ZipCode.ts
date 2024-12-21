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
        return this.page.locator('data-test-id=geo-modal-wrapper'); // Selector del modal
    }

    // Methods
    async enterPostalCode(postalCode: string) {
        await this.waitForModalToLoad();
        await this.zipCodeInput.click();
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