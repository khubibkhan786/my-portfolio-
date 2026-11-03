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

## 5. Mobile Hero Typography & Bidirectional Isolation
- **Dual-Layer Kicker**: Separated developer name and academic specialization into balanced, responsive text blocks that wrap gracefully on small mobile screens (< 390px).
- **Bidirectional Isolation (`<bdi dir="ltr">`)**: Wrapped embedded English technical terms (`Computer Science`) with `<bdi dir="ltr">` inside RTL contexts, preventing grammar disruption, reversed punctuation, or broken line sequences.
- **Dynamic Localization**: Ensured `t.hero.statusBadge` properly displays the developer's name in Pashto, Dari, and English without hardcoding.

## 6. Lower Content Cards Polish & Distinction
- **Services, Skills, Roadmap, Journey & About**: Added subtle top accent gradient lines (1.5px-2px) matching each category or domain color without heavy shadows or garish borders.
- **Crafted Icon Containers**: Added soft domain-tinted backgrounds and delicate borders to icons across Services, Roadmap, Skills, Work Process, and About.
- **Light & Dark Surface Consistency**: Standardized light mode cards to `bg-white` with `border-slate-200/90` and `shadow-[0_2px_12px_rgba(15,23,42,0.04)]`, and dark mode cards to `dark:bg-[#0c121e]/90` with `dark:border-white/[0.08]`.

## 7. Natural Multilingual Localization
- Preserved standard technical terms in English (Android, Web, Database, Full-Stack, AI Integration, React, Kotlin, SQL) while keeping natural phrasing in Pashto and Dari.
