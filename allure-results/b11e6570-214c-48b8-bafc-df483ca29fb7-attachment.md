# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.ts >> Validar que SUDAKITE carga correctamente
- Location: tests\home.spec.ts:4:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "TU_URL_DE_SUDAKITE", waiting until "load"

```

# Test source

```ts
  1  | import { Page } from "@playwright/test";
  2  | 
  3  | export class HomePage {
  4  |     constructor(private page: Page) {}
  5  | 
  6  |     async open() {
> 7  |         await this.page.goto("TU_URL_DE_SUDAKITE");
     |                         ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  8  |     }
  9  | 
  10 |     async getTitle() {
  11 |         return await this.page.title();
  12 |     }
  13 | }
  14 | 
```