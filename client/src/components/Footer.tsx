/*
 * Footer — Imperial Modernism / Vienna Secession Reborn
 * Dark section with gold ornament, dynasty motto, and navigation links
 */
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "oklch(0.06 0.005 285)",
        borderTop: "1px solid oklch(0.72 0.12 85 / 0.2)",
      }}
    >
      {/* Ornamental top border */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent 0%, oklch(0.72 0.12 85 / 0.5) 50%, transparent 100%)" }} />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="flex flex-col items-start gap-4">
            <img
              src="/manus-storage/coat_of_arms_fd3008ef.png"
              alt="Imperial Coat of Arms"
              className="w-16 h-auto opacity-90"
            />
            <div>
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.25em",
                  color: "oklch(0.72 0.12 85)",
                  textTransform: "uppercase",
                  marginBottom: "0.25rem",
                }}
              >
                Imperial House
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  color: "oklch(0.88 0.015 85)",
                }}
              >
                Austria-Danubio
              </div>
            </div>
            {/* Motto */}
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "0.9rem",
                color: "oklch(0.72 0.12 85)",
                borderLeft: "2px solid oklch(0.72 0.12 85 / 0.5)",
                paddingLeft: "0.75rem",
                marginTop: "0.5rem",
              }}
            >
              "Aquila et Flumen in Aeternum"
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h4
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                color: "oklch(0.72 0.12 85)",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/history", label: "History" },
                { href: "/family", label: "The Imperial Family" },
                { href: "/traditions", label: "Traditions" },
                { href: "/heraldry", label: "Heraldry" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontSize: "0.9rem",
                      color: "oklch(0.65 0.01 85)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    className="hover:text-yellow-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Info column */}
          <div>
            <h4
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                color: "oklch(0.72 0.12 85)",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Imperial Chancery
            </h4>
            <div
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "0.9rem",
                color: "oklch(0.65 0.01 85)",
                lineHeight: 1.8,
              }}
            >
              <p>Palais Danubio</p>
              <p>Kaiserstrasse 1, Neustadt</p>
              <p>Danubio, A-1010</p>
              <p style={{ marginTop: "0.75rem" }}>chancery@imperial-danubio.at</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid oklch(0.72 0.12 85 / 0.15)",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Secession ornament */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
            <div style={{ width: "40px", height: "1px", background: "oklch(0.72 0.12 85 / 0.4)" }} />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="6" y="0" width="4" height="4" fill="oklch(0.72 0.12 85 / 0.6)" />
              <rect x="0" y="6" width="4" height="4" fill="oklch(0.72 0.12 85 / 0.6)" />
              <rect x="12" y="6" width="4" height="4" fill="oklch(0.72 0.12 85 / 0.6)" />
              <rect x="6" y="12" width="4" height="4" fill="oklch(0.72 0.12 85 / 0.6)" />
              <rect x="6" y="6" width="4" height="4" fill="oklch(0.72 0.12 85)" />
            </svg>
            <div style={{ width: "40px", height: "1px", background: "oklch(0.72 0.12 85 / 0.4)" }} />
          </div>
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: "oklch(0.45 0.01 85)",
              textTransform: "uppercase",
            }}
          >
            © MMXXVI Imperial House of Austria-Danubio — All Rights Reserved
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "0.75rem",
              color: "oklch(0.35 0.008 85)",
            }}
          >
            This is a fictional institution created for literary purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
