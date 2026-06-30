import { test as base, expect } from "@playwright/test";

const SUDAKITE_URL = "https://sudakite.com";

const ROSARIO_LOCATION = {
    latitude: -32.9468,
    longitude: -60.6393,
};

export const test = base.extend({
    page: async ({ page, context }, use) => {
        await context.grantPermissions(["geolocation"], {
            origin: SUDAKITE_URL,
        });

        await context.setGeolocation(ROSARIO_LOCATION);

        await use(page);
    },
});

export { expect };
