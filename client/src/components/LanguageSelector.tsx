/**
 * Language Selector — Dropdown with flags
 * UK flag for English, France flag for French
 * Half Federation / half national flag for Hungarian, Croatian, Bohemian
 */
import { useState, useRef, useEffect } from "react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const GOLD = "oklch(0.72 0.12 85)";

// SVG flag components
function UKFlag() {
  return (
    <svg viewBox="0 0 60 30" width="20" height="10">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function FranceFlag() {
  return (
    <svg viewBox="0 0 30 20" width="20" height="13">
      <rect width="10" height="20" fill="#002395" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#ED2939" />
    </svg>
  );
}

// Half Federation (black-gold) / half Hungarian (red-white-green)
function HungarianFlag() {
  return (
    <svg viewBox="0 0 30 20" width="20" height="13">
      {/* Left half: Federation (black top, gold bottom) */}
      <rect width="15" height="10" fill="#1a1a1a" />
      <rect y="10" width="15" height="10" fill="#C8A415" />
      {/* Right half: Hungarian tricolor */}
      <rect x="15" width="15" height="6.67" fill="#CE2939" />
      <rect x="15" y="6.67" width="15" height="6.67" fill="#fff" />
      <rect x="15" y="13.33" width="15" height="6.67" fill="#477050" />
      {/* Divider */}
      <line x1="15" y1="0" x2="15" y2="20" stroke="#C8A415" strokeWidth="0.5" />
    </svg>
  );
}

// Half Federation / half Croatian (red-white-blue with šahovnica)
function CroatianFlag() {
  return (
    <svg viewBox="0 0 30 20" width="20" height="13">
      {/* Left half: Federation */}
      <rect width="15" height="10" fill="#1a1a1a" />
      <rect y="10" width="15" height="10" fill="#C8A415" />
      {/* Right half: Croatian tricolor */}
      <rect x="15" width="15" height="6.67" fill="#FF0000" />
      <rect x="15" y="6.67" width="15" height="6.67" fill="#fff" />
      <rect x="15" y="13.33" width="15" height="6.67" fill="#171796" />
      {/* Small šahovnica in center */}
      <rect x="19" y="6" width="7" height="8" fill="#FF0000" />
      <rect x="19" y="6" width="1.4" height="1.6" fill="#fff" />
      <rect x="21.8" y="6" width="1.4" height="1.6" fill="#fff" />
      <rect x="24.6" y="6" width="1.4" height="1.6" fill="#fff" />
      <rect x="20.4" y="7.6" width="1.4" height="1.6" fill="#fff" />
      <rect x="23.2" y="7.6" width="1.4" height="1.6" fill="#fff" />
      {/* Divider */}
      <line x1="15" y1="0" x2="15" y2="20" stroke="#C8A415" strokeWidth="0.5" />
    </svg>
  );
}

// Half Federation / half Bohemian (white-red with blue triangle)
function BohemianFlag() {
  return (
    <svg viewBox="0 0 30 20" width="20" height="13">
      {/* Left half: Federation */}
      <rect width="15" height="10" fill="#1a1a1a" />
      <rect y="10" width="15" height="10" fill="#C8A415" />
      {/* Right half: Bohemian (Czech) */}
      <rect x="15" width="15" height="10" fill="#fff" />
      <rect x="15" y="10" width="15" height="10" fill="#D7141A" />
      <polygon points="15,0 25,10 15,20" fill="#11457E" />
      {/* Divider */}
      <line x1="15" y1="0" x2="15" y2="20" stroke="#C8A415" strokeWidth="0.5" />
    </svg>
  );
}

const languages: { code: Language; label: string; Flag: React.FC }[] = [
  { code: "de", label: "Deutsch", Flag: () => (
    <svg viewBox="0 0 30 20" width="20" height="13">
      <rect width="30" height="6.67" fill="#1a1a1a" />
      <rect y="6.67" width="30" height="6.67" fill="#C8A415" />
      <rect y="13.33" width="30" height="6.67" fill="#C8A415" />
    </svg>
  )},
  { code: "en", label: "English", Flag: UKFlag },
  { code: "fr", label: "Français", Flag: FranceFlag },
  { code: "hu", label: "Magyar", Flag: HungarianFlag },
  { code: "cs", label: "Čeština", Flag: BohemianFlag },
  { code: "hr", label: "Hrvatski", Flag: CroatianFlag },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = languages.find((l) => l.code === language) || languages[0];

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          background: "transparent",
          border: `1px solid oklch(0.72 0.12 85 / 0.3)`,
          padding: "0.35rem 0.6rem",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
        className="hover:border-yellow-400"
        aria-label="Select language"
      >
        <current.Flag />
        <span
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.55rem",
            letterSpacing: "0.1em",
            color: "oklch(0.85 0.01 85)",
            textTransform: "uppercase",
          }}
        >
          {current.code.toUpperCase()}
        </span>
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none" }}>
          <path d="M1 1L4 4L7 1" stroke={GOLD} strokeWidth="1.2" />
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            background: "oklch(0.09 0.005 285 / 0.97)",
            border: `1px solid oklch(0.72 0.12 85 / 0.3)`,
            backdropFilter: "blur(12px)",
            minWidth: "160px",
            zIndex: 200,
            boxShadow: "0 8px 32px oklch(0 0 0 / 0.5)",
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                width: "100%",
                padding: "0.6rem 0.85rem",
                background: language === lang.code ? "oklch(0.72 0.12 85 / 0.1)" : "transparent",
                border: "none",
                cursor: "pointer",
                transition: "background 0.2s ease",
                borderLeft: language === lang.code ? `2px solid ${GOLD}` : "2px solid transparent",
              }}
              className="hover:bg-yellow-400/5"
            >
              <lang.Flag />
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  color: language === lang.code ? GOLD : "oklch(0.8 0.01 85)",
                }}
              >
                {lang.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
