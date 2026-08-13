/**
 * History Page — Imperial Modernism / Vienna Secession Reborn
 * Full dynastic history with timeline, eras, and key events
 */
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const GOLD = "oklch(0.72 0.12 85)";
const DARK = "oklch(0.09 0.005 285)";
const CREAM = "oklch(0.96 0.015 85)";

export default function History() {
  useScrollReveal();
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const eras = [
    {
      numeral: "I",
      period: "1848 – 1916",
      titleKey: "history.era1.title",
      emperor: "Franz Joseph I",
      subtitleKey: "history.era1.subtitle",
      paragraphKeys: ["history.era1.p1", "history.era1.p2", "history.era1.p3"],
    },
    {
      numeral: "II",
      period: "1914 – 1917",
      titleKey: "history.era2.title",
      emperor: "Franz Ferdinand I",
      subtitleKey: "history.era2.subtitle",
      paragraphKeys: ["history.era2.p1", "history.era2.p2", "history.era2.p3"],
    },
    {
      numeral: "III",
      period: "1917 – 1936",
      titleKey: "history.era3.title",
      emperor: "Franz Ferdinand I",
      subtitleKey: "history.era3.subtitle",
      paragraphKeys: ["history.era3.p1", "history.era3.p2", "history.era3.p3"],
    },
    {
      numeral: "IV",
      period: "1936 – 1989",
      titleKey: "history.era4.title",
      emperor: "Friedrich I & Otto I",
      subtitleKey: "history.era4.subtitle",
      paragraphKeys: ["history.era4.p1", "history.era4.p2"],
    },
    {
      numeral: "V",
      period: "1989 –",
      titleKey: "history.era5.title",
      emperor: "Maximilian II",
      subtitleKey: "history.era5.subtitle",
      paragraphKeys: ["history.era5.p1", "history.era5.p2", "history.era5.p3"],
    },
  ];

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
            {t("history.header.pretitle")}
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
            {t("history.header.title1")}<span style={{ color: GOLD }}>{t("history.header.title2")}</span>
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
              {t("history.header.period")}
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
                  {t(era.titleKey)}
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
                  {t(era.subtitleKey)}
                </div>
                <div
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                    fontSize: "0.8rem",
                    color: GOLD,
                    letterSpacing: "0.05em",
                  }}
                >
                  {t("history.emperor.prefix")} {era.emperor}
                </div>
              </div>

              {/* Era content */}
              <div className="lg:col-span-3">
                {era.paragraphKeys.map((key, j) => (
                  <p
                    key={j}
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontSize: "1.05rem",
                      lineHeight: 1.9,
                      color: i % 2 === 0 ? "oklch(0.25 0.005 285)" : "oklch(0.75 0.01 85)",
                      marginBottom: j < era.paragraphKeys.length - 1 ? "1.5rem" : 0,
                    }}
                  >
                    {t(key)}
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
              {t("history.table.pretitle")}
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
              {t("history.table.title")}
            </h2>
          </div>

          <div className="reveal overflow-x-auto">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${GOLD}` }}>
                  {[t("history.table.h1"), t("history.table.h2"), t("history.table.h3"), t("history.table.h4"), t("history.table.h5")].map((h) => (
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
                  { n: "I", name: "Franz Joseph I", reign: "1848–1916", life: "1830–1916", noteKey: "history.table.note1" },
                  { n: "II", name: "Franz Ferdinand I", reign: "1916–1936", life: "1863–1936", noteKey: "history.table.note2" },
                  { n: "III", name: "Friedrich I", reign: "1936–1955", life: "1902–1955", noteKey: "history.table.note3" },
                  { n: "IV", name: "Otto I", reign: "1955–1989", life: "1912–1989", noteKey: "history.table.note4" },
                  { n: "V", name: "Maximilian II", reign: "1989–", life: "1954–", noteKey: "history.table.note5" },
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
                    <td style={{ padding: "1rem", fontFamily: "'Source Serif 4', serif", fontSize: "0.85rem", color: "oklch(0.55 0.01 85)", fontStyle: "italic" }}>{t(row.noteKey)}</td>
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
