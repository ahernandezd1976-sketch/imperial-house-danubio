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
