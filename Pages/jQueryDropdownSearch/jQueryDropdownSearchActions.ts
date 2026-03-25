import {Page, expect} from '@playwright/test';
import {jQueryDropdownSearchLocators} from './jQueryDropdownSearchLocators';

export class jQueryDropdownSearchActions extends jQueryDropdownSearchLocators {
    // The page object that will be used to interact with the web page.
    constructor(page: Page) {
        super(page);
    }
    // Navigate to the jQuery Dropdown Search page
    async openJQueryDropdownSearchPage() {
        await this.page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
    }
    async verifyOnJQueryDropdownSearchPage() {
        // Verify URL
        await expect(this.page).toHaveURL(/.*jquery-dropdown-search-demo/);
        // Verify page heading
        await expect(this.pageHeading).toHaveText('Jquery Dropdown Search Demo');
    }


                        //Actions for heading: Drop Down with Search
 async waitForPageToLoad() {
  await this.page.waitForLoadState('domcontentloaded'); // or 'networkidle'
  await this.page.waitForTimeout(1000); // small buffer if needed
}

 async selectOptionFromDropdownWithSearch(){
    await this.waitForPageToLoad();
    await this.searchCountry.nth(0).click();
    await this.countrySearchField.fill("australia");
    await this.page.keyboard.press('Enter');
  }

}