                                        // 1st Assignment
import {test, expect} from '@playwright/test'

test("404: Form Submit Demo", async({page})=>{
    //locators
    const name = page.locator('#title')
    const msg = page.locator('div>textarea[id="description"]');
    const submit = page.locator('//input[@name="btn-submit"]');
    const statusMessage = page.locator('#submit-control');

    //open web page
    await page.goto("https://www.lambdatest.com/selenium-playground/ajax-form-submit-demo");

     //actions perform on locators
    await name.fill('Farah');
    await msg.fill('Message');
    await submit.click();

    await page.waitForTimeout(5000); //wait 5 sec
    const text = await statusMessage.textContent();
    console.log('After 5s:', text);

    console.log('API Send 404');

     //Wait for the AJAX result
    //ait page.waitForSelector('#submit-control:has-text("Form submited Successfully!")');

    //Assert the final success message
    // await expect(statusMessage).toHaveText('Form submited Successfully!');

});

test("Simple Form Demo", async({page})=>{
    //open Simple Form Demo page
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");

    //locators of Single Input Field Form
    const msg = page.locator('input[id="user-message"]');
    const getMsg = page.locator('div>button[id="showInput"]');
    const showMsg = page.locator('#message');

    //locators of Two Input Fields Form
    const firstValue = page.locator('#sum1')
    const scndValue = page.locator('#sum2')
    const getSum = page.locator('#gettotal>button');
    const showSum = page.locator('#addmessage');

//actions perform on Single Input Field locators
    //happy case
    await msg.fill('Hello, Testing my first form using Playwright with Typescript!');
    await getMsg.click();
    await expect(showMsg).toHaveText('Hello, Testing my first form using Playwright with Typescript!');

    //-ve cases
    //empty field
    await msg.fill('');
    await getMsg.click();
    expect((await msg.textContent())?.trim()).toBe('');
    //ait expect(showMsg).toBeVisible();

    
//actions perform on Two Input Fields Locators
    // happy case
    await firstValue.fill('5');
    await scndValue.fill('11');
    await getSum.click();
    await expect(showSum).toHaveText('16');

    //-ve cases
    //empty fields
    await firstValue.fill('');
    await scndValue.fill('');
    await getSum.click();
    expect((await showSum.textContent())?.trim()).toBe('Entered value is not a number');
    //one field empty
    await firstValue.fill('');
    await scndValue.fill('11');
    await getSum.click();
    expect(await showSum.textContent()).toBe('Entered value is not a number');
    //alphabets/alphanumeric value in field
    await firstValue.fill('abc');
    await scndValue.fill('q1s2');
    await getSum.click();
    expect(await showSum.textContent()).toMatch('Entered value is not a number');
    //special characters in fields
    await firstValue.fill('%5');
    await scndValue.fill('!1');
    await getSum.click();
    expect(await showSum.textContent()).toContain('Entered value is not a number');

});