import { test, expect } from '@playwright/test';
import ZipCodePopUp from '../pages/ZipCode';
import { PRODUCT, URLS } from '../fixtures/products';
import { ZIP_CODES } from '../fixtures/zipCode';
import ProductPage from '../pages/ProductSearchResult';
import HomePage from '../pages/HomePage';
import dotenv from 'dotenv';
dotenv.config();

test(`Search product: ${PRODUCT.title} and add to cart if available in stock`, async ({ page }) => {

  const zipCode = new ZipCodePopUp(page);
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);

  if (!process.env.BASE_URL) {
    throw new Error('BASE_URL is not defined in the environment variables');
  }

  await page.goto(`${process.env.BASE_URL}`);

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

});

