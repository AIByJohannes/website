# Design

## Context

The existing theme tokens already match the blog palette. The site retains its layouts and theme persistence.

## Goals / Non-Goals

**Goals:** Align typography, control states, forms and static card shadows in both themes.

**Non-Goals:** Blog changes, search, TickTick mutation, layout redesign or new testing framework.

## Decisions

Use Inter body and JetBrains Mono headings with local fallbacks; retain Fira Code terminal styling. Use one shared CSS control rule with theme-derived custom properties, including keyboard focus and disabled states. Keep navigation separate, preserving inactive hover. Reuse existing cards with static shadows and use bg2 for form fields. Build docs/ for deployment.

Initialize theme state from the stored preference before persistence effects run. This preserves the dark default and fixes the observed StrictMode development reload race without changing the storage key or theme tokens. The user approved this adjustment after browser verification exposed the conflict with the original unchanged-persistence constraint.

## Risks / Trade-offs

Remote fonts can fail; fallback stacks remain usable. CSS states avoid stale inline hover colors when the theme changes. Browser smoke checks cover responsive behavior without adding a testing framework.
