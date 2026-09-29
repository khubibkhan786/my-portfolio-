# International SEO (hreflang) Implementation Plan

Configure multilingual international SEO tags (`hreflang`), alternate OpenGraph locales, and URL parameter language routing for **English**, **پښتو (Pashto)**, and **دری (Dari)** in `index.html` and `LanguageContext.tsx`.

## Proposed Changes

### 1. International SEO & Hreflang Tags (`index.html`)
- Add standard `<link rel="alternate" hreflang="..." />` tags right below the canonical URL:
  - `hreflang="x-default"`: Default global landing URL.
  - `hreflang="en"`: English edition.
  - `hreflang="ps"` and `hreflang="ps-AF"`: Pashto edition (`?lang=ps` & Afghanistan locale).
  - `hreflang="fa"`, `hreflang="prs"`, and `hreflang="fa-AF"`: Dari / Afghan Persian edition (`?lang=fa` & Afghanistan locale).
- Add OpenGraph alternate locale metadata:
  - `<meta property="og:locale:alternate" content="ps_AF" />`
  - `<meta property="og:locale:alternate" content="fa_AF" />`
- Update JSON-LD structured data `inLanguage` property to indicate trilingual availability (`["en", "ps", "fa"]`).

### 2. URL Parameter Language Detection (`src/context/LanguageContext.tsx`)
- Allow search engines and direct links with `?lang=ps` or `?lang=fa` to automatically load in the designated language on initial visit, while keeping `localStorage` synchronized.

---

## Verification Plan

- Inspect `index.html` to confirm all `hreflang` tags, canonical references, and OG alternate locales conform to Google Search Central international SEO standards.
- Run `compile_applet` and `lint_applet` to verify zero build or syntax issues.
