/*
 * Imperial Properties Page — Imperial Modernism / Vienna Secession Reborn
 * Design: jet-black / warm cream alternating sections, 24k gold accents
 * Typography: Cinzel headings, Cormorant Garamond italic, Source Serif 4 body
 * Layout: asymmetric card grid with full-bleed property hero images
 */
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GOLD = "oklch(0.72 0.12 85)";
const DARK = "oklch(0.09 0.005 285)";
const CREAM = "oklch(0.96 0.015 85)";

function SectionDivider({ light = false }: { light?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "2rem 0" }}>
      <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, transparent, ${light ? "oklch(0.72 0.12 85 / 0.5)" : "oklch(0.72 0.12 85 / 0.3)"})` }} />
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <rect x="8" y="0" width="4" height="4" fill={GOLD} opacity="0.7" />
        <rect x="0" y="8" width="4" height="4" fill={GOLD} opacity="0.7" />
        <rect x="16" y="8" width="4" height="4" fill={GOLD} opacity="0.7" />
        <rect x="8" y="16" width="4" height="4" fill={GOLD} opacity="0.7" />
        <rect x="8" y="8" width="4" height="4" fill={GOLD} />
      </svg>
      <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, ${light ? "oklch(0.72 0.12 85 / 0.5)" : "oklch(0.72 0.12 85 / 0.3)"}, transparent)` }} />
    </div>
  );
}

const properties = [
  {
    id: "hofburg",
    descKey: "prop.hofburg.desc",
    visitKey: "prop.hofburg.visit",
    nameKey: "prop.hofburg.title",
    subtitleKey: "prop.hofburg.subtitle",
    locationKey: "prop.hofburg.location",
    flag: "🇦🇹",
    eraKey: "prop.hofburg.era",
    image: "/manus-storage/hofburg_5d7a6dae.webp",
    tagKey: "prop.hofburg.tag",
    tagColor: GOLD,
  },
  {
    id: "schonbrunn",
    descKey: "prop.schonbrunn.desc",
    visitKey: "prop.schonbrunn.visit",
    nameKey: "prop.schonbrunn.title",
    subtitleKey: "prop.schonbrunn.subtitle",
    locationKey: "prop.hofburg.location",
    flag: "🇦🇹",
    eraKey: "prop.schonbrunn.era",
    image: "/manus-storage/schonbrunn_df205bcc.png",
    tagKey: "prop.schonbrunn.tag",
    tagColor: "oklch(0.55 0.08 85)",
  },
  {
    id: "belvedere",
    descKey: "prop.belvedere.desc",
    visitKey: "prop.belvedere.visit",
    nameKey: "prop.belvedere.title",
    subtitleKey: "prop.belvedere.subtitle",
    locationKey: "prop.hofburg.location",
    flag: "🇦🇹",
    eraKey: "prop.belvedere.era",
    image: "/manus-storage/belvedere_7304965c.png",
    tagKey: "prop.belvedere.tag",
    tagColor: "oklch(0.45 0.07 150)",
  },
  {
    id: "laxenburg",
    descKey: "prop.laxenburg.desc",
    visitKey: "prop.laxenburg.visit",
    nameKey: "prop.laxenburg.title",
    subtitleKey: "prop.laxenburg.subtitle",
    locationKey: "prop.laxenburg.location",
    flag: "🇦🇹",
    eraKey: "prop.laxenburg.era",
    image: "/manus-storage/laxenburg_palace_736e60bb.png",
    tagKey: "prop.laxenburg.tag",
    tagColor: "oklch(0.45 0.07 150)",
  },
  {
    id: "budapest",
    descKey: "prop.budapest.desc",
    visitKey: "prop.budapest.visit",
    nameKey: "prop.budapest.title",
    subtitleKey: "prop.budapest.subtitle",
    locationKey: "prop.budapest.location",
    flag: "🇭🇺",
    eraKey: "prop.budapest.era",
    image: "/manus-storage/budapest_castle_a9b51aa6.webp",
    tagKey: "prop.budapest.tag",
    tagColor: "oklch(0.5 0.15 30)",
  },
  {
    id: "prague",
    descKey: "prop.prague.desc",
    visitKey: "prop.prague.visit",
    nameKey: "prop.prague.title",
    subtitleKey: "prop.prague.subtitle",
    locationKey: "prop.prague.location",
    flag: "🇨🇿",
    eraKey: "prop.prague.era",
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=1200&q=85",
    tagKey: "prop.prague.tag",
    tagColor: "oklch(0.4 0.1 260)",
  },
  {
    id: "miramare",
    descKey: "prop.miramare.desc",
    visitKey: "prop.miramare.visit",
    nameKey: "prop.miramare.title",
    subtitleKey: "prop.miramare.subtitle",
    locationKey: "prop.miramare.location",
    flag: "🇮🇹",
    eraKey: "prop.miramare.era",
    image: "/manus-storage/miramare_castle_756fbc7c.png",
    tagKey: "prop.miramare.tag",
    tagColor: "oklch(0.45 0.1 220)",
  },
  {
    id: "hermes",
    descKey: "prop.hermes.desc",
    visitKey: "prop.hermes.visit",
    nameKey: "prop.hermes.title",
    subtitleKey: "prop.hermes.subtitle",
    locationKey: "prop.hofburg.location",
    flag: "🇦🇹",
    eraKey: "prop.hermes.era",
    image: "/manus-storage/hermes_villa_7f607740.png",
    tagKey: "prop.hermes.tag",
    tagColor: "oklch(0.45 0.07 150)",
  },
];

