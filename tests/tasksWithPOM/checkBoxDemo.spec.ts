import { test, expect } from '@playwright/test';
import  {CheckboxDemoActions} from '../../Pages/checkboxDemo/checkBoxDemoActions';
import { mainPageActions } from '../../Pages/mainHomePage/mainHomePageActions'; 

test('automate CheckBox Demo via home page link', async ({ page }) => {
    const mainLandingPage = new mainPageActions(page);
    const checkboxDemoPage = new CheckboxDemoActions(page);

    // Go to Selenium Playground/home Page
    await mainLandingPage.openMainHomePage();   
    // Click on Checkbox Demo link dynamically
    await mainLandingPage.clickLink('Checkbox Demo');

    // await page.pause();
    
    // Verify we landed on correct Checkbox Demo page
    await checkboxDemoPage.verifyOnCheckboxDemoPage(); 
    // Verify the single checkbox heading
    await checkboxDemoPage.verifySingleCheckboxHeading();
    // Verify that the single checkbox is unchecked
    await checkboxDemoPage.verifySingleCheckboxUnchecked();
    // Click on the single checkbox
    await checkboxDemoPage.clickCheckBox();
    // Verify that the single checkbox is checked
    await checkboxDemoPage.verifySingleCheckboxChecked();
    // Verify that the multiple checkboxes are unchecked
    // await checkboxDemoPage.verifyMultipleCheckboxUnchecked();
    // Click on multiple checkboxes
    await checkboxDemoPage.clickMultipleCheckboxes();
    // Verify that multiple checkboxes are checked
    await checkboxDemoPage.verifyMultipleCheckboxesChecked();
    // Verify that option 3 & 4 are disabled
    await checkboxDemoPage.verifyMultipleCheckboxesDisable(); 
    // Verify that the "Check All" button is enabled
    await expect(checkboxDemoPage.chkBtn).toBeEnabled();
    await checkboxDemoPage.checkAllOptions();
    await checkboxDemoPage.unCheckAllOptions();

}); 
