import { test } from "../fixtures/sudakiteTest";

import { HomePage } from "../pages/HomePage";
import { SpotsPage } from "../pages/SpotsPage";

test("Usuario puede ver información de spots", async ({ page }) => {
    const home = new HomePage(page);
    const spots = new SpotsPage(page);

    await home.open();

    await home.allowLocation();

    await home.clickViewSpots();

    await spots.validateSpotsSection();

    await spots.validateWikiBeachCard();
});
