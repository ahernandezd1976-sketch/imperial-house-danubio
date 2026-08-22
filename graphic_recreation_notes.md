# German Graphic Recreation Notes

## Intelligence Briefing Reference

The current image is a 3:2 horizontal sepia archival briefing with an imperial eagle at the upper right, a red classification stamp, three main columns, ruled dividers, and a footer classification line. Its English body text contains spelling and chronology errors, so the German replacement must not translate it literally. The new version should preserve the archival visual language while using short, readable, internally consistent German timeline entries.

Required German identity:

- **KAISERLICHES GEHEIMDIENSTBRIEFING**
- **Strategische Neuordnung Europas und der Aufstieg der Donauföderation**
- **KONOPIŠTĚ-PROTOKOLL · WIENER ARCHIV**
- Classification stamp: **STRENG GEHEIM**
- Footer: **FREIGEGEBEN 2025**

## Family Tree Reference

The current image is a 16:9 parchment infographic with black lineage connectors and gold-framed panels. It includes many English labels and several inaccurate or garbled names/dates. The German replacement must prioritize the corrected imperial succession and current family rather than copying every erroneous branch.

Required imperial succession:

1. Franz Joseph I — 1830–1916
2. Franz Ferdinand I — 1863–1922; Kaiser 1916–1922
3. Karl I — 1887–1939; Kaiser 1922–1939
4. Otto I — 1912–1989; Kaiser 1939–1955; Abdankung 1955
5. Friedrich I — 1936–1989; Kaiser 1955–1989
6. Maximilian II — geb. 1954; Kaiser seit 1989

Current imperial line:

- Kaiser Maximilian II — geb. 1954; seit 1989; 72 Jahre
- Kronprinz Leopold — geb. 1994; 32 Jahre
- Katharina von Richter — geb. 1995; Verlobte des Kronprinzen
- Erzherzogin Eleonora — geb. 1997; 29 Jahre

Design constraints:

- German-only labels; no English remnants.
- Clear hierarchy, generous text sizing, and minimal secondary copy.
- Parchment background, restrained black/gold heraldic styling, precise connectors.
- Do not present Katharina as Leopold's wife.
- Use **Maximilian II**, never Maximilian I.

## Visual Verification Results

The final Intelligence Briefing asset is fully German and readable. It correctly shows **KAISERLICHES GEHEIMDIENSTBRIEFING**, **STRENG GEHEIM**, all eight dated events, **KONOPIŠTĚ-PROTOKOLL · WIENER ARCHIV**, and **FREIGEGEBEN 2025**. No English labels or pseudo-text remain.

The final family-tree asset is fully German and visually clear. The imperial succession is correctly ordered from Franz Joseph I. through Maximilian II.; Maximilian II. is labelled as reigning since 1989; Leopold and Eleonora are connected as his children; and Katharina is shown with a dotted engagement line and the label **Verlobte des Kronprinzen**, not as a spouse. The side panel correctly lists Gisela, Karl Bertroch, Alexis, and Reiner. No English labels remain.

## Website Verification

Desktop and 390-pixel mobile captures confirm that the new briefing and family-tree assets load on their intended pages without the former CSS translation covers. The German Constitution document remains readable and retains its click-to-enlarge control.

The lightbox opens as a modal dialog, displays a prominent gold-bordered **SCHLIESSEN** button, and closes when the Escape key is pressed. The trigger is keyboard-operable with Enter or Space, body scrolling is locked while the modal is open, and focus returns to the image trigger when it closes. TypeScript validation and the production build both complete successfully.

## English Graphic Variants

The English Intelligence Briefing is fully readable and contains no German remnants. It preserves the exact eight-event chronology, English archive labels, **TOP SECRET** stamp, and **DECLASSIFIED 2025** footer.

The English family tree preserves the corrected imperial succession, Maximilian II designation, reign dates, ages, Leopold and Eleonora as the Emperor's children, Katharina as the Crown Prince's fiancée, and Reiner as hereditary Marshal of the Crown. It contains no German labels or unintended relationships.

## Bilingual Control and Family-Tree Lightbox Verification

Desktop captures confirm that German page URLs default to the German graphics and English page URLs default to the English graphics on both the World and Family pages. The compact DE/EN segmented controls remain visible immediately above each graphic.

On the English Family page, activating the tree opens the high-resolution English infographic in a modal dialog. The visible **CLOSE** control appears at the upper-right and receives the localized accessible label.
