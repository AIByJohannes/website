# Proposal

## Why

The portfolio uses the blog's palette but its typography, controls, forms and cards differ from the blog's design.

## What Changes

- Match blog typography and subdued control, form and card styling using the existing light and dark tokens.
- Preserve layout, navigation, content, destinations and persisted theme preference.
- Fix the observed development-mode theme persistence race, with user approval.
- Initialize OpenSpec without generating agent integrations; rebuild the deployment artifact.
- Do not modify the blog, TickTick or implement search.

## Capabilities

### New Capabilities
- `portfolio-theme`: Blog-aligned portfolio styling with preserved theme and navigation behavior.

### Modified Capabilities

None.

## Impact

React components, global CSS, fonts, Tailwind configuration, generated docs and OpenSpec artifacts.
