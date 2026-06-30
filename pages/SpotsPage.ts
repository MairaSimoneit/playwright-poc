import { expect, type Page } from "@playwright/test";

export class SpotsPage {
    constructor(private readonly page: Page) {}

    async validateSpotsSection(): Promise<void> {
        const spotsHeading = this.page
            .locator(
                'h1:has-text("Spots"):visible, h2:has-text("Spots"):visible, h3:has-text("Spots"):visible',
            )
            .first();

        await expect(spotsHeading).toBeVisible({
            timeout: 15_000,
        });
    }

    async validateWikiBeachCard(): Promise<void> {
        const wikiBeachCard = this.page
            .locator('h3:has-text("Wiki Beach"):visible')
            .first();

        await expect(wikiBeachCard).toBeVisible({
            timeout: 30_000,
        });

        console.log("Wiki Beach card encontrada correctamente");
    }

    async validateSpotButtons(): Promise<void> {
        const wikiBeachCard = this.page
            .locator('div:has(h3:has-text("Wiki Beach")):visible')
            .first();
        const wikiBeachActions = wikiBeachCard
            .locator("#spot-actions-wiki-beach")
            .first();

        await expect(wikiBeachActions).toBeVisible({
            timeout: 10_000,
        });

        const buttons = wikiBeachActions.getByRole("button");
        const buttonsCount = await buttons.count();

        console.log(`Botones encontrados en la card: ${buttonsCount}`);

        expect(buttonsCount).toBeGreaterThan(0);
    }
}
