import {Page, Locator} from '@playwright/test';

export class tableSearchFilterLocators {
    page: Page;
    pageHeading: Locator
    //Locator for heading: Drop Down with Search
    filterField: Locator;
    // Locator for Filter Button
    filterButton: Locator;
    // Locator for Id field
    idField: Locator;
    // Locator for username
    usernameField: Locator;
    // Locator for First Name
    firstNameField: Locator;
    // Locator for Last Name
    lastNameField: Locator


    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator('//h1[text() = "Table Search filter"]');
        this.filterField = page.locator('#task-table-filter');
        this.filterButton = page.locator('//button[text() ="Filter"]');
        this.idField = page.locator('//input[@placeholder="#"]');
        this.usernameField = page.locator('//input[@placeholder="Username"]');
        this.firstNameField = page.locator('//input[@placeholder="First Name"]');
        this.lastNameField = page.locator('//input[@placeholder="Last Name"]');
    }   
}