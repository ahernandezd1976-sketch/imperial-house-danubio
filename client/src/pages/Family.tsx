/*
 * Family Page — Imperial Modernism / Vienna Secession Reborn
 * Real characters: Emperor Maximilian I and the Imperial Household
 * Portrait: Official family photograph, Palais Danubio
 */
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GOLD = "oklch(0.72 0.12 85)";
const DARK = "oklch(0.09 0.005 285)";
const CREAM = "oklch(0.96 0.015 85)";

// Left to right in the official portrait
const familyMembers = [
  {
    name: "Archduke Charles",
    title: "Archduke of Austria-Danubio",
    age: 69,
    style: "His Imperial Highness",
    position: "far left",
    bio: "The Emperor's elder brother and a senior member of the Imperial House. Archduke Charles has served the Confederation with distinction across five decades of public life, including terms as President of the Imperial Council of State and as Special Envoy to the Danubian Principalities. He is regarded as one of the most respected elder statesmen of the dynasty.",
    initials: "CH",
    dress: "Military uniform",
  },
  {
    name: "Archduchess Ana",
    title: "Archduchess of Austria-Danubio",
    age: 65,
    style: "Her Imperial Highness",
    position: "second from left",
    bio: "The Emperor's younger sister. Archduchess Ana is a distinguished patron of the arts and a founding trustee of the Imperial Foundation for Cultural Heritage. Known for her warmth and accessibility, she has represented the Imperial House at cultural and humanitarian events across Europe for over three decades. She is depicted seated in the official portrait.",
    initials: "AN",
    dress: "Deep crimson gown",
    seated: true,
  },
  {
    name: "Crown Prince Leopold von Habsburg",
    title: "Crown Prince of Austria-Danubio, Archduke of Neustadt",
    age: 32,
    style: "His Imperial Highness",
    position: "third from left",
    bio: "The heir apparent to the Imperial Throne. Crown Prince Leopold holds degrees from New York University and the London School of Economics. A gifted polyglot, he speaks German, French, English, Spanish, Hungarian, Czech, and Croatian — a linguistic range that reflects the Confederation's multilingual heritage and his own deep commitment to the unity of its peoples. He chairs the Imperial Commission on European Affairs and is widely regarded as one of the most capable members of his generation.",
    initials: "LP",
    dress: "Full dress military uniform, blue",
    languages: ["German", "French", "English", "Spanish", "Hungarian", "Czech", "Croatian"],
  },
  {
    name: "Katharina von Richter",
    title: "Fiancée of the Crown Prince",
    age: 31,
    style: "Fräulein",
    position: "centre-left",
    bio: "Daughter of August von Richter, the foremost industrialist and financier in Europe. Katharina holds a degree in Corporate Management from the University of Vienna and has served as a director of the von Richter Group's philanthropic arm. She speaks German, English, French, Spanish, and Hungarian. Her engagement to Crown Prince Leopold was announced at the Imperial Court in the spring of 2026 and was greeted with widespread public enthusiasm.",
    initials: "KR",
    dress: "White bridal gown",
    father: "August von Richter",
    languages: ["German", "English", "French", "Spanish", "Hungarian"],
  },
  {
    name: "Emperor Maximilian I",
    title: "His Imperial Majesty the Emperor of Austria-Danubio",
    age: 72,
    style: "His Imperial and Royal Majesty",
    position: "centre",
    bio: "The reigning Emperor of Austria-Danubio, now in his nineteenth year on the throne. Emperor Maximilian I ascended following the death of his father and has presided over a period of constitutional consolidation, economic modernisation, and deepened European integration. His reign has been marked by personal courage in the face of profound tragedy: the late Empress Maria-Cristina perished in the fire at the Paris Ritz on the 10th of September, 2000, a loss that shook the Confederation and the wider world. His Majesty has since devoted himself entirely to his duties, and is universally respected for his dignity, his wisdom, and his tireless service to the Danubian peoples.",
    initials: "MX",
    dress: "Imperial coronation robes and regalia",
    isEmperor: true,
    reignYears: 19,
    widow: true,
    lateSpouse: "Empress Maria-Cristina",
    spouseDeath: "Paris Ritz fire, 10 September 2000",
  },
  {
    name: "Archduchess Eleonora",
    title: "Archduchess of Austria-Danubio",
    age: 29,
    style: "Her Imperial Highness",
    position: "centre-right",
    bio: "The Emperor's daughter and youngest child. Archduchess Eleonora studied international law at the University of Vienna and the Sorbonne. She serves as the Imperial Patron of the Danubian Youth Foundation and has been a prominent advocate for environmental protection of the Danube river system. Her poise and public presence have made her one of the most admired members of the younger generation of the Imperial House.",
    initials: "EL",
    dress: "Black gown",
  },
  {
    name: "Archduchess Alexis",
    title: "Archduchess of Austria-Danubio",
    age: 66,
    style: "Her Imperial Highness",
    position: "second from right",
    bio: "A senior member of the Imperial House and widow of the late Archduke Friedrich. Archduchess Alexis has served the Confederation as a diplomat, author, and philanthropist. She is the founder of the Imperial Society for the Preservation of Danubian Languages and a trustee of the Imperial Library. Her memoir, 'The River and the Crown' (2001), remains one of the most celebrated personal accounts of life within the Imperial House.",
    initials: "AL",
    dress: "Blue beaded gown",
    widow: true,
  },
  {
    name: "Archduke Reiner von Habsburg",
    title: "Marshall of the Crown, Archduke of Austria-Danubio",
    age: 31,
    style: "His Imperial Highness",
    position: "far right",
    bio: "Marshall of the Crown and one of the most senior officers of the Imperial Household. Archduke Reiner von Habsburg is responsible for the organisation of all Imperial ceremonies, state visits, and court protocol. A graduate of the Imperial Military Academy, he holds the rank of General in the Imperial Guard and has served on diplomatic missions to Central Europe and the Balkans. He is regarded as the indispensable organising force behind the ceremonial life of the Imperial Court.",
    initials: "RV",
    dress: "Full dress military uniform, gold epaulettes",
  },
];

