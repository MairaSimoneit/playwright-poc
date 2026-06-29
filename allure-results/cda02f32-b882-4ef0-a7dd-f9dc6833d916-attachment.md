# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: clickbutton.spec.ts >> Ver spots con permiso de ubicación
- Location: tests\clickbutton.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'View spots' })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('button', { name: 'View spots' })

```

```yaml
- img "Pantalla de carga Sudakite"
- heading "SudaKite" [level=1]
- paragraph: loading...
- paragraph: 💡 Tip of the day
- paragraph: Always check your gear before entering the water.
- alert
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("Ver spots con permiso de ubicación", async ({ page }) => {
  4  |     // 1. Abrir SUDAKITE
  5  |     await page.goto("https://sudakite.com/");
  6  | 
  7  |     // 2. Buscar botón de ubicación
  8  |     const botonUbicacion = page.getByRole("button", {
  9  |         name: "Allow location",
  10 |     });
  11 | 
  12 |     // 3. Validar que aparece
  13 |     await expect(botonUbicacion).toBeVisible();
  14 | 
  15 |     // 4. Click para permitir ubicación
  16 |     await botonUbicacion.click();
  17 | 
  18 |     // 5. Esperar que cargue la sección de spots
  19 |     const botonSpots = page.getByRole("button", {
  20 |         name: "View spots",
  21 |     });
  22 | 
  23 |     // 6. Validar que aparece
> 24 |     await expect(botonSpots).toBeVisible({
     |                              ^ Error: expect(locator).toBeVisible() failed
  25 |         timeout: 10000,
  26 |     });
  27 | 
  28 |     // 7. Click en View spots
  29 |     await botonSpots.click();
  30 | });
  31 | 
```