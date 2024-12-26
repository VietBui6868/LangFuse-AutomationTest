import { test } from '@playwright/test';
import { Logger } from '../lib/logger';
import { loginAction } from '../action/login_action';
import { TEST_ENV } from '../../testSites/Sites';
import path from 'path'
import { dashboardActions } from '../action/dashboard_action';

const authFile = path.join(__dirname, '../../Authentication/.auth/user.json');

test.skip('Get authentication info and save to reuse', async ({page}) => {
    Logger.step('Navigate to the login page')
    await loginAction.navigateToLoginPage(page, TEST_ENV.PRODUCTION.url)
    Logger.step("Enter user's information to login")
    await loginAction.Login(TEST_ENV.PRODUCTION.email, TEST_ENV.PRODUCTION.password, page)
    Logger.step("Waiting for dashboard page display")
    // End of authentication steps.
    await dashboardActions.validateDashboardPageDisplay(page, TEST_ENV.PRODUCTION.url);
  
    await page.context().storageState({ path: authFile });
  });