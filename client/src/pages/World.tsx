/*
 * The World Page — Imperial Modernism / Vienna Secession Reborn
 * Geopolitics of the Danubian Federation: the Ottoman-Jerusalem maps,
 * the Jerusalem Protocol governance diagram, the Moon Corridors map,
 * and the Imperial Intelligence Briefing dossier.
 *
 * Design: Dark theme with gold/cream palette. Cinzel headings, Cormorant body.
 * Layout: Asymmetric — full-width map panels alternating with explanatory text columns.
 */
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GOLD = "oklch(0.72 0.12 85)";
const DARK = "oklch(0.09 0.005 285)";
const CREAM = "oklch(0.96 0.015 85)";
const DARK_CARD = "oklch(0.12 0.005 285)";

export default function World() {
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
            The <span style={{ color: GOLD }}>World</span>
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
            The geopolitical order of the Danubian Federation — its alliances, its territories, its role in the governance of Jerusalem, and its reach beyond the Earth itself.
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
                Geopolitical Position
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
                The Danubian Federation and the Reformed Ottoman Empire
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
                The Danubian Federation, established by the Treaty of Vienna in 1917, occupies the central arc of the European continent — from the Alps to the Carpathians, from the Bohemian plateau to the Adriatic coast. It is the largest constitutional monarchy in Europe and the principal guarantor of the post-1917 order.
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
                The Danubian Federation model of shared governance has proven influential beyond Europe. Its principles of balanced representation, rotating leadership, and communal autonomy have been adapted in conflict resolution frameworks across the Middle East, the Balkans, and Southeast Asia. The Federation's success in managing multi-ethnic, multi-religious territories has made it a template for post-conflict reconstruction and regional stability initiatives.
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
                To its south and east, the Ottoman Empire — reformed and reorganised between 1918 and 1945 — remains the dominant power of the Near East. The two empires share a long border and a longer history of rivalry and accommodation. Their joint administration of the Jerusalem Special Administrative Zone, established by the Jerusalem Protocol of 1965, is the most consequential act of cooperation between them.
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
                  "The map shows Palestine as a Special Administrative Zone — high-sensitivity, multi-communal, under demographic management. The Danubian Federation contributes forces to the Multinational Constabulary."
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
                  Imperial Foreign Ministry · Briefing Note · 2025
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
              Governance Architecture · 1965
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
              The Jerusalem Protocol
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
              Signed in 1965 by the Ottoman Empire, the Danubian Federation, and the Arab League, the Jerusalem Protocol established a tripartite governance system for the Holy City — neither partition nor unification, but a machine for coexistence built from interlocking constraints.
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
                The Jerusalem Council — the primary governing institution — consists of nine seats divided equally among the Muslim, Christian, and Jewish communities. No community holds a permanent majority. Decisions require a supermajority of six of nine votes, and each community retains a structural veto over matters affecting its essential interests.
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
                The Rotating Presidency cycles between the three communities on a two-year term: Muslim, then Christian, then Jewish, and back again. Ottoman symbolic sovereignty is preserved, but executive authority rests with the Council. The Multinational Constabulary — drawn from Ottoman, Danubian, and Arab League forces — maintains public order under rotating command.
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
                  Administrative Principles
                </div>
                {[
                  { principle: "Rotating Presidency", detail: "Muslim → Christian → Jewish (2-year terms)" },
                  { principle: "Supermajority Rule", detail: "6 of 9 votes required; structural veto power" },
                  { principle: "Communal Autonomy", detail: "Personal law, courts, schools, charities, religious endowments" },
                  { principle: "Demographic Balance", detail: "Jewish population ceiling of 40% in Palestine as a whole" },
                  { principle: "Multinational Security", detail: "Ottoman, Danubian Federation, and Arab League forces" },
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
                  "It is neither partitioned nor unified, neither imperial nor international."
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
                  IT IS A MACHINE FOR COEXISTENCE, BUILT FROM INTERLOCKING CONSTRAINTS.
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
                  Jerusalem Protocol Archives · Article I · 1965
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
                Political Map of Moon Corridors · Danubian Federation corridor allocated 2025
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
                Lunar Territories · Since 2025
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
                The Moon Corridors
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
                In 2025, the Danubian Federation became the sixth signatory to the Lunar Corridor Allocation Treaty — joining the United States, Russia, China, France, and the United Kingdom in the governance of the Moon's surface. The Federation's corridor, a narrow wedge of the lunar near-side, was allocated by agreement of the existing five powers in recognition of the Federation's contribution to the Multinational Space Observation Programme and its role in the governance of the Jerusalem Protocol.
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
                The allocation is symbolic in the short term — no Danubian installation yet exists on the lunar surface — but the political significance is considerable. It places the Federation among the six powers that will govern the Moon as human activity there intensifies over the coming decades.
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
                  Danubian Federation · Lunar Corridor · Allocated 2025
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
              Declassified Archive · Vienna · 2025
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
              The Konopiště Protocol
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
              Declassified in 2025, the Imperial Intelligence Briefing on the Strategic Realignment of Europe documents the diplomatic sequence that led from the Franco-Russian Alliance of 1894 to the formation of the Danubian Federation in 1917.
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
                src="/manus-storage/ChatGPTImageApr17,2026,09_19_32AM_aac8bd49.png"
                alt="Imperial Intelligence Briefing — Konopiště Protocol — Filed Vienna Archives — Declassified 2025"
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
              Imperial Intelligence Briefing · Konopiště Protocol · Filed Vienna Archives · Declassified 2025
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
                The Road to Vienna · Key Events
              </div>
              {[
                { year: "1894", event: "Franco-Russian Alliance — a mutual defence pact reshapes the balance of power in Europe." },
                { year: "1902", event: "Paris extends loans to St. Petersburg, deepening financial interdependence between France and Russia." },
                { year: "1905", event: "Russian reverses generate instability; Britain and France begin private discussions on strategic realignment." },
                { year: "1912", event: "Paris proposes economic reorientation toward Vienna, isolating Berlin diplomatically." },
                { year: "1914", event: "Konopiště Conference: Britain and France propose full economic realignment with Austria, isolating Germany. Serbia joins a new confederation with Austria under the Acta Danubiana (20 July)." },
                { year: "1915–1916", event: "Germany faces European economic blockade. Submarine campaign fails to break the encirclement. Cabinet deadlocks." },
                { year: "Winter 1917", event: "Formation of the Greater Austrian Federation confirmed. The Treaty of Vienna is signed. The Danubian Federation is established." },
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

      <Footer />
    </div>
  );
}
