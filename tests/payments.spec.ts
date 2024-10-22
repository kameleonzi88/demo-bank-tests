import { test, expect } from '@playwright/test';

test('mobile device account top-up', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/index.html');
    await page.getByTestId('login-input').fill('testerLO');
    await page.getByTestId('password-input').fill('12345678');
    await page.getByTestId('login-button').click();


    await page.locator('#widget_1_topup_receiver').selectOption('500 xxx xxx');
    await page.locator('#widget_1_topup_amount').fill('25');
    await page.locator('#uniform-widget_1_topup_agreement span').click();
    

    await page.getByRole('button', { name: 'doładuj telefon' }).click();
    await page.getByTestId('close-button').click();
    
    
    await expect(page.locator('#show_messages')).toHaveText('Doładowanie wykonane! 25,00PLN na numer 500 xxx xxx');
});

test.only('account balance after transaction confirmation', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/index.html');
    await page.getByTestId('login-input').fill('testerLO');
    await page.getByTestId('password-input').fill('12345678');
    await page.getByTestId('login-button').click();

    await page.getByText('dostępne środki 13159 ,20 PLN').click(); 

    await page.locator('#widget_1_transfer_receiver').selectOption('2');
    await page.locator('#widget_1_transfer_amount').fill('10');
    await page.locator('#widget_1_transfer_title').fill('dycha');
    await page.getByRole('button', { name: 'wykonaj' }).click();
    await page.getByTestId('close-button').click();


    await expect(page.locator('#money_value')).toHaveText('13149'); 

  });


      



   