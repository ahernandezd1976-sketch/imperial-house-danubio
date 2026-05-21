/*
 * Family Page — Imperial Modernism / Vienna Secession Reborn
 * Imperial family members with portrait cards and biographies
 */
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GOLD = "oklch(0.72 0.12 85)";
const DARK = "oklch(0.09 0.005 285)";
const CREAM = "oklch(0.96 0.015 85)";

const familyMembers = [
  {
    name: "Karl-Heinrich II",
    title: "His Imperial Majesty the Emperor",
    born: "14 March 1961, Neustadt",
    style: "His Imperial and Royal Majesty",
    bio: "The reigning Emperor of Austria-Danubio since 1998. A graduate of the Imperial Military Academy and the University of Vienna, His Majesty has devoted his reign to constitutional modernisation, European diplomacy, and the patronage of the arts and sciences. He is Knight Grand Cross of the Order of the Golden Eagle and holds honorary doctorates from seven universities.",
    image: "/manus-storage/emperor_portrait_4ad8ffe0.png",
    isEmperor: true,
  },
  {
    name: "Maria-Elena",
    title: "Her Imperial Majesty the Empress",
    born: "22 September 1963, Vienna",
    style: "Her Imperial and Royal Majesty",
    bio: "Born Princess Maria-Elena of Württemberg-Danube, she married the then-Archduke Karl-Heinrich in 1987. The Empress is a distinguished art historian and the founder of the Imperial Foundation for Cultural Heritage, which has restored over two hundred historic monuments across the Confederation.",
    image: null,
    initials: "ME",
  },
  {
    name: "Leopold-Franz",
    title: "Archduke of Neustadt, Crown Prince",
    born: "3 July 1988, Neustadt",
    style: "His Imperial Highness",
    bio: "The Crown Prince and heir apparent. Educated at the Imperial Military Academy, Oxford University, and the London School of Economics. He serves as the Emperor's representative at international diplomatic forums and chairs the Imperial Commission on Environmental Stewardship of the Danube.",
    image: null,
    initials: "LF",
  },
  {
    name: "Theresa-Maria",
    title: "Archduchess of Danubio",
    born: "17 November 1990, Neustadt",
    style: "Her Imperial Highness",
    bio: "The Emperor's second child. A physician by training, Archduchess Theresa-Maria serves as President of the Imperial Red Cross of Danubio and has led humanitarian missions to Central Asia and the Balkans. She is also a published author of two books on the history of Danubian medicine.",
    image: null,
    initials: "TM",
  },
  {
    name: "Karl-Josef",
    title: "Archduke, Duke of the Eastern Marches",
    born: "5 April 1993, Neustadt",
    style: "His Imperial Highness",
    bio: "The Emperor's youngest child. An accomplished musician and composer, Archduke Karl-Josef studied at the Vienna Conservatory and the Paris Conservatoire. He serves as the Imperial Patron of the Neustadt Philharmonic and the Danubian Festival of Music.",
    image: null,
    initials: "KJ",
  },
  {
    name: "Maria-Sophia",
    title: "Archduchess, Princess of the Danubian Marches",
    born: "12 February 1935, Neustadt",
    style: "Her Imperial Highness",
    bio: "The Emperor's aunt and the eldest living member of the Imperial House. A former diplomat who served as the Confederation's Ambassador to France and the United Nations, Archduchess Maria-Sophia is the author of the celebrated memoir 'The River and the Crown' (1998).",
    image: null,
    initials: "MS",
  },
];

