import {test, expect} from '@playwright/test';
import {jQueryDropdownSearchActions} from '../../Pages/jQueryDropdownSearch/jQueryDropdownSearchActions';
import {mainPageActions} from '../../Pages/mainHomePage/mainHomePageActions';

test('Automate jQueryDropdown Search', async({page}) => {
    // Navigate to the main landing page
    const mainLandingPage = new mainPageActions(page);
    // Open the main jQueryDropdown page
    const jQueryDropdownPage = new jQueryDropdownSearchActions(page);
    // Call Actions for heading: Drop Down with Search
    await jQueryDropdownPage.selectOptionFromDropdownWithSearch();
    
});