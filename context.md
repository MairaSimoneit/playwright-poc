# Contexto del proyecto

## Fecha

- 30 de junio de 2026

## Proyecto

- Carpeta: `c:\Users\simon\Documents\playwright-poc`
- Tipo: proyecto de pruebas Playwright
- Archivos principales: `package.json`, `playwright.config.ts`
- Directorio de tests y resultados: `tests/`, `test-data/`, `test-results/`, `playwright-report/`, `allure-results/`

## Estado actual

- Último comando ejecutado: `npx playwright test tests/clickbutton.spec.ts tests/home.spec.ts --reporter=list`
- Resultado del comando: `2 passed`
- Archivo abierto actualmente en el editor: `tests/home.spec.ts`

## Tarea solicitada

- Ordenar y corregir las carpetas y los problemas de los tests.
- Eliminar las pruebas relacionadas con "By hour" y "Maps".
- Conservar el flujo básico de abrir la web, aceptar ubicación y ver spots.

## Cambios realizados

- Simplifiqué `tests/clickbutton.spec.ts` para validar sólo el flujo básico.
- Simplifiqué `tests/home.spec.ts` para validar sólo el flujo básico y eliminar pasos extra.
- Arreglé `pages/SpotsPage.ts` para usar selectores visibles y evitar locators ocultos.
- Confirmé que ambas pruebas pasan.

## Notas adicionales

- No fue necesario reorganizar físicamente las carpetas; la estructura `tests/`, `pages/`, `fixtures/` y `utils/` ya estaba correcta.
- El foco fue corregir la lógica de los tests y los selectores que estaban devolviendo elementos ocultos.
