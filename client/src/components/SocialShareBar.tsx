import { useState } from "react";

const GOLD = "oklch(0.72 0.12 85)";
const DARK = "oklch(0.11 0.005 285)";

export function SocialShareBar() {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const siteUrl = typeof window !== "undefined" ? window.location.href : "https://www.thedanubianthrone.com";
  const shareText = "The Imperial House of Austria-Danubio — Guardians of the Danube";

  const handleCopy = () => {
    navigator.clipboard.writeText(siteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      name: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
      action: () => window.open(`https://www.instagram.com/`, "_blank"),
    },
    {
      name: "TikTok",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11V9.4a6.33 6.33 0 00-.82-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.42a8.16 8.16 0 004.76 1.52V7.5a4.85 4.85 0 01-1-.81z"/>
        </svg>
      ),
      action: () => window.open(`https://www.tiktok.com/`, "_blank"),
    },
    {
      name: "X",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      action: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(siteUrl)}`, "_blank"),
    },
    {
      name: copied ? "Copied!" : "Copy Link",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
        </svg>
      ),
      action: handleCopy,
    },
  ];

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          right: "1.5rem",
          bottom: "1.5rem",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: DARK,
          border: `1px solid ${GOLD}`,
          color: GOLD,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 9999,
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          transition: "transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)",
          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
        }}
        aria-label="Share"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
      </button>

      {/* Share panel */}
      <div
        style={{
          position: "fixed",
          right: "1.5rem",
          bottom: "5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          zIndex: 9998,
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(10px)",
          pointerEvents: isOpen ? "auto" : "none",
          transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        {shareLinks.map((link, i) => (
          <button
            key={link.name}
            onClick={link.action}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.6rem 1rem",
              background: DARK,
              border: `1px solid oklch(0.72 0.12 85 / 0.3)`,
              borderRadius: "8px",
              color: GOLD,
              cursor: "pointer",
              fontFamily: "'Cinzel', serif",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
              transition: "all 0.2s ease",
              transitionDelay: `${i * 40}ms`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = GOLD;
              (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.15 0.01 85)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "oklch(0.72 0.12 85 / 0.3)";
              (e.currentTarget as HTMLButtonElement).style.background = DARK;
            }}
          >
            {link.icon}
            {link.name}
          </button>
        ))}
      </div>
    </>
  );
}
