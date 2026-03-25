import {test, expect} from '@playwright/test';
import {JsAlertBoxDemoActions} from '../../Pages/jsAlertBoxDemo/jsAlertBoxDemoActions';
import {mainPageActions} from '../../Pages/mainHomePage/mainHomePageActions';

test('automate JS Alert Box Demo', async ({page}) => {
    const mainLandingPage = new mainPageActions(page);
    const jsAlertBoxDemoPage = new JsAlertBoxDemoActions(page);

    // Go to Selenium Playground/home Page
    await mainLandingPage.openMainHomePage();   
    // Click on Checkbox Demo link dynamically
    await mainLandingPage.clickLink('Javascript Alerts');

    // await page.pause();
 
    // Open the JS Alert Box Demo page
    await jsAlertBoxDemoPage.openJsAlertBoxDemoPage();
    
    // Verify we landed on the correct JS Alert Box Demo page
    await jsAlertBoxDemoPage.verifyOnJsAlertBoxDemoPage();

    // Click on the alert button and handle the alert
    await jsAlertBoxDemoPage.handleJsAlert();
    
    // Click on the confirm button and handle the confirm dialog
    await jsAlertBoxDemoPage.handleJsConfirm();

    // Click on the prompt button and handle the prompt dialog
    await jsAlertBoxDemoPage.handleJsPrompt();
});