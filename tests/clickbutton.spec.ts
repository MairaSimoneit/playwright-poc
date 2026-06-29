import { test, expect } from "@playwright/test";

test("Ver spots con permiso de ubicación", async ({ page }) => {
    // 1. Abrir SUDAKITE
    await page.goto("https://sudakite.com/");

    // 2. Buscar botón de ubicación
    const botonUbicacion = page.getByRole("button", {
        name: "Allow location",
    });

    // 3. Validar que aparece
    await expect(botonUbicacion).toBeVisible();

    // 4. Click para permitir ubicación
    await botonUbicacion.click();

    // 5. Esperar que cargue la sección de spots
    const botonSpots = page.getByRole("button", {
        name: "View spots",
    });

    // 6. Validar que aparece
    await expect(botonSpots).toBeVisible({
        timeout: 10000,
    });

    // 7. Click en View spots
    await botonSpots.click();
});
