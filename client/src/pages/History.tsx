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
    period: "1848 – 1916",
    title: "The Reign of Franz Joseph I",
    emperor: "Franz Joseph I",
    subtitle: "The Old Emperor",
    paragraphs: [
      "Emperor Franz Joseph I ascended to the throne on 2 December 1848, at the age of eighteen, following the abdication of his uncle Ferdinand I during the revolutionary upheavals that swept Europe. His reign of sixty-eight years would become the longest in Habsburg history and one of the longest of any European monarch.",
      "Franz Joseph presided over the Compromise of 1867 — the Ausgleich — which transformed the Austrian Empire into the Austro-Hungarian Dual Monarchy, granting Hungary equal constitutional status. He was crowned Apostolic King of Hungary in Budapest on 8 June 1867, with the ancient Holy Crown of Saint Stephen, the only coronation ceremony the dynasty observed. The Austrian Imperial title itself was inherited by right of succession and never conferred by crowning.",
      "His reign encompassed the construction of the Ringstrasse, the flourishing of Viennese culture, the tragedies of his son Rudolf's death at Mayerling in 1889 and his wife Elisabeth's assassination in Geneva in 1898, and the long twilight years of an empire straining under the pressures of nationalism and modernity. Franz Joseph died on 21 November 1916, having reigned through an era of extraordinary transformation.",
    ],
  },
  {
    numeral: "II",
    period: "1914 – 1917",
    title: "The Crisis of 1914 & The Road to Vienna",
    emperor: "Franz Ferdinand I (as Archduke)",
    subtitle: "The Turning Point",
    paragraphs: [
      "On 28 June 1914, the assassination attempt against Archduke Franz Ferdinand in Sarajevo failed. The Archduke was wounded but survived, and the immediate crisis was contained. The diplomatic turmoil of July 1914 — the ultimatum to Serbia, the partial mobilisations — was ultimately resolved through negotiation rather than general war, as the great powers drew back from the precipice.",
      "With the heir alive and his voice carrying weight in the Imperial Council, Archduke Franz Ferdinand pressed for a fundamental restructuring of the empire. Long an advocate of a reformed federation — what he called a 'United States of Greater Austria' — he used the political momentum of the crisis to accelerate constitutional reform from within.",
      "By 1916, with Franz Joseph's death, Franz Ferdinand acceded to the throne as Emperor Franz Ferdinand I. He immediately convened the Imperial Constitutional Congress, and by the Treaty of Vienna of 1917, the Austro-Hungarian Dual Monarchy was peacefully transformed into the Danubian Federation. The stage was set for a radical reimagining of the Danubian realm.",
    ],
  },
  {
    numeral: "III",
    period: "1917 – 1936",
    title: "The Founding of the Danubian Federation",
    emperor: "Franz Ferdinand I",
    subtitle: "The Eagle Reborn",
    paragraphs: [
      "The Treaty of Vienna of 1917 formally dissolved the Austro-Hungarian Dual Monarchy and replaced it with the Danubian Federation — a constitutional union of fifteen sovereign states stretching from Bohemia and Moravia in the north to Croatia and Slovenia in the south, with Austria and Hungary as the two largest constituent kingdoms. Each state retained its own parliament, language rights, and legal traditions; the Emperor served as head of state of the whole, with executive authority vested in a Federal Chancellor elected by the Imperial Diet.",
      "Emperor Franz Ferdinand I commissioned the Federation Crown in 1920 as the supreme symbol of this new order — not a coronation crown, for the Imperial title remained hereditary, but a ceremonial object embodying the unity of all fifteen states. Crafted in platinum by the Viennese atelier of Köchert & Söhne and completed in 1923, its fifteen towers represent each member state. The Hungarian coronation rite in Budapest, with the Holy Crown of Saint Stephen, was preserved as the sole traditional crowning ceremony of the dynasty.",
      "Franz Ferdinand I died in 1936, having transformed a crumbling empire into a functioning federal state. He is remembered as the dynasty's greatest reformer — the Emperor who chose architecture over ruin.",
    ],
  },
  {
    numeral: "IV",
    period: "1936 – 1989",
    title: "The Age of Endurance",
    emperor: "Friedrich I & Otto I",
    subtitle: "Through War and Renewal",
    paragraphs: [
      "Emperor Friedrich I (r. 1936–1955) guided the Danubian Federation through the Second World War, maintaining a precarious neutrality until 1943 before joining the Allied cause. The Federation's geographic position at the heart of Europe made it a critical theatre of diplomacy and intelligence throughout the conflict. The Neustadt Accords of 1945 confirmed the Federation's borders and its status as a neutral constitutional monarchy in the new post-war order.",
      "Emperor Otto I (r. 1955–1989) presided over the longest reign since Franz Joseph. His era saw the Federation emerge as a model of Central European stability and constitutional governance — Neustadt became a favoured venue for international negotiations, and the Federation's multilingual civil service and federal institutions were studied by constitutional reformers across the world. Otto I died in 1989, having witnessed the full vindication of the federal model his great-grandfather had built.",
    ],
  },
  {
    numeral: "V",
    period: "1989 – Present",
    title: "The Contemporary Reign",
    emperor: "Maximilian I",
    subtitle: "Eagle and River, Renewed",
    paragraphs: [
      "His Imperial Majesty Emperor Maximilian I has reigned since 1989 — nineteen years on the throne as of 2026, having inherited at a moment of broad European renewal and institutional change. His accession was proclaimed from the Hofburg balcony in Vienna, with the Federation Crown displayed on its ceremonial cushion, before a gathering of heads of state.",
      "The Emperor's reign has been marked by deep personal tragedy: the death of his beloved Empress in the fire at the Paris Ritz in the year 2000, a loss from which he has never fully recovered publicly, though he has continued his duties with unwavering dedication. He has raised his children — Crown Prince Leopold and Archduchess Eleonora — with the same sense of duty that has defined the dynasty for generations.",
      "Today, the Danubian Federation stands as one of Europe's most stable and prosperous constitutional monarchies. The forthcoming betrothal of Crown Prince Leopold von Habsburg to Katharina von Richter, announced in 2026, has been greeted with widespread celebration across the fifteen member states, heralding a new chapter in the dynasty's long history.",
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
              1848 – Present
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
                  { n: "I", name: "Franz Joseph I", reign: "1848–1916", life: "1830–1916", note: "Longest-reigning Habsburg Emperor. Signed the Ausgleich of 1867; crowned Apostolic King of Hungary in Budapest, 1867." },
                  { n: "II", name: "Franz Ferdinand I", reign: "1916–1936", life: "1863–1936", note: "Survived the Sarajevo assassination attempt (1914); signed the Treaty of Vienna (1917); founded the Danubian Federation; commissioned the Federation Crown (1920, completed 1923)." },
                  { n: "III", name: "Friedrich I", reign: "1936–1955", life: "1902–1955", note: "Guided the Federation through the Second World War; maintained neutrality until 1943; signed the Neustadt Accords (1945)." },
                  { n: "IV", name: "Otto I", reign: "1955–1989", life: "1912–1989", note: "Presided over the Federation's rise as a model of Central European stability; Neustadt became a centre of international diplomacy." },
                  { n: "V", name: "Maximilian I", reign: "1989–present", life: "1954–", note: "Current Emperor; 37 years on the throne. Widower since the death of the Empress in the Paris Ritz fire, 2000." },
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
