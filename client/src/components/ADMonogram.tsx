/**
 * Austria-Danubio monogram — recurring Vienna Secession brand device.
 * Square geometry, interlocking initials, and precise gold linework only.
 */
interface ADMonogramProps {
  size?: number;
  label?: string;
}

export default function ADMonogram({ size = 44, label = "Austria-Danubio" }: ADMonogramProps) {
  return (
    <span
      role="img"
      aria-label={label}
      style={{
        position: "relative",
        width: size,
        height: size,
        display: "inline-grid",
        placeItems: "center",
        flexShrink: 0,
        border: "1px solid #D4AF37",
        color: "#F0CA55",
        background: "#0D0D0D",
        fontFamily: "'Cinzel', serif",
        fontSize: `${size * 0.31}px`,
        fontWeight: 700,
        letterSpacing: "-0.08em",
        lineHeight: 1,
        boxShadow: "inset 0 0 0 3px #0D0D0D, inset 0 0 0 4px rgba(212,175,55,0.45)",
      }}
    >
      <span style={{ transform: "translateX(-0.04em)" }}>AD</span>
      {["topLeft", "topRight", "bottomLeft", "bottomRight"].map((corner) => (
        <span
          key={corner}
          aria-hidden="true"
          style={{
            position: "absolute",
            width: Math.max(3, size * 0.09),
            height: Math.max(3, size * 0.09),
            background: "#D4AF37",
            ...(corner.includes("top") ? { top: -2 } : { bottom: -2 }),
            ...(corner.includes("Left") ? { left: -2 } : { right: -2 }),
          }}
        />
      ))}
    </span>
  );
}
