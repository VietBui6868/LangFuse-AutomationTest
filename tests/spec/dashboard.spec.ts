import test from "@playwright/test";
import { dashboardActions } from "../action/dashboard_action";
import { loginAction } from '../action/login_action';
import { TEST_ENV } from "../../testSites/sites";
import { Logger } from "../lib/logger";
import path from 'path'
import { common } from "../lib/common";

const authFile = path.join(__dirname, '../../Authentication/.auth/user.json');

test.beforeEach(async ({page}) => {
    if(common.isFileBlank(authFile)) {
        Logger.step('Navigate to the login page')
        await loginAction.navigateToLoginPage(page, TEST_ENV.PRODUCTION.url)
        Logger.step("Enter user's information to login")
        await loginAction.Login(TEST_ENV.PRODUCTION.email, TEST_ENV.PRODUCTION.password, page)
        Logger.step("Waiting for dashboard page display")
        // End of authentication steps.
        await dashboardActions.validateDashboardPageDisplay(page, TEST_ENV.PRODUCTION.url);
        Logger.step("Save authentication state to file");
        await page.context().storageState({ path: authFile });
    }
    else {
        Logger.log('Authentication file already exists. Skip this step');
    }

    Logger.step("Navigate to dashboard page");
    await dashboardActions.navigateToDashboardPage(page, TEST_ENV.PRODUCTION.url);
    
});

test("Verify filter time field in dashboard page work correctly", async ({ page }) => {
    Logger.step("Select option '3 months' for time filter");
    await dashboardActions.selectTimeFilterOption(page, "3 months");
    Logger.step("Validate time filter option selected is '3 months'");
    await dashboardActions.validateTimeFilterOptionSelected(page, "3 months");
    Logger.step("Select option '7 days' for time filter");
    await dashboardActions.selectTimeFilterOption(page, "7 days");
    Logger.step("Validate time filter option selected is '7 days'");
    await dashboardActions.validateTimeFilterOptionSelected(page, "7 days");
});

test("Verify filter column field work correctly", async ({ page }) => {
    Logger.step("Open columns filter popup");
    await dashboardActions.openColumnsFilter(page);
    Logger.step("Add new columns filter with column name 'Trace Name', compare type 'any of' and value 'dataset-run-item-cm3s9'");
    await dashboardActions.addNewColumnsFilter(page, "Trace Name", "any of", "dataset-run-item-cm3s9");
    Logger.step("Click on 'Add filter' button");
    await dashboardActions.clickAddFilterButton(page);
    Logger.step("Add new columns filter with column name 'Tags', compare type 'none of' and value 'feedback_inquiry'");
    await dashboardActions.addNewColumnsFilter(page, "Tags", "none of", "feedback_inquiry");
    Logger.step("Click on 'Add filter' button");
    await dashboardActions.clickAddFilterButton(page);
    Logger.step("Add new columns filter with column name 'Tags', compare type 'any of' and value 'test'");
    await dashboardActions.addNewColumnsFilter(page, "Tags", "any of", "test");
    Logger.step("Remove columns filter with column name 'Tags', compare type 'none of'");
    await dashboardActions.removeColumnsFilter(page, "Tags", "none of");
});

test("Verify date time filter work correctly", async ({ page }) => {
    Logger.step("Open date filter popup");
    await dashboardActions.openDateRangeTableFilter(page);
    Logger.step("Select start date '16 June 2022'");
    await dashboardActions.selectStartDate(page,"16","June","2022");
    Logger.step("Select start time '12:00:00 AM'");
    await dashboardActions.selectStartTime(page, "12", "00", "00", "AM");
    Logger.step("Select end date '20 September 2024'");
    await dashboardActions.selectEndDate(page,"20","September","2024");
    Logger.step("Select end time '11:59:59 PM'");
    await dashboardActions.selectEndTime(page, "11", "59", "59", "PM");
    Logger.step("Validate date range filter selected corretly");
    await dashboardActions.validateDateRangeSelected(page,
        { hours : 12, minutes: 0, ampm : 'AM'}, 16, "June", "2022",
        { hours : 11, minutes: 59, ampm : 'PM'}, 20, "September", "2024",
    )
});