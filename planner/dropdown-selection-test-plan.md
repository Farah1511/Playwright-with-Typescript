# Dropdown Selection Page - Comprehensive Test Plan

## Executive Summary

This test plan covers the "JQuery Dropdown Search Demo" page, which demonstrates advanced dropdown selection functionality. The page features searchable dropdowns, multi-select options, and country selection. The goal is to ensure all dropdowns function correctly, handle user input gracefully, and provide appropriate feedback for valid and invalid actions.

## Test Scenarios

### 1. Single Dropdown Selection (Select Country)

**Assumptions:**  
- Page is loaded fresh at https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo

**Steps:**
1. Locate the "Select Country" dropdown.
2. Click to open the dropdown.
3. Type "India" in the search box.
4. Select "India" from the results.

**Expected Results:**
- "India" is displayed as the selected country.
- Dropdown closes after selection.

---

### 2. Multi-Select Dropdown (Select States)

**Assumptions:**  
- Page is loaded fresh.

**Steps:**
1. Locate the "Select State(s)" multi-select dropdown.
2. Click to open the dropdown.
3. Type "California" and select it.
4. Type "Texas" and select it.
5. Deselect "California" by clicking the 'x' next to its tag.

**Expected Results:**
- "California" and "Texas" are shown as selected.
- After deselecting, only "Texas" remains.

---

### 3. Disabled Dropdown Option

**Assumptions:**  
- Page is loaded fresh.

**Steps:**
1. Locate any dropdown with disabled options (if present).
2. Attempt to select a disabled option.

**Expected Results:**
- Disabled option cannot be selected.
- No change in selection.

---

### 4. Search Functionality in Dropdown

**Assumptions:**  
- Page is loaded fresh.

**Steps:**
1. Open the "Select Country" dropdown.
2. Type a partial country name (e.g., "Uni").
3. Observe the filtered results.

**Expected Results:**
- Only countries matching the search term are displayed.
- User can select from filtered results.

---

### 5. Clear Selection

**Assumptions:**  
- Page is loaded fresh.

**Steps:**
1. Select a country in the "Select Country" dropdown.
2. Click the clear (x) button to remove the selection.

**Expected Results:**
- Selection is cleared.
- Dropdown returns to default state.

---

### 6. Keyboard Navigation

**Assumptions:**  
- Page is loaded fresh.

**Steps:**
1. Tab to the "Select Country" dropdown.
2. Use arrow keys to navigate options.
3. Press Enter to select an option.

**Expected Results:**
- Dropdown responds to keyboard navigation.
- Selection is made via keyboard.

---

### 7. Edge Case: No Matching Search Results

**Assumptions:**  
- Page is loaded fresh.

**Steps:**
1. Open any searchable dropdown.
2. Type a random string that matches no options (e.g., "ZZZZZ").

**Expected Results:**
- "No results found" message is displayed.
- No selection is possible.

---

### 8. Error Handling: Attempt to Submit Without Selection

**Assumptions:**  
- Page is loaded fresh.

**Steps:**
1. Attempt to submit the form (if present) without making any selection.

**Expected Results:**
- Appropriate error or validation message is shown.
- Form is not submitted.

---

### 9. Boundary Condition: Maximum Selections in Multi-Select

**Assumptions:**  
- Page is loaded fresh.

**Steps:**
1. Open the multi-select dropdown.
2. Select the maximum allowed number of options (if a limit exists).

**Expected Results:**
- User cannot select more than the allowed number.
- Appropriate feedback is provided.

---

## Quality Standards

- All scenarios are independent and can be run in any order.
- Negative and boundary cases are included.
- Steps are clear and specific for manual or automated testing.
