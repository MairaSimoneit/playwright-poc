import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",

    timeout: 60_000,

    expect: {
        timeout: 10_000,
    },

    fullyParallel: false,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    reporter: [
        [
            "html",
            {
                outputFolder: "playwright-report",
                open: "never",
            },
        ],
        [
            "json",
            {
                outputFile: "reports/playwright-results.json",
            },
        ],
        ["allure-playwright"],
    ],

    use: {
        baseURL: "https://sudakite.com",

        headless: !!process.env.CI,

        viewport: {
            width: 1280,
            height: 720,
        },

        geolocation: {
            latitude: -32.9468,
            longitude: -60.6393,
        },

        permissions: ["geolocation"],

        ignoreHTTPSErrors: true,

        screenshot: "only-on-failure",

        video: "retain-on-failure",

        trace: "retain-on-failure",

        actionTimeout: 15_000,

        navigationTimeout: 30_000,
    },

    projects: [
        {
            name: "Google Chrome",
            use: {
                ...devices["Desktop Chrome"],
                channel: "chrome",
            },
        },
    ],

    outputDir: "test-results",
});
