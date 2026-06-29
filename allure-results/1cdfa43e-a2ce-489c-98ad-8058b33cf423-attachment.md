# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.ts >> Usuario puede ver información de spots
- Location: tests\home.spec.ts:7:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#spot-card-wiki-beach')
Expected: visible
Error: strict mode violation: locator('#spot-card-wiki-beach') resolved to 2 elements:
    1) <div id="spot-card-wiki-beach" class="relative flex w-full sm:w-[360px] sm:flex-shrink-0 flex-col overflow-hidden rounded-3xl shadow-lg">…</div> aka locator('#carousel-mobile').getByText('km - RosarioNo wind todayWiki BeachRosario, Santa FeLoading...Maps★5.0 ★ (2')
    2) <div id="spot-card-wiki-beach" class="relative flex w-full sm:w-[360px] sm:flex-shrink-0 flex-col overflow-hidden rounded-3xl shadow-lg">…</div> aka locator('#carousel-desktop').getByText('km - RosarioNo wind todayWiki BeachRosario, Santa FeLoading...Maps★5.0 ★ (2')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#spot-card-wiki-beach')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - alert [ref=e2]
  - generic [ref=e3]:
    - navigation [ref=e4]:
      - generic [ref=e6]:
        - link "Go to Sudakite home" [ref=e8] [cursor=pointer]:
          - /url: "#page-root"
          - img "Sudakite logo" [ref=e10]
          - generic [ref=e11]:
            - paragraph [ref=e12]: Sudakite
            - paragraph [ref=e13]: Wind Finder
        - generic [ref=e14]:
          - link "Home" [ref=e15] [cursor=pointer]:
            - /url: "#page-root"
            - text: Home
          - link "Spots" [ref=e16] [cursor=pointer]:
            - /url: "#spots-section"
            - text: Spots
          - link "Suggestions" [ref=e17] [cursor=pointer]:
            - /url: "#suggestions-section"
            - text: Suggestions
        - generic [ref=e18]:
          - generic [ref=e19]: Live Data
          - generic [ref=e22]:
            - button "Switch to Spanish" [ref=e23]: es
            - button "Switch to English" [pressed] [ref=e24]: en
          - button "Sign in" [ref=e25]:
            - img [ref=e26]
            - generic [ref=e31]: Sign in
    - generic [ref=e32]:
      - generic [ref=e33]:
        - img "Image 1" [ref=e35]
        - img "Image 2" [ref=e37]
        - img "Image 3" [ref=e39]
        - img "Image 4" [ref=e41]
        - img "Image 5" [ref=e43]
        - img "Image 6" [ref=e45]
        - img "Image 7" [ref=e47]
        - generic [ref=e51]:
          - heading "SudaKite" [level=1] [ref=e52]
          - generic [ref=e55]:
            - paragraph [ref=e56]: Sudakite is a digital platform to discover kitesurfing spots with real-time updated data, including wind, temperature and weather conditions across Argentina and South America. Our goal is to help riders make better decisions with accurate, accessible data in one place.
            - button "View spots" [active] [ref=e58] [cursor=pointer]:
              - text: View spots
              - img [ref=e59]
        - generic [ref=e61]:
          - generic [ref=e62]: 01 / 07
          - generic [ref=e63]:
            - button "Image 1" [ref=e64] [cursor=pointer]
            - button "Image 2" [ref=e65] [cursor=pointer]
            - button "Image 3" [ref=e66] [cursor=pointer]
            - button "Image 4" [ref=e67] [cursor=pointer]
            - button "Image 5" [ref=e68] [cursor=pointer]
            - button "Image 6" [ref=e69] [cursor=pointer]
            - button "Image 7" [ref=e70] [cursor=pointer]
      - generic [ref=e72]:
        - generic [ref=e73]:
          - generic [ref=e74]:
            - heading "Spots" [level=2] [ref=e75]
            - paragraph [ref=e76]: 35 results
          - generic [ref=e77]:
            - generic [ref=e78]:
              - button "Kite Day" [ref=e79] [cursor=pointer]:
                - img [ref=e81]
                - text: Kite Day
              - button "Gusty" [ref=e86] [cursor=pointer]:
                - img [ref=e88]
                - text: Gusty
              - button "Light wind" [ref=e90] [cursor=pointer]:
                - img [ref=e92]
                - text: Light wind
            - button "Saved" [ref=e96] [cursor=pointer]:
              - img [ref=e97]
              - text: Saved
            - generic [ref=e100]:
              - combobox [ref=e101] [cursor=pointer]:
                - option "Distance" [selected]
                - option "25 km"
                - option "50 km"
                - option "100 km"
                - option "200 km"
              - img
        - generic [ref=e102]:
          - generic [ref=e105]:
            - generic [ref=e106]:
              - generic [ref=e107]:
                - img "Wiki Beach" [ref=e108]
                - generic [ref=e110]: 5 km - Rosario
                - generic [ref=e111]:
                  - button "Share spot" [ref=e112] [cursor=pointer]:
                    - img [ref=e113]
                  - button "Sign in with Google to save favorites" [ref=e115] [cursor=pointer]:
                    - img [ref=e116]
                - generic [ref=e119]:
                  - img [ref=e120]
                  - text: No wind today
              - generic [ref=e122]:
                - generic [ref=e123]:
                  - heading "Wiki Beach" [level=3] [ref=e124]
                  - paragraph [ref=e125]: Rosario, Santa Fe
                - generic [ref=e129]:
                  - button "Loading..." [disabled] [ref=e131]:
                    - img [ref=e132]
                    - generic [ref=e134]: Loading...
                  - button "Maps" [ref=e136]:
                    - img [ref=e137]
                    - generic [ref=e139]: Maps
                - button "★ 5.0 ★ (2 reviews) Sign in to rate" [ref=e140]:
                  - generic [ref=e141]:
                    - generic [ref=e142]: ★
                    - generic [ref=e143]: 5.0 ★ (2 reviews)
                  - generic [ref=e144]:
                    - text: Sign in to rate
                    - img [ref=e145]
            - generic [ref=e147]:
              - generic [ref=e148]:
                - img "La Florida" [ref=e149]
                - generic [ref=e151]: 8 km - Rosario
                - generic [ref=e152]:
                  - button "Share spot" [ref=e153] [cursor=pointer]:
                    - img [ref=e154]
                  - button "Sign in with Google to save favorites" [ref=e156] [cursor=pointer]:
                    - img [ref=e157]
                - generic [ref=e160]:
                  - img [ref=e161]
                  - text: No wind today
              - generic [ref=e163]:
                - generic [ref=e164]:
                  - heading "La Florida" [level=3] [ref=e165]
                  - paragraph [ref=e166]: Rosario, Santa Fe
                - generic [ref=e170]:
                  - button "Loading..." [disabled] [ref=e172]:
                    - img [ref=e173]
                    - generic [ref=e175]: Loading...
                  - button "Maps" [ref=e177]:
                    - img [ref=e178]
                    - generic [ref=e180]: Maps
                - button "★ Be the first to rate this spot Sign in to rate" [ref=e181]:
                  - generic [ref=e182]:
                    - generic [ref=e183]: ★
                    - generic [ref=e184]: Be the first to rate this spot
                  - generic [ref=e185]:
                    - text: Sign in to rate
                    - img [ref=e186]
            - generic [ref=e188]:
              - generic [ref=e189]:
                - img "Melincué" [ref=e190]
                - generic [ref=e192]: 111 km - Melincué
                - generic [ref=e193]:
                  - button "Share spot" [ref=e194] [cursor=pointer]:
                    - img [ref=e195]
                  - button "Sign in with Google to save favorites" [ref=e197] [cursor=pointer]:
                    - img [ref=e198]
                - generic [ref=e201]:
                  - img [ref=e202]
                  - text: No wind today
              - generic [ref=e204]:
                - generic [ref=e205]:
                  - heading "Melincué" [level=3] [ref=e206]
                  - paragraph [ref=e207]: Melincué, Santa Fe
                - generic [ref=e211]:
                  - button "Loading..." [disabled] [ref=e213]:
                    - img [ref=e214]
                    - generic [ref=e216]: Loading...
                  - button "Maps" [ref=e218]:
                    - img [ref=e219]
                    - generic [ref=e221]: Maps
                - button "★ Be the first to rate this spot Sign in to rate" [ref=e222]:
                  - generic [ref=e223]:
                    - generic [ref=e224]: ★
                    - generic [ref=e225]: Be the first to rate this spot
                  - generic [ref=e226]:
                    - text: Sign in to rate
                    - img [ref=e227]
            - generic [ref=e229]:
              - generic [ref=e230]:
                - img "Lago Piedras Moras" [ref=e231]
                - generic [ref=e233]: 349 km - Almafuerte
                - generic [ref=e234]:
                  - button "Share spot" [ref=e235] [cursor=pointer]:
                    - img [ref=e236]
                  - button "Sign in with Google to save favorites" [ref=e238] [cursor=pointer]:
                    - img [ref=e239]
                - generic [ref=e242]:
                  - img [ref=e243]
                  - text: No wind today
              - generic [ref=e245]:
                - generic [ref=e246]:
                  - heading "Lago Piedras Moras" [level=3] [ref=e247]
                  - paragraph [ref=e248]: Almafuerte, Córdoba
                - generic [ref=e252]:
                  - button "Loading..." [disabled] [ref=e254]:
                    - img [ref=e255]
                    - generic [ref=e257]: Loading...
                  - button "Maps" [ref=e259]:
                    - img [ref=e260]
                    - generic [ref=e262]: Maps
                - button "★ Be the first to rate this spot Sign in to rate" [ref=e263]:
                  - generic [ref=e264]:
                    - generic [ref=e265]: ★
                    - generic [ref=e266]: Be the first to rate this spot
                  - generic [ref=e267]:
                    - text: Sign in to rate
                    - img [ref=e268]
            - generic [ref=e270]:
              - generic [ref=e271]:
                - img "Potrero Garay" [ref=e272]
                - generic [ref=e274]: 386 km - Potrero Garay
                - generic [ref=e275]:
                  - button "Share spot" [ref=e276] [cursor=pointer]:
                    - img [ref=e277]
                  - button "Sign in with Google to save favorites" [ref=e279] [cursor=pointer]:
                    - img [ref=e280]
                - generic [ref=e283]:
                  - img [ref=e284]
                  - text: No wind today
              - generic [ref=e286]:
                - generic [ref=e287]:
                  - heading "Potrero Garay" [level=3] [ref=e288]
                  - paragraph [ref=e289]: Potrero Garay, Cordoba
                - generic [ref=e293]:
                  - button "Loading..." [disabled] [ref=e295]:
                    - img [ref=e296]
                    - generic [ref=e298]: Loading...
                  - button "Maps" [ref=e300]:
                    - img [ref=e301]
                    - generic [ref=e303]: Maps
                - button "★ Be the first to rate this spot Sign in to rate" [ref=e304]:
                  - generic [ref=e305]:
                    - generic [ref=e306]: ★
                    - generic [ref=e307]: Be the first to rate this spot
                  - generic [ref=e308]:
                    - text: Sign in to rate
                    - img [ref=e309]
            - generic [ref=e311]:
              - generic [ref=e312]:
                - img "Punta Rasa" [ref=e313]
                - generic [ref=e315]: 514 km - San Clemente del Tuyú
                - generic [ref=e316]:
                  - button "Share spot" [ref=e317] [cursor=pointer]:
                    - img [ref=e318]
                  - button "Sign in with Google to save favorites" [ref=e320] [cursor=pointer]:
                    - img [ref=e321]
                - generic [ref=e324]:
                  - img [ref=e325]
                  - text: No wind today
              - generic [ref=e327]:
                - generic [ref=e328]:
                  - heading "Punta Rasa" [level=3] [ref=e329]
                  - paragraph [ref=e330]: San Clemente del Tuyú, Buenos Aires
                - generic [ref=e334]:
                  - button "Loading..." [disabled] [ref=e336]:
                    - img [ref=e337]
                    - generic [ref=e339]: Loading...
                  - button "Maps" [ref=e341]:
                    - img [ref=e342]
                    - generic [ref=e344]: Maps
                - button "★ Be the first to rate this spot Sign in to rate" [ref=e345]:
                  - generic [ref=e346]:
                    - generic [ref=e347]: ★
                    - generic [ref=e348]: Be the first to rate this spot
                  - generic [ref=e349]:
                    - text: Sign in to rate
                    - img [ref=e350]
            - generic [ref=e352]:
              - generic [ref=e353]:
                - img "Pinamar" [ref=e354]
                - generic [ref=e356]: 577 km - Pinamar
                - generic [ref=e357]:
                  - button "Share spot" [ref=e358] [cursor=pointer]:
                    - img [ref=e359]
                  - button "Sign in with Google to save favorites" [ref=e361] [cursor=pointer]:
                    - img [ref=e362]
                - generic [ref=e365]:
                  - img [ref=e366]
                  - text: No wind today
              - generic [ref=e368]:
                - generic [ref=e369]:
                  - heading "Pinamar" [level=3] [ref=e370]
                  - paragraph [ref=e371]: Pinamar, Buenos Aires
                - generic [ref=e375]:
                  - button "Loading..." [disabled] [ref=e377]:
                    - img [ref=e378]
                    - generic [ref=e380]: Loading...
                  - button "Maps" [ref=e382]:
                    - img [ref=e383]
                    - generic [ref=e385]: Maps
                - button "★ Be the first to rate this spot Sign in to rate" [ref=e386]:
                  - generic [ref=e387]:
                    - generic [ref=e388]: ★
                    - generic [ref=e389]: Be the first to rate this spot
                  - generic [ref=e390]:
                    - text: Sign in to rate
                    - img [ref=e391]
            - generic [ref=e393]:
              - generic [ref=e394]:
                - img "Villa Gesell" [ref=e395]
                - generic [ref=e397]: 584 km - Villa Gesell
                - generic [ref=e398]:
                  - button "Share spot" [ref=e399] [cursor=pointer]:
                    - img [ref=e400]
                  - button "Sign in with Google to save favorites" [ref=e402] [cursor=pointer]:
                    - img [ref=e403]
                - generic [ref=e406]:
                  - img [ref=e407]
                  - text: No wind today
              - generic [ref=e409]:
                - generic [ref=e410]:
                  - heading "Villa Gesell" [level=3] [ref=e411]
                  - paragraph [ref=e412]: Villa Gesell, Buenos Aires
                - generic [ref=e416]:
                  - button "Loading..." [disabled] [ref=e418]:
                    - img [ref=e419]
                    - generic [ref=e421]: Loading...
                  - button "Maps" [ref=e423]:
                    - img [ref=e424]
                    - generic [ref=e426]: Maps
                - button "★ Be the first to rate this spot Sign in to rate" [ref=e427]:
                  - generic [ref=e428]:
                    - generic [ref=e429]: ★
                    - generic [ref=e430]: Be the first to rate this spot
                  - generic [ref=e431]:
                    - text: Sign in to rate
                    - img [ref=e432]
          - button "Siguiente" [ref=e435] [cursor=pointer]:
            - img [ref=e436]
      - generic [ref=e439]:
        - generic [ref=e440]:
          - generic [ref=e441]:
            - heading "Community suggestions" [level=2] [ref=e442]
            - paragraph [ref=e443]: Help us improve the platform. Tell us what you'd like to see and how it would help you on the water.
          - generic [ref=e444]:
            - img "Premium"
            - button "Submit suggestion" [ref=e445]:
              - img [ref=e446]
              - text: Submit suggestion
        - paragraph [ref=e448]: You can only have one active suggestion, but you can edit it anytime. We reserve the right to moderate inappropriate content.
        - list [ref=e449]:
          - listitem [ref=e450]:
            - generic [ref=e451]:
              - generic [ref=e452]:
                - img "Premium"
                - button "0" [ref=e453]:
                  - img [ref=e454]
                  - text: "0"
              - generic [ref=e456]:
                - generic [ref=e458]: Bug
                - paragraph [ref=e459]: che hay un bugasdasdas
                - paragraph [ref=e460]: What's it for? asdasdasdasdasdasdasdas
                - generic [ref=e461]:
                  - generic [ref=e462]: Nicolás Logosettis
                  - generic [ref=e463]: ·
                  - generic [ref=e464]: Apr 30, 2026
      - contentinfo [ref=e465]:
        - generic [ref=e466]:
          - paragraph [ref=e467]: Sudakite
          - paragraph [ref=e468]: Weather data displayed comes from external services and is for guidance only. Sudakite is not responsible for inaccuracies or decisions made based on this information. Always verify local conditions before kitesurfing.
          - generic [ref=e469]:
            - link "Privacy Policy" [ref=e470] [cursor=pointer]:
              - /url: /privacidad
            - link "Terms and Conditions" [ref=e471] [cursor=pointer]:
              - /url: /terminos
            - link "Contact" [ref=e472] [cursor=pointer]:
              - /url: /contacto
          - paragraph [ref=e473]: © 2026 Sudakite. All rights reserved.
```

# Test source

```ts
  1  | import { Page, expect } from "@playwright/test";
  2  | 
  3  | export class SpotsPage {
  4  |     constructor(private page: Page) {}
  5  | 
  6  |     async validateSpotsSection() {
  7  |         const title = this.page.getByRole("heading", {
  8  |             name: "Spots",
  9  |         });
  10 | 
  11 |         await expect(title).toBeVisible();
  12 |     }
  13 | 
  14 |     async validateWikiBeachCard() {
  15 |         const spotCard = this.page.locator("#spot-card-wiki-beach");
  16 | 
> 17 |         await expect(spotCard).toBeVisible();
     |                                ^ Error: expect(locator).toBeVisible() failed
  18 | 
  19 |         console.log("Wiki Beach card encontrada correctamente");
  20 |     }
  21 | 
  22 |     async validateSpotButtons() {
  23 |         const spotCard = this.page.locator("#spot-card-wiki-beach");
  24 | 
  25 |         const buttons = spotCard.locator("button");
  26 | 
  27 |         const count = await buttons.count();
  28 | 
  29 |         console.log(`Botones encontrados en la card: ${count}`);
  30 | 
  31 |         expect(count).toBeGreaterThan(0);
  32 |     }
  33 | }
  34 | 
```