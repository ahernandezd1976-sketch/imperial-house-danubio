/*
 * History Page — Imperial Modernism / Vienna Secession Reborn
 * Full dynastic history with timeline, eras, and key events
 */
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GOLD = "oklch(0.72 0.12 85)";
const DARK = "oklch(0.09 0.005 285)";
const CREAM = "oklch(0.96 0.015 85)";

const eras = [
  {
    numeral: "I",
    period: "1867 – 1890",
    title: "The Founding Era",
    emperor: "Leopold-Karl I",
    subtitle: "The Eagle Takes Flight",
    paragraphs: [
      "The Imperial House of Austria-Danubio was formally constituted on the 12th of June, 1867, with the signing of the Treaty of Neustadt. This landmark accord united the ancient Habsburg-Lorraine line with the noble House of Danubio through the marriage of Archduke Leopold-Karl and Princess Maria Theresa, daughter of the last reigning Duke of the Danubian Marches.",
      "Leopold-Karl I, the first Emperor of Austria-Danubio, proved himself a statesman of exceptional vision. He oversaw the drafting of the Danubian Confederation Charter, which federated seven distinct principalities under a single imperial crown while preserving the autonomy of each constituent state. His reign also saw the construction of the Palais Danubio, the Imperial Opera House, and the founding of the University of Neustadt.",
      "The Founding Era was defined by rapid industrialisation along the Danube corridor, the establishment of the Imperial Railway Network, and the flourishing of a distinctly Danubian cultural identity — one that blended Germanic, Slavic, and Latin influences into a unique artistic and intellectual tradition.",
    ],
  },
  {
    numeral: "II",
    period: "1890 – 1918",
    title: "The Golden Age",
    emperor: "Karl-Josef I",
    subtitle: "The River in Full Flow",
    paragraphs: [
      "The reign of Emperor Karl-Josef I is remembered as the zenith of the Danubian Confederation's cultural and economic power. The Imperial capital of Neustadt became one of the great cities of Central Europe, rivalling Vienna and Budapest in its architectural ambition and intellectual vitality. The Vienna Secession movement found a warm reception at the Danubian court, and the Emperor himself was a noted patron of the arts.",
      "The Imperial Academy of Sciences was founded in 1895, and the Danubian School of Music produced composers and performers of international renown. The Grand Exhibition of 1900, held on the grounds of the Palais Danubio, attracted visitors from across Europe and cemented the Confederation's reputation as a centre of civilisation.",
      "The Golden Age came to an abrupt end with the outbreak of the Great War in 1914. The Danubian Confederation, bound by treaty to the Central Powers, found itself drawn into a conflict that would reshape the political map of Europe and test the foundations of the imperial order.",
    ],
  },
  {
    numeral: "III",
    period: "1918 – 1945",
    title: "The Age of Reform",
    emperor: "Franz-Josef II",
    subtitle: "The Eagle Adapts",
    paragraphs: [
      "The aftermath of the Great War brought the Danubian Confederation to the brink of dissolution. Nationalist movements within the federated principalities demanded greater autonomy, and the old imperial order faced its gravest challenge. Emperor Franz-Josef II, a man of pragmatic temperament and genuine democratic sympathies, chose the path of reform over repression.",
      "The Constitutional Charter of 1918 transformed the Danubian Confederation into a constitutional monarchy, establishing a bicameral parliament, an independent judiciary, and a Bill of Rights modelled on the most progressive documents of the age. The Emperor retained significant ceremonial and diplomatic powers, but executive authority passed to an elected Chancellor.",
      "The interwar decades were marked by economic hardship, political turbulence, and the shadow of rising authoritarian movements across Europe. The Danubian Confederation maintained its independence and democratic character through a combination of diplomatic skill, geographic advantage, and the personal authority of the Emperor, who remained a symbol of continuity and legitimacy throughout the crisis years.",
    ],
  },
  {
    numeral: "IV",
    period: "1945 – 1998",
    title: "The Modern Era",
    emperor: "Franz-Leopold III",
    subtitle: "Rebuilding the Realm",
    paragraphs: [
      "Emperor Franz-Leopold III ascended to the throne in 1945, inheriting a Confederation that had survived the Second World War largely intact but deeply shaken. His long reign of fifty-three years was devoted to reconstruction, reconciliation, and the careful modernisation of Danubian society and institutions.",
      "The post-war decades saw the Danubian Confederation emerge as a model of Central European stability. The Emperor's personal diplomacy helped secure the Confederation's neutrality during the Cold War, and Neustadt became a favoured venue for international negotiations. The economy was rebuilt on foundations of manufacturing, tourism, and financial services, and living standards rose steadily through the second half of the twentieth century.",
      "Franz-Leopold III was also a devoted patron of the arts and sciences. The Danubian National Museum, the Imperial Library, and the Neustadt Philharmonic all received significant imperial support during his reign. He died on the 3rd of September, 1998, having reigned longer than any other Emperor of Austria-Danubio.",
    ],
  },
  {
    numeral: "V",
    period: "1998 – Present",
    title: "The Contemporary Reign",
    emperor: "Karl-Heinrich II",
    subtitle: "Eagle and River, Renewed",
    paragraphs: [
      "His Imperial Majesty Karl-Heinrich II has reigned since the 7th of September, 1998. His accession was marked by a solemn ceremony at the Cathedral of Neustadt, attended by heads of state from across Europe and beyond. The new Emperor brought to the throne a combination of traditional values and forward-looking vision that has defined his reign.",
      "Under Karl-Heinrich II, the Danubian Confederation has deepened its engagement with European institutions while maintaining its distinctive constitutional character. The Emperor has been a vocal advocate for cultural diplomacy, environmental stewardship of the Danube river system, and the preservation of the Confederation's multilingual heritage.",
      "The Imperial House today maintains its ceremonial, diplomatic, and cultural functions with a staff of several hundred at the Palais Danubio. The Emperor and Empress conduct several hundred official engagements per year, and the House's charitable foundations support education, the arts, and social welfare across the Confederation.",
    ],
  },
];

