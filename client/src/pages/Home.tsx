/*
 * Home Page — Imperial Modernism / Vienna Secession Reborn
 * Hero: full-bleed palace image with dark overlay, Cinzel title
 * Sections: alternating dark/cream bands with gold ornaments
 */
import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GOLD = "oklch(0.72 0.12 85)";
const DARK = "oklch(0.09 0.005 285)";
const CREAM = "oklch(0.96 0.015 85)";

function SectionDivider({ light = false }: { light?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "2.5rem 0" }}>
      <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, transparent, ${light ? "oklch(0.72 0.12 85 / 0.5)" : "oklch(0.72 0.12 85 / 0.3)"})` }} />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
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

export default function Home() {
  useScrollReveal();

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
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Palace background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/manus-storage/palace_ec3ea21c.png)",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            filter: "brightness(0.35) saturate(0.7)",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, oklch(0.09 0.005 285 / 0.3) 0%, oklch(0.09 0.005 285 / 0.6) 60%, oklch(0.09 0.005 285) 100%)",
          }}
        />

        {/* Klimt geometric border overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 60px, oklch(0.72 0.12 85 / 0.04) 60px, oklch(0.72 0.12 85 / 0.04) 61px),
              repeating-linear-gradient(90deg, transparent, transparent 60px, oklch(0.72 0.12 85 / 0.04) 60px, oklch(0.72 0.12 85 / 0.04) 61px)
            `,
          }}
        />

        <div className="container relative z-10" style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
          <div className="max-w-3xl">
            {/* Pre-title */}
            <div
              className="animate-fade-up"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.65rem",
                letterSpacing: "0.4em",
                color: GOLD,
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                animationDelay: "0.1s",
              }}
            >
              Est. MDCCCLXVII &nbsp;·&nbsp; Neustadt, Danubio
            </div>

            {/* Main title */}
            <h1
              className="animate-fade-up"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 700,
                color: CREAM,
                lineHeight: 1.1,
                letterSpacing: "0.04em",
                marginBottom: "1rem",
                animationDelay: "0.25s",
              }}
            >
              Imperial House
              <br />
              <span style={{ color: GOLD }}>of Austria-Danubio</span>
            </h1>

            {/* Subtitle */}
            <p
              className="animate-fade-up"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                color: "oklch(0.8 0.015 85)",
                marginBottom: "2.5rem",
                lineHeight: 1.6,
                animationDelay: "0.4s",
              }}
            >
              Guardians of the Danube. Heirs of a Thousand Years.
            </p>

            {/* Motto */}
            <div
              className="animate-fade-up"
              style={{
                display: "inline-block",
                borderTop: `1px solid ${GOLD}`,
                borderBottom: `1px solid ${GOLD}`,
                padding: "0.6rem 1.5rem",
                marginBottom: "3rem",
                animationDelay: "0.55s",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  letterSpacing: "0.1em",
                  color: GOLD,
                }}
              >
                Aquila et Flumen in Aeternum
              </span>
            </div>

            {/* CTA buttons */}
            <div
              className="animate-fade-up flex flex-wrap gap-4"
              style={{ animationDelay: "0.7s" }}
            >
              <Link
                href="/history"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: DARK,
                  background: GOLD,
                  padding: "0.85rem 2.5rem",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                }}
                className="hover:opacity-90 active:scale-95"
              >
                Our History
              </Link>
              <Link
                href="/family"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: CREAM,
                  background: "transparent",
                  border: `1px solid oklch(0.72 0.12 85 / 0.5)`,
                  padding: "0.85rem 2.5rem",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                }}
                className="hover:border-yellow-400 active:scale-95"
              >
                The Imperial Family
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.55rem",
              letterSpacing: "0.3em",
              color: "oklch(0.72 0.12 85 / 0.6)",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </div>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, oklch(0.72 0.12 85 / 0.6), transparent)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* ── IMPERIAL ANNOUNCEMENT ── */}
      <section
        style={{
          backgroundColor: GOLD,
          padding: "1.25rem 0",
        }}
      >
        <div className="container">
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: DARK,
              textAlign: "center",
            }}
          >
            ✦ &nbsp; Official Announcement: The Imperial Jubilee Celebrations of 2026 — 159th Anniversary of the House &nbsp; ✦
          </p>
        </div>
      </section>

      {/* ── ABOUT THE HOUSE ── */}
      <section style={{ backgroundColor: CREAM, padding: "6rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
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
                I &nbsp;·&nbsp; The House
              </div>
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 600,
                  color: DARK,
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                  letterSpacing: "0.03em",
                }}
              >
                A Dynasty Born<br />of Eagle and River
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
                The Imperial House of Austria-Danubio traces its origins to the Treaty of Neustadt in 1867, when the ancient Habsburg-Lorraine lineage merged with the noble Danubio branch through the marriage of Archduke Leopold-Karl and Princess Maria Theresa of Danubio. From this union arose a new dynastic identity — one that would govern the Danubian Confederation for over a century and a half.
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "oklch(0.25 0.005 285)",
                }}
              >
                Today, under the reign of His Imperial Majesty Emperor Karl-Heinrich II, the House continues to serve as a constitutional monarchy, presiding over the Danubian Confederation with dignity, tradition, and a commitment to the peoples of the river lands.
              </p>
              <div style={{ marginTop: "2rem" }}>
                <Link
                  href="/history"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "oklch(0.55 0.08 85)",
                    textDecoration: "none",
                    borderBottom: "1px solid oklch(0.55 0.08 85 / 0.4)",
                    paddingBottom: "2px",
                    transition: "all 0.3s ease",
                  }}
                >
                  Read the Full History →
                </Link>
              </div>
            </div>

            {/* Coat of arms */}
            <div className="reveal flex justify-center" style={{ transitionDelay: "0.2s" }}>
              <div style={{ position: "relative", maxWidth: "380px" }}>
                {/* Corner ornaments */}
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
                  src="/manus-storage/coat_of_arms_fd3008ef.png"
                  alt="Imperial Coat of Arms of Austria-Danubio"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    padding: "1.5rem",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMPEROR SECTION ── */}
      <section style={{ backgroundColor: DARK, padding: "6rem 0", position: "relative", overflow: "hidden" }}>
        {/* Klimt pattern */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait */}
            <div className="reveal flex justify-center order-2 lg:order-1" style={{ transitionDelay: "0.2s" }}>
              <div style={{ maxWidth: "340px", width: "100%" }}>
                <img
                  src="/manus-storage/emperor_portrait_4ad8ffe0.png"
                  alt="His Imperial Majesty Emperor Karl-Heinrich II"
                  className="portrait-frame"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "0.85rem",
                    color: "oklch(0.55 0.01 85)",
                    textAlign: "center",
                    marginTop: "1rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  His Imperial Majesty Karl-Heinrich II<br />
                  Emperor of Austria-Danubio, r. 1998–present
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="reveal order-1 lg:order-2">
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
                II &nbsp;·&nbsp; The Sovereign
              </div>
              <h2
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 600,
                  color: CREAM,
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                  letterSpacing: "0.03em",
                }}
              >
                His Imperial Majesty<br />
                <span style={{ color: GOLD }}>Karl-Heinrich II</span>
              </h2>
              <SectionDivider light />
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "oklch(0.75 0.01 85)",
                  marginBottom: "1.25rem",
                }}
              >
                Born on the 14th of March, 1961, at the Palais Danubio in Neustadt, Karl-Heinrich Franz Josef Maria of Austria-Danubio ascended to the Imperial Throne on the 7th of September, 1998, following the passing of his father, Emperor Franz-Leopold III.
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "oklch(0.75 0.01 85)",
                }}
              >
                A graduate of the Imperial Military Academy of Neustadt and the University of Vienna, His Majesty has devoted his reign to the modernisation of the Danubian Confederation's constitutional framework while preserving the ceremonial and cultural heritage of the dynasty.
              </p>

              {/* Imperial titles */}
              <div
                style={{
                  marginTop: "2rem",
                  padding: "1.25rem 1.5rem",
                  border: `1px solid oklch(0.72 0.12 85 / 0.2)`,
                  background: "oklch(0.72 0.12 85 / 0.04)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: GOLD,
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  Full Style & Titles
                </div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "0.95rem",
                    color: "oklch(0.75 0.01 85)",
                    lineHeight: 1.7,
                  }}
                >
                  His Imperial and Royal Majesty Karl-Heinrich II, by the Grace of God Emperor of Austria-Danubio, King of the Danubian Lands, Archduke of Neustadt, Grand Duke of the Eastern Marches, Protector of the River Peoples, Knight of the Order of the Golden Eagle.
                </p>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <Link
                  href="/family"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: GOLD,
                    textDecoration: "none",
                    borderBottom: `1px solid oklch(0.72 0.12 85 / 0.4)`,
                    paddingBottom: "2px",
                    transition: "all 0.3s ease",
                  }}
                >
                  Meet the Imperial Family →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section style={{ backgroundColor: CREAM, padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
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
              III &nbsp;·&nbsp; Our Foundations
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
              The Three Pillars of the House
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                numeral: "I",
                title: "Tradition",
                text: "For over 159 years, the Imperial House has upheld the ceremonial traditions of the Danubian Confederation — from the annual Feast of the Eagle to the solemn Rite of Coronation at the Cathedral of Neustadt.",
                href: "/traditions",
              },
              {
                numeral: "II",
                title: "Honour",
                text: "The Order of the Golden Eagle, founded in 1867, remains the highest honour the Emperor may bestow. Its recipients have included statesmen, scholars, and warriors who have served the Danubian peoples with distinction.",
                href: "/heraldry",
              },
              {
                numeral: "III",
                title: "Legacy",
                text: "The House of Austria-Danubio has produced twelve emperors, three empresses regnant, and countless figures of cultural and political significance across the arts, sciences, and diplomacy of Central Europe.",
                href: "/history",
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  transitionDelay: `${i * 0.15}s`,
                  border: `1px solid oklch(0.72 0.12 85 / 0.3)`,
                  padding: "2.5rem 2rem",
                  position: "relative",
                  background: "oklch(0.99 0.008 85)",
                }}
              >
                {/* Roman numeral */}
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "3rem",
                    fontWeight: 700,
                    color: "oklch(0.72 0.12 85 / 0.15)",
                    position: "absolute",
                    top: "1rem",
                    right: "1.5rem",
                    lineHeight: 1,
                  }}
                >
                  {pillar.numeral}
                </div>
                {/* Gold top border */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: GOLD,
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: DARK,
                    letterSpacing: "0.08em",
                    marginBottom: "1.25rem",
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.85,
                    color: "oklch(0.35 0.005 285)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {pillar.text}
                </p>
                <Link
                  href={pillar.href}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "oklch(0.55 0.08 85)",
                    textDecoration: "none",
                  }}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PALACE SECTION ── */}
      <section style={{ position: "relative", height: "500px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/manus-storage/palace_ec3ea21c.png)",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            filter: "brightness(0.4) saturate(0.8)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, oklch(0.09 0.005 285 / 0.9) 0%, oklch(0.09 0.005 285 / 0.3) 60%, transparent 100%)",
          }}
        />
        <div className="container relative z-10 h-full flex items-center">
          <div className="reveal max-w-lg">
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
              IV &nbsp;·&nbsp; The Residence
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 600,
                color: CREAM,
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              Palais Danubio
            </h2>
            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "oklch(0.78 0.01 85)",
              }}
            >
              Constructed between 1871 and 1889 along the western bank of the Danube, the Palais Danubio serves as the official residence and seat of the Imperial Court. Its Baroque façade, formal gardens, and riverside terraces have been the backdrop for the most significant ceremonies of the Danubian Confederation.
            </p>
          </div>
        </div>
      </section>

      {/* ── TIMELINE PREVIEW ── */}
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
              V &nbsp;·&nbsp; Key Dates
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
              Milestones of the Dynasty
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "1px",
                background: "linear-gradient(to bottom, transparent, oklch(0.72 0.12 85 / 0.4), transparent)",
                transform: "translateX(-50%)",
              }}
              className="hidden md:block"
            />

            {[
              { year: "1867", event: "Treaty of Neustadt", desc: "The founding treaty establishes the Danubian Confederation and the Imperial House through the marriage of Archduke Leopold-Karl and Princess Maria Theresa." },
              { year: "1871", event: "Construction of Palais Danubio", desc: "Emperor Leopold-Karl I orders the construction of the imperial residence along the Danube, completed in 1889." },
              { year: "1918", event: "The Great Reformation", desc: "Following the upheaval of the Great War, Emperor Franz-Josef II signs the Constitutional Charter, transforming the empire into a constitutional monarchy." },
              { year: "1998", event: "Accession of Karl-Heinrich II", desc: "The current Emperor ascends to the throne, beginning a reign marked by diplomatic renewal and cultural patronage." },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                style={{
                  transitionDelay: `${i * 0.15}s`,
                }}
              >
                <div style={{ textAlign: i % 2 === 0 ? "right" : "left", order: i % 2 === 0 ? 0 : 1 }} className="hidden md:block">
                  {i % 2 === 0 && (
                    <div style={{ paddingRight: "3rem" }}>
                      <div
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: "2rem",
                          fontWeight: 700,
                          color: GOLD,
                          lineHeight: 1,
                          marginBottom: "0.5rem",
                        }}
                      >
                        {item.year}
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.2rem",
                          fontWeight: 600,
                          color: CREAM,
                          marginBottom: "0.75rem",
                        }}
                      >
                        {item.event}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Source Serif 4', serif",
                          fontSize: "0.9rem",
                          lineHeight: 1.8,
                          color: "oklch(0.6 0.01 85)",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  )}
                </div>
                <div style={{ order: i % 2 === 0 ? 1 : 0 }} className="hidden md:block">
                  {i % 2 === 1 && (
                    <div style={{ paddingLeft: "3rem" }}>
                      <div
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: "2rem",
                          fontWeight: 700,
                          color: GOLD,
                          lineHeight: 1,
                          marginBottom: "0.5rem",
                        }}
                      >
                        {item.year}
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.2rem",
                          fontWeight: 600,
                          color: CREAM,
                          marginBottom: "0.75rem",
                        }}
                      >
                        {item.event}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Source Serif 4', serif",
                          fontSize: "0.9rem",
                          lineHeight: 1.8,
                          color: "oklch(0.6 0.01 85)",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  )}
                </div>
                {/* Mobile version */}
                <div className="md:hidden col-span-1">
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: GOLD,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.year}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: CREAM,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.event}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.8,
                      color: "oklch(0.6 0.01 85)",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal text-center mt-8">
            <Link
              href="/history"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: DARK,
                background: GOLD,
                padding: "0.85rem 2.5rem",
                textDecoration: "none",
                display: "inline-block",
                transition: "opacity 0.3s ease",
              }}
              className="hover:opacity-90"
            >
              Full History →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
