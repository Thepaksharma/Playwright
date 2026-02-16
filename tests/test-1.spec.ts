import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('#singleFileInput').click();
  await page.locator('#singleFileInput').setInputFiles('tests/files/sample.jpg');
  await page.getByRole('button', { name: 'Upload Single File' }).click();
});