export default function History() {
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
            History of the <span style={{ color: GOLD }}>Dynasty</span>
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", maxWidth: "400px" }}>
            <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1rem",
                color: "oklch(0.65 0.01 85)",
                whiteSpace: "nowrap",
              }}
            >
              1867 – Present
            </div>
          </div>
        </div>
      </section>

      {/* Eras */}
      {eras.map((era, i) => (
        <section
          key={i}
          style={{
            backgroundColor: i % 2 === 0 ? CREAM : DARK,
            padding: "5rem 0",
          }}
        >
          <div className="container">
            <div className="reveal grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Era sidebar */}
              <div
                style={{
                  borderLeft: `3px solid ${GOLD}`,
                  paddingLeft: "1.5rem",
                  alignSelf: "start",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "3.5rem",
                    fontWeight: 700,
                    color: i % 2 === 0 ? "oklch(0.72 0.12 85 / 0.2)" : "oklch(0.72 0.12 85 / 0.15)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {era.numeral}
                </div>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: GOLD,
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  {era.period}
                </div>
                <h2
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: i % 2 === 0 ? DARK : CREAM,
                    marginBottom: "0.5rem",
                    lineHeight: 1.3,
                  }}
                >
                  {era.title}
                </h2>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "0.9rem",
                    color: i % 2 === 0 ? "oklch(0.45 0.01 285)" : "oklch(0.6 0.01 85)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {era.subtitle}
                </div>
                <div
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                    fontSize: "0.8rem",
                    color: GOLD,
                    letterSpacing: "0.05em",
                  }}
                >
                  Emperor {era.emperor}
                </div>
              </div>

              {/* Era content */}
              <div className="lg:col-span-3">
                {era.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontSize: "1.05rem",
                      lineHeight: 1.9,
                      color: i % 2 === 0 ? "oklch(0.25 0.005 285)" : "oklch(0.75 0.01 85)",
                      marginBottom: j < era.paragraphs.length - 1 ? "1.5rem" : 0,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Emperors list */}
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
              Complete List
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
              Emperors of Austria-Danubio
            </h2>
          </div>

          <div className="reveal overflow-x-auto">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${GOLD}` }}>
                  {["#", "Name", "Reign", "Born – Died", "Notable Achievement"].map((h) => (
                    <th
                      key={h}
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "0.6rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: GOLD,
                        textAlign: "left",
                        padding: "0.75rem 1rem",
                        fontWeight: 400,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { n: "I", name: "Leopold-Karl I", reign: "1867–1890", life: "1828–1890", note: "Founder of the Imperial House; drafted the Confederation Charter" },
                  { n: "II", name: "Karl-Josef I", reign: "1890–1916", life: "1855–1916", note: "Patron of the arts; presided over the Golden Age" },
                  { n: "III", name: "Maria-Sophia I", reign: "1916–1918", life: "1880–1952", note: "First Empress Regnant; negotiated the Armistice of Neustadt" },
                  { n: "IV", name: "Franz-Josef II", reign: "1918–1945", life: "1898–1945", note: "Signed the Constitutional Charter of 1918" },
                  { n: "V", name: "Leopold-Franz I", reign: "1945–1945", life: "1920–1945", note: "Reigned for 47 days; died in the liberation of Neustadt" },
                  { n: "VI", name: "Franz-Leopold III", reign: "1945–1998", life: "1922–1998", note: "Longest-reigning Emperor; architect of post-war recovery" },
                  { n: "VII", name: "Karl-Heinrich II", reign: "1998–present", life: "1961–", note: "Current Emperor; champion of European integration" },
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: `1px solid oklch(0.72 0.12 85 / 0.1)`,
                      backgroundColor: i % 2 === 0 ? "transparent" : "oklch(0.72 0.12 85 / 0.03)",
                    }}
                  >
                    <td style={{ padding: "1rem", fontFamily: "'Cinzel', serif", fontSize: "0.9rem", color: GOLD }}>{row.n}</td>
                    <td style={{ padding: "1rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: CREAM, fontWeight: 500 }}>{row.name}</td>
                    <td style={{ padding: "1rem", fontFamily: "'Source Serif 4', serif", fontSize: "0.9rem", color: "oklch(0.65 0.01 85)" }}>{row.reign}</td>
                    <td style={{ padding: "1rem", fontFamily: "'Source Serif 4', serif", fontSize: "0.9rem", color: "oklch(0.55 0.01 85)" }}>{row.life}</td>
                    <td style={{ padding: "1rem", fontFamily: "'Source Serif 4', serif", fontSize: "0.85rem", color: "oklch(0.55 0.01 85)", fontStyle: "italic" }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
