import { test, expect } from "@playwright/test";
import { tableSearchFilterActions } from "../../Pages/tableSearchFilter/tableSearchFilterActions";
import { mainPageActions } from "../../Pages/mainHomePage/mainHomePageActions";

test.describe("Table Search Filter Tests", () => {

    test("Basic filter tests", async ({ page }) => {
        const tableSearchFilterPage = new tableSearchFilterActions(page);

        await tableSearchFilterPage.openTableSearchFilterPage();
        // await tableSearchFilterPage.verifyOnTableSearchFilterPage();

        // Filter tasks in table
        // await page.pause();

        await tableSearchFilterPage.filterTasksInTable();
        await tableSearchFilterPage.validateFilteredResults("completed");

        // Filter by ID
        // await tableSearchFilterPage.filterById("2");
        // // await tableSearchFilterPage.validateFilteredResults("2");

        // // Filter by First Name
        // await tableSearchFilterPage.filterByFirstName("John");
        // // await tableSearchFilterPage.validateFilteredResults("John");

        // // Filter by Last Name
        // await tableSearchFilterPage.filterByLastName("Smith");
        // await tableSearchFilterPage.validateFilteredResults("Smith");

        // Clear filters and check table restored
        // await tableSearchFilterPage.clearFilters();
        // const restoredCount = await tableSearchFilterPage.getResultCount();
        // await expect(restoredCount).toBeGreaterThan(5);
    });

    test("Negative test - no results for invalid ID", async ({ page }) => {
        const tableSearchFilterPage = new tableSearchFilterActions(page);

        await tableSearchFilterPage.openTableSearchFilterPage();
        await tableSearchFilterPage.filterById("9999");
        const resultCount = await tableSearchFilterPage.getResultCount();
        await expect(resultCount).toBe(0);
    });

    test("Multiple filters applied together", async ({ page }) => {
        const tableSearchFilterPage = new tableSearchFilterActions(page);

        await tableSearchFilterPage.openTableSearchFilterPage();
        await tableSearchFilterPage.filterByFirstName("John");
        await tableSearchFilterPage.filterByLastName("Smith");

        await tableSearchFilterPage.validateFilteredResults("John");
        await tableSearchFilterPage.validateFilteredResults("Smith");
    });

    test("Data-driven filtering", async ({ page }) => {
        // Use a data array to test multiple search inputs in a loop.
        const tableSearchFilterPage = new tableSearchFilterActions(page);
        const testData = [
            { type: "Id", value: "2", expected: "2" },
            { type: "FirstName", value: "John", expected: "John" },
            { type: "LastName", value: "Smith", expected: "Smith" }
        ];
        await tableSearchFilterPage.openTableSearchFilterPage();
        for (const data of testData) {
            // call filter function dynamically
            await (tableSearchFilterPage as any)[`filterBy${data.type}`](data.value);
            await tableSearchFilterPage.validateFilteredResults(data.expected);

            // clear before next iteration
            await tableSearchFilterPage.clearFilters();
        }
    });
});
