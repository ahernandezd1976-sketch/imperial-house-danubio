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
