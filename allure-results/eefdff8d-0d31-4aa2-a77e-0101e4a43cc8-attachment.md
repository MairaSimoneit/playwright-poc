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

Locator: getByText('Permitir ubicación')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Permitir ubicación')

```

```yaml
- img "Pantalla de carga Sudakite"
- heading "SudaKite" [level=1]
- paragraph: loading...
- paragraph: 💡 Tip of the day
- paragraph: Respect swimmer-only areas. Keep your distance.
- alert
- img
- heading "Want to see the nearest spots?" [level=2]
- paragraph: If you allow us to access your location, we can sort spots by distance and show you wind conditions in your area.
- paragraph: 🔒 Your location is never saved or stored — we only use it right now to improve your experience.
- button "Allow location":
  - img
  - text: Allow location
- button "Continue without location"
- paragraph:
  - text: By using this app you accept our
  - link "Terms":
    - /url: /terminos
  - text: and
  - link "Privacy Policy":
    - /url: /privacidad
  - text: .
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("Ver spots con permiso de ubicación", async ({ page }) => {
  4  |     await page.goto("https://sudakite.com/");
  5  | 
  6  |     const botonUbicacion = page.getByText("Permitir ubicación");
  7  | 
> 8  |     await expect(botonUbicacion).toBeVisible();
     |                                  ^ Error: expect(locator).toBeVisible() failed
  9  | 
  10 |     await botonUbicacion.click();
  11 | 
  12 |     const botonSpots = page.getByText(/ver.*spots/i);
  13 | 
  14 |     await expect(botonSpots).toBeVisible();
  15 | 
  16 |     await botonSpots.click();
  17 | });
  18 | 
```