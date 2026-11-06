# portfolio-theme Specification

## Purpose
Provide a portfolio presentation consistent with the blog while retaining existing navigation and theme choice.

## Requirements

### Requirement: Blog typography
The portfolio SHALL use Inter for body text and JetBrains Mono for headings with usable fallbacks, while retaining Fira Code for terminal elements.

#### Scenario: BlogTypography
- **WHEN** a visitor opens any portfolio page with or without remote fonts
- **THEN** body and headings use their designated font stacks and remain legible.

### Requirement: Blog controls
Calls to action SHALL use the current theme's subdued background, foreground and border, with visible hover and keyboard focus states.

#### Scenario: BlogControlStates
- **WHEN** a visitor hovers or focuses a call to action or switches theme while hovering
- **THEN** its colors reflect the current theme and keyboard focus has a visible outline; navigation and destinations remain unchanged.

### Requirement: Cards and forms
Cards SHALL use static shadows and contact fields SHALL use the current theme's secondary background.

#### Scenario: BlogCardsAndForms
- **WHEN** cards are hovered or the contact form is filled
- **THEN** card elevation stays fixed and existing required and email validation remains effective.

### Requirement: Theme and navigation preservation
The portfolio SHALL retain light and dark theme persistence, page navigation and responsive layout.

#### Scenario: PreservedThemeAndNavigation
- **WHEN** a visitor changes theme, reloads, or selects a mobile navigation item
- **THEN** the theme persists, the selected page appears, and the mobile menu closes without horizontal overflow.
