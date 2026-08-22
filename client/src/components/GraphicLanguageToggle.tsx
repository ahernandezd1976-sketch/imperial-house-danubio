/**
 * Bilingual archival-graphic switch.
 * Imperial Modernism: compact black-and-gold segmented control with square geometry.
 */
export type GraphicLanguage = "de" | "en";

interface GraphicLanguageToggleProps {
  value: GraphicLanguage;
  onChange: (value: GraphicLanguage) => void;
}

const GOLD = "oklch(0.80 0.14 88)";
const CREAM = "oklch(0.96 0.015 85)";

export default function GraphicLanguageToggle({ value, onChange }: GraphicLanguageToggleProps) {
  return (
    <div
      role="group"
      aria-label="Graphic language / Bildsprache"
      style={{
        display: "inline-flex",
        alignItems: "stretch",
        border: `1px solid ${GOLD}`,
        background: "oklch(0.08 0.005 285 / 0.94)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.28)",
      }}
    >
      {([
        { id: "de" as const, short: "DE", label: "Deutsch" },
        { id: "en" as const, short: "EN", label: "English" },
      ]).map((option, index) => {
        const active = value === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            aria-pressed={active}
            title={option.label}
            style={{
              minHeight: "40px",
              padding: "0.55rem 0.8rem",
              border: "none",
              borderLeft: index ? `1px solid ${GOLD}` : "none",
              background: active ? GOLD : "transparent",
              color: active ? "oklch(0.12 0.01 75)" : CREAM,
              fontFamily: "'Cinzel', serif",
              fontSize: "0.64rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              cursor: "pointer",
              transition: "background-color 160ms cubic-bezier(0.23, 1, 0.32, 1), color 160ms cubic-bezier(0.23, 1, 0.32, 1), transform 160ms cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <span aria-hidden="true">{option.short}</span>
            <span className="sr-only">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
