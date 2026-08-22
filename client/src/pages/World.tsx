/*
 * The World Page — Imperial Modernism / Vienna Secession Reborn
 * Geopolitics of the Danubian Federation: the Ottoman-Jerusalem maps,
 * the Jerusalem Protocol governance diagram, the Moon Corridors map,
 * and the Imperial Intelligence Briefing dossier.
 *
 * Design: Dark theme with gold/cream palette. Cinzel headings, Cormorant body.
 * Layout: Asymmetric — full-width map panels alternating with explanatory text columns.
 */
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GraphicLanguageToggle, { type GraphicLanguage } from "@/components/GraphicLanguageToggle";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const GOLD = "oklch(0.80 0.14 88)";
const DARK = "oklch(0.09 0.005 285)";
const CREAM = "oklch(0.96 0.015 85)";
const DARK_CARD = "oklch(0.12 0.005 285)";

export default function World() {
  useScrollReveal();
  const { t, language } = useLanguage();
  const [briefingGraphicLanguage, setBriefingGraphicLanguage] = useState<GraphicLanguage>(() => language === "de" ? "de" : "en");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setBriefingGraphicLanguage(language === "de" ? "de" : "en");
  }, [language]);

  return (
    <div style={{ backgroundColor: DARK }}>
      <Navigation />

      {/* ── Page Header ── */}
      <section
        style={{
          paddingTop: "10rem",
          paddingBottom: "5rem",
          backgroundColor: DARK,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 40px, oklch(0.72 0.12 85 / 0.025) 40px, oklch(0.72 0.12 85 / 0.025) 41px),
              repeating-linear-gradient(90deg, transparent, transparent 40px, oklch(0.72 0.12 85 / 0.025) 40px, oklch(0.72 0.12 85 / 0.025) 41px)
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
            {t("world.header.pretitle")}
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
            {t("world.header.title1")}<span style={{ color: GOLD }}>{t("world.header.title2")}</span>
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.15rem",
              color: "oklch(0.65 0.01 85)",
              maxWidth: "640px",
              lineHeight: 1.75,
            }}
          >
            {t("world.header.subtitle")}
          </p>
        </div>
      </section>

      {/* ── Section 1: The Federation in Europe ── */}
      <section style={{ backgroundColor: DARK_CARD, padding: "6rem 0", borderTop: `1px solid oklch(0.72 0.12 85 / 0.1)` }}>
        <div className="container">
          <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Text column */}
            <div className="lg:col-span-12">
              <div style={{ height: "2px", background: GOLD, marginBottom: "1.5rem", width: "48px" }} />
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.55rem",
                  letterSpacing: "0.3em",
                  color: GOLD,
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  opacity: 0.8,
                }}
              >
                {t("world.s1.pretitle")}
              </div>
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: 600,
                  color: CREAM,
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                  letterSpacing: "0.03em",
                }}
              >
                {t("world.s1.title")}
              </h2>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "oklch(0.65 0.01 85)",
                  marginBottom: "1.25rem",
                }}
              >
                {t("world.s1.p1")}
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "oklch(0.65 0.01 85)",
                  marginBottom: "1.25rem",
                }}
              >
                {t("world.s1.p2")}
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "oklch(0.65 0.01 85)",
                  marginBottom: "1.25rem",
                }}
              >
                {t("world.s1.p3")}
              </p>
              <div
                style={{
                  borderLeft: `3px solid ${GOLD}`,
                  paddingLeft: "1.25rem",
                  marginTop: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "1rem",
                    color: "oklch(0.6 0.01 85)",
                    lineHeight: 1.8,
                  }}
                >
                  {t("world.s1.quote")}
                </p>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.5rem",
                    letterSpacing: "0.2em",
                    color: "oklch(0.45 0.01 85)",
                    textTransform: "uppercase",
                    marginTop: "0.75rem",
                  }}
                >
                  {t("world.s1.quoteSource")}
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ── Section 2: The Jerusalem Protocol ── */}
      <section style={{ backgroundColor: DARK, padding: "6rem 0", borderTop: `1px solid oklch(0.72 0.12 85 / 0.1)` }}>
        <div className="container">
          <div className="reveal text-center mb-12">
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                color: GOLD,
                textTransform: "uppercase",
                marginBottom: "0.75rem",
                opacity: 0.8,
              }}
            >
              {t("world.s2.pretitle")}
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
                color: CREAM,
                letterSpacing: "0.03em",
                marginBottom: "1rem",
              }}
            >
              {t("world.s2.title")}
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1.05rem",
                color: "oklch(0.6 0.01 85)",
                maxWidth: "680px",
                margin: "0 auto",
                lineHeight: 1.75,
              }}
            >
              {t("world.s2.subtitle")}
            </p>
          </div>

          <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Governance diagram */}
            <div className="lg:col-span-5">
              <div style={{ position: "relative" }}>
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
                      width: "24px",
                      height: "24px",
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
                  src="/manus-storage/ChatGPTImageApr29,2026,12_54_07PM_f83c5f9f.png"
                  alt="Jerusalem Protocol governance architecture diagram"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    border: `1px solid oklch(0.72 0.12 85 / 0.15)`,
                    background: "oklch(0.97 0.005 85)",
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "0.8rem",
                  color: "oklch(0.4 0.01 85)",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                Figure X: Governance Architecture of Jerusalem under the Protocol
              </p>
            </div>

            {/* Explanatory text */}
            <div className="lg:col-span-7">
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "oklch(0.65 0.01 85)",
                  marginBottom: "1.5rem",
                }}
              >
                {t("world.s2.p1")}
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "oklch(0.65 0.01 85)",
                  marginBottom: "1.5rem",
                }}
              >
                {t("world.s2.p2")}
              </p>

              {/* Key principles table */}
              <div
                style={{
                  border: `1px solid oklch(0.72 0.12 85 / 0.2)`,
                  background: DARK_CARD,
                  marginTop: "1.5rem",
                }}
              >
                <div
                  style={{
                    padding: "0.75rem 1.5rem",
                    borderBottom: `1px solid oklch(0.72 0.12 85 / 0.15)`,
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.55rem",
                    letterSpacing: "0.25em",
                    color: GOLD,
                    textTransform: "uppercase",
                  }}
                >
                  {t("world.s2.tableTitle")}
                </div>
                {[
                  { principle: t("world.s2.pr1"), detail: t("world.s2.pr1d") },
                  { principle: t("world.s2.pr2"), detail: t("world.s2.pr2d") },
                  { principle: t("world.s2.pr3"), detail: t("world.s2.pr3d") },
                  { principle: t("world.s2.pr4"), detail: t("world.s2.pr4d") },
                  { principle: t("world.s2.pr5"), detail: t("world.s2.pr5d") },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "0.85rem 1.5rem",
                      borderBottom: i < 4 ? `1px solid oklch(0.72 0.12 85 / 0.08)` : "none",
                      display: "grid",
                      gridTemplateColumns: "1fr 2fr",
                      gap: "1rem",
                      alignItems: "start",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "0.7rem",
                        color: GOLD,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {item.principle}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "0.9rem",
                        color: "oklch(0.7 0.01 85)",
                        fontStyle: "italic",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Closing quote */}
              <div
                style={{
                  marginTop: "2rem",
                  padding: "1.5rem",
                  border: `1px solid oklch(0.72 0.12 85 / 0.2)`,
                  background: "oklch(0.11 0.005 285)",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "1.05rem",
                    color: GOLD,
                    lineHeight: 1.7,
                    marginBottom: "0.5rem",
                  }}
                >
                  {t("world.s2.closingQuote1")}
                </p>
                <p
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.75rem",
                    color: CREAM,
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                  }}
                >
                  {t("world.s2.closingQuote2")}
                </p>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.45rem",
                    letterSpacing: "0.2em",
                    color: "oklch(0.4 0.01 85)",
                    textTransform: "uppercase",
                    marginTop: "0.75rem",
                  }}
                >
                  {t("world.s2.closingSource")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Moon Corridors ── */}
      <section style={{ backgroundColor: DARK_CARD, padding: "6rem 0", borderTop: `1px solid oklch(0.72 0.12 85 / 0.1)` }}>
        <div className="container">
          <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Map */}
            <div className="lg:col-span-5">
              <div style={{ position: "relative" }}>
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
                      width: "24px",
                      height: "24px",
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
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663301701844/DGTyc4b55NDjb7mPZJGomf/moon_corridors_map_corrected-CmQhJQw4FFzCumPoJotVWG.webp"
                  alt="Political Map of Moon Corridors — Danubian Federation corridor since 2025"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    border: `1px solid oklch(0.72 0.12 85 / 0.15)`,
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "0.8rem",
                  color: "oklch(0.4 0.01 85)",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                {t("world.s3.caption")}
              </p>
            </div>

            {/* Text */}
            <div className="lg:col-span-7">
              <div style={{ height: "2px", background: GOLD, marginBottom: "1.5rem", width: "48px" }} />
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.55rem",
                  letterSpacing: "0.3em",
                  color: GOLD,
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  opacity: 0.8,
                }}
              >
                {t("world.s3.pretitle")}
              </div>
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: 600,
                  color: CREAM,
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                  letterSpacing: "0.03em",
                }}
              >
                {t("world.s3.title")}
              </h2>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "oklch(0.65 0.01 85)",
                  marginBottom: "1.25rem",
                }}
              >
                {t("world.s3.p1")}
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "oklch(0.65 0.01 85)",
                  marginBottom: "1.25rem",
                }}
              >
                {t("world.s3.p2")}
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1.25rem",
                  border: `1px solid oklch(0.72 0.12 85 / 0.3)`,
                  background: "oklch(0.11 0.005 285)",
                  marginTop: "0.5rem",
                }}
              >
                <div style={{ width: "8px", height: "8px", background: GOLD, borderRadius: "50%", flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "0.9rem",
                    color: "oklch(0.65 0.01 85)",
                  }}
                >
                  {t("world.s3.badge")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Imperial Intelligence Briefing ── */}
      <section style={{ backgroundColor: DARK, padding: "6rem 0", borderTop: `1px solid oklch(0.72 0.12 85 / 0.1)` }}>
        <div className="container">
          <div className="reveal text-center mb-12">
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                color: GOLD,
                textTransform: "uppercase",
                marginBottom: "0.75rem",
                opacity: 0.8,
              }}
            >
              {t("world.s4.pretitle")}
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
                color: CREAM,
                letterSpacing: "0.03em",
                marginBottom: "1rem",
              }}
            >
              {t("world.s4.title")}
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1.05rem",
                color: "oklch(0.6 0.01 85)",
                maxWidth: "640px",
                margin: "0 auto",
                lineHeight: 1.75,
              }}
            >
              {t("world.s4.subtitle")}
            </p>
          </div>

          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "0.8rem" }}>
              <GraphicLanguageToggle value={briefingGraphicLanguage} onChange={setBriefingGraphicLanguage} />
            </div>
            <div style={{ position: "relative" }}>
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
                    width: "24px",
                    height: "24px",
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
                src={briefingGraphicLanguage === "de"
                  ? "/manus-storage/intelligence_briefing_german_v2_0395cc45.png"
                  : "/manus-storage/intelligence_briefing_english_54220df6.png"}
                alt={briefingGraphicLanguage === "de"
                  ? "Kaiserliches Geheimdienstbriefing zum Konopiště-Protokoll, Wiener Archiv, freigegeben 2025"
                  : "Imperial Intelligence Briefing on the Konopiště Protocol, Vienna Archives, declassified 2025"}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  border: `1px solid oklch(0.72 0.12 85 / 0.15)`,
                }}
              />
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "0.8rem",
                color: "oklch(0.4 0.01 85)",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              {t("world.s4.caption")}
            </p>

            {/* Key events timeline */}
            <div
              style={{
                marginTop: "3rem",
                border: `1px solid oklch(0.72 0.12 85 / 0.2)`,
                background: DARK_CARD,
              }}
            >
              <div
                style={{
                  padding: "0.75rem 1.5rem",
                  borderBottom: `1px solid oklch(0.72 0.12 85 / 0.15)`,
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.55rem",
                  letterSpacing: "0.25em",
                  color: GOLD,
                  textTransform: "uppercase",
                }}
              >
                {t("world.s4.timelineTitle")}
              </div>
              {[
                { year: t("world.s4.ev1y"), event: t("world.s4.ev1") },
                { year: t("world.s4.ev2y"), event: t("world.s4.ev2") },
                { year: t("world.s4.ev3y"), event: t("world.s4.ev3") },
                { year: t("world.s4.ev4y"), event: t("world.s4.ev4") },
                { year: t("world.s4.ev5y"), event: t("world.s4.ev5") },
                { year: t("world.s4.ev6y"), event: t("world.s4.ev6") },
                { year: t("world.s4.ev7y"), event: t("world.s4.ev7") },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1rem 1.5rem",
                    borderBottom: i < 6 ? `1px solid oklch(0.72 0.12 85 / 0.08)` : "none",
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: "1.5rem",
                    alignItems: "start",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.85rem",
                      color: GOLD,
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      paddingTop: "0.1rem",
                    }}
                  >
                    {item.year}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontSize: "0.9rem",
                      color: "oklch(0.7 0.01 85)",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
     </section>

      {/* ── Section 5: Associated Kingdoms & Protectorate ── */}
      <section style={{ backgroundColor: DARK_CARD, padding: "6rem 0", borderTop: `1px solid oklch(0.72 0.12 85 / 0.1)` }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.35em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>
              {t("world.associated.pretitle")}
            </div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: CREAM, letterSpacing: "0.04em" }}>
              {t("world.associated.title")}
            </h2>
          </div>

          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", lineHeight: 1.9, color: "oklch(0.75 0.01 85)", maxWidth: "900px", margin: "0 auto 3rem", textAlign: "center" }}>
            {t("world.associated.intro")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ maxWidth: "1100px", margin: "0 auto" }}>
            {/* Serbia */}
            <div style={{ background: "oklch(0.12 0.005 285)", border: `1px solid oklch(0.72 0.12 85 / 0.15)`, padding: "2rem", position: "relative" }}>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem" }}>
                {t("world.associated.schedule")} B
              </div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.2rem", fontWeight: 700, color: CREAM, marginBottom: "0.75rem" }}>
                {t("world.associated.serbia.name")}
              </h3>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: "oklch(0.6 0.01 85)", marginBottom: "1rem", fontStyle: "italic" }}>
                {t("world.associated.serbia.native")}
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", lineHeight: 1.7, color: "oklch(0.75 0.01 85)" }}>
                {t("world.associated.serbia.desc")}
              </p>
              <div style={{ marginTop: "1rem", fontSize: "0.75rem", color: GOLD, fontFamily: "'Cinzel', serif", letterSpacing: "0.1em" }}>
                {t("world.associated.serbia.treaty")}
              </div>
            </div>

            {/* Montenegro */}
            <div style={{ background: "oklch(0.12 0.005 285)", border: `1px solid oklch(0.72 0.12 85 / 0.15)`, padding: "2rem", position: "relative" }}>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem" }}>
                {t("world.associated.schedule")} B
              </div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.2rem", fontWeight: 700, color: CREAM, marginBottom: "0.75rem" }}>
                {t("world.associated.montenegro.name")}
              </h3>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: "oklch(0.6 0.01 85)", marginBottom: "1rem", fontStyle: "italic" }}>
                {t("world.associated.montenegro.native")}
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", lineHeight: 1.7, color: "oklch(0.75 0.01 85)" }}>
                {t("world.associated.montenegro.desc")}
              </p>
              <div style={{ marginTop: "1rem", fontSize: "0.75rem", color: GOLD, fontFamily: "'Cinzel', serif", letterSpacing: "0.1em" }}>
                {t("world.associated.montenegro.treaty")}
              </div>
            </div>

            {/* Albania */}
            <div style={{ background: "oklch(0.12 0.005 285)", border: `1px solid oklch(0.72 0.12 85 / 0.15)`, padding: "2rem", position: "relative" }}>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem" }}>
                {t("world.associated.schedule")} C
              </div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.2rem", fontWeight: 700, color: CREAM, marginBottom: "0.75rem" }}>
                {t("world.associated.albania.name")}
              </h3>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: "oklch(0.6 0.01 85)", marginBottom: "1rem", fontStyle: "italic" }}>
                {t("world.associated.albania.native")}
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", lineHeight: 1.7, color: "oklch(0.75 0.01 85)" }}>
                {t("world.associated.albania.desc")}
              </p>
              <div style={{ marginTop: "1rem", fontSize: "0.75rem", color: GOLD, fontFamily: "'Cinzel', serif", letterSpacing: "0.1em" }}>
                {t("world.associated.albania.treaty")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
