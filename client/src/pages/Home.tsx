/*
 * Home Page — Imperial Modernism / Vienna Secession Reborn
 * Hero: full-bleed palace image with dark overlay, Cinzel title
 * Sections: alternating dark/cream bands with gold ornaments
 */
import { useEffect, useRef, useState } from "react";
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

  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.volume = volume;
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  return (
    <div style={{ backgroundColor: DARK }}>
      <Navigation />

      {/* Habsburg Waltz floating audio player */}
      <audio ref={audioRef} src="/manus-storage/habsburg_walzer_804aad1b.mp3" loop />
      <div
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 100,
          background: "oklch(0.09 0.005 285 / 0.92)",
          backdropFilter: "blur(12px)",
          border: `1px solid oklch(0.72 0.12 85 / 0.3)`,
          padding: "0.85rem 1.1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          minWidth: "220px",
          boxShadow: "0 8px 32px oklch(0 0 0 / 0.4)",
        }}
      >
        {/* Gold top accent */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: GOLD }} />
        <button
          onClick={togglePlay}
          style={{
            width: "36px",
            height: "36px",
            border: `1px solid oklch(0.72 0.12 85 / 0.5)`,
            background: playing ? GOLD : "transparent",
            color: playing ? "oklch(0.09 0.005 285)" : GOLD,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexShrink: 0,
            transition: "all 0.2s ease",
            fontSize: "1rem",
          }}
          aria-label={playing ? "Pause" : "Play Habsburg Waltz"}
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <rect x="2" y="1" width="4" height="12" />
              <rect x="8" y="1" width="4" height="12" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <polygon points="2,1 12,7 2,13" />
            </svg>
          )}
        </button>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase", marginBottom: "0.2rem" }}>Habsburg Walzer</div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolume}
            style={{ width: "100%", accentColor: "oklch(0.72 0.12 85)", cursor: "pointer" }}
            aria-label="Volume"
          />
        </div>
      </div>

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
              Est. MCMXVII &nbsp;·&nbsp; Neustadt, Danubio
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
            ✦ &nbsp; Imperial Announcement: The engagement of Crown Prince Leopold von Habsburg and Fräulein Katharina von Richter is formally proclaimed — Spring 2026 &nbsp; ✦
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
                The Imperial House of Austria-Danubio is the continuation of the ancient House of Habsburg-Lorraine, one of the most illustrious dynasties in European history. Its roots reach back to the medieval counts of Habsburg and the centuries of Holy Roman Emperors, Kings of Hungary and Bohemia, and Archdukes of Austria. In 1914, the assassination attempt against Archduke Franz Ferdinand in Sarajevo failed — the Archduke survived, and the European crisis that followed was resolved at the negotiating table rather than on the battlefield. The Treaty of Vienna of 1917 transformed the Austro-Hungarian Monarchy into the Danubian Federation: a constitutional confederation of fifteen states united under the Imperial Crown.
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "oklch(0.25 0.005 285)",
                }}
              >
                Today, under the reign of His Imperial and Royal Apostolic Majesty Emperor Maximilian I — now in his nineteenth year on the throne — the House continues to serve as the constitutional sovereign of the Danubian Confederation, presiding over fifteen states and more than eighty million citizens with dignity, tradition, and an unwavering commitment to the peoples of the river lands.
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
              {/* Outer diamond ornament wrapper */}
              <div style={{ position: "relative", maxWidth: "380px", width: "100%" }}>

                {/* Diamond ornaments — top, bottom, left, right midpoints */}
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
                  <div style={{ height: "10px", background: DARK, opacity: 0.85 }} />

                  <img
                    src="/manus-storage/coat_of_arms_real_375cb88d.png"
                    alt="Imperial Coat of Arms of Austria-Danubio"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      padding: "1rem 1.5rem",
                      position: "relative",
                      zIndex: 1,
                      mixBlendMode: "multiply",
                    }}
                  />

                  {/* Dark band bottom — mirrors the top */}
                  <div style={{ height: "10px", background: DARK, opacity: 0.85 }} />

                </div>
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
                  src="/manus-storage/emperor_engraving_a2dd5d8f.png"
                  alt="His Imperial Majesty Emperor Maximilian I"
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
                  His Imperial Majesty Maximilian I<br />
                  Emperor of Austria-Danubio · 19 years on the throne
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
                <span style={{ color: GOLD }}>Maximilian I</span>
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
                Born in 1954 at the Hofburg Imperial Palace in Vienna, Maximilian Franz Josef Karl of Austria-Danubio ascended to the Imperial Throne following the passing of his father. He has now reigned for thirty-seven years, presiding over a period of constitutional consolidation and European integration.
              </p>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "oklch(0.75 0.01 85)",
                }}
              >
                His Majesty has borne his duties with unwavering dignity in the face of profound personal tragedy. The late Empress Maria-Cristina perished in the fire at the Paris Ritz on the 10th of September, 2000 — a loss that shook the Confederation and the world. He has since devoted himself entirely to his people. The forthcoming marriage of Crown Prince Leopold to Katharina von Richter is a moment of great joy for the Imperial House and the Confederation alike.
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
                  His Imperial and Royal Majesty Maximilian I, by the Grace of God Emperor of Austria-Danubio, King of the Danubian Lands, Archduke of Neustadt, Grand Duke of the Eastern Marches, Protector of the River Peoples, Knight of the Order of the Golden Eagle.
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
                text: "Since 1917, the Imperial House has upheld the ceremonial traditions of the Danubian Confederation — from the annual Feast of the Eagle to the solemn Proclamation of the Emperor from the balcony of the Hofburg and the ancient Hungarian Coronation in Budapest.",
                href: "/traditions",
              },
              {
                numeral: "II",
                title: "Honour",
                text: "The Order of the Golden Eagle, founded in 1917 upon the proclamation of the Danubian Federation, remains the highest honour the Emperor may bestow. Its recipients have included statesmen, scholars, and warriors who have served the Danubian peoples with distinction.",
                href: "/heraldry",
              },
              {
                numeral: "III",
                title: "Legacy",
                text: "The House of Habsburg-Lorraine has produced emperors, kings, and archdukes across seven centuries. Since 1917, as the Imperial House of Austria-Danubio, it has guided the Danubian Confederation through the upheavals of the twentieth century and into the present age.",
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
              Constructed between 1919 and 1925 along the western bank of the Danube, the Palais Danubio serves as the seat of the Danubian Council — the assembly of governors of the seven constituent states of the Confederation. When the governors convene in Vienna, the Palais Danubio is their official meeting place, its Grand Council Chamber the setting for the deliberations that govern the Federation.
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
              { year: "1914", event: "Sarajevo: The Archduke Survives", desc: "The assassination attempt against Archduke Franz Ferdinand in Sarajevo fails. The Archduke is wounded but survives. The European crisis is contained through diplomacy, averting a wider conflict." },
              { year: "1917", event: "Treaty of Vienna & the Danubian Federation", desc: "Emperor Franz Ferdinand I signs the Treaty of Vienna, transforming the Austro-Hungarian Monarchy into the Danubian Federation of fifteen states — a new constitutional order for Central Europe." },
              { year: "1923", event: "The Federation Crown Completed", desc: "The Federation Crown, commissioned by Emperor Franz Ferdinand I in 1920, is completed after three years of craftsmanship in platinum, pearls, diamonds, rubies, sapphires, and emeralds." },
              { year: "1998", event: "Accession of Maximilian I", desc: "The current Emperor ascends to the throne, beginning a reign marked by diplomatic renewal, cultural patronage, and the modernisation of the Confederation's institutions." },
              { year: "2000", event: "Tragedy at the Paris Ritz", desc: "The late Empress Maria-Cristina perishes in the fire at the Paris Ritz on 10 September. The Emperor's stoic grief and continued service become a defining moment of his reign." },
              { year: "2026", event: "The Imperial Engagement", desc: "Crown Prince Leopold von Habsburg and Fr\u00e4ulein Katharina von Richter announce their engagement, bringing great joy to the Confederation." },
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

      {/* ── PRESS TEASER ── */}
      <section style={{ background: "oklch(0.96 0.015 85)", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: GOLD, marginBottom: "0.5rem" }}>Die Wiener Eleganz · Court Season Special</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: DARK, lineHeight: 1.1, marginBottom: "0.75rem" }}>The Ball That Never Ends</h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", margin: "1rem 0" }}>
              <div style={{ flex: 1, maxWidth: "80px", height: "1px", background: GOLD }} />
              <span style={{ color: GOLD }}>✦</span>
              <div style={{ flex: 1, maxWidth: "80px", height: "1px", background: GOLD }} />
            </div>
            <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: "1rem", color: "oklch(0.35 0.01 85)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>January 2026. Two thousand guests. One night. The Court Ball returns to the Hofburg — and nothing is quite as it was.</p>
          </div>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <div style={{ overflow: "hidden", position: "relative" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663301701844/DGTyc4b55NDjb7mPZJGomf/court_ball_cortege_entrance_2026d-9HY3JZ76DLKwNQGCQPJUfC.webp"
                alt="The Imperial cortège enters the Grand Ballroom"
                style={{ width: "100%", height: "320px", objectFit: "cover", objectPosition: "center top", display: "block", transition: "transform 0.6s ease" }}
                className="hover:scale-105"
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)", padding: "1rem" }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.15em", textTransform: "uppercase" }}>The Imperial Cortège · Hofburg, January 2026</p>
              </div>
            </div>
            <div style={{ overflow: "hidden", position: "relative" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663301701844/DGTyc4b55NDjb7mPZJGomf/court_ball_drones_hofburg_2026-KMjneK7x9r8wgiLBsGJN3t.webp"
                alt="Drone light show above the Hofburg"
                style={{ width: "100%", height: "320px", objectFit: "cover", objectPosition: "center", display: "block", transition: "transform 0.6s ease" }}
                className="hover:scale-105"
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)", padding: "1rem" }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Above the Hofburg · 360 Drones · January 2026</p>
              </div>
            </div>
            <div style={{ overflow: "hidden", position: "relative" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663301701844/DGTyc4b55NDjb7mPZJGomf/court_ball_bonbonniere_2026-ghN6XBLhrLj7RWZo93CVFW.webp"
                alt="The 2026 Court Ball bonbonnière"
                style={{ width: "100%", height: "320px", objectFit: "cover", objectPosition: "center", display: "block", transition: "transform 0.6s ease" }}
                className="hover:scale-105"
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)", padding: "1rem" }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.15em", textTransform: "uppercase" }}>The Bonbonnière · Wiener Werkstätte Neu · 2026</p>
              </div>
            </div>
          </div>
          <div className="reveal" style={{ textAlign: "center" }}>
            <Link
              href="/press"
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
              Read the Full Article →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
