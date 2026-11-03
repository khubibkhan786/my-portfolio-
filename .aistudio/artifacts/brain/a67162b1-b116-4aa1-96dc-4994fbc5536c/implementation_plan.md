# Implementation Plan & Execution Summary — Theme, Logo & Localization Refinement

## 1. AGZ Logo RTL/LTR Correction
- **Navbar & Footer**: Enforced strict LTR direction and bidirectional text isolation (`dir="ltr"`, `direction: ltr`, `unicode-bidi: isolate`) with `<bdi>` elements wrapping `AG` and `Z`.
- **Rendered Result**: Guarantees visual order **A - G - Z** with the status dot on the far right across English, Pashto, and Dari.

## 2. University Name Strict Content Restriction
- **Restricted To**: Only inside the About section under the personal education credentials (`educationSub` and authentic introductory paragraph).
- **Removed From**:
  - Hero kicker (replaced with `{t.hero.subline}`)
  - Hero metrics (`metric3Label` changed to "Graduation Goal" / "د فراغت هدف" / "هدف فراغت")
  - DeveloperTechPanel snapshot (changed to `"CS Student & Developer (Class of 2026)"`)
  - Skills verified evidence (`skills.ts`)
  - Future Roadmap note & subtitle
  - Journey 2026 milestone description
  - Footer subline
- **Verification**: `grep -rn "Paktia\|پکتیا" src/` confirms occurrences exist exclusively within the About section.

## 3. Pashto Terminology Correction
- Replaced all unnatural occurrences of "اړیکیز ډیټابیس" / "اړیکیز" with natural Pashto **"اړوند ډیټابیس"** across `skills.ts`, `Services.tsx`, `FutureRoadmap.tsx`, and `translations.ts`.
- Verified 0 occurrences of "اړیکیز" remain.

## 4. Theme Refinements
- **Dark Mode**: Retained deep `#07090e` palette, subtle cards, and indigo/cyan glow without structural distortion.
- **Light Mode**: Refined secondary text contrast (`--text-muted: #475569`), improved card surface definitions on neutral `#f8fafc` canvas, and ensured crisp borders.

## 5. Natural Multilingual Localization
- Preserved standard technical terms in English (Android, Web, Database, Full-Stack, AI Integration, React, Kotlin, SQL) while keeping natural phrasing in Pashto and Dari.
