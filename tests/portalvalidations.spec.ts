import { test, expect } from '@playwright/test';

test('username validation check', async ({ page }) => {
  await page.goto('https://demo-bank.vercel.app/');
  await page.getByTestId('login-input').fill('123');
  await page.getByTestId('password-input').click();

  
  await expect(page.getByTestId('error-login-id')).toHaveText('identyfikator ma min. 8 znaków');


});

test('password validation test', async ({ page }) => {
  await page.goto('https://demo-bank.vercel.app/');
  await page.getByTestId('login-input').fill('testerLO');
  await page.getByTestId('password-input').fill('1234');
  await page.locator('#login_form div').filter({ hasText: 'identyfikator Wprowadź' }).first().click();
  await page.getByTestId('error-login-password').click();
  
  
  await expect(page.getByTestId('error-login-password')).toHaveText('hasło ma min. 8 znaków'); 
  
});


test('password length validation test', async ({ page }) => {
   await page.goto('https://demo-bank.vercel.app/');
   await page.getByTestId('login-input').fill('testerLO');
   await page.getByTestId('password-input').fill('1234');
   await page.locator('#login_form div').filter({ hasText: 'zaloguj się' }).nth(1).click();

   
   await expect(page.getByTestId('error-login-password')).toHaveText('hasło ma min. 8 znaków'); 
    
});

test('incorrect money amount given', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');
    await page.getByTestId('login-input').fill('testerLO');
    await page.getByTestId('password-input').fill('12345678');
    await page.getByTestId('login-button').click();

    await page.locator('#widget_1_transfer_receiver').selectOption('3');
    await page.locator('#widget_1_transfer_amount').fill('-2');
    await page.locator('#widget_1_transfer_title').click();
    

    await expect(page.getByTestId('error-widget-1-transfer-amount')).toHaveText('podana kwota jest niepoprawna'); 
  });

