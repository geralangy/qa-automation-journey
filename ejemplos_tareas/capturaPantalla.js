const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://www.google.com');
    await aceptarCookies(page);
    await page.screenshot({ path: 'google.png'});
    console.log('Cpatura de Google guardada como google.png');

    await browser.close();


})();

async function aceptarCookies(page) {

    try {
        await page.waitForTimeout(1000);

        const acceptButton = page.getByRole('button',{ name: 'Aceptar todo' });

        if (await acceptButton.isVisible()){
            await acceptButton.click();
            console.log('✅ Modal de consentimiento cerrado.');
        } else {

            console.log('ℹ️ No se detectó un modal de consentimiento.');
        }
    } catch (error) {
        console.log(error);
        
        console.log('⚠️ Error al intentar cerrar el modal, quizás no estaba presente.');
        
    }

}