import { test, expect } from "../fixtures/sudakiteTest";

test("Entrar, aceptar ubicación y ver spots", async ({ page }) => {
    // 1. Abrir Sudakite
    await page.goto("/");

    // 2. Buscar el botón para permitir ubicación
    const botonUbicacion = page.getByRole("button", {
        name: /allow location/i,
    });

    // 3. Validar que aparece
    await expect(botonUbicacion).toBeVisible({
        timeout: 10_000,
    });

    // 4. Click en Allow location
    await botonUbicacion.click();

    // 5. Esperar que aparezca el botón para ver spots
    const botonSpots = page.getByRole("button", {
        name: /view spots/i,
    });

    await expect(botonSpots).toBeVisible({
        timeout: 15_000,
    });

    // 6. Click en View spots
    await botonSpots.click();

    // 7. Validar que aparece la card de Wiki Beach
    const wikiBeachCard = page
        .locator('h3:has-text("Wiki Beach"):visible')
        .first();

    await expect(wikiBeachCard).toBeVisible({
        timeout: 30_000,
    });

    console.log("Wiki Beach card encontrada correctamente");
});
