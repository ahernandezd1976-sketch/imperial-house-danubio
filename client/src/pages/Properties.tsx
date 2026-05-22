/*
 * Imperial Properties Page — Imperial Modernism / Vienna Secession Reborn
 * Design: jet-black / warm cream alternating sections, 24k gold accents
 * Typography: Cinzel headings, Cormorant Garamond italic, Source Serif 4 body
 * Layout: asymmetric card grid with full-bleed property hero images
 */
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
    name: "Hofburg Palace",
    subtitle: "Imperial Winter Residence",
    location: "Vienna, Austria",
    flag: "🇦🇹",
    era: "13th century — present",
    description:
      "The Hofburg is the historic heart of the Imperial House — a vast complex of palaces, chapels, and state apartments that has served as the winter residence of the dynasty since the thirteenth century. Its Baroque and Neoclassical wings house the Imperial Apartments, the Sisi Museum, and the Imperial Silver Collection. The Hofburg remains the official seat of the Imperial Chancellery.",
    visitNote: "Open to the public on the first and third Saturday of each month, 10:00–16:00.",
    image: "/manus-storage/hofburg_5d7a6dae.webp",
    tag: "Primary Residence",
    tagColor: GOLD,
  },
  {
    id: "schonbrunn",
    name: "Schönbrunn Palace",
    subtitle: "Imperial Summer Residence",
    location: "Vienna, Austria",
    flag: "🇦🇹",
    era: "1696 — present",
    description:
      "Schönbrunn is the grandest of the Imperial summer residences, its 1,441 rooms and sweeping formal gardens stretching across the western suburbs of Vienna. Commissioned in the late seventeenth century, it served as the preferred summer court of the dynasty for over three centuries. The Great Gallery, the Millions Room, and the Gloriette pavilion remain among the finest examples of Imperial Baroque in Central Europe.",
    visitNote: "Open to the public on the second and fourth Sunday of each month, 09:00–15:00.",
    image: "/manus-storage/schonbrunn_df205bcc.png",
    tag: "Summer Residence",
    tagColor: "oklch(0.55 0.08 85)",
  },
  {
    id: "belvedere",
    name: "Belvedere Palace",
    subtitle: "Imperial Garden Palace",
    location: "Vienna, Austria",
    flag: "🇦🇹",
    era: "1714 — present",
    description:
      "The Upper and Lower Belvedere form one of the finest Baroque palace complexes in Europe, set within magnificent formal gardens descending in terraces from the Upper Palace to the Orangery. Originally built for Prince Eugene of Savoy, the Belvedere passed to the Imperial House in 1752. Its state rooms are used for official receptions and diplomatic functions of the highest order.",
    visitNote: "Open to the public on the first Sunday of each month, 10:00–14:00.",
    image: "/manus-storage/belvedere_7304965c.png",
    tag: "Garden Palace",
    tagColor: "oklch(0.45 0.07 150)",
  },
  {
    id: "laxenburg",
    name: "Laxenburg Palace",
    subtitle: "Imperial Country Retreat",
    location: "Laxenburg, Lower Austria",
    flag: "🇦🇹",
    era: "14th century — present",
    description:
      "Set within an English landscape park of over 250 hectares, the Laxenburg complex comprises the Blue Court, the Franzensburg — a romantic neo-Gothic castle on an island in the palace lake — and the Old Palace. For centuries the preferred spring retreat of the Imperial family, Laxenburg retains an atmosphere of quiet, pastoral grandeur far removed from the ceremonial weight of the Vienna residences.",
    visitNote: "Open to the public on the second Saturday of each month, 10:00–15:00.",
    image: "/manus-storage/laxenburg_palace_736e60bb.png",
    tag: "Country Retreat",
    tagColor: "oklch(0.45 0.07 150)",
  },
  {
    id: "budapest",
    name: "Royal Palace of Budapest",
    subtitle: "Crown of the Hungarian Kingdom",
    location: "Budapest, Hungary",
    flag: "🇭🇺",
    era: "14th century — present",
    description:
      "Crowning the Castle Hill above the Danube, the Royal Palace of Budapest is the historic seat of the Hungarian Crown within the Danubian Confederation. Its Neo-Baroque façade, rebuilt after the devastation of the Second World War, overlooks the Chain Bridge and the Parliament across the river. The throne room and the Hungarian state apartments are among the most splendid interiors in Central Europe.",
    visitNote: "Open to the public on the third Saturday of each month, 10:00–15:00.",
    image: "/manus-storage/budapest_castle_a9b51aa6.webp",
    tag: "Royal Palace",
    tagColor: "oklch(0.5 0.15 30)",
  },
  {
    id: "prague",
    name: "Prague Castle",
    subtitle: "Seat of the Bohemian Crown",
    location: "Prague, Czech Republic",
    flag: "🇨🇿",
    era: "9th century — present",
    description:
      "Prague Castle — Pražský hrad — is the largest ancient castle complex in the world, encompassing palaces, churches, gardens, and galleries spread across a hilltop above the Vltava. The Imperial apartments within the Old Royal Palace and the Spanish Hall served as the Bohemian seat of the dynasty for centuries. The Cathedral of St. Vitus, containing the Bohemian Crown Jewels, stands at its heart.",
    visitNote: "Open to the public on the first and third Sunday of each month, 09:00–14:00.",
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=1200&q=85",
    tag: "Bohemian Seat",
    tagColor: "oklch(0.4 0.1 260)",
  },
  {
    id: "miramare",
    name: "Miramare Castle",
    subtitle: "Adriatic Imperial Villa",
    location: "Trieste, Italy",
    flag: "🇮🇹",
    era: "1856 — present",
    description:
      "Perched on a rocky promontory above the Gulf of Trieste, Miramare Castle was built between 1856 and 1860 for Archduke Maximilian of Austria. Its white Neo-Gothic towers rise directly from the Adriatic Sea, surrounded by a park of exotic trees and formal gardens. The castle's interiors — preserved almost entirely in their original state — evoke the romantic sensibility of the mid-nineteenth century Imperial court.",
    visitNote: "Open to the public on the second Saturday of each month, 10:00–16:00.",
    image: "/manus-storage/miramare_castle_756fbc7c.png",
    tag: "Adriatic Villa",
    tagColor: "oklch(0.45 0.1 220)",
  },
  {
    id: "hermes",
    name: "Hermes Villa",
    subtitle: "Imperial Hunting Lodge",
    location: "Vienna, Austria",
    flag: "🇦🇹",
    era: "1886 — present",
    description:
      "Built by Emperor Franz Joseph I as a personal retreat for the Empress Elisabeth within the Lainzer Tiergarten nature reserve, the Hermes Villa is a Historicist jewel of intimate scale. Its rooms, decorated by Hans Makart and Gustav Klimt, reflect the refined private taste of the Imperial couple. Surrounded by ancient woodland, the villa remains one of the most atmospheric of the Imperial residences.",
    visitNote: "Open to the public on the fourth Saturday of each month, 10:00–14:00.",
    image: "/manus-storage/hermes_villa_7f607740.png",
    tag: "Hunting Lodge",
    tagColor: "oklch(0.45 0.07 150)",
  },
];

