/**
 * Christening Invitation — Imperial Twins Franz & Alida
 * Style: Formal imperial, dark blue/gold, matching portrait aesthetic
 * Audio: Der Walzer der Zwillinge
 */
import { useEffect, useRef, useState } from "react";

export default function ChristeningInvitation() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleFirstClick = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.currentTime = 15; // skip intro
        audioRef.current.volume = 0.4;
        audioRef.current.play();
        setIsPlaying(true);
        setHasInteracted(true);
      }
    };
    document.addEventListener("click", handleFirstClick, { once: true });
    return () => document.removeEventListener("click", handleFirstClick);
  }, [hasInteracted]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a0e1a 0%, #1a2040 30%, #0d1225 70%, #080b14 100%)",
        color: "#d4af37",
        fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Audio */}
      <audio ref={audioRef} loop>
        <source src="/manus-storage/der-walzer-der-zwillinge_733b0b40.mp3" type="audio/mpeg" />
      </audio>

      {/* Audio control */}
      <button
        onClick={toggleAudio}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "rgba(212, 175, 55, 0.15)",
          border: "1px solid rgba(212, 175, 55, 0.4)",
          color: "#d4af37",
          fontSize: "1.2rem",
          cursor: "pointer",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
        }}
      >
        {isPlaying ? "♪" : "▶"}
      </button>

      {/* Decorative border frame */}
      <div
        style={{
          position: "absolute",
          inset: "1.5rem",
          border: "1px solid rgba(212, 175, 55, 0.25)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "2rem",
          border: "1px solid rgba(212, 175, 55, 0.12)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        {/* Imperial crest / cross */}
        <div
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            opacity: 0.7,
            letterSpacing: "0.5rem",
          }}
        >
          ✠
        </div>

        {/* Addressed to */}
        <p
          style={{
            fontSize: "0.85rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(212, 175, 55, 0.6)",
            marginBottom: "0.5rem",
          }}
        >
          Gerichtet an
        </p>
        <p
          style={{
            fontSize: "1.1rem",
            fontStyle: "italic",
            color: "#c9b06b",
            marginBottom: "2.5rem",
            lineHeight: 1.6,
          }}
        >
          Ihre Königliche Hoheit Prinzessin Astrid von Belgien
          <br />
          <span style={{ fontSize: "0.85rem", opacity: 0.7 }}>
            Palais Royal, Brüssel
          </span>
        </p>

        {/* Separator */}
        <div
          style={{
            width: "120px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
            margin: "0 auto 2.5rem",
          }}
        />

        {/* Main heading */}
        <p
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(212, 175, 55, 0.5)",
            marginBottom: "0.5rem",
          }}
        >
          Das Kaiserliche Haus Österreich-Donau
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 400,
            letterSpacing: "0.05em",
            marginBottom: "0.5rem",
            lineHeight: 1.2,
            color: "#d4af37",
          }}
        >
          Kaiserliche Taufe
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            fontStyle: "italic",
            color: "#c9b06b",
            marginBottom: "3rem",
          }}
        >
          der Zwillinge des Kronprinzenpaares
        </p>

        {/* Parents portraits */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          {/* Leopold */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "200px",
                height: "300px",
                borderRadius: "8px",
                overflow: "hidden",
                border: "2px solid rgba(212, 175, 55, 0.4)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src="/manus-storage/D001DC1C-AB7E-43F7-AD6B-6C87828E1F5A_aa496ceb.png"
                alt="Crown Prince Leopold"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p style={{ fontSize: "0.75rem", marginTop: "0.75rem", letterSpacing: "0.15em", opacity: 0.7 }}>
              S.K.u.K.H. KRONPRINZ LEOPOLD
            </p>
          </div>

          {/* Ampersand */}
          <div style={{ fontSize: "2rem", opacity: 0.5, fontStyle: "italic" }}>&</div>

          {/* Katharina */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "200px",
                height: "300px",
                borderRadius: "8px",
                overflow: "hidden",
                border: "2px solid rgba(212, 175, 55, 0.4)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663301701844/DGTyc4b55NDjb7mPZJGomf/katharina_portrait-QVyzXs7tHYizCuTy8rKDN8.webp"
                alt="Crown Princess Katharina"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <p style={{ fontSize: "0.75rem", marginTop: "0.75rem", letterSpacing: "0.15em", opacity: 0.7 }}>
              I.K.u.K.H. KRONPRINZESSIN KATHARINA
            </p>
          </div>
        </div>

        {/* Separator */}
        <div
          style={{
            width: "80px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
            margin: "0 auto 2.5rem",
          }}
        />

        {/* Invitation text */}
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "#c9b06b",
            maxWidth: "650px",
            margin: "0 auto 2.5rem",
          }}
        >
          Seine Kaiserliche und Königliche Apostolische Majestät Kaiser Maximilian I.
          und Ihre Kaiserlichen und Königlichen Hoheiten Kronprinz Leopold und
          Kronprinzessin Katharina von Habsburg-Danubio geben sich die Ehre,
          Eure Königliche Hoheit zur feierlichen Taufe ihrer Kinder einzuladen:
        </p>

        {/* The Twins */}
        <div
          style={{
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
              margin: "0 auto 2rem",
              borderRadius: "12px",
              overflow: "hidden",
              border: "2px solid rgba(212, 175, 55, 0.3)",
              boxShadow: "0 12px 48px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src="/manus-storage/4489484D-8D74-4871-B7DD-A5F33021A003_a5db4ac1.png"
              alt="The Imperial Twins"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* Twin names and titles */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          {/* Franz */}
          <div style={{ textAlign: "center", maxWidth: "300px" }}>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", opacity: 0.6, marginBottom: "0.3rem" }}>
              SEINE KAISERLICHE UND KÖNIGLICHE HOHEIT
            </p>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 400,
                marginBottom: "0.5rem",
                color: "#d4af37",
              }}
            >
              Kronprinz Franz
            </h2>
            <p style={{ fontSize: "0.85rem", color: "#c9b06b", lineHeight: 1.6 }}>
              von Habsburg-Danubio
              <br />
              Kronprinz von Österreich
              <br />
              Erzherzog von Neustadt
              <br />
              Prinz der Donauländer
            </p>
          </div>

          {/* Alida */}
          <div style={{ textAlign: "center", maxWidth: "300px" }}>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", opacity: 0.6, marginBottom: "0.3rem" }}>
              IHRE KAISERLICHE UND KÖNIGLICHE HOHEIT
            </p>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 400,
                marginBottom: "0.5rem",
                color: "#d4af37",
              }}
            >
              Erzherzogin Alida
            </h2>
            <p style={{ fontSize: "0.85rem", color: "#c9b06b", lineHeight: 1.6 }}>
              von Habsburg-Danubio
              <br />
              Erzherzogin von Österreich
              <br />
              Großherzogin der Ostmarken
              <br />
              Prinzessin der Donauländer
            </p>
          </div>
        </div>

        {/* Separator */}
        <div
          style={{
            width: "60px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
            margin: "0 auto 2.5rem",
          }}
        />

        {/* Ceremony details */}
        <div
          style={{
            background: "rgba(212, 175, 55, 0.04)",
            border: "1px solid rgba(212, 175, 55, 0.15)",
            borderRadius: "8px",
            padding: "2rem",
            maxWidth: "550px",
            margin: "0 auto 3rem",
          }}
        >
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", marginBottom: "1rem", opacity: 0.6 }}>
            ZEREMONIE
          </p>
          <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Stephansdom zu Wien
          </p>
          <p style={{ fontSize: "0.95rem", color: "#c9b06b", marginBottom: "1rem" }}>
            Sonntag, den 14. September 2026
            <br />
            um elf Uhr vormittags
          </p>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "rgba(212, 175, 55, 0.3)",
              margin: "1rem auto",
            }}
          />
          <p style={{ fontSize: "0.85rem", color: "#c9b06b", fontStyle: "italic" }}>
            Empfang im Anschluss in der Hofburg
            <br />
            Großer Redoutensaal
          </p>
        </div>

        {/* RSVP */}
        <p
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            color: "rgba(212, 175, 55, 0.5)",
            marginBottom: "1rem",
          }}
        >
          U.A.w.g. an das Obersthofmeisteramt, Hofburg, Wien
        </p>

        {/* Closing */}
        <div style={{ marginTop: "3rem", opacity: 0.6 }}>
          <p style={{ fontSize: "0.8rem", fontStyle: "italic" }}>
            „Aquila et Flumen in Aeternum"
          </p>
          <p style={{ fontSize: "2rem", marginTop: "1rem" }}>✠</p>
        </div>

        {/* Click to play hint */}
        {!hasInteracted && (
          <p
            style={{
              position: "fixed",
              bottom: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: "rgba(212, 175, 55, 0.4)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          >
            KLICKEN SIE, UM DIE MUSIK ZU STARTEN
          </p>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
