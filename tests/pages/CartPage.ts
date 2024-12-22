import { Page } from '@playwright/test';

class CartPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    get productTitle() {
        return this.page.locator('div.sc-b6a50d62-5');
    }

    //Methods
    async validateProductAdded() {
        await this.page.waitForSelector('div.sc-b6a50d62-5', {
            state: 'visible',
            timeout: 5000,
        });
        const PRODUCT_TITLE = this.productTitle;
        return PRODUCT_TITLE.textContent();
    }
}

export default CartPage;