export default function Properties() {
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
            The Imperial Estate &nbsp;·&nbsp; Eight Residences
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
            Imperial Properties
            <br />
            <span style={{ color: GOLD }}>& Royal Residences</span>
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
            From the Adriatic shores to the Bohemian highlands, the Imperial House maintains eight historic residences across the Danubian Confederation — each a monument to the dynasty's centuries of stewardship.
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
            ✦ &nbsp; All residences admit visitors on designated days each month &nbsp;·&nbsp; Advance reservation mandatory &nbsp;·&nbsp; Address all enquiries to the Grand Chamberlain &nbsp; ✦
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
                I &nbsp;·&nbsp; Visiting the Imperial Residences
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
                How to Request<br />a Visit
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
                Each Imperial residence opens its doors to the public on designated days each calendar month. Visits are conducted in small groups under the guidance of a member of the Imperial Household staff, ensuring the preservation of these irreplaceable interiors.
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
                All reservations must be made in advance by written application addressed to the <strong>Grand Chamberlain of the Imperial Household</strong>. Requests should include the applicant's full name, nationality, the desired residence, and the preferred visiting date. Applications are reviewed on a rolling basis and confirmations are issued by the Office of the Grand Chamberlain within fifteen working days.
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
                  Office of the Grand Chamberlain
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
                  Hofburg Imperial Chancellery, Wing III<br />
                  Michaelerplatz 1, Neustadt, Danubian Confederation
                </p>
                <p
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                    fontSize: "0.9rem",
                    color: "oklch(0.4 0.005 285)",
                    lineHeight: 1.7,
                  }}
                >
                  Written applications only. No telephone enquiries accepted.<br />
                  Response time: 15 working days.<br />
                  Groups of no more than 12 persons per visit.
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
                II &nbsp;·&nbsp; Monthly Visit Schedule
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
                Open Days at a Glance
              </h2>
              <SectionDivider />
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      {["Residence", "Open Day", "Hours"].map((h) => (
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
                      ["Hofburg", "1st & 3rd Saturday", "10:00–16:00"],
                      ["Schönbrunn", "2nd & 4th Sunday", "09:00–15:00"],
                      ["Belvedere", "1st Sunday", "10:00–14:00"],
                      ["Laxenburg", "2nd Saturday", "10:00–15:00"],
                      ["Budapest Royal Palace", "3rd Saturday", "10:00–15:00"],
                      ["Prague Castle", "1st & 3rd Sunday", "09:00–14:00"],
                      ["Miramare Castle", "2nd Saturday", "10:00–16:00"],
                      ["Hermes Villa", "4th Saturday", "10:00–14:00"],
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
              III &nbsp;·&nbsp; The Eight Residences
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
              The Imperial Estate
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
                <div style={{ position: "relative", height: activeProperty === prop.id ? "420px" : "240px", overflow: "hidden", transition: "height 0.5s cubic-bezier(0.23,1,0.32,1)" }}>
                  <img
                    src={prop.image}
                    alt={prop.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
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
                    {prop.tag}
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
                      {prop.flag} &nbsp;{prop.location}
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
                      {prop.name}
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
                    {prop.subtitle} &nbsp;·&nbsp; {prop.era}
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
                    {prop.description}
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
                      {prop.visitNote} Reservation mandatory — address enquiries to the Grand Chamberlain.
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
              IV &nbsp;·&nbsp; Plan Your Visit
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
              Request a Reservation
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
              Written applications for visits to any Imperial residence should be directed to the Office of the Grand Chamberlain at the Hofburg Imperial Chancellery. Please include your full name, nationality, the residence you wish to visit, and your preferred date. Confirmations are issued within fifteen working days. Groups are limited to twelve persons per visit.
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
                  Grand Chamberlain's Office
                </strong>
                <br />
                Hofburg Imperial Chancellery, Wing III<br />
                Michaelerplatz 1, Neustadt<br />
                Danubian Confederation
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
