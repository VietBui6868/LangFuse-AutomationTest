# TDD_BestPractice

This project demonstrates best practices for Test-Driven Development (TDD) using Playwright for end-to-end testing. The project includes various test cases for login and dashboard functionalities.

# Environment
   Test: https://cloud.langfuse.com/project/clkpwwm0m000gmm094odg11gi

## Project Structure

TDD_BestPractice/
├── Authentication/
│   └── .auth/
│       └── user.json
├── tests/
│   ├── action/
│   │   ├── dashboard_action.ts
│   │   └── login_action.ts
│   ├── lib/
│   │   ├── common.ts
│   │   ├── lib.ts
│   │   └── logger.ts
│   ├── pageObjects/
│   │   ├── dashboard_ob.ts
│   │   └── login_ob.ts
│   └── spec/
│       ├── dashboard.spec.ts
│       └── login.setup.spec.ts
├── testSites/
│   └── sites.ts
├── .gitignore
├── package.json
├── playwright.config.ts
├── README.md


## Libraries Used

- **Playwright**: For end-to-end testing.
- **TypeScript**: For type safety and modern JavaScript features.

## Guidelines to Run the Project

1. **Install Dependencies**:
   npm install

2. **Run Tests**:
   npm run test

3. **View Test Report**:
   npm run report

## Authentication
    The project uses a pre-saved authentication state stored in user.json. This file contains cookies and local storage data to maintain the session state across tests.

## Configuration
    The Playwright configuration is defined in playwright.config.ts. It includes settings for different browsers, test directories, and other options.

## Writing Tests
**Actions** : Define user actions in action.
**Page Objects** : Define page elements and locators in pageObjects.
**Specifications** : Write test cases in spec.
   
