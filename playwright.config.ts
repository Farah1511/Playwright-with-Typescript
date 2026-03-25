import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'], ['allure-playwright']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    headless: false,
    ignoreHTTPSErrors: true,
    baseURL: 'https://next.citysuite.dev/gateway/api/v1/employee-access',
    extraHTTPHeaders: {
      Authorization: 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ2bTUyeFNIdVV1Y0dZb3Z6aTc4ZjBsT01iQktxM3k5X1RIUlhNRzJSa3ZZIn0.eyJleHAiOjE3NTE2NDUzNjksImlhdCI6MTc1MTY0MTc2OSwiYXV0aF90aW1lIjoxNzUxNjQxNzYxLCJqdGkiOiIxNDhjOTNkMi05NGNlLTQyYzgtOWYzZC00ZjA3ZDU3ZWIyNzkiLCJpc3MiOiJodHRwczovL25leHQuY2l0eXN1aXRlLmRldi9hdXRoL3JlYWxtcy9DaXR5U3VpdGVOZXh0IiwiYXVkIjpbImNpdHlzdWl0ZS1tb2JpbGUtYWNjZXNzIiwiY2l0eXN1aXRlX2VhcCIsInJlYWxtLW1hbmFnZW1lbnQiLCJhY2NvdW50Il0sInN1YiI6ImVmYWE0OTk1LTBiMmEtNDdhOS04NjdjLWRkODNlNjkwMjYzNSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImNpdHlzdWl0ZS1lbXBsb3llZS1wb3J0YWwiLCJub25jZSI6Ijc5MGVjMGY1LTdhMTktNDk2NS04NzFhLWYyMzY1ZTdmMGJkMCIsInNlc3Npb25fc3RhdGUiOiJiZDRkMDc0OC03YjI5LTRkMTItYjlmOS1lOGM2OTQ3OTAwNmQiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDkxIiwiaHR0cHM6Ly9uZXh0LmNpdHlzdWl0ZS5kZXYiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJjaXR5c3VpdGUtbW9iaWxlLWFjY2VzcyI6eyJyb2xlcyI6WyJtb2R1bGUtc2VydmljZW9yZGVycyJdfSwiY2l0eXN1aXRlX2VhcCI6eyJyb2xlcyI6WyJhZG1pbiIsIk1hbmFnZXIiXX0sInJlYWxtLW1hbmFnZW1lbnQiOnsicm9sZXMiOlsidmlldy11c2VycyIsInF1ZXJ5LWdyb3VwcyIsInF1ZXJ5LXVzZXJzIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiYmQ0ZDA3NDgtN2IyOS00ZDEyLWI5ZjktZThjNjk0NzkwMDZkIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiQWxpbmUgTWlsbGVyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiaGlja3NhIiwiZ2l2ZW5fbmFtZSI6IkFsaW5lIiwiZmFtaWx5X25hbWUiOiJNaWxsZXIiLCJlbWFpbCI6InVpc2hhcXVlQGhhcnJpc2NvbXB1dGVyLmNvbSJ9.aK_m0k4OvGd0TFdpWgNx_hfDhCyP9YZOWnIUeWyRJxHqnWc7mkAKn8MWKWs-Mor-6O7kkzVi390sjuHUDDToNZmBgmXBYm7HFYGpofinAQO5FD-K8eGjUSrI-FV84zliqK7X9o4SP58ydHmjUBrm16rUBXhOe8N9j8BFH5_DoB2Ou8sB36ij_HXL56WuYCAJ3or_9d9AYrvdeaF7ON-SRjEjgagJsgaXSDxk3_IWAKOjFL7eSALWUHuVSiSoCFKxLEtgw2yylfN6NIDAuP4plHCPM8_HC9Gm2YvPlP2vYJouUId-CCUIY1cy06Mh93LmZMB-uQNXdKcoREEO7rtRQA',
    },
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
