import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    reporter: [["html"], ["allure-playwright"]],

    use: {
        trace: "on-first-retry",

        headless: false,

        permissions: ["geolocation"],

        geolocation: {
            latitude: -32.95,
            longitude: -60.66,
        },
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
});
