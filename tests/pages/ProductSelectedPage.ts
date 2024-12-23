import { Page } from '@playwright/test';

class ProductSelectedPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    get addToCartButton() {
        return this.page.locator('div[data-test-id="product-info"] button.sc-2ec5050c-0.RGnjC').last();
    }

    get buyButton() {
        return this.page.locator('[data-test-id="product-buy-button"]');
    }

    get productAdded() {
        return this.page.locator('h1', { hasText: 'Agregaste el producto' });
    }

    // Methods
    async addProductToCart() {
        await this.addToCartButton.click();
    }
    
}

export default ProductSelectedPage;