export default function Family() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const emperor = familyMembers.find((m) => m.isEmperor)!;
  const others = familyMembers.filter((m) => !m.isEmperor);

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
            The <span style={{ color: GOLD }}>Imperial Family</span>
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
            The members of the Imperial House of Austria-Danubio, their titles, and their service to the Danubian Confederation.
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
              Official Photograph · Palais Danubio · 2026
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
              The Imperial Household
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
              src="/manus-storage/family_portrait_bdc5e5ff.png"
              alt="Official portrait of the Imperial House of Austria-Danubio, 2026"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                boxShadow: "0 24px 80px oklch(0.09 0.005 285 / 0.45)",
                imageRendering: "high-quality",
                filter: "contrast(1.04) brightness(1.02) saturate(1.05)",
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
                  {m.name.split(" ").slice(-1)[0]}
                  {i < familyMembers.length - 1 && (
                    <span style={{ color: GOLD, marginLeft: "1.5rem" }}>·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Name labels below portrait */}
                    <div className="reveal" style={{ maxWidth: "1100px", margin: "0.5rem auto 0",
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "0.25rem",
              textAlign: "center",
            }}
          >
            {familyMembers.map((m, i) => (
              <div key={i} style={{ padding: "0.5rem 0.25rem" }}>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.55rem",
                    letterSpacing: "0.1em",
                    color: m.isEmperor ? GOLD : "oklch(0.4 0.01 285)",
                    textTransform: "uppercase",
                    lineHeight: 1.4,
                  }}
                >
                  {m.name.replace("Archduke ", "").replace("Archduchess ", "").replace("Crown Prince ", "").replace("Emperor ", "")}
                </div>
              </div>
            ))}
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
                  The Sovereign
                </div>
                <h2
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: CREAM,
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
                  { label: "Age", value: `${emperor.age} years` },
                  { label: "Style", value: emperor.style },
                  { label: "Years on Throne", value: `${emperor.reignYears} years` },
                  { label: "Status", value: "Widower" },
                  { label: "Late Empress", value: emperor.lateSpouse },
                  { label: "Tragedy", value: emperor.spouseDeath },
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
                His Imperial and Royal Majesty
              </div>
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  color: CREAM,
                  lineHeight: 1.15,
                  marginBottom: "1.5rem",
                  letterSpacing: "0.03em",
                }}
              >
                Emperor<br />Maximilian I
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
                  In Memoriam
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
                  The late Empress Maria-Cristina, beloved consort of Emperor Maximilian I, perished in the fire at the Paris Ritz on the 10th of September, 2000. Her memory is honoured each year on that date by a solemn Mass at the Cathedral of Neustadt, attended by the Imperial Family and representatives of the Confederation's seven constituent states.
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
              Members of the House
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 600,
                color: DARK,
                letterSpacing: "0.03em",
              }}
            >
              The Imperial Household
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {others.map((member, i) => (
              <div
                key={i}
                className="reveal"
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
                    height: "140px",
                    background: "oklch(0.93 0.01 85)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: `1px solid oklch(0.72 0.12 85 / 0.15)`,
                  }}
                >
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
                </div>

                <div style={{ padding: "1.5rem" }}>
                  <h3
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: DARK,
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
                      fontSize: "0.88rem",
                      color: "oklch(0.55 0.08 85)",
                      marginBottom: "0.3rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {member.title}
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
                    Age {member.age}
                    {member.widow ? " · Widow" : ""}
                    {member.seated ? " · Seated in portrait" : ""}
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
                        Languages
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
                        Daughter of August von Richter, the foremost industrialist in Europe.
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
              Order of Succession
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
              Succession to the Imperial Throne
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
              Succession to the Imperial Throne of Austria-Danubio is governed by the ancient laws of the Imperial House. The current heir apparent is Crown Prince Leopold von Habsburg, Archduke of Neustadt, whose forthcoming marriage to Katharina von Richter is anticipated with great public interest throughout the Confederation.
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
                Current Line of Succession
              </div>
              {[
                "1st — Crown Prince Leopold von Habsburg, Archduke of Neustadt",
                "2nd — Archduke Reiner von Habsburg, Marshall of the Crown",
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
              Official Engagement Portrait · 2026
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
              Die Verlobung — The Betrothal
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
              Crown Prince Leopold von Habsburg and Fräulein Katharina von Richter, as depicted in the official engagement portrait commissioned by the Imperial House, 2026.
            </p>
          </div>

          <div className="reveal" style={{ position: "relative", maxWidth: "640px", margin: "0 auto" }}>
            {[
              { top: -12, left: -12 },
              { top: -12, right: -12 },
              { bottom: -12, left: -12 },
              { bottom: -12, right: -12 },
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
              src="/manus-storage/engagement_portrait_ee45904b.png"
              alt="Official engagement portrait of Crown Prince Leopold and Katharina von Richter"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                boxShadow: "0 20px 60px oklch(0.09 0.005 285 / 0.2)",
              }}
            />
            <div
              style={{
                background: DARK,
                padding: "0.85rem 1.5rem",
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.15em", color: "oklch(0.55 0.01 85)", textTransform: "uppercase" }}>Crown Prince Leopold von Habsburg</span>
              <span style={{ color: GOLD, fontFamily: "'Cinzel', serif", fontSize: "0.55rem" }}>·</span>
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.15em", color: "oklch(0.55 0.01 85)", textTransform: "uppercase" }}>Katharina von Richter</span>
            </div>
          </div>

          <div className="reveal" style={{ maxWidth: "640px", margin: "2rem auto 0", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "0.95rem",
                lineHeight: 1.9,
                color: "oklch(0.3 0.005 285)",
              }}
            >
              The engagement of Crown Prince Leopold von Habsburg and Fräulein Katharina von Richter was officially announced by the Imperial Chancery on the 15th of March, 2026. The portrait, painted in the manner of the Vienna Secession and bearing the inscription <em>Die Verlobung MMXXVI</em>, was unveiled at a private ceremony at the Hofburg attended by the Emperor and members of the Imperial Household.
            </p>
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
              Dynastic Genealogy
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
              Habsburg Family Tree
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
              From Franz Joseph I to the present day — the dynastic lineage of the Imperial House of Austria-Danubio.
            </p>
          </div>
          <div className="reveal" style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <img
              src="/manus-storage/family_tree_58abbdc1.webp"
              alt="Habsburg Family Tree from Franz Joseph I to Emperor Maximilian I"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                border: `1px solid oklch(0.72 0.12 85 / 0.15)`,
              }}
            />
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "0.8rem", color: "oklch(0.4 0.01 85)", textAlign: "center", marginTop: "1rem" }}>
              Dynastic genealogy of the Imperial House · From Franz Joseph I to Emperor Maximilian I
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
