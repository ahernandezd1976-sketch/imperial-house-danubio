/*
 * Heraldry Page — Imperial Modernism / Vienna Secession Reborn
 * Coat of arms, motto, colours, and the Order of the Golden Eagle
 */
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GOLD = "oklch(0.72 0.12 85)";
const DARK = "oklch(0.09 0.005 285)";
const CREAM = "oklch(0.96 0.015 85)";

export default function Heraldry() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            Heraldry &amp; <span style={{ color: GOLD }}>Honours</span>
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
            The symbols, colours, and honours of the Imperial House of Austria-Danubio.
          </p>
        </div>
      </section>

      {/* Coat of Arms */}
      <section style={{ backgroundColor: CREAM, padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Arms image */}
            <div className="flex justify-center">
              {/* Outer diamond ornament wrapper */}
              <div style={{ position: "relative", maxWidth: "420px", width: "100%" }}>

                {/* Diamond ornaments at midpoints */}
                {[
                  { top: -10, left: "50%", transform: "translateX(-50%) rotate(45deg)" },
                  { bottom: -10, left: "50%", transform: "translateX(-50%) rotate(45deg)" },
                  { top: "50%", left: -10, transform: "translateY(-50%) rotate(45deg)" },
                  { top: "50%", right: -10, transform: "translateY(-50%) rotate(45deg)" },
                ].map((pos, i) => (
                  <div key={i} style={{
                    position: "absolute",
                    width: "14px",
                    height: "14px",
                    background: GOLD,
                    opacity: 0.55,
                    zIndex: 3,
                    ...pos,
                  }} />
                ))}

                {/* Inner frame */}
                <div style={{
                  position: "relative",
                  backgroundColor: "oklch(0.97 0.012 85)",
                  border: `1px solid oklch(0.72 0.12 85 / 0.35)`,
                  boxShadow: `0 0 0 4px oklch(0.96 0.015 85), 0 0 0 5px oklch(0.72 0.12 85 / 0.25), 0 8px 32px oklch(0.09 0.005 285 / 0.18)`,
                }}>
                  {/* Corner L-brackets */}
                  {[
                    { top: -8, left: -8 },
                    { top: -8, right: -8 },
                    { bottom: -8, left: -8 },
                    { bottom: -8, right: -8 },
                  ].map((pos, i) => (
                    <div key={i} style={{
                      position: "absolute",
                      width: "20px",
                      height: "20px",
                      borderTop: i < 2 ? `2px solid ${GOLD}` : "none",
                      borderBottom: i >= 2 ? `2px solid ${GOLD}` : "none",
                      borderLeft: i % 2 === 0 ? `2px solid ${GOLD}` : "none",
                      borderRight: i % 2 === 1 ? `2px solid ${GOLD}` : "none",
                      ...pos,
                      zIndex: 2,
                    }} />
                  ))}

                  {/* Dark band top */}
                  <div style={{ height: "10px", background: "oklch(0.09 0.005 285)", opacity: 0.85 }} />

                  {/* Image cropped to hide the black strip at bottom */}
                  <div style={{ overflow: "hidden", lineHeight: 0 }}>
                    <img
                      src="/manus-storage/coat_of_arms_real_375cb88d.png"
                      alt="Imperial Coat of Arms of Austria-Danubio"
                      style={{
                        width: "100%",
                        display: "block",
                        padding: "1rem 1.5rem 0",
                        marginBottom: "-6%",
                        mixBlendMode: "multiply",
                      }}
                    />
                  </div>

                  {/* Dark band bottom — mirrors top */}
                  <div style={{ height: "10px", background: "oklch(0.09 0.005 285)", opacity: 0.85 }} />

                </div>
              </div>
            </div>

            {/* Blazon */}
            <div style={{ transitionDelay: "0.2s" }} className="reveal">
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
                I &nbsp;·&nbsp; The Arms
              </div>
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  fontWeight: 600,
                  color: DARK,
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                The Imperial Coat of Arms
              </h2>
              <div
                style={{
                  height: "1px",
                  background: `linear-gradient(90deg, ${GOLD}, transparent)`,
                  marginBottom: "1.5rem",
                }}
              />

              {/* Blazon text */}
              <div
                style={{
                  padding: "1.25rem 1.5rem",
                  border: `1px solid oklch(0.72 0.12 85 / 0.3)`,
                  background: "oklch(0.99 0.008 85)",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: "oklch(0.55 0.08 85)",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  Blazon
                </div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "1rem",
                    color: DARK,
                    lineHeight: 1.8,
                  }}
                >
                  Quarterly: first and fourth, Sable, a double-headed eagle displayed Or, charged on the breast with an escutcheon Gules fimbriated Argent; second and third, Argent, three barrulets wavy Azure. The whole surmounted by an Imperial Crown. Supporters: two lions rampant Or, crowned Gules, each holding a lance bearing a banner. Motto on a scroll below: <em>Aquila et Flumen in Aeternum.</em>
                </p>
              </div>

              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "oklch(0.25 0.005 285)",
                  marginBottom: "1.25rem",
                }}
              >
                The arms of the Imperial House combine the ancient double-headed eagle of the Habsburg tradition — symbol of authority over East and West — with the three wavy bars of the Danubio branch, representing the three principal tributaries of the Danube within the Confederation's territory.
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "oklch(0.25 0.005 285)",
                }}
              >
                The Imperial Crown depicted above the shield in the arms is a heraldic representation of sovereignty. The Austrian Imperial title is inherited by dynastic right and has never required a coronation ceremony. The Federation Crown — commissioned by Emperor Franz Ferdinand I in 1920 and completed in 1923 — is the supreme symbol of Imperial authority, displayed at state occasions and accession proclamations, not placed upon the sovereign's head in a coronation rite. The sole coronation ceremony observed by the dynasty is the ancient rite of the Apostolic King of Hungary, performed in Budapest with the Holy Crown of Saint Stephen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Austrian Imperial Crown */}
      <section style={{ backgroundColor: CREAM, padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Crown image */}
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  maxWidth: "480px",
                  width: "100%",
                  background: "oklch(0.09 0.005 285)",
                  padding: "1.5rem",
                }}
              >
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
                    }}
                  />
                ))}
                <img
                  src="/manus-storage/crown_rudolf_ii_9057e44e.jpg"
                  alt="The Austrian Imperial Crown — Crown of Rudolf II, 1602"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "0.8rem",
                    color: GOLD,
                    textAlign: "center",
                    marginTop: "0.75rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  The Austrian Imperial Crown &nbsp;·&nbsp; Crown of Rudolf II, 1602 &nbsp;·&nbsp; Kunsthistorisches Museum, Vienna
                </p>
              </div>
            </div>

            {/* Crown text */}
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
                II &nbsp;·&nbsp; The Imperial Crown
              </div>
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  fontWeight: 600,
                  color: DARK,
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                The Crown of Rudolf II
              </h2>
              <div style={{ height: "1px", background: `linear-gradient(90deg, ${GOLD}, transparent)`, marginBottom: "1.5rem" }} />
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "oklch(0.25 0.005 285)",
                  marginBottom: "1.25rem",
                }}
              >
                The Austrian Imperial Crown — formally the Crown of Rudolf II — was crafted in Prague in 1602 by the goldsmith Jan Vermeyen for Emperor Rudolf II. It is the most significant object in the Habsburg treasury: a masterpiece of Mannerist goldsmithery set with rubies, sapphires, spinels, and pearls, surmounted by a great blue sapphire. It served as the private crown of the Holy Roman Emperors and, from 1804, as the crown of the Austrian Empire.
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "oklch(0.25 0.005 285)",
                  marginBottom: "1.25rem",
                }}
              >
                It is essential to understand that the Austrian Imperial title was <em>never</em> conferred by placing this crown upon the sovereign's head. The crown is a symbol of office, not a coronation instrument. The Austrian Emperor inherited his title by dynastic right of succession; no ceremony of crowning was required or performed. The Crown of Rudolf II was displayed at accession proclamations and state occasions, but the act of succession was complete from the moment of the predecessor's death.
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "oklch(0.25 0.005 285)",
                }}
              >
                The sole coronation ceremony of the dynasty was the rite of the Apostolic King of Hungary, performed in Budapest with the ancient Holy Crown of Saint Stephen. Today the Crown of Rudolf II is kept in the Imperial Treasury at the Hofburg, where it remains one of the most visited objects in the world. The Federation Crown, commissioned in 1920, serves as the ceremonial symbol of the Danubian Federation but follows the same tradition: it is displayed, not worn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heraldic colours */}
      <section style={{ backgroundColor: DARK, padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal text-center mb-12">
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
              II &nbsp;·&nbsp; The Colours
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
              Imperial Colours & Symbolism
            </h2>
          </div>

          <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Imperial Black",
                hex: "#0D0D0D",
                heraldic: "Sable",
                meaning: "Authority, permanence, and the night sky over the Danubian plains. The primary colour of the Imperial House, worn by the Emperor in formal mourning and by the Imperial Guard.",
              },
              {
                name: "Imperial Gold",
                hex: "#D4AF37",
                heraldic: "Or",
                meaning: "Sovereignty, excellence, and the golden light of the Danube at dawn. Used for the Imperial Crown, the Order of the Golden Eagle, and all official insignia.",
              },
              {
                name: "Danubian Blue",
                hex: "#1A3A6B",
                heraldic: "Azure",
                meaning: "The Danube river, loyalty, and the sky of the Confederation. Represented in the wavy bars of the Danubio quarter of the arms.",
              },
              {
                name: "Imperial Crimson",
                hex: "#8B1A1A",
                heraldic: "Gules",
                meaning: "Courage, sacrifice, and the blood of the dynasty. Used for the Imperial mantle, the Order's ribbon, and the velvet lining of the Crown.",
              },
            ].map((colour, i) => (
              <div
                key={i}
                style={{
                  border: `1px solid oklch(0.72 0.12 85 / 0.15)`,
                  overflow: "hidden",
                  transitionDelay: `${i * 0.1}s`,
                }}
                className="reveal"
              >
                <div
                  style={{
                    height: "100px",
                    backgroundColor: colour.hex,
                  }}
                />
                <div style={{ padding: "1.25rem", background: "oklch(0.12 0.005 285)" }}>
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: CREAM,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {colour.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "0.8rem",
                      color: GOLD,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {colour.heraldic} &nbsp;·&nbsp; {colour.hex}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontSize: "0.82rem",
                      lineHeight: 1.7,
                      color: "oklch(0.55 0.01 85)",
                    }}
                  >
                    {colour.meaning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motto */}
      <section style={{ backgroundColor: CREAM, padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                III &nbsp;·&nbsp; The Motto
              </div>
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  fontWeight: 600,
                  color: DARK,
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                Aquila et Flumen<br />in Aeternum
              </h2>
              <div
                style={{
                  height: "1px",
                  background: `linear-gradient(90deg, ${GOLD}, transparent)`,
                  marginBottom: "1.5rem",
                }}
              />
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "oklch(0.25 0.005 285)",
                  marginBottom: "1.25rem",
                }}
              >
                The motto of the Imperial House — <em>Aquila et Flumen in Aeternum</em>, "The Eagle and the River, Forever" — was composed by the court poet Heinrich von Schreiber at the request of Emperor Franz Ferdinand I and adopted at the founding of the Danubian Federation in 1917.
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "oklch(0.25 0.005 285)",
                }}
              >
                The eagle represents the ancient Habsburg heritage and the sovereign authority of the Imperial House; the river represents the Danube — the lifeblood of the Confederation, the source of its prosperity, and the bond that unites its peoples. Together, they express the dynasty's commitment to enduring governance rooted in both tradition and the natural world.
              </p>
            </div>
            <div className="reveal flex justify-center" style={{ transitionDelay: "0.2s" }}>
              <div
                style={{
                  border: `2px solid oklch(0.72 0.12 85 / 0.3)`,
                  padding: "3rem",
                  maxWidth: "400px",
                  textAlign: "center",
                  background: "oklch(0.99 0.008 85)",
                  position: "relative",
                }}
              >
                {/* Corner ornaments */}
                {[
                  { top: -1, left: -1 },
                  { top: -1, right: -1 },
                  { bottom: -1, left: -1 },
                  { bottom: -1, right: -1 },
                ].map((pos, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: "16px",
                      height: "16px",
                      borderTop: i < 2 ? `3px solid ${GOLD}` : "none",
                      borderBottom: i >= 2 ? `3px solid ${GOLD}` : "none",
                      borderLeft: i % 2 === 0 ? `3px solid ${GOLD}` : "none",
                      borderRight: i % 2 === 1 ? `3px solid ${GOLD}` : "none",
                      ...pos,
                    }}
                  />
                ))}
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.55rem",
                    letterSpacing: "0.3em",
                    color: "oklch(0.55 0.08 85)",
                    textTransform: "uppercase",
                    marginBottom: "1.5rem",
                  }}
                >
                  Imperial Motto
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "2rem",
                    color: DARK,
                    lineHeight: 1.3,
                    marginBottom: "1rem",
                  }}
                >
                  Aquila et Flumen<br />in Aeternum
                </div>
                <div
                  style={{
                    height: "1px",
                    background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
                    margin: "1rem 0",
                  }}
                />
                <div
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                    fontSize: "0.9rem",
                    color: "oklch(0.45 0.01 285)",
                    fontStyle: "italic",
                  }}
                >
                  "The Eagle and the River, Forever"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order of the Golden Eagle */}
      <section style={{ backgroundColor: DARK, padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal text-center mb-12">
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
              IV &nbsp;·&nbsp; The Order
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 600,
                color: CREAM,
                letterSpacing: "0.03em",
                marginBottom: "1rem",
              }}
            >
              The Order of the Golden Eagle
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1.1rem",
                color: "oklch(0.6 0.01 85)",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              The highest honour of the Imperial House, awarded for exceptional service to the Danubian Confederation and its peoples.
            </p>
          </div>

          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Insignia image */}
            <div className="flex flex-col gap-8">
              <div className="flex justify-center">
                <div style={{ position: "relative", maxWidth: "380px", width: "100%" }}>
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
                        width: "20px",
                        height: "20px",
                        borderTop: i < 2 ? `2px solid oklch(0.72 0.12 85)` : "none",
                        borderBottom: i >= 2 ? `2px solid oklch(0.72 0.12 85)` : "none",
                        borderLeft: i % 2 === 0 ? `2px solid oklch(0.72 0.12 85)` : "none",
                        borderRight: i % 2 === 1 ? `2px solid oklch(0.72 0.12 85)` : "none",
                        ...pos,
                      }}
                    />
                  ))}
                  <img
                    src="/manus-storage/order_golden_eagle_20f50972.jpg"
                    alt="Insignia of the Order of the Golden Eagle — pendant and star"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "0.8rem",
                      color: "oklch(0.45 0.01 85)",
                      textAlign: "center",
                      marginTop: "1rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Insignia of the Order of the Golden Eagle &nbsp;·&nbsp; Pendant &amp; Star
                  </p>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "oklch(0.75 0.01 85)",
                  marginBottom: "1.5rem",
                }}
              >
                Founded by Emperor Franz Ferdinand I on the 12th of June, 1917 — the day of the proclamation of the Danubian Federation — the Order of the Golden Eagle is the supreme order of chivalry of the Imperial House of Austria-Danubio. It is awarded exclusively by the Emperor, acting on his personal initiative, and is limited to twelve living members at any one time.
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "oklch(0.75 0.01 85)",
                  marginBottom: "1.5rem",
                }}
              >
                The Order's insignia consists of a golden eagle pendant of exceptional craftsmanship, suspended from a black and gold ribbon; a breast star of eight points in gold and silver; and a ceremonial mantle of black velvet lined with gold silk. The badge is worn on formal occasions and at all ceremonies of the Imperial Court.
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "oklch(0.75 0.01 85)",
                }}
              >
                The Order has been awarded 94 times since its founding. Recipients have included statesmen, scholars, military commanders, artists, and scientists who have made exceptional contributions to the welfare of the Danubian peoples or to the cause of European civilisation.
              </p>
            </div>

            <div>
              <div
                style={{
                  border: `1px solid oklch(0.72 0.12 85 / 0.2)`,
                  padding: "2rem",
                  background: "oklch(0.12 0.005 285)",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: GOLD,
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                  }}
                >
                  Statutes of the Order
                </div>
                {[
                  { label: "Founded", value: "12 June 1917" },
                  { label: "Founder", value: "Emperor Franz Ferdinand I" },
                  { label: "Membership", value: "Maximum 12 living members" },
                  { label: "Awarded by", value: "The Emperor, personally" },
                  { label: "Total awards", value: "94 (as of 2026)" },
                  { label: "Motto", value: "Pro Aquila et Flumen" },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.6rem 0",
                      borderBottom: i < 5 ? `1px solid oklch(0.72 0.12 85 / 0.1)` : "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        color: "oklch(0.55 0.01 85)",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "0.95rem",
                        color: CREAM,
                        fontStyle: "italic",
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  border: `1px solid oklch(0.72 0.12 85 / 0.2)`,
                  padding: "2rem",
                  background: "oklch(0.12 0.005 285)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: GOLD,
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                  }}
                >
                  Notable Recipients
                </div>
                {[
                  "Emperor Franz-Leopold III (1945)",
                  "Chancellor Heinrich Brandt (1962)",
                  "Composer Elena Vásárhelyi (1978)",
                  "President Marie-Claire Fontaine (2003)",
                  "Scientist Prof. Dr. Otto Schreiber (2015)",
                ].map((name, i) => (
                  <div
                    key={i}
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontSize: "0.9rem",
                      color: "oklch(0.65 0.01 85)",
                      padding: "0.4rem 0",
                      borderBottom: i < 4 ? `1px solid oklch(0.72 0.12 85 / 0.08)` : "none",
                      fontStyle: "italic",
                    }}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imperial Flag */}
      <section style={{ backgroundColor: CREAM, padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center" style={{ transitionDelay: "0.2s" }}>
              <div style={{ maxWidth: "480px", width: "100%", position: "relative" }}>
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
                      width: "22px",
                      height: "22px",
                      borderTop: i < 2 ? `2px solid ${GOLD}` : "none",
                      borderBottom: i >= 2 ? `2px solid ${GOLD}` : "none",
                      borderLeft: i % 2 === 0 ? `2px solid ${GOLD}` : "none",
                      borderRight: i % 2 === 1 ? `2px solid ${GOLD}` : "none",
                      ...pos,
                    }}
                  />
                ))}
                <img
                  src="/manus-storage/imperial_flag_1c4edb56.png"
                  alt="Imperial Flag of the Danubian Confederation"
                  style={{ width: "100%", height: "auto", display: "block", padding: "0.5rem" }}
                />
              </div>
            </div>
            <div className="reveal">
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
                V &nbsp;·&nbsp; The Imperial Flag
              </div>
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  fontWeight: 600,
                  color: DARK,
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                Flag of the<br />Danubian Confederation
              </h2>
              <div style={{ height: "1px", background: `linear-gradient(90deg, ${GOLD}, transparent)`, marginBottom: "1.5rem" }} />
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "oklch(0.25 0.005 285)",
                  marginBottom: "1.25rem",
                }}
              >
                The flag of the Danubian Confederation bears the Imperial colours of black and gold — Sable and Or — in two horizontal bands, echoing the ancient livery of the Habsburg dynasty. At its centre, the Imperial Crown of the Confederation is displayed above the combined arms of the member kingdoms, encircled by twelve golden stars representing the founding member states.
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "oklch(0.25 0.005 285)",
                }}
              >
                The flag was adopted by the Constitutional Assembly of Neustadt in 1917 and has remained unchanged since, a testament to the continuity and stability of the Imperial House. It is flown at all Imperial residences, embassies of the Confederation, and on all occasions of state.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Federation Crown */}
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
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
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
                VI &nbsp;·&nbsp; The Crown
              </div>
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  fontWeight: 600,
                  color: CREAM,
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                The Federation Crown
              </h2>
              <div style={{ height: "1px", background: `linear-gradient(90deg, ${GOLD}, transparent)`, marginBottom: "1.5rem" }} />
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "oklch(0.75 0.01 85)",
                  marginBottom: "1.25rem",
                }}
              >
                The Federation Crown is the supreme symbol of Imperial authority within the Danubian Confederation. It was commissioned by Emperor Franz Ferdinand I in 1920, following the reconstitution of the Danubian state, and required three years of painstaking work to complete, being presented to the Emperor in 1923. Crafted entirely in platinum by the Viennese atelier of Köchert & Söhne, it rises in fourteen towers — each one representing one of the fourteen constituent states of the Federation — set throughout with pearls, diamonds, rubies, sapphires, and emeralds of the first water. At its apex stands a cross of platinum surmounted by a cabochon ruby of exceptional size.
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "oklch(0.75 0.01 85)",
                  marginBottom: "1.5rem",
                }}
              >
                The Federation Crown was conceived as a symbol of the Confederation's unity, replacing the earlier tradition — observed throughout the nineteenth century — by which the dynasty's authority over the Hungarian kingdom was expressed through the coronation as Apostolic King of Hungary with the ancient Holy Crown of Saint Stephen in Budapest. The Austrian Imperial title itself has always been inherited by right of succession, never conferred by crowning. The Federation Crown is displayed at the Proclamation of a new Emperor from the Hofburg balcony, at state openings of the Imperial Diet, and at the Hungarian Coronation in Budapest. Between these occasions it is kept in the Imperial Treasury at the Hofburg, where it may be viewed by appointment through the Office of the Grand Chamberlain.
              </p>
              <div
                style={{
                  border: `1px solid oklch(0.72 0.12 85 / 0.2)`,
                  padding: "1.25rem 1.5rem",
                  background: "oklch(0.12 0.005 285)",
                }}
              >
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>Specifications</div>
                {[
                  ["Material", "Platinum, pearls, diamonds, rubies, sapphires, emeralds"],
                  ["Commissioned", "Emperor Franz Ferdinand I, 1920"],
                  ["Maker", "Köchert & Söhne, Vienna, 1920–1923"],
                  ["Towers", "Fifteen — one for each state of the Federation"],
                  ["Apex", "Platinum cross with cabochon ruby"],
                  ["Location", "Imperial Treasury, Hofburg, Neustadt"],
                ].map(([label, value], i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: i < 5 ? `1px solid oklch(0.72 0.12 85 / 0.1)` : "none" }}>
                    <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.1em", color: "oklch(0.55 0.01 85)", textTransform: "uppercase" }}>{label}</span>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: CREAM, fontStyle: "italic", textAlign: "right", maxWidth: "55%" }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal flex justify-center order-1 lg:order-2" style={{ transitionDelay: "0.2s" }}>
              <div style={{ maxWidth: "380px", width: "100%" }}>
                <img
                  src="/manus-storage/federation_crown_637dfa0a.jpg"
                  alt="The Federation Crown of the Danubian Confederation"
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: "2px" }}
                />
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "0.8rem", color: "oklch(0.45 0.01 85)", textAlign: "center", marginTop: "1rem" }}>
                  The Federation Crown &nbsp;·&nbsp; Imperial Treasury, Hofburg
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La Potence — Order of the Golden Fleece */}
      <section style={{ backgroundColor: CREAM, padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="flex justify-center">
              <div style={{ position: "relative", maxWidth: "460px", width: "100%" }}>
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
                    }}
                  />
                ))}
                <img
                  src="/manus-storage/la_potence_4044607f.jpg"
                  alt="La Potence — the collar of the Order of the Golden Fleece, displayed in its case"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "0.8rem",
                    color: "oklch(0.45 0.01 285)",
                    textAlign: "center",
                    marginTop: "1rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  La Potence &nbsp;·&nbsp; The Collar of the Order of the Golden Fleece &nbsp;·&nbsp; Imperial Treasury, Hofburg
                </p>
              </div>
            </div>

            {/* Text */}
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
                VII &nbsp;·&nbsp; The Ancient Order
              </div>
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  fontWeight: 600,
                  color: DARK,
                  lineHeight: 1.2,
                  marginBottom: "0.5rem",
                }}
              >
                La Potence
              </h2>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "1.1rem",
                  color: "oklch(0.55 0.08 85)",
                  marginBottom: "1.5rem",
                }}
              >
                Order of the Golden Fleece
              </div>
              <div style={{ height: "1px", background: `linear-gradient(90deg, ${GOLD}, transparent)`, marginBottom: "1.5rem" }} />
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "oklch(0.25 0.005 285)",
                  marginBottom: "1.25rem",
                }}
              >
                La Potence is the name given within the Imperial House to the collar of the Order of the Golden Fleece — the most ancient and most exalted order of chivalry in the possession of the Habsburg-Lorraine dynasty. Founded in 1430 by Philip the Good, Duke of Burgundy, the Order passed to the Habsburgs through the marriage of Maximilian I to Mary of Burgundy in 1477, and has remained the supreme personal honour of the dynasty ever since.
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "oklch(0.25 0.005 285)",
                  marginBottom: "1.25rem",
                }}
              >
                The collar — La Potence — is composed of alternating links of flint-and-steel and flaming tinder, wrought in gold, from which hangs the pendant of the Golden Fleece: a ram's fleece in enamelled gold, symbol of the ancient chivalric ideal of the quest for virtue and excellence. The collar is worn by the Sovereign and by knights of the Order at all great ceremonies of the Imperial Court and at the Chapter of the Order, convened by the Emperor.
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  color: "oklch(0.25 0.005 285)",
                  marginBottom: "1.5rem",
                }}
              >
                Membership of the Order is limited to the Sovereign and twenty-four knights, each appointed by the Emperor on his personal initiative. Membership is for life and cannot be resigned. The Order has no grades: all knights are equal before the Sovereign, and the collar is the sole insignia. La Potence is kept in the Imperial Treasury at the Hofburg and is brought forth only for the most solemn occasions of the dynasty.
              </p>

              {/* Statutes box */}
              <div
                style={{
                  border: `1px solid oklch(0.72 0.12 85 / 0.3)`,
                  padding: "1.5rem",
                  background: "oklch(0.99 0.008 85)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: "oklch(0.55 0.08 85)",
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                  }}
                >
                  Statutes of the Order
                </div>
                {[
                  ["Founded", "10 January 1430, Bruges"],
                  ["Founder", "Philip the Good, Duke of Burgundy"],
                  ["Passed to Habsburgs", "1477, by marriage"],
                  ["Membership", "Sovereign + 24 knights"],
                  ["Insignia", "La Potence — the golden collar"],
                  ["Motto", "Ante ferit quam flamma micet"],
                  ["Location", "Imperial Treasury, Hofburg, Neustadt"],
                ].map(([label, value], i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 0",
                      borderBottom: i < 6 ? `1px solid oklch(0.72 0.12 85 / 0.2)` : "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        color: "oklch(0.45 0.01 285)",
                        textTransform: "uppercase",
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "0.9rem",
                        color: DARK,
                        fontStyle: "italic",
                        textAlign: "right",
                        maxWidth: "55%",
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
