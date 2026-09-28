# Implementation Plan: Floating Quick Connect Action Button

Implement a modern, floating Quick Connect speed-dial action button that gives visitors instantaneous access to get in touch, view key profiles, or message Abdul Jalil Zwak without cluttering the screen or altering existing layouts.

---

## 1. Feature Architecture & Placement

- **Component**: `src/components/ui/FloatingActionHub.tsx`
- **Screen Position**: Floating at the bottom-left (`fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-40`), perfectly counterbalancing the bottom-right `ScrollToTop` button.
- **Visual Design**:
  - **Collapsed State**: Sleek glassmorphic button with an active availability pulse indicator (`Available for projects`), a conversation icon, and a concise `"Let's Connect"` label (icon-only on extra small screens for clean mobile responsiveness).
  - **Expanded Speed-Dial Menu**: Animated popover with spring transitions that fans out four key actions:
    1. **Direct Email**: One-click compose to `a.zwak.khan@gmail.com`.
    2. **LinkedIn Profile**: Direct external link with indicator.
    3. **GitHub Profile**: Quick code access link.
    4. **Jump to Contact Form**: Smooth scroll to `#contact` section.
- **Theme Adaptation**: Clean translucent glass in light mode and deep cyber-slate glass in dark mode, maintaining 100% theme consistency.

---

## 2. Technical Implementation Details

1. **State & Interactions**:
   - `isOpen`: Toggle between collapsed trigger and expanded action stack.
   - Click-outside & Escape key listener to close menu gracefully when focus shifts.
   - Framer Motion staggered children entrance for actions.
2. **Integration (`src/App.tsx`)**:
   - Mount `<FloatingActionHub />` inside `PortfolioContent` in `App.tsx`.
   - Maintain all existing layouts and performance optimizations.
3. **Verification**:
   - Run compilation and linting to ensure zero TypeScript and layout regressions.
