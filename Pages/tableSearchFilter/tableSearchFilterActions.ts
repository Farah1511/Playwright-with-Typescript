import {Page, expect} from '@playwright/test';
import {tableSearchFilterLocators} from './tableSearchFilterLocators';

export class tableSearchFilterActions extends tableSearchFilterLocators {
    // The page object that will be used to interact with the web page.
    constructor(page: Page) {
        super(page);
    }   

    // Navigate to the Table Search Filter page
    async openTableSearchFilterPage() {
        await this.page.goto('https://www.lambdatest.com/selenium-playground/table-search-filter-demo',
            { timeout: 60000, waitUntil: 'commit' } // or "networkidle"
        );
    }
    async verifyOnTableSearchFilterPage() {
        // Verify URL
        await expect(this.page).toHaveURL(/.*table-search-filter-demo/);
        // Verify page heading
        // await expect(this.pageHeading).toHaveText('Table Search filter');
        await expect(this.pageHeading).toBeVisible();
    }
    //Actions for heading: Table Search Filter
    async filterTasksInTable(){
        await this.filterField.fill("completed");
        await this.page.waitForSelector('#task-table tbody tr:visible');
        await this.page.waitForTimeout(1000); // Wait for the table to update
    }
    // Filter by ID
    async filterById(id: string) {
        await this.filterButton.click();
        await this.idField.waitFor({ state: 'visible', timeout: 5000 }); // ✅ wait until input is visible
        await this.idField.fill(id);
        await this.page.waitForTimeout(1500); // Wait for the table to update
    }
    // Filter by Username
    async filterByUsername(username: string) {
        await this.filterButton.click();
        await this.usernameField.waitFor({ state: 'visible', timeout: 5000 }); // ✅ wait until input is visible
        await this.usernameField.fill(username);
        await this.page.waitForTimeout(1500); // Wait for the table to update
    }
    // Filter by First Name
    async filterByFirstName(firstName: string) {
        await this.filterButton.click();
        await this.firstNameField.waitFor({ state: 'visible', timeout: 5000 }); // ✅ wait until input is visible
        await this.firstNameField.fill(firstName);
        await this.page.waitForTimeout(1500); // Wait for the table to update
    }   
    // Filter by Last Name  
    async filterByLastName(lastName: string) {
        await this.filterButton.click();
        await this.lastNameField.waitFor({ state: 'visible', timeout: 5000 }); // ✅ wait until input is visible
        await this.lastNameField.fill(lastName);
        await this.page.waitForTimeout(1500); // Wait for the table to update
    }

    // Validate Table Results After Search
    // Get filtered table rows
    async getFilteredRows() {
        return this.page.locator('#task-table tbody tr:visible');
    }
    // Count Number of Matching Rows
    async getResultCount() {
            const rows = await this.getFilteredRows();
            return rows.count();
    }
    // Validate filtered rows contain expected text
    async validateFilteredResults(expectedStatus: string) {
        const statusCells = this.page.locator('#task-table tbody tr:visible td:nth-child(4)');
        // ⏳ Wait until ALL visible rows have the expected status
    await this.page.waitForFunction(
        (expected) => {
            const rows = Array.from(document.querySelectorAll('#task-table tbody tr'));
            const visibleRows = rows.filter(r => (r as HTMLElement).offsetParent !== null); // visible only
            return visibleRows.length > 0 && visibleRows.every(r => (r as HTMLTableRowElement).cells[3].innerText.trim() === expected);
        },
        expectedStatus
    );
        const count = await statusCells.count();
            // Log the count for debugging
        console.log(`Number of matching rows: ${count}`);
            // Assert at least 1 row is visible
        expect(count).toBeGreaterThan(0);
            // Verify all visible rows have the expected status
        for (let i = 0; i < count; i++) {
            await expect(statusCells.nth(i)).toHaveText(expectedStatus);
        }
    }
    // Reset/Clear Filters
    async clearFilters() {
        await this.filterField.fill("");
        await this.idField.fill("");
        await this.usernameField.fill("");
        await this.firstNameField.fill("");
        await this.lastNameField.fill("");
        await this.page.waitForTimeout(1500);
    }
}