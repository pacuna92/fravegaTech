import { test, expect } from '@playwright/test';
import ZipCodePopUp from '../pages/ZipCodePage';
import { PRODUCT, URLS } from '../fixtures/products';
import { ZIP_CODES } from '../fixtures/zipCode';
import ProductPage from '../pages/ProductSearchResultPage';
import HomePage from '../pages/HomePage';
import dotenv from 'dotenv';
import ProductSelectedPage from '../pages/ProductSelectedPage';
import CartPage from '../pages/CartPage';
dotenv.config();

test(`Search product: ${PRODUCT.title} and add to cart if available in stock`, async ({ page }) => {

  const zipCode = new ZipCodePopUp(page);
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const productSelected = new ProductSelectedPage(page);
  const cartPage = new CartPage(page)

  if (!process.env.TEST_UI_BASE_URL) {
    throw new Error('BASE_URL is not defined in the environment variables');
  }

  await page.goto(`${process.env.TEST_UI_BASE_URL}`);

  await page.waitForLoadState('load');

  await expect(zipCode.saveButton).toBeDisabled();

  await zipCode.enterPostalCode(ZIP_CODES[0].zipCode);

  const ZIP_CODE = await homePage.validateZipCode(ZIP_CODES[0].zipCode);

  expect(ZIP_CODE).toBe(`(${ZIP_CODES[0].zipCode})`);

  await homePage.searchProduct(PRODUCT.title);

  await productPage.validateUrlChange(URLS[0].searchProduct!)

  try {
    await productPage.clickSecondProduct();

  } catch (error) {

    throw error;

  }

  await productPage.validateUrlChange(URLS[0].productSelected!)

  await expect(productSelected.addToCartButton).toBeEnabled();

  await productSelected.addProductToCart();

  await expect(productSelected.productAdded).toBeVisible({timeout:10000});

  await homePage.goToCart();

  await productPage.validateUrlChange(URLS[0].previewCart!);

  const PRODUCT_ADDED = await cartPage.validateProductAdded();

  expect(PRODUCT_ADDED).toContain(PRODUCT.title);
  
});

