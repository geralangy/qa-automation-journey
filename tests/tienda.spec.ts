import { test, expect } from '@playwright/test';

test('Añadir mochila al carrito en Swag Labs', async ({ page }) => {
  // 1. Ir a la tienda
  await page.goto('https://www.saucedemo.com/');

  // 2. LOGIN (Necesario para poder comprar)
  // Usamos localizadores por ID (#) porque esta web los tiene muy claros
  await page.locator('#user-name').fill('standard_user'); // Usuario
  await page.locator('#password').fill('secret_sauce');   // Contraseña
  await page.locator('#login-button').click();            // Botón entrar

  // 3. AÑADIR AL CARRITO
  // Buscamos el botón específico para la mochila "Sauce Labs Backpack"
  // Fíjate que usamos un ID largo y específico para no equivocarnos de producto
  await page.locator('#add-to-cart-sauce-labs-backpack').click();

  // 4. VALIDACIÓN
  // Buscamos la bolita roja del carrito (.shopping_cart_badge)
  // Y verificamos que tenga el texto "1"
  const burbujaCarrito = page.locator('.shopping_cart_badge');
  await expect(burbujaCarrito).toHaveText('1');
});