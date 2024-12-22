import { Locator, Page } from '@playwright/test';

class ProductPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    get productContainer(): Locator {
        return this.page.locator('ul[data-test-id="results-list"] > li');
    }
    
    // Methods
    async getSecondProduct(): Promise<Locator> {
        const MIN_QTY = 2;

        await this.page.waitForSelector('ul[data-test-id="results-list"] > li', {
            state: 'visible',
            timeout: 5000,
        });
        const PRODUCT_COUNT = await this.productContainer.count();

        if (PRODUCT_COUNT < MIN_QTY) {
            throw new Error('There are not enough elements in the container. At least two are required.');
        }
        return this.productContainer.nth(1); 
    }

    async validateUrlChange(expectedUrl: string): Promise<void> {
        await this.page.waitForURL(expectedUrl, { timeout: 20000 });
    }

    async clickSecondProduct(): Promise<void> {
        const SECOND_PRODUCT = await this.getSecondProduct();
        await SECOND_PRODUCT.click();
    }
}

export default ProductPage;