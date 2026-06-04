/*
 * Constitution Page — The Federation Constitution
 * Imperial Modernism / Vienna Secession Reborn
 *
 * Design: Dark theme with gold/cream palette. Cinzel headings, Cormorant body.
 * Layout: Hero section with constitution document, geopolitical map, and explanatory text.
 */
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GOLD = "oklch(0.72 0.12 85)";
const DARK = "oklch(0.09 0.005 285)";
const CREAM = "oklch(0.96 0.015 85)";
const DARK_CARD = "oklch(0.12 0.005 285)";

export default function Constitution() {
  useScrollReveal();

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
            Imperial House of Austria-Danubio
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
            The <span style={{ color: GOLD }}>Constitution</span>
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
            The foundational document of the Danubian Federation — established in 1917 and amended through the 20th and 21st centuries. A constitutional monarchy bound by law, tradition, and the will of its peoples.
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
              Foundational Document · Vienna · 1917
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
              The Federation Constitution
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
              Adopted by the Diet of Vienna on 1 November 1917, the Constitution of the Danubian Federation established a federal monarchy with shared sovereignty among the Crown, the Imperial Diet, and the constituent kingdoms and lands.
            </p>
          </div>

          <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
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
                src="/manus-storage/Gemini_Generated_Image_sle4ahsle4ahsle4_f1b37470.webp"
                alt="The Federation Constitution — Title page with coat of arms and foundational cities"
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
              The Federation Constitution · Title Page · Vienna Archives · 1917
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
              Constitutional Principles
            </div>
            {[
              {
                title: "Federal Monarchy",
                description: "The Crown is the symbol of unity; executive power is shared between the Emperor and the Imperial Diet.",
              },
              {
                title: "Constituent Kingdoms and Lands",
                description: "Austria, Hungary, Bohemia, Galicia, and other territories retain internal autonomy while participating in federal governance.",
              },
              {
                title: "Imperial Diet",
                description: "A bicameral legislature representing the Crown, the kingdoms, and the peoples. Legislative power is shared.",
              },
              {
                title: "Rights and Liberties",
                description: "Fundamental rights are guaranteed to all subjects: freedom of conscience, property rights, and equal justice under law.",
              },
              {
                title: "Amendment Process",
                description: "Constitutional amendments require a supermajority in the Diet and the consent of the constituent kingdoms.",
              },
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
              Territorial Extent · 2026
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
              The Danubian Federation in Europe
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
              The Federation occupies the central arc of Europe, bordered by Bavaria and Germany to the west, the Russian Federation to the north and east, the Balkans and Ottoman Empire to the south, and the Adriatic Sea to the southwest.
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
              Danubian Federation Geopolitical Map · 2026
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
              The Danubian Federation comprises the historic kingdoms and lands of the Austro-Hungarian crown, reorganized as a federal state in 1917. Its territory spans from the Alpine foothills to the Carpathian Mountains, encompassing the Danube River valley — the geopolitical and economic heart of Central Europe.
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
              Vienna remains the capital and seat of the Emperor, the Imperial Diet, and the federal government. The Federation's borders have remained largely stable since the Treaty of Vienna (1917), with minor adjustments following the Balkan Accords (1945) and the European Territorial Settlement (1989).
            </p>
            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "oklch(0.65 0.01 85)",
              }}
            >
              As a member of the United Nations, the European Confederation, and numerous international bodies, the Federation plays a central role in European diplomacy, security, and economic integration.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
