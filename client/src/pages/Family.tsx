/*
 * Family Page — Imperial Modernism / Vienna Secession Reborn
 * Real characters: Emperor Maximilian II and the Imperial Household
 * Portrait: Official family photograph, Hofburg Imperial Palace
 */
import { useEffect, useRef, useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GraphicLanguageToggle, { type GraphicLanguage } from "@/components/GraphicLanguageToggle";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { getFamilyMembers } from "@/i18n/familyMembers";

const GOLD = "oklch(0.80 0.14 88)";
const GOLD_INK = "oklch(0.48 0.13 82)";
const DARK = "oklch(0.09 0.005 285)";
const CREAM = "oklch(0.96 0.015 85)";

// Sub-component: engagement portrait video with touch-to-activate audio
function PaintingVideo() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [activated, setActivated] = useState(false);

  const handleTouch = () => {
    const v = videoRef.current;
    const a = audioRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
    if (a) {
      a.currentTime = 0;
      a.play().catch(() => {});
    }
    setActivated(true);
  };

  return (
    <div className="reveal" style={{ position: "relative", maxWidth: "720px", margin: "0 auto" }}>
      {[
        { top: -12, left: -12 },
        { top: -12, right: -12 },
        { bottom: -12, left: -12 },
        { bottom: -12, right: -12 },
      ].map((pos, i) => (
        <div key={i} style={{
          position: "absolute",
          width: "28px",
          height: "28px",
          borderTop: i < 2 ? `2px solid ${GOLD}` : "none",
          borderBottom: i >= 2 ? `2px solid ${GOLD}` : "none",
          borderLeft: i % 2 === 0 ? `2px solid ${GOLD}` : "none",
          borderRight: i % 2 === 1 ? `2px solid ${GOLD}` : "none",
          ...pos,
          zIndex: 2,
        }} />
      ))}

      {/* Video + overlay */}
      <div style={{ position: "relative" }}>
        <video
          ref={videoRef}
          src="/manus-storage/klimt_engagement_portrait_german_5e989dc6.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            boxShadow: "0 20px 60px oklch(0.09 0.005 285 / 0.25)",
          }}
        />
        {/* Painter narration audio */}
        <audio ref={audioRef} src="/manus-storage/painter_narration_de_d70174e4.wav" preload="auto" />

        {/* Touch overlay — disappears after first click */}
        {!activated && (
          <div
            onClick={handleTouch}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              background: "oklch(0.09 0.005 285 / 0.42)",
              cursor: "pointer",
              backdropFilter: "blur(1px)",
            }}
          >
            <div style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              border: `2px solid ${GOLD}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 11V6a2 2 0 0 0-4 0v5" />
                <path d="M14 10V4a2 2 0 0 0-4 0v6" />
                <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
                <path d="M6 14a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-2.5" />
              </svg>
            </div>
            <span style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: GOLD,
            }}>{t("family.portrait.touch")}</span>
          </div>
        )}
      </div>

      {/* Identification caption */}
      <div style={{
        background: DARK,
        padding: "1.25rem 1.5rem",
        textAlign: "center",
      }}>
        {/* Gold rule */}
        <div style={{ width: "48px", height: "1px", background: GOLD, margin: "0 auto 1rem", opacity: 0.5 }} />
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: "0.95rem",
          color: "oklch(0.72 0.06 85)",
          letterSpacing: "0.02em",
          lineHeight: 1.6,
          margin: 0,
        }}>
          {t("family.portrait.caption")}
        </p>
        <div style={{ width: "48px", height: "1px", background: GOLD, margin: "1rem auto 0", opacity: 0.5 }} />
      </div>
    </div>
  );
}


export default function Family() {
  useScrollReveal();
  const { t, language } = useLanguage();
  const familyMembers = useMemo(() => getFamilyMembers(language), [language]);
  const [treeGraphicLanguage, setTreeGraphicLanguage] = useState<GraphicLanguage>(() => language === "de" ? "de" : "en");
  const [treeLightboxOpen, setTreeLightboxOpen] = useState(false);
  const treeTriggerRef = useRef<HTMLDivElement>(null);
  const treeCloseButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTreeGraphicLanguage(language === "de" ? "de" : "en");
  }, [language]);

  useEffect(() => {
    if (!treeLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setTreeLightboxOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    window.requestAnimationFrame(() => treeCloseButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      treeTriggerRef.current?.focus();
    };
  }, [treeLightboxOpen]);

  const emperor = familyMembers.find((m) => m.isEmperor)!;
  const others = familyMembers.filter((m) => !m.isEmperor);
  const treeImageSrc = treeGraphicLanguage === "de"
    ? "/manus-storage/family_tree_german_v3_ca1950aa.png"
    : "/manus-storage/family_tree_english_d3bd15e8.png";
  const treeImageAlt = treeGraphicLanguage === "de"
    ? "Deutscher Habsburger Stammbaum von Franz Joseph I. bis Kaiser Maximilian II."
    : "English Habsburg family tree from Franz Joseph I to Emperor Maximilian II";
  const treeOpenLabel = treeGraphicLanguage === "de" ? "Stammbaum vergrößern" : "Enlarge family tree";
  const treeDialogLabel = treeGraphicLanguage === "de" ? "Vergrößerter Habsburger Stammbaum" : "Enlarged Habsburg family tree";

  return (
    <div style={{ backgroundColor: DARK }}>
      <Navigation />

      {/* Page Header */}
      <section
        style={{
          paddingTop: "10rem",
          paddingBottom: "5rem",
          backgroundColor: DARK,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 40px, oklch(0.72 0.12 85 / 0.03) 40px, oklch(0.72 0.12 85 / 0.03) 41px),
              repeating-linear-gradient(90deg, transparent, transparent 40px, oklch(0.72 0.12 85 / 0.03) 40px, oklch(0.72 0.12 85 / 0.03) 41px)
            `,
          }}
        />
        <div className="container relative z-10">
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.6rem",
              letterSpacing: "0.35em",
              color: GOLD,
              textTransform: "uppercase",
              marginBottom: "1rem",
              opacity: 0.8,
            }}
          >
            {t("family.header.pretitle")}
          </div>
          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              color: CREAM,
              lineHeight: 1.1,
              letterSpacing: "0.04em",
              marginBottom: "1.5rem",
            }}
          >
            {t("family.header.title1")}<span style={{ color: GOLD }}>{t("family.header.title2")}</span>
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.1rem",
              color: "oklch(0.65 0.01 85)",
              maxWidth: "600px",
              lineHeight: 1.7,
            }}
          >
            {t("family.header.subtitle")}
          </p>
        </div>
      </section>

      {/* Official Portrait */}
      <section style={{ backgroundColor: CREAM, padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal text-center mb-10">
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                color: "oklch(0.55 0.08 85)",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              {t("family.photo.pretitle")}
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 600,
                color: DARK,
                letterSpacing: "0.03em",
              }}
            >
              {t("family.members.title")}
            </h2>
          </div>

          <div className="reveal" style={{ position: "relative", maxWidth: "1100px", margin: "0 auto" }}>
            {/* Corner ornaments */}
            {[
              { top: -10, left: -10 },
              { top: -10, right: -10 },
              { bottom: -10, left: -10 },
              { bottom: -10, right: -10 },
            ].map((pos, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "28px",
                  height: "28px",
                  borderTop: i < 2 ? `2px solid ${GOLD}` : "none",
                  borderBottom: i >= 2 ? `2px solid ${GOLD}` : "none",
                  borderLeft: i % 2 === 0 ? `2px solid ${GOLD}` : "none",
                  borderRight: i % 2 === 1 ? `2px solid ${GOLD}` : "none",
                  ...pos,
                  zIndex: 2,
                }}
              />
            ))}
            <img
              src="/manus-storage/imperial_family_portrait_v2_d943e727.png"
              alt="Official portrait of the Imperial House of Austria-Danubio, 2026"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                boxShadow: "0 24px 80px oklch(0.09 0.005 285 / 0.45)",
                filter: "contrast(1.04) brightness(1.02) saturate(1.05)",
                clipPath: "inset(0 0 8% 0)",
                marginBottom: "-8%",
              }}
            />
            {/* Caption bar */}
            <div
              style={{
                background: DARK,
                padding: "0.85rem 1.5rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.25rem 1.5rem",
                justifyContent: "center",
              }}
            >
              {familyMembers.map((m, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.55rem",
                    letterSpacing: "0.15em",
                    color: "oklch(0.55 0.01 85)",
                    textTransform: "uppercase",
                  }}
                >
                  {m.shortName.split(" ").slice(-1)[0]}
                  {i < familyMembers.length - 1 && (
                    <span style={{ color: GOLD, marginLeft: "1.5rem" }}>·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Name labels below portrait — staggered two-row layout */}
          <div className="reveal" style={{ maxWidth: "1100px", margin: "0.25rem auto 0" }}>

            {/* Top row: even indices (0,2,4,6) — tick below name, pointing down to the centre line */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(8, 1fr)",
              gap: "0.1rem",
              textAlign: "center",
            }}>
              {familyMembers.map((m, i) => (
                <div key={i} style={{ visibility: i % 2 === 0 ? "visible" : "hidden", display: "flex", flexDirection: "column", alignItems: "center", padding: "0.25rem 0.1rem 0" }}>
                  <div style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.5rem",
                    letterSpacing: "0.05em",
                    color: m.isEmperor ? GOLD : "oklch(0.35 0.01 285)",
                    textTransform: "uppercase",
                    lineHeight: 1.4,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginBottom: "0.2rem",
                  }}>
                    {m.shortName}
                  </div>
                  {/* tick pointing down */}
                  <div style={{ width: "1px", height: "6px", background: m.isEmperor ? `oklch(0.72 0.12 85 / 0.7)` : `oklch(0.72 0.12 85 / 0.35)` }} />
                </div>
              ))}
            </div>

            {/* Centre rule */}
            <div style={{ height: "1px", background: `oklch(0.72 0.12 85 / 0.2)` }} />

            {/* Bottom row: odd indices (1,3,5,7) — tick above name, pointing up from the centre line */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(8, 1fr)",
              gap: "0.1rem",
              textAlign: "center",
            }}>
              {familyMembers.map((m, i) => (
                <div key={i} style={{ visibility: i % 2 === 1 ? "visible" : "hidden", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 0.1rem 0.25rem" }}>
                  {/* tick pointing up */}
                  <div style={{ width: "1px", height: "6px", background: `oklch(0.72 0.12 85 / 0.35)`, marginBottom: "0.2rem" }} />
                  <div style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.5rem",
                    letterSpacing: "0.05em",
                    color: "oklch(0.35 0.01 285)",
                    textTransform: "uppercase",
                    lineHeight: 1.4,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                    {m.shortName}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Memorial — Late Empress Maria-Cristina */}
      <section style={{ backgroundColor: DARK, padding: "5rem 0" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto" }}>

            {/* Empress Crown SVG */}
            <svg
              viewBox="0 0 120 72"
              width="96"
              height="58"
              style={{ display: "block", margin: "0 auto 1.75rem", opacity: 0.75 }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Band */}
              <rect x="8" y="52" width="104" height="12" rx="2" fill="oklch(0.72 0.12 85 / 0.25)" stroke="oklch(0.72 0.12 85 / 0.6)" strokeWidth="1"/>
              {/* Pearl row on band */}
              {[16,28,40,52,60,68,80,92,104].map((cx, i) => (
                <circle key={i} cx={cx} cy="58" r="3" fill="oklch(0.92 0.01 85 / 0.5)" stroke="oklch(0.72 0.12 85 / 0.4)" strokeWidth="0.5"/>
              ))}
              {/* Left arch */}
              <path d="M 8 52 Q 8 28 30 18" stroke="oklch(0.72 0.12 85 / 0.6)" strokeWidth="1.2" fill="none"/>
              {/* Right arch */}
              <path d="M 112 52 Q 112 28 90 18" stroke="oklch(0.72 0.12 85 / 0.6)" strokeWidth="1.2" fill="none"/>
              {/* Centre arch */}
              <path d="M 30 18 Q 60 2 90 18" stroke="oklch(0.72 0.12 85 / 0.6)" strokeWidth="1.2" fill="none"/>
              {/* Centre cross */}
              <line x1="60" y1="2" x2="60" y2="14" stroke="oklch(0.72 0.12 85 / 0.7)" strokeWidth="1.2"/>
              <line x1="54" y1="8" x2="66" y2="8" stroke="oklch(0.72 0.12 85 / 0.7)" strokeWidth="1.2"/>
              {/* Arch pearls */}
              <circle cx="30" cy="18" r="2.5" fill="oklch(0.92 0.01 85 / 0.6)" stroke="oklch(0.72 0.12 85 / 0.5)" strokeWidth="0.5"/>
              <circle cx="90" cy="18" r="2.5" fill="oklch(0.92 0.01 85 / 0.6)" stroke="oklch(0.72 0.12 85 / 0.5)" strokeWidth="0.5"/>
              <circle cx="60" cy="2" r="3" fill="oklch(0.72 0.12 85 / 0.5)" stroke="oklch(0.72 0.12 85 / 0.7)" strokeWidth="0.5"/>
              {/* Fleur tips */}
              <circle cx="8" cy="50" r="2" fill="oklch(0.72 0.12 85 / 0.5)"/>
              <circle cx="112" cy="50" r="2" fill="oklch(0.72 0.12 85 / 0.5)"/>
            </svg>

            {/* Name */}
            <div style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.55rem",
              letterSpacing: "0.3em",
              color: GOLD,
              textTransform: "uppercase",
              marginBottom: "0.6rem",
              opacity: 0.7,
            }}>{t("family.memorial.pretitle")}</div>
            <h3 className="gold-name" style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.35rem, 2.8vw, 1.9rem)",
              fontWeight: 700,
              color: GOLD,
              letterSpacing: "0.06em",
              marginBottom: "0.35rem",
            }}>{t("family.memorial.name")}</h3>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "0.85rem",
              color: "oklch(0.5 0.01 85)",
              letterSpacing: "0.05em",
              marginBottom: "1.5rem",
            }}>1954 – 2000</div>

            {/* Thin gold rule */}
            <div style={{ width: "48px", height: "1px", background: GOLD, margin: "0 auto 1.5rem", opacity: 0.4 }} />

            {/* Motto */}
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.05rem",
              color: "oklch(0.55 0.01 85)",
              lineHeight: 1.8,
              letterSpacing: "0.02em",
            }}>
              &ldquo;In lumine tuo videbimus lumen.&rdquo;
            </p>
            <div style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.45rem",
              letterSpacing: "0.2em",
              color: "oklch(0.4 0.01 85)",
              textTransform: "uppercase",
              marginTop: "0.5rem",
            }}>{t("family.memorial.mottoTranslation")}</div>

          </div>
        </div>
      </section>

      {/* Emperor feature */}
      <section style={{ backgroundColor: DARK, padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div
                style={{
                  border: `1px solid oklch(0.72 0.12 85 / 0.2)`,
                  padding: "2rem",
                  background: "oklch(0.12 0.005 285)",
                  position: "sticky",
                  top: "6rem",
                }}
              >
                {/* Emperor Portrait */}
                {emperor.portrait && (
                  <div style={{
                    marginBottom: "1.5rem",
                    overflow: "hidden",
                    border: `1px solid oklch(0.72 0.12 85 / 0.2)`,
                  }}>
                    <img
                      src={emperor.portrait}
                      alt={`${emperor.name} — official portrait`}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
                <div style={{ height: "2px", background: GOLD, marginBottom: "1.5rem" }} />
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.55rem",
                    letterSpacing: "0.25em",
                    color: GOLD,
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                    opacity: 0.8,
                  }}
                >
                  {t("family.emperor.pretitle")}
                </div>
                <h2
                  className="gold-name"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "1.7rem",
                    fontWeight: 700,
                    color: GOLD,
                    marginBottom: "0.35rem",
                    lineHeight: 1.2,
                  }}
                >
                  {emperor.name}
                </h2>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "0.9rem",
                    color: GOLD,
                    marginBottom: "1.25rem",
                    lineHeight: 1.5,
                  }}
                >
                  {emperor.title}
                </div>
                <div style={{ height: "1px", background: "oklch(0.72 0.12 85 / 0.2)", marginBottom: "1.25rem" }} />
                {[
                  { label: t("family.members.age"), value: `${emperor.age}` },
                  { label: t("family.emperor.styleLabel"), value: emperor.style },
                  { label: t("family.emperor.reignLabel"), value: `${emperor.reignYears}` },
                  { label: t("family.emperor.statusLabel"), value: t("family.members.widow") },
                  { label: t("family.emperor.lateEmpressLabel"), value: emperor.lateSpouse },
                  { label: t("family.emperor.tragedyLabel"), value: emperor.spouseDeath },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "0.5rem 0",
                      borderBottom: "1px solid oklch(0.72 0.12 85 / 0.08)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.15rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "0.55rem",
                        letterSpacing: "0.15em",
                        color: "oklch(0.5 0.01 85)",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "0.9rem",
                        color: CREAM,
                        fontStyle: "italic",
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-8">
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.55rem",
                  letterSpacing: "0.25em",
                  color: GOLD,
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  opacity: 0.8,
                }}
              >
                {t("family.emperor.title")}
              </div>
              <h2
                className="gold-name"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(2.2rem, 4.4vw, 3.25rem)",
                  fontWeight: 700,
                  color: GOLD,
                  lineHeight: 1.15,
                  marginBottom: "1.5rem",
                  letterSpacing: "0.03em",
                }}
              >
                {t("family.emperor.name")}
              </h2>
              <div style={{ height: "1px", background: `linear-gradient(90deg, ${GOLD}, transparent)`, marginBottom: "1.75rem" }} />
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.95,
                  color: "oklch(0.75 0.01 85)",
                  marginBottom: "1.5rem",
                }}
              >
                {emperor.bio}
              </p>
              {/* Empress memorial note */}
              <div
                style={{
                  borderLeft: `3px solid ${GOLD}`,
                  paddingLeft: "1.5rem",
                  marginTop: "2rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.55rem",
                    letterSpacing: "0.2em",
                    color: GOLD,
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                    opacity: 0.7,
                  }}
                >
                  {t("family.memorial.pretitle")}
                </div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "1rem",
                    color: "oklch(0.6 0.01 85)",
                    lineHeight: 1.8,
                  }}
                >
                  {t("family.emperor.memorial")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other family members */}
      <section style={{ backgroundColor: CREAM, padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal text-center mb-12">
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                color: "oklch(0.55 0.08 85)",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              {t("family.members.pretitle")}
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
                fontWeight: 700,
                color: GOLD_INK,
                letterSpacing: "0.03em",
              }}
            >
              {t("family.members.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {others.map((member, i) => (
              <div
                key={i}
                className="reveal secession-card"
                style={{
                  transitionDelay: `${i * 0.08}s`,
                  border: `1px solid oklch(0.72 0.12 85 / 0.2)`,
                  background: "oklch(0.99 0.008 85)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Gold top accent */}
                <div style={{ height: "2px", background: GOLD }} />

                {/* Avatar */}
                <div
                  style={{
                    height: member.portrait ? "280px" : "140px",
                    background: "oklch(0.12 0.005 285)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: `1px solid oklch(0.72 0.12 85 / 0.15)`,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {member.portrait ? (
                    <img
                      src={member.portrait}
                      alt={`${member.name} — official engraving portrait`}
                     style={{
                       width: "100%",
                       height: "100%",
                       objectFit: "cover",
                        objectPosition: "top center",
                       display: "block",
                     }}
                    />
                  ) : (
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      border: `2px solid oklch(0.72 0.12 85 / 0.5)`,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "1.3rem",
                      color: "oklch(0.55 0.08 85)",
                    }}
                  >
                    {member.initials}
                  </div>
                  )}
                </div>

                <div style={{ padding: "1.5rem" }}>
                  <h3
                    className="gold-name"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "1.08rem",
                      fontWeight: 700,
                      color: GOLD_INK,
                      marginBottom: "0.3rem",
                      letterSpacing: "0.02em",
                      lineHeight: 1.3,
                    }}
                  >
                    {member.name}
                  </h3>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "0.95rem",
                      color: GOLD_INK,
                      marginBottom: "0.3rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {member.title.includes("(") ? (
                      <>
                        {member.title.split("(")[0]}
                        <span
                          className="group relative inline-block cursor-help"
                          style={{ borderBottom: "1px dotted oklch(0.72 0.12 85)" }}
                        >
                          ({member.title.split("(")[1]}
                          <span
                            className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 rounded bg-[#1a1a18] border border-[#c9a84c]/40 px-3 py-2 text-xs text-[#f5f0e8] opacity-0 transition-opacity duration-200 group-hover:opacity-100 z-50"
                            style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.7rem", lineHeight: 1.5 }}
                          >
                            {t("family.hereditary.tooltip")}
                          </span>
                        </span>
                      </>
                    ) : (
                      member.title
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontSize: "0.75rem",
                      color: "oklch(0.5 0.01 285)",
                      marginBottom: "1rem",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {t("family.members.age")} {member.age}
                    {member.widow ? ` · ${t("family.members.widow")}` : ""}

                  </div>
                  <div
                    style={{
                      height: "1px",
                      background: `linear-gradient(90deg, oklch(0.72 0.12 85 / 0.4), transparent)`,
                      marginBottom: "1rem",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontSize: "0.87rem",
                      lineHeight: 1.85,
                      color: "oklch(0.3 0.005 285)",
                      marginBottom: member.languages ? "1rem" : 0,
                    }}
                  >
                    {member.bio}
                  </p>

                  {/* Languages tag */}
                  {member.languages && (
                    <div style={{ marginTop: "0.75rem" }}>
                      <div
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: "0.55rem",
                          letterSpacing: "0.2em",
                          color: "oklch(0.55 0.08 85)",
                          textTransform: "uppercase",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {t("family.members.languages")}
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                        {member.languages.map((lang, j) => (
                          <span
                            key={j}
                            style={{
                              fontFamily: "'Source Serif 4', serif",
                              fontSize: "0.72rem",
                              color: DARK,
                              background: "oklch(0.93 0.01 85)",
                              border: `1px solid oklch(0.72 0.12 85 / 0.3)`,
                              padding: "0.15rem 0.5rem",
                              fontStyle: "italic",
                            }}
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Father note for Katharina */}
                  {member.father && (
                    <div
                      style={{
                        marginTop: "0.75rem",
                        padding: "0.6rem 0.75rem",
                        background: "oklch(0.93 0.01 85)",
                        borderLeft: `2px solid oklch(0.72 0.12 85 / 0.5)`,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontStyle: "italic",
                          fontSize: "0.82rem",
                          color: "oklch(0.4 0.01 285)",
                        }}
                      >
                        {t("family.members.fatherNote")}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Succession */}
      <section style={{ backgroundColor: DARK, padding: "5rem 0" }}>
        <div className="container">
          <div className="reveal max-w-3xl mx-auto text-center">
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                color: GOLD,
                textTransform: "uppercase",
                marginBottom: "1rem",
                opacity: 0.8,
              }}
            >
              {t("family.succession.pretitle")}
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 600,
                color: CREAM,
                marginBottom: "1.5rem",
              }}
            >
              {t("family.succession.title")}
            </h2>
            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "oklch(0.65 0.01 85)",
                marginBottom: "2rem",
              }}
            >
              {t("family.succession.text")}
            </p>
            <div
              style={{
                display: "inline-block",
                border: `1px solid oklch(0.72 0.12 85 / 0.3)`,
                padding: "1.5rem 2.5rem",
                background: "oklch(0.12 0.005 285)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  color: GOLD,
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  opacity: 0.8,
                }}
              >
                {t("family.succession.lineTitle")}
              </div>
              {[
                t("family.succession.line1"),
                t("family.succession.line2"),
              ].map((line, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.95rem",
                    color: CREAM,
                    padding: "0.45rem 0",
                    borderBottom: i < 1 ? `1px solid oklch(0.72 0.12 85 / 0.15)` : "none",
                    textAlign: "left",
                    fontStyle: "italic",
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Portrait */}
      <section style={{ backgroundColor: CREAM, padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal text-center mb-10">
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                color: "oklch(0.55 0.08 85)",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              {t("family.portrait.pretitle")}
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 600,
                color: DARK,
                letterSpacing: "0.03em",
                marginBottom: "0.5rem",
              }}
            >
              {t("family.portrait.title")}
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1rem",
                color: "oklch(0.45 0.01 285)",
                maxWidth: "550px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              {t("family.portrait.subtitle")}
            </p>
          </div>

          {/* Video portrait — touch-to-activate */}
          <PaintingVideo />

          {/* Artist & exhibition note */}
          <div className="reveal" style={{ maxWidth: "680px", margin: "2.5rem auto 0" }}>

            {/* Artist credit */}
            <div style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1.5rem",
              padding: "1.75rem 2rem",
              background: "oklch(0.99 0.008 85)",
              border: `1px solid oklch(0.72 0.12 85 / 0.2)`,
              marginBottom: "1.5rem",
            }}>
              <div style={{ flex: "0 0 3px", alignSelf: "stretch", background: GOLD, opacity: 0.6 }} />
              <div>
                <div style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.5rem",
                  letterSpacing: "0.25em",
                  color: "oklch(0.55 0.08 85)",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}>{t("family.portrait.artistLabel")}</div>
                <div style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: DARK,
                  letterSpacing: "0.04em",
                  marginBottom: "0.6rem",
                }}>{t("family.portrait.artistName")}</div>
                <p style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.85,
                  color: "oklch(0.3 0.005 285)",
                }}>
                  {t("family.portrait.artistText")}
                </p>
              </div>
            </div>

            {/* Exhibition note */}
            <div style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1.5rem",
              padding: "1.75rem 2rem",
              background: "oklch(0.99 0.008 85)",
              border: `1px solid oklch(0.72 0.12 85 / 0.2)`,
            }}>
              <div style={{ flex: "0 0 3px", alignSelf: "stretch", background: GOLD, opacity: 0.6 }} />
              <div>
                <div style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.5rem",
                  letterSpacing: "0.25em",
                  color: "oklch(0.55 0.08 85)",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}>{t("family.portrait.exhibLabel")}</div>
                <div style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: DARK,
                  letterSpacing: "0.04em",
                  marginBottom: "0.6rem",
                }}>{t("family.portrait.exhibVenue")}</div>
                <p style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.85,
                  color: "oklch(0.3 0.005 285)",
                }}>
                  {t("family.portrait.exhibText")}
                </p>
                <div style={{
                  marginTop: "1rem",
                  display: "flex",
                  gap: "2rem",
                  flexWrap: "wrap",
                }}>
                  {[
                    { label: t("family.portrait.venueLabel"), value: t("family.portrait.venueValue") },
                    { label: t("family.portrait.untilLabel"), value: t("family.portrait.untilValue") },
                    { label: t("family.portrait.homeLabel"), value: t("family.portrait.homeValue") },
                  ].map((item, i) => (
                    <div key={i}>
                      <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.45rem", letterSpacing: "0.2em", color: "oklch(0.55 0.08 85)", textTransform: "uppercase", marginBottom: "0.2rem" }}>{item.label}</div>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: DARK, fontWeight: 600 }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                {/* Exhibition address note */}
                <div style={{
                  marginTop: "1.25rem",
                  paddingTop: "1rem",
                  borderTop: `1px solid oklch(0.72 0.12 85 / 0.15)`,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.7 }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.85rem",
                    color: "oklch(0.4 0.005 285)",
                    fontStyle: "italic",
                  }}>{t("family.portrait.address")}</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Family Tree */}
      <section style={{ backgroundColor: DARK, padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal text-center mb-10">
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                color: GOLD,
                textTransform: "uppercase",
                marginBottom: "1rem",
                opacity: 0.8,
              }}
            >
              {t("family.tree.pretitle")}
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 600,
                color: CREAM,
                letterSpacing: "0.03em",
                marginBottom: "0.75rem",
              }}
            >
              {t("family.tree.title")}
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1rem",
                color: "oklch(0.55 0.01 85)",
                maxWidth: "560px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              {t("family.tree.subtitle")}
            </p>
          </div>
          <div style={{ maxWidth: "1000px", margin: "0 auto 0.8rem", display: "flex", justifyContent: "flex-end" }}>
            <GraphicLanguageToggle value={treeGraphicLanguage} onChange={setTreeGraphicLanguage} />
          </div>
          <div className="reveal" style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div
              ref={treeTriggerRef}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={treeOpenLabel}
              onClick={() => setTreeLightboxOpen(true)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setTreeLightboxOpen(true);
                }
              }}
              style={{ position: "relative", cursor: "zoom-in" }}
            >
              <img
                src={treeImageSrc}
                alt={treeImageAlt}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  border: `1px solid oklch(0.72 0.12 85 / 0.15)`,
                }}
              />
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "0.75rem",
                  bottom: "0.75rem",
                  width: "42px",
                  height: "42px",
                  display: "grid",
                  placeItems: "center",
                  border: `1px solid ${GOLD}`,
                  background: "rgba(10, 9, 7, 0.88)",
                  color: CREAM,
                  fontSize: "1.15rem",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
                }}
              >
                ⤢
              </span>
            </div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "0.8rem", color: "oklch(0.4 0.01 85)", textAlign: "center", marginTop: "1rem" }}>
              {t("family.tree.caption")}
            </p>
          </div>
        </div>
      </section>

      {/* Reign Timeline */}
      <section style={{ backgroundColor: DARK, padding: "5rem 0", borderTop: `1px solid oklch(0.72 0.12 85 / 0.1)` }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.4em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem", opacity: 0.7 }}>
              {t("family.reign.pretitle")}
            </div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 600, color: CREAM, letterSpacing: "0.06em" }}>
              {t("family.reign.title")}
            </h2>
          </div>
          <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)`, transform: "translateX(-50%)" }} />
            {[
             { year: "1989", text: t("family.reign.e1") },
             { year: "1993", text: t("family.reign.e2") },
             { year: "2000", text: t("family.reign.e3") },
             { year: "2015", text: t("family.reign.e5") },
             { year: "2020", text: t("family.reign.e6") },
            ].map((event, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  display: "flex",
                  alignItems: i % 2 === 0 ? "flex-end" : "flex-start",
                  flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                  gap: "2rem",
                  marginBottom: "2.5rem",
                  position: "relative",
                }}
              >
                <div style={{ flex: 1, textAlign: i % 2 === 0 ? "right" : "left" }}>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.9rem", color: GOLD, fontWeight: 600, marginBottom: "0.3rem" }}>
                    {event.year}
                  </div>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: CREAM, lineHeight: 1.6, opacity: 0.85 }}>
                    {event.text}
                  </p>
                </div>
                {/* Center dot */}
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: DARK, border: `2px solid ${GOLD}`, flexShrink: 0, position: "relative", zIndex: 1 }} />
                <div style={{ flex: 1 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {treeLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={treeDialogLabel}
          onClick={() => setTreeLightboxOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(0.5rem, 2vw, 1.25rem)",
            background: "rgba(0, 0, 0, 0.94)",
            cursor: "zoom-out",
          }}
        >
          <img
            src={treeImageSrc}
            alt={treeImageAlt}
            style={{
              maxWidth: "97vw",
              maxHeight: "93vh",
              objectFit: "contain",
              border: `1px solid ${GOLD}`,
              boxShadow: "0 0 60px rgba(180, 150, 80, 0.28)",
            }}
          />
          <button
            ref={treeCloseButtonRef}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setTreeLightboxOpen(false);
            }}
            aria-label={t("const.lightbox.close")}
            style={{
              position: "absolute",
              top: "max(1rem, env(safe-area-inset-top))",
              right: "max(1rem, env(safe-area-inset-right))",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55rem",
              minHeight: "44px",
              padding: "0.65rem 1rem",
              border: `1px solid ${GOLD}`,
              borderRadius: "2px",
              background: "rgba(12, 10, 7, 0.94)",
              color: CREAM,
              fontFamily: "'Cinzel', serif",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.45)",
            }}
          >
            <span aria-hidden="true" style={{ fontSize: "1.5rem", lineHeight: 0.7 }}>&times;</span>
            <span>{t("const.lightbox.close")}</span>
          </button>
        </div>
      )}
    </div>
  );
}
