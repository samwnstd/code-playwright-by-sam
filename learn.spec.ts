import { test, expect } from '@playwright/test';

test('learn pw on website paper.id', async ({ page }) => {
    await page.goto('https://www.paper.id/webappv1/login');

    // validasi
    await expect(page).toHaveURL('https://www.paper.id/webappv1/login');

});