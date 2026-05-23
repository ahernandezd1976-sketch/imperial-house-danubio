/*
 * Traditions Page — Imperial Modernism / Vienna Secession Reborn
 * Imperial ceremonies, customs, and cultural traditions
 */
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GOLD = "oklch(0.72 0.12 85)";
const DARK = "oklch(0.09 0.005 285)";
const CREAM = "oklch(0.96 0.015 85)";

const traditions = [
  {
    numeral: "I",
    title: "The Proclamation of the Emperor",
    subtitle: "Accession by Dynastic Right",
    description: "The title of Emperor of Austria-Danubio has never been conferred by coronation. By the constitutional tradition of the Imperial House, the sovereign accedes to the Imperial dignity by right of birth and dynastic succession — the moment the previous Emperor dies or abdicates, his heir is Emperor by the very fact of succession, without any ceremony of crowning. This principle, rooted in the ancient Pragmatic Sanction of 1713, distinguishes the Austrian Imperial dignity from other European monarchies. The accession is proclaimed publicly from the balcony of the Hofburg by the Grand Chamberlain, who announces the new sovereign's full style and titles to the assembled court and people. The Federation Crown — commissioned by Emperor Franz Ferdinand I in 1920, completed in 1923, crafted in platinum and set with pearls, diamonds, rubies, sapphires and emeralds, its fifteen towers representing the fifteen states of the Confederation — is a symbol of dynastic continuity displayed at state occasions, not an instrument of coronation. The sole coronation rite observed by the dynasty is the separate and ancient ceremony of the Coronation as Apostolic King of Hungary, performed in Budapest with the Holy Crown of Saint Stephen, the sacred regalia of the Hungarian kingdom.",
    detail: "The Proclamation is made from the Hofburg within 24 hours of accession. The Hungarian Coronation in Budapest follows within the first year of the new reign, in accordance with the constitutional laws of the Hungarian Crown.",
  },
  {
    numeral: "II",
    title: "The Feast of the Eagle",
    subtitle: "Annual Imperial Celebration",
    description: "Held each year on the 17th of October — the anniversary of the Treaty of Vienna and the founding of the Danubian Federation — the Feast of the Eagle is the principal public celebration of the Imperial House. The day begins with a solemn Mass at the Cathedral, followed by a military parade along the Kaiserstrasse. In the afternoon, the Emperor and Empress receive representatives of all seven constituent states of the Confederation in the Grand Hall of the Hofburg Imperial Palace. The evening concludes with a state banquet and a fireworks display over the Danube, a tradition begun by Emperor Franz Ferdinand I in 1918.",
    detail: "Public holiday throughout the Danubian Confederation. The Feast has been celebrated without interruption since 1917, even during the years of the Second World War.",
  },
  {
    numeral: "III",
    title: "The Investiture of the Order of the Golden Eagle",
    subtitle: "The Highest Imperial Honour",
    description: "The Order of the Golden Eagle, founded by Emperor Franz Ferdinand I in 1917 upon the proclamation of the Danubian Federation, is the highest honour the Emperor may bestow. The investiture ceremony is held in the Throne Room of the Hofburg Imperial Palace on the Feast of the Eagle. Recipients — never more than twelve living members at any time — are invested with the Order's insignia: a golden eagle pendant suspended from a black and gold ribbon, a star of eight points, and a ceremonial mantle of black velvet lined with gold silk. The ceremony includes the reading of the recipient's citation, the Emperor's personal investiture, and a formal oath of loyalty to the Confederation.",
    detail: "The Order has been awarded 94 times since its founding. Current living members include three heads of state, two Nobel laureates, and one reigning monarch.",
  },
  {
    numeral: "IV",
    title: "The Blessing of the Danube",
    subtitle: "Rite of the River",
    description: "On the first Sunday of each April, the Emperor and the Patriarch of Neustadt lead a procession to the banks of the Danube for the ancient Blessing of the River. The ceremony, which predates the founding of the Imperial House and is believed to derive from a pre-Christian Danubian rite, involves the casting of a golden wreath into the river and the recitation of prayers for the safety of all who live and work along its banks. The tradition was nearly abandoned during the constitutional reforms of 1918 but was preserved at the personal insistence of Emperor Franz-Josef II, who regarded it as an expression of the Confederation's unity with its natural heritage.",
    detail: "The ceremony is open to the public. Attendance typically exceeds 50,000 along the riverside.",
  },
  {
    numeral: "V",
    title: "The Imperial Hunt",
    subtitle: "Tradition of the Autumn Court",
    description: "Each October, the Imperial Court retires to the Hunting Lodge of Schwarzenwald in the Eastern Marches for the Imperial Hunt — a tradition established by Emperor Karl-Josef I and continued by every subsequent sovereign. The Hunt lasts three days and is attended by members of the Imperial Family, senior ministers of state, and invited guests from the diplomatic corps. The occasion combines ceremonial hunting with formal dinners, musical performances, and private diplomatic conversations. The Hunt is regarded as one of the most important informal diplomatic events in the Danubian calendar.",
    detail: "The Hunting Lodge was built in 1893 and is a protected monument of the Danubian Confederation.",
  },
  {
    numeral: "VI",
    title: "The New Year's Concert",
    subtitle: "A Gift to the Confederation",
    description: "On the first day of each year, the Neustadt Philharmonic performs the Imperial New Year's Concert in the Grand Hall of the Hofburg Imperial Palace, broadcast live to the entire Danubian Confederation and to audiences in over forty countries. The concert, established in 1923, always concludes with the performance of the Danubian Hymn and the Emperor's New Year's address to the nation. The programme traditionally includes works by Danubian composers alongside the great masters of the European tradition.",
    detail: "The concert has been broadcast internationally since 1955. Tickets for the live performance are allocated by public lottery.",
  },
];

