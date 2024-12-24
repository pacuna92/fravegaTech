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

    get cartButton() {
        return this.page.locator('[data-test-id="button-cart"]');
    }

    get linkGoToCartButton() {
        return this.page.locator('[data-test-id="link-go-to-cart"]')
    }

    // Methods
    async searchProduct(productName: string) {
        await this.searchbox.fill('');
        await this.searchbox.fill(productName);
        await this.searchIcon.click();
    }

    async validateZipCode(zipCode: string) {
        const ZC_LABEL = this.page.locator('b.sc-fyVfxW.jkfzEe', { hasText: `(${zipCode})` })
        return ZC_LABEL.textContent();
    }

    async goToCart(){
        await this.cartButton.waitFor({ state: 'visible' });
        await this.cartButton.click();
        await this.linkGoToCartButton.waitFor({ state: 'visible' })
        await this.linkGoToCartButton.click();
    }
}

export default HomePage;