# Remaining Tasks

## Current Task: Language + Name Change
- [x] Create LanguageContext with translations for Home page (de, en, fr, hu, cs, hr)
- [x] Create LanguageSelector component with flags (UK, France, half-Federation/half-national for HU, HR, CS)
- [x] Add LanguageProvider to App.tsx
- [x] Update Navigation to use translations + add LanguageSelector
- [ ] Update Home.tsx to use `t()` function for all text content
- [ ] Change "Archduchess Ana" to "Archduchess Gisela" in Family.tsx (lines 177-184)
- [ ] Save checkpoint

## Family.tsx Ana → Gisela
- Line 178: `name: "Archduchess Ana von Habsburg"` → `"Archduchess Gisela von Habsburg"`
- Line 183: bio text mentions "Archduchess Ana" → "Archduchess Gisela"
- Line 184: `initials: "AN"` → `"GI"`

## German flag for language selector
- The "de" flag should be the Federation flag (black top, gold bottom) since it's the Federation's official language

## Current Task: German Graphics + Accessible Lightbox
- [x] Review image-generation guidance and current World, Family, and Constitution implementations.
- [x] Define complete, accurate German copy for the Intelligence Briefing graphic.
- [x] Define the corrected German imperial succession and family-tree labels.
- [x] Generate and visually verify a German Intelligence Briefing graphic from scratch.
- [x] Generate and visually verify a German imperial family tree infographic from scratch.
- [x] Replace the World page briefing image and remove obsolete CSS translation overlays.
- [x] Replace the Family page family-tree image and remove obsolete CSS translation overlays.
- [x] Add Escape-key closing, a visible close button, focus behavior, and scroll locking to the image lightbox.
- [x] Verify both desktop and mobile layouts, German text accuracy, TypeScript, and production build.
- [ ] Save a checkpoint and deliver the completed website update.

## Current Task: Bilingual Graphics + Family-Tree Lightbox + Netlify ZIP
- [x] Inspect the current World, Family, translation, and lightbox implementations.
- [x] Generate and visually verify an English Intelligence Briefing graphic.
- [x] Generate and visually verify an English imperial family-tree graphic.
- [x] Add an explicit German/English graphic toggle to the World page.
- [x] Add an explicit German/English graphic toggle to the Family page.
- [x] Add keyboard-accessible click-to-enlarge behavior to the family tree.
- [x] Add Escape closing, a visible close button, focus return, and scroll locking to the family-tree lightbox.
- [x] Verify both image languages, desktop/mobile layouts, TypeScript, and production build.
- [x] Generate a self-contained Netlify ZIP with every required static asset and SPA redirects.
- [ ] Save a checkpoint and deliver the ZIP.

## Current Task: Brighter and Larger Names
- [x] Audit representative dark and light sections to identify low-contrast names and important titles.
- [x] Define a brighter, accessible gold/yellow text token for prominent names.
- [x] Increase name and title sizing modestly without disrupting card layouts or navigation.
- [x] Apply the improved styling to family-member names and key content headings across the site.
- [x] Verify contrast and responsive wrapping on desktop and mobile screenshots.
- [x] Run TypeScript and production build checks.
- [ ] Save a checkpoint and deliver the readability update.

## Current Task: Gold Glow + Animated Secession Corners + Netlify ZIP
- [x] Inspect the current prominent-name styles, reveal classes, and Secession corner implementation.
- [x] Add a restrained gold hover/focus glow to prominent enlarged names and titles.
- [x] Animate the Secession corner linework when cards receive the visible reveal state.
- [x] Ensure hover and scroll effects respect `prefers-reduced-motion`.
- [x] Verify desktop/mobile appearance and interaction behavior.
- [x] Run TypeScript and production build validation.
- [x] Generate and validate a self-contained Netlify ZIP with all assets and SPA redirects.
- [ ] Save a checkpoint and deliver the latest ZIP.

## Current Task: Native Family Tree Integration
- [x] Read and follow the package's `INTEGRATION-BRIEF.md` completely.
- [x] Upload the supplied portraits, Emperor images, ceremonial assets, and both PDFs through WebDev storage.
- [x] Add the full family-tree edition as the internal `/family-tree` route.
- [x] Add the simple regal edition as the internal `/family-tree/simple` route.
- [x] Reuse the shared Navigation, Footer, LanguageContext, typography, and design system.
- [x] Use the exact supplied household portraits and the correct German and English Emperor images.
- [x] Add navigation and cross-links from the History and Imperial Family pages.
- [x] Preserve all newer GitHub visual, accessibility, language, metadata, and Netlify-export improvements.
- [x] Pass TypeScript and production builds after synchronization.
- [x] Verify German and English desktop/mobile layouts and both PDF downloads.
- [x] Save the final integration checkpoint only after all checks pass.

## Current Task: Spanish Family Tree + Genealogy Search + Print Layout
- [x] Audit all family-tree translation keys, member datasets, controls, and print selectors.
- [x] Add complete Spanish translations for both family-tree editions.
- [x] Add Spanish names, titles, relationships, and simple-edition labels where language-specific data is required.
- [x] Add a compact, accessible genealogy search field.
- [x] Add useful filters for lineage groups and succession status.
- [x] Highlight matching members and provide clear empty/reset states.
- [x] Keep search/filter controls responsive and keyboard accessible.
- [x] Add print-specific page sizes, page breaks, widows/orphans protection, and hidden interactive controls.
- [x] Verify Spanish full and simple editions on desktop and mobile.
- [x] Verify search, filters, reset, and no-results behavior.
- [x] Generate and inspect printed PDF output for both editions.
- [x] Pass TypeScript and production builds.
- [x] Save the final checkpoint after all checks pass.
