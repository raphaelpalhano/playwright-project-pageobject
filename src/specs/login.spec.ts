import { test, expect } from '@playwright/test';
import { setupPage, tearDown } from '../core/config/setup';
import { LoginPage } from '../core/pages/LoginPage';


test.afterAll(async () => {
  await tearDown();
});

test.describe('Login de usuario', () => {

  test.beforeEach(async () => {
    await setupPage('chrome');
  });

  test('Realizar login valido', async () => {
    await LoginPage.auth('valid');
    const elementPresent = await LoginPage.elementIsPresent('Seu Barriga - Nunca mais esqueça de pagar o aluguel.');
    expect(elementPresent).toBeTruthy();
  });

  
});