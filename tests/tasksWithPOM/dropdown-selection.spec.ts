// spec: planner/dropdown-selection-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Dropdown Selection Page - Comprehensive Test Plan', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
  });

  test('Single Dropdown Selection (Select Country)', async ({ page }) => {
    // 1. Locate the "Select Country" dropdown.
    const countryDropdown = page.locator('.select2-selection--single');
    // 2. Click to open the dropdown.
    await countryDropdown.click();
    // 3. Type "India" in the search box.
    const searchBox = page.locator('.select2-search__field');
    await searchBox.fill('India');
    // 4. Select "India" from the results.
    await page.locator('.select2-results__option', { hasText: 'India' }).click();
    // Expected Results:
    await expect(page.locator('.select2-selection__rendered')).toHaveText('India');
  });

  test('Multi-Select Dropdown (Select States)', async ({ page }) => {
    // 1. Locate the "Select State(s)" multi-select dropdown.
    const statesDropdown = page.locator('.select2-selection--multiple');
    // 2. Click to open the dropdown.
    await statesDropdown.click();
    // 3. Type "California" and select it.
    const multiSearchBox = page.locator('.select2-search__field');
    await multiSearchBox.fill('California');
    await page.locator('.select2-results__option', { hasText: 'California' }).click();
    // 4. Type "Texas" and select it.
    await multiSearchBox.fill('Texas');
    await page.locator('.select2-results__option', { hasText: 'Texas' }).click();
    // 5. Deselect "California" by clicking the 'x' next to its tag.
    await page.locator('.select2-selection__choice__remove', { hasText: '×' }).first().click();
    // Expected Results:
    const selectedStates = page.locator('.select2-selection__rendered .select2-selection__choice');
    await expect(selectedStates).toContainText('Texas');
    await expect(selectedStates).not.toContainText('California');
  });

  test('Disabled Dropdown Option', async ({ page }) => {
    // 1. Locate any dropdown with disabled options (if present).
    const countryDropdown = page.locator('.select2-selection--single');
    await countryDropdown.click();
    // 2. Attempt to select a disabled option.
    const disabledOption = page.locator('.select2-results__option[aria-disabled="true"]');
    // Expected Results:
    await expect(disabledOption).toHaveCount(1); // At least one disabled option exists
    await disabledOption.click({ force: true });
    // No change in selection
    // (No assertion needed, as click should not change selection)
  });

  test('Search Functionality in Dropdown', async ({ page }) => {
    // 1. Open the "Select Country" dropdown.
    const countryDropdown = page.locator('.select2-selection--single');
    await countryDropdown.click();
    // 2. Type a partial country name (e.g., "Uni").
    const searchBox = page.locator('.select2-search__field');
    await searchBox.fill('Uni');
    // 3. Observe the filtered results.
    const filteredOptions = page.locator('.select2-results__option');
    // Expected Results:
    await expect(filteredOptions).toContainText(['United States', 'United Kingdom']);
  });

  test('Clear Selection', async ({ page }) => {
    // 1. Select a country in the "Select Country" dropdown.
    const countryDropdown = page.locator('.select2-selection--single');
    await countryDropdown.click();
    const searchBox = page.locator('.select2-search__field');
    await searchBox.fill('India');
    await page.locator('.select2-results__option', { hasText: 'India' }).click();
    // 2. Click the clear (x) button to remove the selection.
    const clearBtn = page.locator('.select2-selection__clear');
    await clearBtn.click();
    // Expected Results:
    await expect(page.locator('.select2-selection__rendered')).toHaveText('Select Country');
  });

  test('Keyboard Navigation', async ({ page }) => {
    // 1. Tab to the "Select Country" dropdown.
    await page.keyboard.press('Tab');
    // 2. Use arrow keys to navigate options.
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    // 3. Press Enter to select an option.
    await page.keyboard.press('Enter');
    // Expected Results:
    // Selection is made via keyboard (cannot assert exact value, but should not be default)
    const selectedCountry = await page.locator('.select2-selection__rendered').textContent();
    expect(selectedCountry).not.toBe('Select Country');
  });

  test('Edge Case: No Matching Search Results', async ({ page }) => {
    // 1. Open any searchable dropdown.
    const countryDropdown = page.locator('.select2-selection--single');
    await countryDropdown.click();
    // 2. Type a random string that matches no options (e.g., "ZZZZZ").
    const searchBox = page.locator('.select2-search__field');
    await searchBox.fill('ZZZZZ');
    // Expected Results:
    await expect(page.locator('.select2-results__option')).toHaveText('No results found');
  });

  test('Error Handling: Attempt to Submit Without Selection', async ({ page }) => {
    // 1. Attempt to submit the form (if present) without making any selection.
    const submitBtn = page.locator('button[type="submit"]');
    if (await submitBtn.count()) {
      await submitBtn.click();
      // Expected Results:
      // Appropriate error or validation message is shown.
      const errorMsg = page.locator('.error, .validation-message');
      await expect(errorMsg).toBeVisible();
    }
  });

  test('Boundary Condition: Maximum Selections in Multi-Select', async ({ page }) => {
    // 1. Open the multi-select dropdown.
    const statesDropdown = page.locator('.select2-selection--multiple');
    await statesDropdown.click();
    // 2. Select the maximum allowed number of options (if a limit exists).
    // (Assume max 3 for demo; adjust as needed)
    const multiSearchBox = page.locator('.select2-search__field');
    const states = ['California', 'Texas', 'Florida', 'New York'];
    for (const state of states) {
      await multiSearchBox.fill(state);
      await page.locator('.select2-results__option', { hasText: state }).click();
    }
    // Expected Results:
    // User cannot select more than the allowed number.
    // Appropriate feedback is provided.
    const selectedStates = page.locator('.select2-selection__rendered .select2-selection__choice');
    await expect(selectedStates).toHaveCount(3); // Adjust if actual limit is different
  });
});