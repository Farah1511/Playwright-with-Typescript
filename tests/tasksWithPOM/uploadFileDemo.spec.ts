import { expect, test} from "@playwright/test";
import { uploadFileDemoActions } from "../../Pages/uploadFileDemo/uploadFileDemoActions";  
import {mainPageActions} from '../../Pages/mainHomePage/mainHomePageActions';

test('automate Upload File Demo', async ({page}) => {
    const mainLandingPage = new mainPageActions(page);
    const uploadFileDemoPage = new uploadFileDemoActions(page);

    // Go to Selenium Playground/home Page
    await mainLandingPage.openMainHomePage();   
    // Click on Upload File Demo link dynamically
    await mainLandingPage.clickLink('Upload File Demo');

    // Open the Upload File Demo page
    await uploadFileDemoPage.openUploadFileDemoPage();
    
    // Verify we landed on the correct Upload File Demo page
    await uploadFileDemoPage.verifyOnUploadFileDemoPage();

    // Upload a file and verify the upload message
    await uploadFileDemoPage.uploadFile();
});