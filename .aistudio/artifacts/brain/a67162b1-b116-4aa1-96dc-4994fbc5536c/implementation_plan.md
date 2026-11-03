# Implementation Plan: AGZ Developer Portfolio — Typography, Design System & Professional Polish (Completed)

This document records the design system unification, modern font streamlining, repeatable scroll-triggered animations, distinct AI service architecture, and skills section simplification for the AGZ Developer Portfolio of Abdul Jalil Zwak (Computer Science student at Paktia University specializing in Information Systems).

---

## 1. Modern Font System & Typography Polish

- **Strict 3-Font Family Combination**:
  - **English (LTR)**: `Plus Jakarta Sans` (400, 500, 600, 700, 800) for all headings, body copy, and UI text.
  - **Pashto & Dari (RTL)**: `Vazirmatn` (400, 500, 600, 700, 800) for natural Nastaliq/Naskh Arabic glyph shaping and optimal line heights (1.75–1.8).
  - **Code & Terminal Only**: `JetBrains Mono` (400, 500, 600) exclusively for `<pre>`, `<code>`, `.code-mono`, and terminal tabs.
- **Font Performance & Asset Optimization**:
  - Eliminated unnecessary font requests from Google Fonts (`Outfit`, `Space Grotesk`, `Noto Sans Arabic`), reducing HTTP overhead.
  - Retained `font-display: swap` for zero-FOIT initial rendering.
  - Retained fallback cascades (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`).
  - Preloaded Google Fonts DNS preconnects (`fonts.googleapis.com`, `fonts.gstatic.com`).

---

## 2. Separate AI Development Services

- **Two Distinct, Independent Service Cards**:
  1. **AI-Integrated Web Applications**:
     - *Visual Identity*: Indigo/Sky-blue accent, dual icon (`Globe` + glowing `Sparkles`), badge: `AI + Web`.
     - *Concise Scope*: Practical web interfaces integrated with AI model APIs for smart text processing, natural search filtering, and automated workflows.
     - *Hover Micro-Interaction*: Indigo ring & glow transition, elevation.
  2. **AI-Integrated Mobile Applications**:
     - *Visual Identity*: Emerald/Teal accent, dual icon (`Smartphone` + `Cpu`), badge: `AI + Mobile`.
     - *Concise Scope*: Native Android applications with practical on-device intelligence, offline-first Room database storage, and voice/assistant integration.
     - *Hover Micro-Interaction*: Emerald ring & glow transition, elevation.
- **Honest Positioning**: Clearly communicates ability to integrate practical AI APIs and on-device features without hyperbolic claims.

---

## 3. Simplified Skills Section (3 Main Expandable Categories)

- **Completely Simplified Structure**:
  - Replaced long technology inventories and progress meters with 3 clean, high-level categories:
    1. **Software Development**: Object-oriented fundamentals, structured code architecture, and disciplined problem solving.
    2. **Database & Data Management**: Relational data modeling, table normalization, schema design, and local offline database storage.
    3. **Web & Mobile Development**: Building responsive web interfaces and native mobile apps with practical AI-driven enhancements.
- **Interactive State**:
  - *Default State*: Short introduction, 3 compact cards. All detailed technical items hidden to eliminate cognitive clutter.
  - *On Click*: Smooth accordion expansion displaying verified focus areas (area name + concise description with checkmark).
  - *Collapse*: User can toggle back to the compact state effortlessly.
- **Continuous Learning Statement**:
  - Replaced technical syllabus with one natural, honest statement:
    - *English*: "Continuously strengthening software engineering foundations, studying real-world application architectures, and building practical, reliable digital products."
    - *Pashto*: "په دوامداره توګه د سافټویر انجینرۍ د اساساتو پیاوړي کول، د عملي سیسټمونو د معمارۍ زده کړه او د ګټورو او ډاډمنو ډیجیټل محصولاتو جوړول."
    - *Dari*: "تقویت پیوسته مبانی مهندسی نرم‌افزار، مطالعه معماری سیستم‌های کاربردی و توسعه هدفمند محصولات دیجیتال و مطمئن."
  - Zero technology lists, zero percentages, zero progress bars.

---

## 4. Repeat Scroll-Triggered Animations

- **Repeated Viewport Entry**:
  - Replaced all `viewport={{ once: true }}` configurations with `viewport={{ once: false, amount: 0.15 }}` across:
    - `About.tsx`
    - `Skills.tsx`
    - `FutureRoadmap.tsx`
    - `Services.tsx`
    - `WorkProcess.tsx`
    - `Projects.tsx` (both header and project cards)
    - `Journey.tsx`
    - `Contact.tsx`
  - Elements gracefully re-animate with subtle fade, slide, and stagger every time the user scrolls back into view.
  - Compositor-thread performance preserved without heavy JS delays.
  - Full respect for `prefers-reduced-motion: reduce`.

---

## 5. Unified Design System & Dual-Theme Polish

- **Standardized Spacing & Grids**:
  - Consistent container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
  - Consistent section spacing: `py-16 sm:py-20 lg:py-24`.
  - Consistent card border radius: `rounded-2xl` and `rounded-3xl`.
  - Consistent borders: `border-slate-200/90 dark:border-slate-800`.
- **Dark Mode**: Retains deep `#07090e` navy identity with subtle indigo and cyan atmospheric ambient lighting.
- **Light Mode**: Soft `#f8fafc` background, crisp dark slate text (`text-slate-900`), balanced contrast, clean white card surfaces (`bg-white/95`), and subtle shadows.

---

## 6. Multilingual Parity & Responsive Validation

- **Languages Tested**:
  - **English (`en`)**: LTR, Plus Jakarta Sans, natural editorial typography.
  - **Pashto (`ps`)**: RTL, Vazirmatn, native phrasing, natural letter shaping and proper text direction.
  - **Dari (`fa`)**: RTL, Vazirmatn, balanced typography and cultural appropriateness.
- **Build & Quality Check**:
  - `lint_applet` passed (`tsc --noEmit` with zero errors).
  - `compile_applet` passed (`Build succeeded - the applet is compiled`).
