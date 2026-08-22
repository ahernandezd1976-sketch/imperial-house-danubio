/*
 * Constitution Page — The Federation Constitution
 * Imperial Modernism / Vienna Secession Reborn
 *
 * Design: Dark theme with gold/cream palette. Cinzel headings, Cormorant body.
 * Layout: Hero section with constitution document, geopolitical map, and explanatory text.
 */
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const GOLD = "oklch(0.72 0.12 85)";
const DARK = "oklch(0.09 0.005 285)";
const CREAM = "oklch(0.96 0.015 85)";
const DARK_CARD = "oklch(0.12 0.005 285)";

export default function Constitution() {
  useScrollReveal();
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            {t("const.header.pretitle")}
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
            {t("const.header.title1")}<span style={{ color: GOLD }}>{t("const.header.title2")}</span>
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
            {t("const.header.subtitle")}
          </p>
        </div>
      </section>

      {/* ── Section 1: The Constitution Document ── */}
      <section style={{ backgroundColor: DARK_CARD, padding: "6rem 0", borderTop: `1px solid oklch(0.72 0.12 85 / 0.1)` }}>
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
              {t("const.s1.pretitle")}
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
              {t("const.s1.title")}
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
              {t("const.s1.subtitle")}
            </p>
          </div>

          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ position: "relative", cursor: "zoom-in" }} onClick={() => setLightboxOpen(true)} role="button" aria-label="Click to enlarge">
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
              src="/manus-storage/constitution_document_3ac93f6f.png"
                alt={t("const.s1.caption")}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  border: `1px solid oklch(0.72 0.12 85 / 0.15)`, backgroundColor: '#2b2727',
                }}
              />
              {/* Overlay 1: Title "THE FEDERATION CONSTITUTION" → translated */}
              <div style={{ position: "absolute", top: "13%", left: "18%", right: "18%", height: "24%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "oklch(0.84 0.04 75 / 1.0)", zIndex: 1 }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: "clamp(0.8rem, 2.8vw, 1.8rem)", color: "oklch(0.18 0.03 60)", textAlign: "center", lineHeight: 1.15, letterSpacing: "0.04em" }}>
                  {t("const.img.title")}
                </span>
              </div>
              {/* Overlay 2: City row 1 — BUDAPEST · VIENNA · PRAGUE */}
              <div style={{ position: "absolute", top: "50%", left: "5%", right: "5%", height: "4%", display: "flex", alignItems: "center", justifyContent: "space-around", backgroundColor: "oklch(0.78 0.05 70 / 1.0)", zIndex: 1, padding: "0 5%" }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "clamp(0.4rem, 1.4vw, 0.85rem)", color: "oklch(0.15 0.03 60)", letterSpacing: "0.08em" }}>{t("const.img.city1")}</span>
                <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "clamp(0.4rem, 1.4vw, 0.85rem)", color: "oklch(0.15 0.03 60)", letterSpacing: "0.08em" }}>{t("const.img.city2")}</span>
                <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "clamp(0.4rem, 1.4vw, 0.85rem)", color: "oklch(0.15 0.03 60)", letterSpacing: "0.08em" }}>{t("const.img.city3")}</span>
              </div>
              {/* Overlay 3: City row 2 — SARAJEVO · ZAGREB · BELGRADE · KRAKOW */}
              <div style={{ position: "absolute", top: "63.5%", left: "5%", right: "5%", height: "4%", display: "flex", alignItems: "center", justifyContent: "space-around", backgroundColor: "oklch(0.78 0.05 70 / 1.0)", zIndex: 1, padding: "0 3%" }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "clamp(0.35rem, 1.2vw, 0.75rem)", color: "oklch(0.15 0.03 60)", letterSpacing: "0.06em" }}>{t("const.img.city4")}</span>
                <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "clamp(0.35rem, 1.2vw, 0.75rem)", color: "oklch(0.15 0.03 60)", letterSpacing: "0.06em" }}>{t("const.img.city5")}</span>
                <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "clamp(0.35rem, 1.2vw, 0.75rem)", color: "oklch(0.15 0.03 60)", letterSpacing: "0.06em" }}>{t("const.img.city6")}</span>
                <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "clamp(0.35rem, 1.2vw, 0.75rem)", color: "oklch(0.15 0.03 60)", letterSpacing: "0.06em" }}>{t("const.img.city7")}</span>
              </div>
              {/* Overlay 4: Bottom text — "For the glory..." */}
              <div style={{ position: "absolute", bottom: "1.5%", left: "8%", right: "8%", height: "9%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "oklch(0.84 0.04 75 / 1.0)", zIndex: 1, padding: "0.2rem 0.5rem" }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "clamp(0.5rem, 1.6vw, 1rem)", color: "oklch(0.18 0.03 60)", textAlign: "center", lineHeight: 1.3 }}>
                  {t("const.img.bottom1")}
                </span>
                <span style={{ fontFamily: "'EB Garamond', serif", fontStyle: "italic", fontSize: "clamp(0.4rem, 1.2vw, 0.8rem)", color: "oklch(0.3 0.03 60)", textAlign: "center", lineHeight: 1.3, marginTop: "0.1rem" }}>
                  {t("const.img.bottom2")}
                </span>
              </div>
              {/* Zoom indicator */}
              <div
                style={{
                  position: "absolute",
                  bottom: "12%",
                  right: "3%",
                  width: "clamp(24px, 3vw, 36px)",
                  height: "clamp(24px, 3vw, 36px)",
                  borderRadius: "50%",
                  backgroundColor: "oklch(0.72 0.12 85 / 0.8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="oklch(0.15 0.02 60)" strokeWidth="2.5">
                  <circle cx="10" cy="10" r="7" />
                  <line x1="15" y1="15" x2="21" y2="21" />
                  <line x1="10" y1="7" x2="10" y2="13" />
                  <line x1="7" y1="10" x2="13" y2="10" />
                </svg>
              </div>
              {/* Sepia diamond (right) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "2.5%",
                  right: "5%",
                  width: "16px",
                  height: "16px",
                  backgroundColor: "oklch(0.45 0.06 60)",
                  transform: "rotate(45deg)",
                  zIndex: 3,
                }}
              />
              {/* Sepia diamond (left) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "2.5%",
                  left: "5%",
                  width: "16px",
                  height: "16px",
                  backgroundColor: "oklch(0.45 0.06 60)",
                  transform: "rotate(45deg)",
                  zIndex: 3,
                }}
              />
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "21px",
                color: "#f4f5cc",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              {t("const.s1.caption")}
            </p>
          </div>

          {/* Key principles */}
          <div
            style={{
              marginTop: "4rem",
              maxWidth: "900px",
              margin: "4rem auto 0",
              border: `1px solid oklch(0.72 0.12 85 / 0.2)`,
              background: DARK_CARD,
            }}
          >
            <div
              style={{
                padding: "1.5rem",
                borderBottom: `1px solid oklch(0.72 0.12 85 / 0.15)`,
                fontFamily: "'Cinzel', serif",
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                color: GOLD,
                textTransform: "uppercase",
              }}
            >
              {t("const.s1.tableTitle")}
            </div>
            {[
              { title: t("const.s1.pr1"), description: t("const.s1.pr1d") },
              { title: t("const.s1.pr2"), description: t("const.s1.pr2d") },
              { title: t("const.s1.pr3"), description: t("const.s1.pr3d") },
              { title: t("const.s1.pr4"), description: t("const.s1.pr4d") },
              { title: t("const.s1.pr5"), description: t("const.s1.pr5d") },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "1.25rem 1.5rem",
                  borderBottom: i < 4 ? `1px solid oklch(0.72 0.12 85 / 0.08)` : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.75rem",
                    color: GOLD,
                    letterSpacing: "0.05em",
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                  }}
                >
                  {item.title}
                </div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.95rem",
                    color: "oklch(0.7 0.01 85)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Geopolitical Map ── */}
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
              {t("const.s2.pretitle")}
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
              {t("const.s2.title")}
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
              {t("const.s2.subtitle")}
            </p>
          </div>

          <div className="reveal" style={{ maxWidth: "1000px", margin: "0 auto" }}>
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
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663301701844/DGTyc4b55NDjb7mPZJGomf/danubian_federation_map-DBXTBPoBDborzyqARDWkRX.webp"
                alt="Danubian Federation Geopolitical Map showing borders with Bavaria, Germany, Russian Federation, Balkans, and Ottoman Empire"
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
              {t("const.s2.caption")}
            </p>
          </div>

          {/* Territorial description */}
          <div
            style={{
              marginTop: "4rem",
              maxWidth: "800px",
              margin: "4rem auto 0",
              padding: "2rem",
              border: `1px solid oklch(0.72 0.12 85 / 0.2)`,
              background: DARK_CARD,
            }}
          >
            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "oklch(0.65 0.01 85)",
                marginBottom: "1.25rem",
              }}
            >
              {t("const.s2.p1")}
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
              {t("const.s2.p2")}
            </p>
            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "oklch(0.65 0.01 85)",
              }}
            >
              {t("const.s2.p3")}
            </p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox modal for enlarged constitution document */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
            padding: "1rem",
          }}
        >
          <img
            src="/manus-storage/constitution_document_3ac93f6f.png"
            alt={t("const.s1.caption")}
            style={{
              maxWidth: "95vw",
              maxHeight: "95vh",
              objectFit: "contain",
              borderRadius: "4px",
              boxShadow: "0 0 60px rgba(180, 150, 80, 0.3)",
            }}
          />
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "none",
              border: "none",
              color: "white",
              fontSize: "2rem",
              cursor: "pointer",
              lineHeight: 1,
              opacity: 0.8,
            }}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
