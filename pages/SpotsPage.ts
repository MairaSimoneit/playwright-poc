import { Page, expect } from "@playwright/test";

export class SpotsPage {
    constructor(private page: Page) {}

    async validateSpotsSection() {
        const title = this.page.getByRole("heading", {
            name: "Spots",
        });

        await expect(title).toBeVisible();
    }

    async validateWikiBeachCard() {
        const spotCard = this.page.locator(
            "#carousel-desktop #spot-card-wiki-beach",
        );

        await expect(spotCard).toBeVisible();

        console.log("Wiki Beach card encontrada correctamente");
    }

    async validateSpotButtons() {
        const spotCard = this.page.locator(
            "#carousel-desktop #spot-card-wiki-beach",
        );

        const buttons = spotCard.locator("button");

        const count = await buttons.count();

        console.log(`Botones encontrados en la card: ${count}`);

        expect(count).toBeGreaterThan(0);
    }
}
