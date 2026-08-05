import { test, expect } from '@playwright/test';

test.describe('Negative TestCase', () => {

  test('TC1: Click login button without fill the email field', async ({ page }) => {

    await page.goto('https://www.paper.id/webappv1/login');
  
    await expect(page.getByText('Selanjutnya')).toBeVisible();
    
    await page.getByText('Selanjutnya').click();

    await expect(page.getByText(' Email atau no. handphone wajib diisi')).toBeVisible();
  });

  test('TC2: Click login button with fill invalid email in the email field', async ({ page }) => {

    await page.goto('https://www.paper.id/webappv1/login');
  
    await expect(page.getByText('Selanjutnya')).toBeVisible();

    await page.locator('//input[@id="login-identifier"]').fill("a@gmail.c");
    
    await page.getByText('Selanjutnya').click();

    await expect(page.getByText('Periksa kembali format email atau no. handphone Anda')).toBeVisible();
  });

  test('TC3: Click login button with fill invalid password in the password field', async ({ page }) => {
    await page.goto('https://www.paper.id/webappv1/login');

    await expect(page.getByText('Selanjutnya')).toBeVisible();

    await page.locator('//input[@id="login-identifier"]').fill("kandidat@paper.id");

    await page.getByText('Selanjutnya').click();

    await page.getByPlaceholder('Masukkan kata sandi Anda').fill('wqedqfqq');

    await page.getByRole('button', { name: 'Masuk' }).click();

    await page.getByText('Kombinasi email atau no. handphone dengan kata sandi salah.').isVisible();

  });



});



test.describe('Positive Scenario', () => {

  test('TC1: Click login button with fill valid email in the email field', async ({ page }) => {
    await page.goto('https://www.paper.id/webappv1/login');

    await expect(page.getByText('Selanjutnya')).toBeVisible();

    await page.locator('//input[@id="login-identifier"]').fill("kandidat@paper.id");

    await page.getByText('Selanjutnya').click();

    await expect(page.getByText('Masukkan Kata Sandi')).toBeVisible();

    
  });

  
  test('TC2: Click login button with fill valid email and valid password', async ({ page }) => {
    await page.goto('https://www.paper.id/webappv1/login');

    await expect(page.getByText('Selanjutnya')).toBeVisible();

    await page.locator('//input[@id="login-identifier"]').fill("kandidat@paper.id");

    await page.getByText('Selanjutnya').click();

    await expect(page.getByText('Masukkan Kata Sandi')).toBeVisible();

    await page.getByPlaceholder('Masukkan kata sandi Anda').fill('paper.id');

    await page.getByRole('button', { name: 'Masuk' }).click();

  });

  test('TC3: User Click Forgot Password', async ({ page }) => {
    await page.goto('https://www.paper.id/webappv1/login');

    await page.getByText('Lupa Kata Sandi').click();

    await page.getByText('Atur Ulang Kata Sandi').isVisible();

  });






    
  

  

});
