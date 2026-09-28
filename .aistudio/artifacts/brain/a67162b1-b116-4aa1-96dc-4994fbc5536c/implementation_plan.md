# RahimDev-Inspired Style & Trilingual (EN / PS / FA) Transformation Plan

A comprehensive architectural and design plan to transform Abdul Jalil Zwak's portfolio into a modern, production-grade developer showcase inspired by `rahimdev.net`, featuring full trilingual support (**English**, **پښتو / Pashto**, and **دری / Dari**) with seamless RTL (Right-to-Left) layout and typography.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following decisions were confirmed by the user and guide this implementation:
> - **Language Architecture**: Complete trilingual support for English (`en`), Pashto (`ps`), and Dari (`fa`) with full Right-to-Left (`dir="rtl"`) layout and native Arabic/Persian/Pashto typography.
> - **Default Experience**: English as the default language on first load, with seamless 1-click toggling between English, پښتو, and دری, persisted in `localStorage`.
> - **RahimDev Aesthetic**: Dark modern developer theme featuring high-contrast card outlines, production project cards with store/platform status badges (`Android App`, `Web App`, `Offline-First`, `Material 3`), deliverable metrics, and elegant typography.
> - **Code & Technical Integrity**: Code snippets, technical terminals, URLs, and git identifiers maintain strict LTR alignment even in RTL mode for developer authenticity.

---

## 1. Overview & Trilingual Scope

- **Core Goal**: Provide an authentic, high-impact portfolio experience accessible to international tech recruiters and regional Afghan/Middle Eastern audiences in their native language (Pashto & Dari) with accurate vocabulary and proper cultural phrasing.
- **Visual Baseline**: RahimDev-inspired dark layout featuring deep `#080b11` / `#07090e` contrast, neon cyan/emerald/indigo accents, production-ready app cards, deliverable metrics ribbon, and subtle glowing glass surfaces.
- **Scope of Localization**:
  1. `Navbar` & Brand mark (AGZ / عبدالجلیل ځواک)
  2. `Hero` section (Headlines, developer statements, CTA buttons, metrics)
  3. `About` section & Currently Building card (Islamic Companion / اسلامي ملګری / همراه اسلامی)
  4. `Skills` toolkit (Category titles, competencies, evidence descriptions)
  5. `Services` (Software Development, Web Apps, Database Solutions, UI Implementation)
  6. `Projects` showcase (Filters, descriptions, challenge/solution statements, case study modals)
  7. `Journey` timeline (Milestones and educational milestones)
  8. `Contact` & `Footer` (Forms, labels, copy actions, copyright)

---

## 2. User Experience & Visual Design

### Trilingual Switcher & RTL Behavior
- **Navbar Switcher**: A segmented pill or dropdown selector located in the top Navbar adjacent to the theme toggle, clearly indicating:
  - `English` (LTR)
  - `پښتو` (Pashto, RTL)
  - `دری` (Dari, RTL)
- **RTL Fluidity**: When switching to Pashto or Dari:
  - Document element sets `dir="rtl"` and `lang="ps"` or `lang="fa"`.
  - Grid structures, margins, flex layouts, arrows, and milestone timelines mirror naturally (`mr-` becomes `ml-`, left-aligned becomes right-aligned).
  - Terminal windows and code snippets retain `dir="ltr"` and `text-left` to preserve standard programming syntax readability.
- **Typography**:
  - English: `Outfit` / `Plus Jakarta Sans` / `JetBrains Mono`.
  - Pashto & Dari: Native Persian/Arabic typography stack (`Vazirmatn`, `Noto Sans Arabic`, `Segoe UI`, `Tahoma`) optimized for Persian/Pashto character ligatures, proper line heights, and smooth baseline alignment.

### RahimDev Style System
- **Palette**: Deep noir canvas (`#080b11`), structural borders (`rgba(255, 255, 255, 0.08)` / slate-800), electric cyan (`#06b6d4`), emerald (`#10b981`), and royal indigo (`#6366f1`).
- **Production Project Cards**:
  - App platform headers with clear badges (`Android`, `Web`, `CLI / Tool`).
  - Distribution badges (`Offline-First`, `Google Play Ready`, `Active Production`).
  - Feature checklist with emerald checkmarks.
  - Interactive "View Case Study →" modal with full architectural breakdown.
