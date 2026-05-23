/*
 * Books Page — The Danubian Throne Trilogy · Coming Soon
 * Imperial Modernism / Vienna Secession Reborn
 *
 * Design: Dark theme with gold/cream palette. Cinzel headings, Cormorant body.
 * Layout: Centred hero with book cover, trilogy announcement, notification form.
 * Author: AB (pen name — full name not yet public)
 */
import { useEffect, useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GOLD = "oklch(0.72 0.12 85)";
const DARK = "oklch(0.09 0.005 285)";
const CREAM = "oklch(0.96 0.015 85)";
const DARK_CARD = "oklch(0.12 0.005 285)";

function TeaserVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activated, setActivated] = useState(false);

  const handleTouch = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.play().catch(() => {});
    setActivated(true);
  };

  return (
    <div className="reveal" style={{ position: "relative", maxWidth: "860px", margin: "0 auto" }}>
      {[
        { top: -12, left: -12 },
        { top: -12, right: -12 },
        { bottom: -12, left: -12 },
        { bottom: -12, right: -12 },
      ].map((pos, i) => (
        <div key={i} style={{
          position: "absolute",
          width: "28px",
          height: "28px",
          borderTop: i < 2 ? `2px solid ${GOLD}` : "none",
          borderBottom: i >= 2 ? `2px solid ${GOLD}` : "none",
          borderLeft: i % 2 === 0 ? `2px solid ${GOLD}` : "none",
          borderRight: i % 2 === 1 ? `2px solid ${GOLD}` : "none",
          ...pos,
          zIndex: 2,
        }} />
      ))}
      <div style={{ position: "relative" }}>
        <video
          ref={videoRef}
          src="/manus-storage/0522(1)(2)_7f24a587.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            boxShadow: "0 20px 60px oklch(0.09 0.005 285 / 0.5)",
          }}
        />
        {!activated && (
          <div
            onClick={handleTouch}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              background: "oklch(0.09 0.005 285 / 0.45)",
              cursor: "pointer",
              backdropFilter: "blur(1px)",
            }}
          >
            <div style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              border: `2px solid ${GOLD}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill={GOLD}>
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
            <span style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: GOLD,
            }}>Play with Sound</span>
          </div>
        )}
      </div>
      {/* Caption */}
      <div style={{ background: DARK, padding: "1rem 1.5rem", textAlign: "center" }}>
        <div style={{ width: "48px", height: "1px", background: GOLD, margin: "0 auto 0.75rem", opacity: 0.4 }} />
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: "0.8rem",
          color: "oklch(0.45 0.01 85)",
          letterSpacing: "0.04em",
          margin: 0,
        }}>
          Official teaser · <em>The Danubian Throne</em> · "History Was Not Prevented. Only Rewritten."
        </p>
      </div>
    </div>
  );
}

export default function Books() {
  useScrollReveal();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ backgroundColor: DARK }}>
      <Navigation />

      {/* ── Hero ── */}
      <section
        style={{
          paddingTop: "10rem",
          paddingBottom: "6rem",
          backgroundColor: DARK,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow behind the book */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "700px",
            background: `radial-gradient(ellipse at center, oklch(0.72 0.12 85 / 0.06) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        {/* Grid texture */}
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
          <div className="reveal text-center mb-12">
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.6rem",
                letterSpacing: "0.4em",
                color: GOLD,
                textTransform: "uppercase",
                marginBottom: "1.25rem",
                opacity: 0.8,
              }}
            >
              A Novel by AB
            </div>
            <h1
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1rem, 3vw, 1.4rem)",
                fontWeight: 400,
                color: "oklch(0.55 0.01 85)",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              The Danubian Throne · Book I
            </h1>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: 700,
                color: CREAM,
                lineHeight: 1.0,
                letterSpacing: "0.04em",
                marginBottom: "2rem",
              }}
            >
              The <span style={{ color: GOLD }}>Overwrite</span>
            </h2>
            <div style={{ width: "64px", height: "1px", background: GOLD, margin: "0 auto 2rem", opacity: 0.5 }} />
          </div>

          {/* Book cover */}
          <div className="reveal" style={{ maxWidth: "380px", margin: "0 auto 4rem" }}>
            <div style={{ position: "relative" }}>
              {/* Corner ornaments */}
              {[
                { top: -14, left: -14 },
                { top: -14, right: -14 },
                { bottom: -14, left: -14 },
                { bottom: -14, right: -14 },
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
                src="/manus-storage/DanubianThrone._38_f2a243cc.png"
                alt="The Danubian Throne — The Overwrite — Book cover"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  boxShadow: `0 32px 80px oklch(0.09 0.005 285 / 0.8), 0 0 0 1px oklch(0.72 0.12 85 / 0.2)`,
                }}
              />
            </div>
          </div>

          {/* Synopsis */}
          <div className="reveal" style={{ maxWidth: "680px", margin: "0 auto 4rem", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1.25rem",
                color: "oklch(0.72 0.06 85)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              June 1914. Sarajevo. The shots failed.
            </p>
            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "1rem",
                lineHeight: 1.95,
                color: "oklch(0.65 0.01 85)",
                marginBottom: "1.25rem",
              }}
            >
              Franz Ferdinand survived. Europe avoided war. The Habsburg throne endured, and history quietly abandoned the course the world remembers. A century later, the Danubian Federation stands powerful, modern, and seemingly untouchable.
            </p>
            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "1rem",
                lineHeight: 1.95,
                color: "oklch(0.65 0.01 85)",
                marginBottom: "1.5rem",
              }}
            >
              But beneath the order of the Empire, Crown Prince Leopold begins to uncover signals that should not exist — and a truth buried since Sarajevo.
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1.1rem",
                color: GOLD,
                lineHeight: 1.7,
              }}
            >
              The Empire was never saved. It was replaced.
            </p>
          </div>
        </div>
      </section>

      {/* ── Teaser Video ── */}
      <section style={{ backgroundColor: DARK_CARD, padding: "5rem 0", borderTop: `1px solid oklch(0.72 0.12 85 / 0.1)` }}>
        <div className="container">
          <div className="reveal text-center mb-10">
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.6rem",
                letterSpacing: "0.35em",
                color: GOLD,
                textTransform: "uppercase",
                marginBottom: "0.75rem",
                opacity: 0.8,
              }}
            >
              Official Teaser
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 600,
                color: CREAM,
                letterSpacing: "0.03em",
                marginBottom: "0.5rem",
              }}
            >
              What if Sarajevo Failed?
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "0.95rem",
                color: "oklch(0.5 0.01 85)",
                lineHeight: 1.7,
              }}
            >
              History was not prevented. Only rewritten.
            </p>
          </div>
          <TeaserVideo />
        </div>
      </section>

      {/* ── Trilogy Overview ── */}
      <section style={{ backgroundColor: DARK_CARD, padding: "6rem 0", borderTop: `1px solid oklch(0.72 0.12 85 / 0.1)` }}>
        <div className="container">
          <div className="reveal text-center mb-12">
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                color: GOLD,
                textTransform: "uppercase",
                marginBottom: "0.75rem",
                opacity: 0.8,
              }}
            >
              A Trilogy
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
                color: CREAM,
                letterSpacing: "0.03em",
              }}
            >
              The Danubian Throne
            </h2>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-8" style={{ maxWidth: "900px", margin: "0 auto" }}>
            {[
              {
                number: "I",
                title: "The Overwrite",
                status: "Coming Soon",
                available: false,
                description: "Crown Prince Leopold uncovers signals that should not exist — and a truth buried since Sarajevo. The Empire was never saved. It was replaced.",
              },
              {
                number: "II",
                title: "Forthcoming",
                status: "In preparation",
                available: false,
                description: "The second volume of the trilogy. Details to be announced.",
              },
              {
                number: "III",
                title: "Forthcoming",
                status: "In preparation",
                available: false,
                description: "The concluding volume of the trilogy. Details to be announced.",
              },
            ].map((book, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  border: `1px solid oklch(0.72 0.12 85 / ${i === 0 ? "0.4" : "0.15"})`,
                  background: i === 0 ? "oklch(0.14 0.008 285)" : "oklch(0.11 0.005 285)",
                  padding: "2rem",
                  position: "relative",
                  textAlign: "center",
                }}
              >
                {i === 0 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-1px",
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: GOLD,
                    }}
                  />
                )}
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "2.5rem",
                    color: i === 0 ? GOLD : "oklch(0.3 0.01 85)",
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: "1rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {book.number}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: i === 0 ? CREAM : "oklch(0.4 0.01 85)",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.03em",
                  }}
                >
                  {book.title}
                </h3>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "0.8rem",
                    color: i === 0 ? GOLD : "oklch(0.35 0.01 85)",
                    marginBottom: "1rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {book.status}
                </div>
                <div style={{ width: "32px", height: "1px", background: i === 0 ? GOLD : "oklch(0.25 0.01 85)", margin: "0 auto 1rem", opacity: 0.5 }} />
                <p
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                    fontSize: "0.85rem",
                    lineHeight: 1.75,
                    color: i === 0 ? "oklch(0.6 0.01 85)" : "oklch(0.35 0.01 85)",
                  }}
                >
                  {book.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Notification Sign-up ── */}
      <section style={{ backgroundColor: DARK, padding: "6rem 0", borderTop: `1px solid oklch(0.72 0.12 85 / 0.1)` }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ width: "48px", height: "1px", background: GOLD, margin: "0 auto 2rem", opacity: 0.4 }} />
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
              Be the First to Know
            </div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 600,
                color: CREAM,
                letterSpacing: "0.03em",
                marginBottom: "1rem",
              }}
            >
              Publication Announcement
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1rem",
                color: "oklch(0.55 0.01 85)",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
              }}
            >
              Leave your address and we will notify you when <em>The Overwrite</em> is available for purchase.
            </p>

            {submitted ? (
              <div
                style={{
                  border: `1px solid oklch(0.72 0.12 85 / 0.3)`,
                  padding: "2rem",
                  background: DARK_CARD,
                }}
              >
                <div style={{ width: "40px", height: "40px", border: `1px solid ${GOLD}`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "1.05rem",
                    color: "oklch(0.65 0.01 85)",
                    lineHeight: 1.7,
                  }}
                >
                  Your address has been received. You will be among the first to hear when <em>The Overwrite</em> is published.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", gap: "0", border: `1px solid oklch(0.72 0.12 85 / 0.3)` }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your electronic address"
                    required
                    style={{
                      flex: 1,
                      padding: "0.85rem 1.25rem",
                      background: DARK_CARD,
                      border: "none",
                      outline: "none",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "0.95rem",
                      color: CREAM,
                      minWidth: 0,
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: "0.85rem 1.5rem",
                      background: GOLD,
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.55rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: DARK,
                      fontWeight: 600,
                      flexShrink: 0,
                      transition: "background 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "oklch(0.78 0.14 85)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = GOLD)}
                  >
                    Notify Me
                  </button>
                </div>
                <p
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.45rem",
                    letterSpacing: "0.15em",
                    color: "oklch(0.35 0.01 85)",
                    textTransform: "uppercase",
                  }}
                >
                  Your address will be used solely for publication announcements.
                </p>
              </form>
            )}

            <div style={{ width: "48px", height: "1px", background: GOLD, margin: "2.5rem auto 0", opacity: 0.4 }} />

            {/* Direct contact */}
            <div style={{ marginTop: "2rem" }}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                  color: "oklch(0.4 0.01 85)",
                  lineHeight: 1.7,
                  marginBottom: "0.5rem",
                }}
              >
                For enquiries regarding rights, translation, or publication:
              </p>
              <a
                href="mailto:soloahpublishing2025@gmail.com"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  color: GOLD,
                  textDecoration: "none",
                  borderBottom: `1px solid oklch(0.72 0.12 85 / 0.3)`,
                  paddingBottom: "2px",
                  transition: "color 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.85 0.14 85)";
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "oklch(0.85 0.14 85 / 0.6)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = GOLD;
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "oklch(0.72 0.12 85 / 0.3)";
                }}
              >
                soloahpublishing2025@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