export default function Properties() {
  const { t } = useLanguage();
  useScrollReveal();
  const [activeProperty, setActiveProperty] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: DARK }}>
      <Navigation />

      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          height: "70vh",
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/manus-storage/schonbrunn_df205bcc.png)",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            filter: "brightness(0.3) saturate(0.7)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, oklch(0.09 0.005 285 / 0.2) 0%, oklch(0.09 0.005 285 / 0.7) 70%, oklch(0.09 0.005 285) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 60px, oklch(0.72 0.12 85 / 0.03) 60px, oklch(0.72 0.12 85 / 0.03) 61px),
              repeating-linear-gradient(90deg, transparent, transparent 60px, oklch(0.72 0.12 85 / 0.03) 60px, oklch(0.72 0.12 85 / 0.03) 61px)
            `,
          }}
        />
        <div className="container relative z-10" style={{ paddingTop: "6rem" }}>
          <div
            className="animate-fade-up"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.6rem",
              letterSpacing: "0.4em",
              color: GOLD,
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            {t("prop.pretitle")}
          </div>
          <h1
            className="animate-fade-up"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 700,
              color: CREAM,
              lineHeight: 1.1,
              letterSpacing: "0.04em",
              marginBottom: "1.25rem",
              animationDelay: "0.2s",
            }}
          >
            {t("prop.title1")}
            <br />
            <span style={{ color: GOLD }}>{t("prop.title2")}</span>
          </h1>
          <p
            className="animate-fade-up"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              color: "oklch(0.78 0.01 85)",
              maxWidth: "600px",
              lineHeight: 1.7,
              animationDelay: "0.4s",
            }}
          >
            {t("prop.subtitle")}
          </p>
        </div>
      </section>

      {/* ── VISIT POLICY BANNER ── */}
      <section style={{ backgroundColor: GOLD, padding: "1.25rem 0" }}>
        <div className="container">
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.62rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: DARK,
              textAlign: "center",
            }}
          >
            {t("prop.banner")}
          </p>
        </div>
      </section>

      {/* ── RESERVATION INFO ── */}
      <section style={{ backgroundColor: CREAM, padding: "5rem 0" }}>
        <div className="container">
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
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
                {t("prop.visit.section")}
              </div>
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 600,
                  color: DARK,
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                  letterSpacing: "0.03em",
                }}
              >
                {t("prop.visit.title").split("\n").map((l,i) => <>{i > 0 && <br />}{l}</>)}
              </h2>
              <SectionDivider />
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "oklch(0.25 0.005 285)",
                  marginBottom: "1.25rem",
                }}
              >
                {t("prop.visit.p1")}
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "oklch(0.25 0.005 285)",
                  marginBottom: "2rem",
                }}
              >
                {t("prop.visit.p2")}
              </p>

              {/* Contact box */}
              <div
                style={{
                  border: `1px solid oklch(0.72 0.12 85 / 0.4)`,
                  padding: "1.75rem 2rem",
                  background: "oklch(0.99 0.008 85)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0, left: 0, right: 0,
                    height: "2px",
                    background: GOLD,
                  }}
                />
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.25em",
                    color: "oklch(0.55 0.08 85)",
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                  }}
                >
                  {t("prop.office.title")}
                </div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "1rem",
                    color: "oklch(0.3 0.005 285)",
                    lineHeight: 1.8,
                    marginBottom: "0.5rem",
                  }}
                >
                  {t("prop.office.address").split("\n").map((l,i) => <>{i > 0 && <br />}{l}</>)}
                </p>
                <p
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                    fontSize: "0.9rem",
                    color: "oklch(0.4 0.005 285)",
                    lineHeight: 1.7,
                  }}
                >
                  {t("prop.office.note").split("\n").map((l,i) => <>{i > 0 && <br />}{l}</>)}
                </p>
              </div>
            </div>

            {/* Right: visit schedule table */}
            <div className="reveal" style={{ transitionDelay: "0.2s" }}>
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
                {t("prop.schedule.section")}
              </div>
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 600,
                  color: DARK,
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                  letterSpacing: "0.03em",
                }}
              >
                {t("prop.schedule.title")}
              </h2>
              <SectionDivider />
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      {[t("prop.schedule.col1"), t("prop.schedule.col2"), t("prop.schedule.col3")].map((h) => (
                        <th
                          key={h}
                          style={{
                            fontFamily: "'Cinzel', serif",
                            fontSize: "0.6rem",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "oklch(0.55 0.08 85)",
                            padding: "0.75rem 1rem",
                            textAlign: "left",
                            borderBottom: `1px solid oklch(0.72 0.12 85 / 0.3)`,
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [t("prop.hofburg.title"), t("prop.schedule.hofburg.day"), "10:00–16:00"],
                      [t("prop.schonbrunn.title"), t("prop.schedule.schonbrunn.day"), "09:00–15:00"],
                      [t("prop.belvedere.title"), t("prop.schedule.belvedere.day"), "10:00–14:00"],
                      [t("prop.laxenburg.title"), t("prop.schedule.laxenburg.day"), "10:00–15:00"],
                      [t("prop.budapest.title"), t("prop.schedule.budapest.day"), "10:00–15:00"],
                      [t("prop.prague.title"), t("prop.schedule.prague.day"), "09:00–14:00"],
                      [t("prop.miramare.title"), t("prop.schedule.miramare.day"), "10:00–16:00"],
                      [t("prop.hermes.title"), t("prop.schedule.hermes.day"), "10:00–14:00"],
                    ].map(([name, day, hours], i) => (
                      <tr
                        key={i}
                        style={{
                          backgroundColor: i % 2 === 0 ? "transparent" : "oklch(0.94 0.01 85 / 0.5)",
                        }}
                      >
                        {[name, day, hours].map((cell, j) => (
                          <td
                            key={j}
                            style={{
                              fontFamily: j === 0 ? "'Cinzel', serif" : "'Source Serif 4', serif",
                              fontSize: j === 0 ? "0.8rem" : "0.9rem",
                              color: j === 0 ? DARK : "oklch(0.35 0.005 285)",
                              padding: "0.85rem 1rem",
                              borderBottom: `1px solid oklch(0.72 0.12 85 / 0.15)`,
                            }}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROPERTIES GRID ── */}
      <section style={{ backgroundColor: DARK, padding: "6rem 0", position: "relative", overflow: "hidden" }}>
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
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
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
              {t("prop.grid.section")}
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 600,
                color: CREAM,
                letterSpacing: "0.03em",
              }}
            >
              {t("prop.grid.title")}
            </h2>
          </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {properties.map((prop, i) => (
              <div
                key={prop.id}
                className="reveal"
                style={{
                  transitionDelay: `${(i % 4) * 0.1}s`,
                  border: `1px solid ${activeProperty === prop.id ? GOLD : "oklch(0.72 0.12 85 / 0.15)"}`,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: activeProperty === prop.id ? `0 0 40px oklch(0.72 0.12 85 / 0.15)` : "none",
                }}
                onClick={() => setActiveProperty(activeProperty === prop.id ? null : prop.id)}
              >
                {/* Image — expands on click */}
                <div style={{ position: "relative", overflow: "hidden", aspectRatio: activeProperty === prop.id ? "16/9" : "3/2", transition: "aspect-ratio 0.5s cubic-bezier(0.23,1,0.32,1)" }}>
                  <img
                    src={prop.image}
                    alt={t(prop.nameKey)}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center center",
                      transition: "transform 0.6s ease, filter 0.4s ease",
                      transform: activeProperty === prop.id ? "scale(1.03)" : "scale(1)",
                      filter: activeProperty === prop.id ? "brightness(0.85) saturate(1)" : "brightness(0.75) saturate(0.8)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, oklch(0.09 0.005 285 / 0.8) 0%, transparent 60%)",
                    }}
                  />
                  {/* Tag */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: prop.tagColor,
                      color: DARK,
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.55rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "0.3rem 0.75rem",
                    }}
                  >
                    {t(prop.tagKey)}
                  </div>
                  {/* Location overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "1.25rem",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "0.55rem",
                        letterSpacing: "0.2em",
                        color: GOLD,
                        textTransform: "uppercase",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {prop.flag} &nbsp;{t(prop.locationKey)}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "1.3rem",
                        fontWeight: 600,
                        color: CREAM,
                        letterSpacing: "0.04em",
                        lineHeight: 1.2,
                      }}
                    >
                      {t(prop.nameKey)}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "1.5rem" }}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "0.9rem",
                      color: GOLD,
                      marginBottom: "0.75rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {t(prop.subtitleKey)} &nbsp;·&nbsp; {t(prop.eraKey)}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontSize: "0.92rem",
                      lineHeight: 1.85,
                      color: "oklch(0.68 0.01 85)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {t(prop.descKey)}
                  </p>

                  {/* Visit note */}
                  <div
                    style={{
                      borderTop: `1px solid oklch(0.72 0.12 85 / 0.2)`,
                      paddingTop: "1rem",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
                      <circle cx="12" cy="12" r="10" stroke={GOLD} strokeWidth="1.5" opacity="0.7" />
                      <path d="M12 7v5l3 3" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                    </svg>
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: "italic",
                        fontSize: "0.88rem",
                        color: "oklch(0.6 0.01 85)",
                        lineHeight: 1.7,
                      }}
                    >
                      {t(prop.visitKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESERVATION CTA ── */}
      <section style={{ backgroundColor: CREAM, padding: "5rem 0" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
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
              {t("prop.cta.section")}
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 600,
                color: DARK,
                lineHeight: 1.2,
                marginBottom: "1.5rem",
                letterSpacing: "0.03em",
              }}
            >
              {t("prop.cta.title")}
            </h2>
            <SectionDivider />
            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "1.05rem",
                lineHeight: 1.9,
                color: "oklch(0.3 0.005 285)",
                marginBottom: "2.5rem",
              }}
            >
              Written applications for visits to any Imperial residence should be directed to the {t("prop.office.title")} at the Hofburg Imperial Chancellery. Please include your full name, nationality, the residence you wish to visit, and your preferred date. Confirmations are issued within fifteen working days. Groups are limited to twelve persons per visit.
            </p>

            <div
              style={{
                display: "inline-block",
                border: `1px solid oklch(0.72 0.12 85 / 0.5)`,
                padding: "2rem 3rem",
                background: "oklch(0.99 0.008 85)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "2px",
                  background: GOLD,
                }}
              />
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "1.1rem",
                  color: "oklch(0.3 0.005 285)",
                  lineHeight: 1.8,
                }}
              >
                <strong style={{ fontFamily: "'Cinzel', serif", fontSize: "0.75rem", letterSpacing: "0.1em", fontStyle: "normal", color: DARK }}>
                  {t("prop.cta.office")}
                </strong>
                <br />
                {t("prop.cta.address").split("\n").map((l,i) => <>{i > 0 && <br />}{l}</>)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