export default function Family() {
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

      {/* Emperor feature */}
      <section style={{ backgroundColor: CREAM, padding: "5rem 0" }}>
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
                The Sovereign
              </div>
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 600,
                  color: DARK,
                  lineHeight: 1.2,
                  marginBottom: "0.5rem",
                }}
              >
                Karl-Heinrich II
              </h2>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "1.1rem",
                  color: "oklch(0.55 0.08 85)",
                  marginBottom: "0.5rem",
                }}
              >
                His Imperial and Royal Majesty the Emperor
              </div>
              <div
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "0.85rem",
                  color: "oklch(0.5 0.01 285)",
                  marginBottom: "1.5rem",
                  letterSpacing: "0.05em",
                }}
              >
                Born: 14 March 1961, Neustadt &nbsp;·&nbsp; Reigning since: 7 September 1998
              </div>
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
                }}
              >
                {familyMembers[0].bio}
              </p>
            </div>
            <div className="flex justify-center" style={{ transitionDelay: "0.2s" }}>
              <div style={{ maxWidth: "360px", width: "100%", position: "relative" }}>
                {[
                  { top: -8, left: -8 },
                  { top: -8, right: -8 },
                  { bottom: -8, left: -8 },
                  { bottom: -8, right: -8 },
                ].map((pos, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: "20px",
                      height: "20px",
                      borderTop: i < 2 ? `2px solid ${GOLD}` : "none",
                      borderBottom: i >= 2 ? `2px solid ${GOLD}` : "none",
                      borderLeft: i % 2 === 0 ? `2px solid ${GOLD}` : "none",
                      borderRight: i % 2 === 1 ? `2px solid ${GOLD}` : "none",
                      ...pos,
                    }}
                  />
                ))}
                <img
                  src="/manus-storage/emperor_portrait_4ad8ffe0.png"
                  alt="Emperor Karl-Heinrich II"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other family members */}
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
              Members of the House
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
              The Imperial Household
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {familyMembers.slice(1).map((member, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  border: `1px solid oklch(0.72 0.12 85 / 0.15)`,
                  background: "oklch(0.12 0.005 285)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Gold top accent */}
                <div style={{ height: "2px", background: GOLD }} />

                {/* Avatar placeholder */}
                <div
                  style={{
                    height: "180px",
                    background: "oklch(0.15 0.005 285)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: `1px solid oklch(0.72 0.12 85 / 0.1)`,
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      border: `2px solid oklch(0.72 0.12 85 / 0.4)`,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "1.5rem",
                      color: GOLD,
                      opacity: 0.7,
                    }}
                  >
                    {member.initials}
                  </div>
                </div>

                <div style={{ padding: "1.5rem" }}>
                  <h3
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: CREAM,
                      marginBottom: "0.35rem",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {member.name}
                  </h3>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "0.9rem",
                      color: GOLD,
                      marginBottom: "0.35rem",
                    }}
                  >
                    {member.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontSize: "0.75rem",
                      color: "oklch(0.5 0.01 85)",
                      marginBottom: "1rem",
                      letterSpacing: "0.03em",
                    }}
                  >
                    b. {member.born}
                  </div>
                  <div
                    style={{
                      height: "1px",
                      background: `linear-gradient(90deg, oklch(0.72 0.12 85 / 0.3), transparent)`,
                      marginBottom: "1rem",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontSize: "0.88rem",
                      lineHeight: 1.8,
                      color: "oklch(0.6 0.01 85)",
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Succession note */}
      <section style={{ backgroundColor: CREAM, padding: "5rem 0" }}>
        <div className="container">
          <div className="reveal max-w-3xl mx-auto text-center">
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
              Order of Succession
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 600,
                color: DARK,
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
                color: "oklch(0.3 0.005 285)",
                marginBottom: "1.5rem",
              }}
            >
              The succession to the Imperial Throne of Austria-Danubio is governed by the Imperial House Law of 1918, as amended in 1998. Succession follows the principle of absolute primogeniture — the eldest child of the reigning Emperor, regardless of sex, is first in line. The current heir apparent is Crown Prince Leopold-Franz, Archduke of Neustadt.
            </p>
            <div
              style={{
                display: "inline-block",
                border: `1px solid oklch(0.72 0.12 85 / 0.4)`,
                padding: "1.25rem 2rem",
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
                Current Line of Succession
              </div>
              {[
                "1st — Crown Prince Leopold-Franz, Archduke of Neustadt",
                "2nd — Archduchess Theresa-Maria of Danubio",
                "3rd — Archduke Karl-Josef, Duke of the Eastern Marches",
              ].map((line, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.95rem",
                    color: DARK,
                    padding: "0.35rem 0",
                    borderBottom: i < 2 ? `1px solid oklch(0.72 0.12 85 / 0.2)` : "none",
                  }}
                >
                  {line}
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
