# Tasks

## 1. Styling

- [x] 1.1 Align typography and verify BlogTypography.
- [x] 1.2 Align controls, navigation, cards and forms; verify BlogControlStates and BlogCardsAndForms.
- [x] 1.3 Verify PreservedThemeAndNavigation in both themes and viewport sizes.

## 2. Delivery

- [x] 2.1 Validate OpenSpecInitialized; build and smoke the production preview.
- [x] 2.2 Record verification evidence.

## Scenario-to-test matrix

All scenarios are manual browser smoke tests against `npm run dev -- --host 127.0.0.1 --port 5173 --strictPort`, with GitHub and rss2json requests blocked, plus the production preview where noted. No permanent test runner exists.

| Scenario | Preconditions and action | Expected observable result |
| --- | --- | --- |
| BlogTypography | Visit all pages; inspect computed fonts and home name; block remote fonts; repeat home on preview | Inter body, JetBrains Mono headings, theme heading color, readable fallbacks |
| BlogControlStates | Inspect all CTAs normal, hover, keyboard focus, exit and theme switch while hovered; click home CTAs; inspect external links and form action; repeat home focus on preview | Theme token colors and visible focus, current theme on exit, correct destinations |
| BlogCardsAndForms | Inspect fallback cards and profile/contact panels before and during hover; fill and validate contact fields without submission | 12px radius, fixed shadow, bg2 inputs, required/email validation |
| PreservedThemeAndNavigation | Toggle and reload theme; fresh storage; use every mobile menu item; inspect desktop/mobile overflow; repeat persistence on preview | Persisted preference, default dark, correct page and closed menu, no overflow |
| OpenSpecInitialized | Run `openspec list --json` and `openspec validate --all --strict --no-interactive` | Working initialized project and valid populated artifacts |

## Baseline and evidence

Baseline browser: body and headings computed ui-sans-serif, home name rgb(97, 175, 239), primary CTA blue/white with transparent border. Source inspection showed mouse-only inline hover and elevated card hover shadows.

- **BlogTypography:** On the dev server at 1440×1000, all five pages' main headings computed JetBrains Mono first and the root computed Inter first; home name rgb(230, 230, 230). Font stylesheet and Inter/JetBrains Mono files returned HTTP 200. A separate tab blocked external font requests; the screenshot remained legible using fallback stacks. Production preview computed the same font stacks.
- **BlogControlStates:** In dark mode all CTA types computed rgb(33, 37, 43) background, rgb(230, 230, 230) foreground and rgb(58, 63, 75) border. Home, project, channel and contact CTAs computed rgb(40, 44, 52)/rgb(86, 182, 194) on hover and a 2px solid focus-visible outline. Home pointer exit restored normal colors; switching to light while hovered computed rgb(250, 250, 250)/rgb(9, 151, 179), then exit rgb(240, 240, 240)/rgb(56, 58, 66). Both home CTAs reached their intended pages. Project and channel hrefs and mailto form action were inspected without external navigation or submission. Production focus was a 2px cyan outline.
- **BlogCardsAndForms:** With external APIs blocked, project and video fallback cards, about profile and skills, and contact panel computed 12px radius and rgba(0, 0, 0, 0.25) 0px 4px 16px 0px shadow. Hovering project, video, contact, profile and skill cards did not change shadows. All four required fields computed rgb(33, 37, 43); empty form failed validation, malformed email reported typeMismatch, and a fully populated valid form passed checkValidity without submission.
- **PreservedThemeAndNavigation:** Fresh storage defaulted dark. At 390×844 each mobile menu item reached the intended page, closed the menu, displayed the expected active colors and had no horizontal overflow; all five desktop pages also had no overflow. Initial dev verification exposed an existing StrictMode race: switching to light set localStorage.darkMode to false, but reload restored dark and overwrote it with true. After user approval, initializing state from storage fixed the race: dev reload retained light with stored false and dark with stored true; fresh storage defaulted dark. Rebuilt production preview also retained light across reload.
- **OpenSpecInitialized:** `openspec list --json` returned the change; `openspec validate --all --strict --no-interactive` passed one change. `npm run build` and `npm run lint` exited 0. Build reported stale Browserslist data and an existing PostCSS `from` warning.
