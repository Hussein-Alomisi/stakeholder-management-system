# Evaluation and Improvement Plan for تشييد القوى

This document outlines the professional analysis and the technical roadmap for improving the project before we proceed with the heavy lifting of building features and pages.

## User Review Required
> [!IMPORTANT]
> Please review this analysis carefully. Once approved, I will implement this foundation (fixing the Next.js setup, updating the design tokens, and applying the folder structure).

## Proposed Changes

### 1. Project Structure
The `src/` directory approach is good, but the App Router structure needs refinement to scale elegantly:
- **Implement Route Groups**: Group public pages under `src/app/(public)` and dashboard pages under `src/app/(dashboard)` to have isolated layouts (e.g., the dashboard doesn't need the public Navbar/Footer).
- **Component Organization**: Organize `src/components` logically:
  - `src/components/ui`: Primitive interactive components (Buttons, Inputs).
  - `src/components/layout`: Shared structural components (Navbar, Footer, Sidebar).
  - `src/components/sections`: Page-specific sections (Hero, Features).
- **Remove Unused Dirs**: `src/styles` is empty and redundant because Tailwind v4 uses `globals.css`.

### 2. Code Quality
- **Routing**: Update the anchor tags `<a>` in `Navbar.tsx` to Next.js `<Link>` components to enable fast, client-side routing.
- **Server/Client Components**: The `Navbar.tsx` is currently entirely marked `"use client"` because of the dark mode toggle. We should isolate the theme toggle into its own tiny client component to keep the rest of the navigation as a better-performing Server Component.
- **Tailwind Tokens Bug**: The `bg-primary` and `text-gold` classes used in the codebase do not exist yet. Using Tailwind CSS v4, we need to map those correctly within `globals.css` using the `@theme inline` block.

### 3. UI/UX Review
For a **Premium, Corporate, and Luxury** look:
- **Dark Mode Strategy**: A pure black (`#000000` or `#0a0a0a`) combined with metallic/gold shades exudes professionalism and luxury. 
- **Typography & Hierarchy**: The `Cairo` font is great. We need to introduce generous spacing (`gap`, `padding`), large bold headings, and easily readable muted text for paragraphs (e.g., `#A3A3A3`).
- **Interactive Feel**: Add subtle transitions on hover states, and consider glassmorphism (translucent backgrounds with blur effects) for fixed elements like the Navbar.

### 4. Performance
- **Image Optimization**: Ensure we import and use `next/image` for all project showcases, logos, and hero backgrounds.
- **Lazy Loading**: Use `next/dynamic` to load heavy components below the fold.
- **Fonts Optimization**: `cairo` font loaded by `next/font` is great, but ensure any unused template fonts (like `geistSans`) are safely removed to prevent unnecessary downloads.

### 5. SEO & Accessibility
- **Metadata**: The `layout.tsx` currently has `title: "Create Next App"`. We must replace this with a powerful SEO object, including Opengraph tags for "تشييد القوى للمقاولات".
- **Semantics & Accessibility**:
  - Add `lang="ar"` and `dir="rtl"` to the `<html>` node directly in `layout.tsx` instead of relying strictly on CSS, ensuring maximum browser compatibility.
  - Implement `aria-label` tags on interactive buttons like the theme toggler or mobile menus.

### 6. Scalability
- **i18n Readiness**: Centralize hardcoded Arabic texts (like Navbar links) into a `src/lib/constants.ts` or a localized JSON dict so switching it to English or using `next-intl` later is effortless.
- **Authentication Prep**: For the dashboard, configure a scalable path like `src/app/(auth)/login` layout to eventually hook into NextAuth / JWT. 

### 7. Design System
We will integrate tokens natively into Tailwind v4's `globals.css`:
- **Color Palette**:
  - `--color-primary`: `#0A0A0A` (Deep Black / Foundation)
  - `--color-secondary`: `#171717` (Dark Charcoal / Cards)
  - `--color-gold`: `#D4AF37` (Classic Gold / Accents)
  - `--color-gold-light`: `#F3E5AB` (Hover states)
- **Typography**: Define `--font-cairo` as the default sans variable.

### 8. Recommended Pages & Features Structure

#### Public Website `src/app/(public)`
- **`/` (Home)**: Grand Hero with high-res imagery, snippet of 'About', Top 3 Projects, 'Why Choose Us', CTA.
- **`/about`**: Vision, Mission, Corporate values, and Leadership details.
- **`/services`**: Grid of services (e.g., General Contracting, Architectural Design, Project Management).
- **`/projects`**: Premium masonry or grid gallery showcasing past works, sortable by category (Commercial/Residential).
- **`/contact`**: Interactive form, Embedded Map (Google Maps API), and direct contact (Phone, Email).

#### Admin `src/app/(dashboard)`
- **`/dashboard`**: High-level metrics.
- **`/dashboard/projects`**: CMS interface to add, remove, and edit portfolio items.

## Open Questions
- Do you strictly want a Light/Dark toggle, or should we lock the theme to a permanent **Dark/Gold Luxury Theme**? Premium portfolios often enforce a dark theme permanently for brand consistency.
- Are we open to adding `framer-motion` for buttery smooth reveal animations when scrolling?
- Shall we use `lucide-react` for standard UI icons (like arrows, menus, dashboard icons)?

## Verification Plan
### Automated & Manual Verification
- Reconfigure the folder structure visually.
- Start `npm run dev` and ensure `localhost:3000` applies the custom Gold & Black styles properly (checking Tailwind v4 bindings).
- Inspect the DOM for correct `<html lang="ar" dir="rtl">` rendering.
- Ensure no ESLint errors exist within structure changes.
