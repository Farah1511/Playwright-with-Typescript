                    // 2nd Assignment
import { test, expect, Page } from '@playwright/test';
// import { count } from 'console';

function getLocators(page: Page){
    return{
        name: page.locator('input#name'), // using CSS selector HTML with id 
        email: page.locator('//input[@id="inputEmail4"]'), // using xpath
        password: page.locator('input[type="password"]'),// using CSS selector HTML with type
        company: page.locator('#company'), // using CSS selector (id)
        website: page.locator('#websitename'),
        country: page.locator('select[name="country"]'), // using CSS selector, HTML with attribute 'name'
        city: page.locator('#inputCity'),
        address1:  page.locator('#inputAddress1'),
        address2:  page.locator('#inputAddress2'),
        state: page.locator('#inputState'),
        zip: page.locator('#inputZip'),
        submit: page.locator('//*[@id="seleniumform"]/div[6]/button'),
        msg: page.locator('.success-msg')
    }
}
test.describe('2nd Assignment: Input Form Validations', ()=>{
test("Happy Case", async ({ page }) => {
    // Open Input Form Validations page
    const url = "https://www.lambdatest.com/selenium-playground/input-form-demo";
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });

    //get locators
   const {name, email, password, company, website, country, city, address1, address2, state, zip, submit, msg } = getLocators(page);

    // Perform actions using valid data
    await name.fill('Jack');
    email.fill('jackie@hotmail.com');
    password.fill('123123');
    company.fill('Lambda');
    website.fill('https://www.lambdatest.com');
    await country.selectOption({ label: 'Pakistan' });
    city.fill('Islamabad');
    address1.fill('MDT Islamabad');
    address2.fill('Gulberg Islamabad');
    state.fill('Islamabad');
    zip.fill('4454');
    submit.click();

    // Assertions
    await expect(page).toHaveURL(/.*input-form-demo/);
    await expect(msg).toHaveText('Thanks for contacting us, we will get back to you shortly.');
}); 
});