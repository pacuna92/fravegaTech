import { Page } from '@playwright/test';
class HomePage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    get searchbox() {
        return this.page.locator('input[name="keyword"][placeholder="Buscar productos"]');
    }

    get searchIcon() {
        return this.page.locator('button[type="submit"].sc-iEXKAA');
    }

    // Methods
    async searchProduct(productName: string) {
        await this.searchbox.fill('');
        await this.searchbox.fill(productName);
        await this.searchIcon.click();
    }

    async validateZipCode(zipCode: string) {
        const elemento = this.page.locator('b.sc-fyVfxW.jkfzEe', { hasText: `(${zipCode})` })
        return elemento.textContent();
    }
}

export default HomePage;