export default function Traditions() {
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
            Imperial <span style={{ color: GOLD }}>Traditions</span>
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
            The ceremonies, customs, and rites that have defined the Imperial House of Austria-Danubio across generations.
          </p>
        </div>
      </section>

      {/* Traditions list */}
      {traditions.map((t, i) => (
        <section
          key={i}
          style={{
            backgroundColor: i % 2 === 0 ? CREAM : DARK,
            padding: "5rem 0",
          }}
        >
          <div className="container">
            <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Numeral column */}
              <div className="lg:col-span-2 flex flex-col items-start">
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "4rem",
                    fontWeight: 700,
                    color: i % 2 === 0 ? "oklch(0.72 0.12 85 / 0.15)" : "oklch(0.72 0.12 85 / 0.12)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {t.numeral}
                </div>
                <div
                  style={{
                    width: "2px",
                    height: "60px",
                    background: `linear-gradient(to bottom, ${GOLD}, transparent)`,
                    marginTop: "0.5rem",
                  }}
                />
              </div>

              {/* Content */}
              <div className="lg:col-span-10">
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.25em",
                    color: GOLD,
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                    opacity: 0.8,
                  }}
                >
                  {t.subtitle}
                </div>
                <h2
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    fontWeight: 600,
                    color: i % 2 === 0 ? DARK : CREAM,
                    lineHeight: 1.2,
                    marginBottom: "1.5rem",
                    letterSpacing: "0.03em",
                  }}
                >
                  {t.title}
                </h2>
                <p
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                    fontSize: "1.05rem",
                    lineHeight: 1.9,
                    color: i % 2 === 0 ? "oklch(0.25 0.005 285)" : "oklch(0.75 0.01 85)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {t.description}
                </p>
                <div
                  style={{
                    padding: "1rem 1.25rem",
                    borderLeft: `3px solid ${GOLD}`,
                    background: i % 2 === 0 ? "oklch(0.72 0.12 85 / 0.08)" : "oklch(0.72 0.12 85 / 0.05)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "0.95rem",
                      color: i % 2 === 0 ? "oklch(0.45 0.01 285)" : "oklch(0.65 0.01 85)",
                      lineHeight: 1.7,
                    }}
                  >
                    {t.detail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Ceremonial calendar */}
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
              Annual Calendar
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
              The Imperial Ceremonial Year
            </h2>
          </div>

          <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { month: "January", event: "New Year's Concert", icon: "♩" },
              { month: "April", event: "Blessing of the Danube", icon: "〰" },
              { month: "June", event: "Feast of the Eagle", icon: "✦" },
              { month: "September", event: "Imperial Investiture", icon: "◈" },
              { month: "October", event: "The Imperial Hunt", icon: "⊕" },
              { month: "November", event: "Day of Remembrance", icon: "✝" },
              { month: "December", event: "Imperial Christmas Mass", icon: "✶" },
              { month: "As Required", event: "Rite of Coronation", icon: "♛" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  border: `1px solid oklch(0.72 0.12 85 / 0.15)`,
                  padding: "1.5rem",
                  background: "oklch(0.12 0.005 285)",
                  transitionDelay: `${i * 0.08}s`,
                }}
                className="reveal"
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    color: GOLD,
                    marginBottom: "0.75rem",
                    opacity: 0.7,
                  }}
                >
                  {item.icon}
                </div>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: GOLD,
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                    opacity: 0.7,
                  }}
                >
                  {item.month}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: CREAM,
                  }}
                >
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
