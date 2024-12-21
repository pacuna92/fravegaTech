import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import ZipCodePopUp from '../pages/ZipCode';
import dotenv from 'dotenv';
import { ZIP_CODES } from '../fixtures/zipCode'; 
dotenv.config();

test('Search product and add to cart if available in stock', async ({ page }) => {
  
  const zipCode = new ZipCodePopUp(page);

  await page.goto(`${process.env.BASE_URL}`);
  
  await expect(zipCode.saveButton).toBeDisabled();

  await zipCode.enterPostalCode(ZIP_CODES[0].zipCode);
  
});

