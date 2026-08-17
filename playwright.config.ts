/// <reference types="node" />

import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import path from 'path';

/**
 * Determine which .env file to load.
 */
const env = process.env.NODE_ENV || 'staging';

const envFile = path.resolve(
  process.cwd(),
  `.env.${env}`,
);

/**
 * Load and expand environment variables.
 */
const myEnv = dotenv.config({
  path: envFile,
});

dotenvExpand.expand(myEnv);

/**
 * Fallback to .env if environment-specific file is not found.
 */
if (myEnv.error) {
  console.warn(
    `⚠️ Could not load ${envFile}, falling back to .env`,
  );

  dotenv.config();
}

/**
 * Playwright configuration.
 */
export default defineConfig({
  /**
   * Test directory.
   */
  testDir: './tests',

  /**
   * Run tests in files in parallel.
   */
  fullyParallel: true,

  /**
   * Fail the build on CI if test.only is accidentally committed.
   */
  forbidOnly: !!process.env.CI,

  /**
   * Retry failed tests on CI.
   */
  retries: process.env.CI ? 2 : 0,

  /**
   * Use one worker on CI.
   */
  workers: process.env.CI ? 1 : undefined,

  /**
   * Reporters.
   */
  reporter: [
    [
      'html',
      {
        outputFolder: 'reports/html-report',
      },
    ],

    [
      'allure-playwright',
      {
        resultsDir: 'reports/allure-results',
      },
    ],

    ['list'],
  ],

  /**
   * Shared settings for all projects.
   */
  use: {
    /**
     * Base URL.
     */
    baseURL:
      process.env.BASE_URL ||
      'https://practice.expandtesting.com',

    /**
     * Collect trace when retrying.
     */
    trace: 'on-first-retry',

    /**
     * Screenshot only on failure.
     */
    screenshot: 'only-on-failure',

    /**
     * Retain video only on failure.
     */
    video: 'retain-on-failure',
  },

  /**
   * Browser projects.
   */
  projects: [
    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],
      },
    },

    /**
     * Mobile Chrome.
     */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },

    /**
     * Mobile Safari.
     */
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /**
     * Microsoft Edge.
     */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     ...devices['Desktop Edge'],
    //     channel: 'msedge',
    //   },
    // },

    /**
     * Google Chrome.
     */
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     channel: 'chrome',
    //   },
    // },
  ],

  /**
   * Run local development server before tests.
   */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});