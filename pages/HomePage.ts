import { Page } from "@playwright/test";

export class HomePage {
    constructor(private page: Page) {}

    async open() {
        await this.page.goto("https://sudakite.com/");
    }

    async allowLocation() {
        const button = this.page.getByRole("button", {
            name: "Allow location",
        });

        await button.click();
    }

    async clickViewSpots() {
        const button = this.page.getByRole("button", {
            name: "View spots",
        });

        await button.click();
    }
}
