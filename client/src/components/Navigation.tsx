/*
 * Navigation — Imperial Modernism / Vienna Secession Reborn
 * Dark imperial header with gold accents, Cinzel typography, coat of arms logo
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/history", label: "History" },
  { href: "/family", label: "The Imperial Family" },
  { href: "/traditions", label: "Traditions" },
  { href: "/heraldry", label: "Heraldry" },
  { href: "/properties", label: "Imperial Properties" },
  { href: "/world", label: "The World" },
  { href: "/books", label: "The Danubian Throne" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "oklch(0.07 0.005 285 / 0.97)" : "oklch(0.07 0.005 285 / 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid oklch(0.72 0.12 85 / 0.25)" : "1px solid transparent",
      }}
    >
      {/* Top ornamental strip */}
      <div style={{ height: "2px", background: "linear-gradient(90deg, transparent 0%, oklch(0.72 0.12 85) 30%, oklch(0.72 0.12 85) 70%, transparent 100%)" }} />

      <div className="container">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/manus-storage/coat_of_arms_real_375cb88d.png"
              alt="Imperial Coat of Arms"
              className="w-10 h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.25em",
                  color: "oklch(0.72 0.12 85)",
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                }}
              >
                Imperial House
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "oklch(0.96 0.015 85)",
                  lineHeight: 1.2,
                  fontStyle: "italic",
                }}
              >
                Austria-Danubio
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: isActive ? "oklch(0.72 0.12 85)" : "oklch(0.85 0.01 85)",
                      textDecoration: "none",
                      position: "relative",
                      paddingBottom: "4px",
                      transition: "color 0.3s ease",
                    }}
                    className="nav-link hover:text-yellow-400"
                  >
                    {link.label}
                    {isActive && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "1px",
                          background: "oklch(0.72 0.12 85)",
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "1px",
                  background: "oklch(0.72 0.12 85)",
                  transition: "all 0.3s ease",
                  transformOrigin: "center",
                  transform:
                    menuOpen
                      ? i === 0
                        ? "rotate(45deg) translate(4px, 4px)"
                        : i === 2
                        ? "rotate(-45deg) translate(4px, -4px)"
                        : "scaleX(0)"
                      : "none",
                }}
              />
            ))}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "oklch(0.07 0.005 285 / 0.98)",
            borderTop: "1px solid oklch(0.72 0.12 85 / 0.2)",
          }}
        >
          <ul className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: location === link.href ? "oklch(0.72 0.12 85)" : "oklch(0.85 0.01 85)",
                    textDecoration: "none",
                    display: "block",
                    padding: "0.5rem 0",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
