import { test, expect } from '@playwright/test';
import { mainPageActions } from '../../Pages/mainHomePage/mainHomePageActions.ts';
import { AjaxFormActions } from '../../Pages/ajaxSubmitForm/ajaxFormActions.ts';

test('Automate Ajax Form via home page link', async ({ page }) => {
  //create instances of the page actions. This allows us to use the methods defined in the page actions classes
  const mainLandingPage = new mainPageActions(page);
  const ajaxFormPage = new AjaxFormActions(page);

  // Go to Selenium Playground/home Page
  await mainLandingPage.openMainHomePage();

  // Click on Ajax Form Submit link dynamically
  await mainLandingPage.clickLink('Ajax Form Submit');

  // await page.pause();

  // Verify we landed on correct Ajax Form Submit page
  await ajaxFormPage.verifyOnAjaxFormPage();

  // Fill Ajax form
  await ajaxFormPage.fillAjaxForm('Playwright Test', 'Testing Ajax Form');

  // Submit form
  await ajaxFormPage.submitForm();

  // Verify loader appears
  await ajaxFormPage.verifySuccessMessageLoader();
});