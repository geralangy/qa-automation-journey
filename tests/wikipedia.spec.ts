import { test, expect } from '@playwright/test';

test('Buscar Hola en Wikipedia', async ({ page }) => {
  // 1. Vamos a la portada
  await page.goto('https://es.wikipedia.org/wiki/Wikipedia:Portada');

  // 2. Paso A: Hacemos clic en el elemento original ('searchbox') para despertarlo
  await page.getByRole('searchbox', { name: 'Buscar en Wikipedia' }).click();

  // 3. Paso B: Ahora que ha despertado y es un 'combobox', escribimos en él
  await page.getByRole('combobox', { name: 'Buscar en Wikipedia' }).fill('Hola');

  // 4. Pulsamos Enter
  await page.keyboard.press('Enter');

  // 5. Validamos
  await expect(page.locator('#firstHeading')).toContainText('Hola');
});