- **Developer Metrics Ribbon**:
  - Clean statistical strip in the Hero/About section highlighting real metrics:
    - `100% Offline Autonomy` (Local Room / SQLite)
    - `4+ Production Solutions` (Mobile, Web & Tools)
    - `2026 CS & IS Graduate` (Academic Horizon)
    - `Modern Tech Stack` (Kotlin, Java, React, SQL)

---

## 3. Technical Architecture & Data Strategy

### System Component Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                        App.tsx (Root Layout)                           │
│  - ThemeProvider ('dark' #080b11 / 'light')                            │
│  - LanguageProvider ('en' | 'ps' | 'fa') + document.dir ('ltr'|'rtl')   │
│  - Multi-tone Ambient Mesh & Grid Background Layer                     │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │
         ┌───────────────────────────┼───────────────────────────┐
         ▼                           ▼                           ▼
┌──────────────────┐       ┌──────────────────┐        ┌──────────────────┐
│     Navbar       │       │   Hero Section   │        │  About & Focus   │
│ - AGZ Logo       │       │ - Trilingual     │        │ - Scannable Bio  │
│ - Nav Links      │       │   Headlines      │        │ - Deliverables   │
│ - Language Drop- │       │ - Metrics Ribbon │          Metrics Ribbon   │
│   down Selector  │       │ - RahimDev-style │        │ - Islamic Comp.  │
│ - Theme Switcher │       │   Terminal Card  │          Card (Spotlight) │
└──────────────────┘       └──────────────────┘        └──────────────────┘
         │                           │                           │
         └───────────────────────────┼───────────────────────────┘
                                     │
         ┌───────────────────────────┼───────────────────────────┐
         ▼                           ▼                           ▼
┌──────────────────┐       ┌──────────────────┐        ┌──────────────────┐
│ Projects Section │       │ Skills & Toolkit │        │ Contact & Footer │
│ - RahimDev Cards │       │ - Evidence Cards │        │ - Mailto Helper  │
│ - Store Badges   │       │ - Domain Badges  │        │ - Copy Email     │
│ - Category Filter│       │ - Learning Goals │        │ - Trilingual     │
│ - Case Study     │       └──────────────────┘          Footer Notes     │
│   Modal Dialog   │                                   └──────────────────┘
└──────────────────┘
```

### Translation Architecture (`src/data/translations.ts`)
- A modular dictionary structure organized by section:
  ```ts
  export type Language = 'en' | 'ps' | 'fa';
  export interface TranslationSchema {
    nav: { home: string; about: string; skills: string; services: string; projects: string; journey: string; contact: string; letsTalk: string };
    hero: { role: string; headlinePre: string; headlineHighlight: string; description: string; viewWork: string; contactMe: string; ... };
    about: { ... };
    skills: { ... };
    services: { ... };
    projects: { ... };
    journey: { ... };
    contact: { ... };
    footer: { ... };
  }
  ```
- **LanguageContext (`src/context/LanguageContext.tsx`)**:
  - Provides `language`, `setLanguage`, `t` (translation strings object), and `isRtl` boolean.
  - Automatically updates `<html dir="..." lang="...">` and sets directional CSS classes.
  - Syncs choice to `localStorage.getItem('agz_lang')`.

---

## 4. Verification & Testing Plan

1. **Compilation & Syntax**: Run `compile_applet` and `lint_applet` to verify clean build with zero TypeScript or JSX errors.
2. **Language Switching**: Test toggling between English, Pashto, and Dari:
   - Ensure all section titles, buttons, descriptions, and metadata switch accurately.
   - Verify document layout mirrors seamlessly to RTL without horizontal scroll or layout breaks.
3. **RTL Formatting**: Confirm code snippets, terminal lines, and links retain proper LTR text direction.
4. **Responsive Testing**: Test across mobile (320px–375px), tablet (768px), and desktop (1280px–1920px).
