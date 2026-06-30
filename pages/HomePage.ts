import { expect, type Page } from "@playwright/test";

export class HomePage {
    constructor(private readonly page: Page) {}

    async open(): Promise<void> {
        await this.page.goto("/");
    }

    async allowLocation(): Promise<void> {
        const allowLocationButton = this.page.getByRole("button", {
            name: /allow location/i,
        });

        await expect(allowLocationButton).toBeVisible({
            timeout: 10_000,
        });

        await allowLocationButton.click();
    }

    async clickViewSpots(): Promise<void> {
        const viewSpotsButton = this.page.getByRole("button", {
            name: /view spots/i,
        });

        await expect(viewSpotsButton).toBeVisible({
            timeout: 15_000,
        });

        await viewSpotsButton.click();
    }
}
