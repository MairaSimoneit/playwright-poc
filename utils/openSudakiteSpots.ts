import { expect, type Page } from "@playwright/test";

export async function openSudakiteSpots(page: Page): Promise<void> {
    await page.goto("/", {
        waitUntil: "domcontentloaded",
    });

    await page.waitForLoadState("networkidle").catch(() => {
        console.log("networkidle no se alcanzó, seguimos con esperas visuales");
    });

    await handlePossibleLocationFlow(page);

    await openLiveDataOrSpotsSection(page);

    await waitForSpotsToBeVisible(page);
}

async function handlePossibleLocationFlow(page: Page): Promise<void> {
    const possibleButtons = [
        /usar mi ubicación/i,
        /usar ubicación/i,
        /permitir ubicación/i,
        /activar ubicación/i,
        /detectar ubicación/i,
        /buscar spots/i,
        /ver spots/i,
        /explorar/i,
        /continuar/i,
        /empezar/i,
    ];

    for (const buttonName of possibleButtons) {
        const button = page.getByRole("button", { name: buttonName }).first();

        if (await button.isVisible().catch(() => false)) {
            console.log(`Click en botón inicial: ${buttonName}`);
            await button.click();
            await page.waitForLoadState("networkidle").catch(() => {});
            await page.waitForTimeout(1500);
        }
    }
}

async function openLiveDataOrSpotsSection(page: Page): Promise<void> {
    const possibleNavigationElements = [
        page.getByRole("button", { name: /datos live/i }).first(),
        page.getByRole("link", { name: /datos live/i }).first(),
        page.getByText(/datos live/i).first(),

        page.getByRole("button", { name: /spots/i }).first(),
        page.getByRole("link", { name: /spots/i }).first(),
        page.getByText(/spots/i).first(),

        page.getByRole("button", { name: /viento/i }).first(),
        page.getByRole("link", { name: /viento/i }).first(),
    ];

    for (const element of possibleNavigationElements) {
        if (await element.isVisible().catch(() => false)) {
            console.log("Click en navegación hacia datos/spots");
            await element.click();
            await page.waitForLoadState("networkidle").catch(() => {});
            await page.waitForTimeout(2000);

            if (await isAnySpotVisible(page)) {
                return;
            }
        }
    }
}

async function waitForSpotsToBeVisible(page: Page): Promise<void> {
    await expect
        .poll(
            async () => {
                return await isAnySpotVisible(page);
            },
            {
                message: "Esperando que aparezca una card real de spot",
                timeout: 60_000,
            },
        )
        .toBe(true);

    console.log("Spot card encontrada correctamente");
}

async function isAnySpotVisible(page: Page): Promise<boolean> {
    const wikiBeachByText = page.getByText(/Wiki Beach/i).first();
    const wikiBeachWindSection = page.locator("#spot-wind-wiki-beach");
    const wikiBeachActions = page.locator("#spot-actions-wiki-beach");

    const anySpotWindSection = page.locator('[id^="spot-wind-"]').first();
    const anySpotActionsSection = page.locator('[id^="spot-actions-"]').first();

    const resultsText = page.getByText(/resultados/i).first();

    const isVisibleByText = await wikiBeachByText
        .isVisible()
        .catch(() => false);
    const isVisibleByWindSection = await wikiBeachWindSection
        .isVisible()
        .catch(() => false);
    const isVisibleByActions = await wikiBeachActions
        .isVisible()
        .catch(() => false);

    const isAnyWindSectionVisible = await anySpotWindSection
        .isVisible()
        .catch(() => false);
    const isAnyActionsSectionVisible = await anySpotActionsSection
        .isVisible()
        .catch(() => false);
    const isResultsTextVisible = await resultsText
        .isVisible()
        .catch(() => false);

    return (
        isVisibleByText ||
        isVisibleByWindSection ||
        isVisibleByActions ||
        isAnyWindSectionVisible ||
        isAnyActionsSectionVisible ||
        isResultsTextVisible
    );
}
