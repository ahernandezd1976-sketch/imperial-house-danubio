/*
 * Traditions Page — Imperial Modernism / Vienna Secession Reborn
 * Imperial ceremonies, customs, and cultural traditions
 */
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GOLD = "oklch(0.72 0.12 85)";
const DARK = "oklch(0.09 0.005 285)";
const CREAM = "oklch(0.96 0.015 85)";

function HymnPlayer({ src, isDark }: { src: string; isDark: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
    } else {
      a.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  const handleTimeUpdate = () => {
    const a = audioRef.current;
    if (!a || !a.duration) return;
    setProgress((a.currentTime / a.duration) * 100);
  };

  const handleEnded = () => setPlaying(false);

  const textColor = isDark ? "oklch(0.75 0.01 85)" : "oklch(0.35 0.005 285)";
  const borderColor = isDark ? "oklch(0.72 0.12 85 / 0.2)" : "oklch(0.72 0.12 85 / 0.3)";
  const bgColor = isDark ? "oklch(0.12 0.005 285)" : "oklch(0.72 0.12 85 / 0.06)";

  return (
    <div style={{ marginTop: "1.5rem", padding: "1.25rem 1.5rem", border: `1px solid ${borderColor}`, background: bgColor, display: "flex", alignItems: "center", gap: "1.25rem" }}>
      <audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate} onEnded={handleEnded} />
      <button
        onClick={toggle}
        style={{
          width: "44px", height: "44px", borderRadius: "50%",
          border: `1px solid ${GOLD}`, background: "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", flexShrink: 0,
        }}
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill={GOLD}>
            <rect x="1" y="1" width="4" height="12" />
            <rect x="9" y="1" width="4" height="12" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill={GOLD}>
            <polygon points="2,1 13,7 2,13" />
          </svg>
        )}
      </button>
      <div style={{ flex: 1 }}>
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.3em", color: GOLD, textTransform: "uppercase", marginBottom: "0.5rem", opacity: 0.8 }}>The Danubian Hymn</p>
        <div style={{ height: "2px", background: isDark ? "oklch(0.25 0.005 285)" : "oklch(0.85 0.01 85)", borderRadius: "1px", overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${progress}%`, background: GOLD, transition: "width 0.5s linear", borderRadius: "1px" }} />
        </div>
      </div>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "0.8rem", color: textColor, flexShrink: 0 }}>Listen</p>
    </div>
  );
}

const traditions = [
  {
    numeral: "I",
    title: "The Proclamation of the Emperor",
    subtitle: "Accession by Dynastic Right",
    description: "The title of Emperor of Austria-Danubio has never been conferred by coronation. By the constitutional tradition of the Imperial House, the sovereign accedes to the Imperial dignity by right of birth and dynastic succession — the moment the previous Emperor dies or abdicates, his heir is Emperor by the very fact of succession, without any ceremony of crowning. This principle, rooted in the ancient Pragmatic Sanction of 1713, distinguishes the Austrian Imperial dignity from other European monarchies. The accession is proclaimed publicly from the balcony of the Hofburg by the Grand Chamberlain, who announces the new sovereign's full style and titles to the assembled court and people. The Federation Crown — commissioned by Emperor Franz Ferdinand I in 1920, completed in 1923, crafted in platinum and set with pearls, diamonds, rubies, sapphires and emeralds, its fourteen towers representing the fourteen constituent states of the Federation — is a symbol of dynastic continuity displayed at state occasions, not an instrument of coronation. The sole coronation rite observed by the dynasty is the separate and ancient ceremony of the Coronation as Apostolic King of Hungary, performed in Budapest with the Holy Crown of Saint Stephen, the sacred regalia of the Hungarian kingdom.",
    detail: "The Proclamation is made from the Hofburg within 24 hours of accession. The Hungarian Coronation in Budapest follows within the first year of the new reign, in accordance with the constitutional laws of the Hungarian Crown.",
  },
  {
    numeral: "II",
    title: "The Feast of the Eagle",
    subtitle: "Annual Imperial Celebration",
    description: "Held each year on the 17th of October — the anniversary of the Treaty of Vienna and the founding of the Danubian Federation — the Feast of the Eagle is the principal public celebration of the Imperial House. The day begins with a solemn Mass at the Cathedral, followed by a military parade along the Kaiserstrasse. In the afternoon, the Emperor and Empress receive representatives of all seven constituent states of the Confederation in the Grand Hall of the Hofburg Imperial Palace. The evening concludes with a state banquet and a fireworks display over the Danube, a tradition begun by Emperor Franz Ferdinand I in 1918.",
    detail: "Public holiday throughout the Danubian Confederation. The Feast has been celebrated without interruption since 1917, even during the years of the Second World War.",
  },
  {
    numeral: "III",
    title: "The Investiture of the Order of the Golden Eagle",
    subtitle: "The Highest Imperial Honour",
    description: "The Order of the Golden Eagle, founded by Emperor Franz Ferdinand I in 1917 upon the proclamation of the Danubian Federation, is the highest honour the Emperor may bestow. The investiture ceremony is held in the Throne Room of the Hofburg Imperial Palace on the Feast of the Eagle. Recipients — never more than twelve living members at any time — are invested with the Order's insignia: a golden eagle pendant suspended from a black and gold ribbon, a star of eight points, and a ceremonial mantle of black velvet lined with gold silk. The ceremony includes the reading of the recipient's citation, the Emperor's personal investiture, and a formal oath of loyalty to the Confederation.",
    detail: "The Order has been awarded 94 times since its founding. Current living members include three heads of state, two Nobel laureates, and one reigning monarch.",
  },
  {
    numeral: "IV",
    title: "The Blessing of the Danube",
    subtitle: "Rite of the River",
    description: "On the first Sunday of each April, the Emperor and the Patriarch of Neustadt lead a procession to the banks of the Danube for the ancient Blessing of the River. The ceremony, which predates the founding of the Imperial House and is believed to derive from a pre-Christian Danubian rite, involves the casting of a golden wreath into the river and the recitation of prayers for the safety of all who live and work along its banks. The tradition was nearly abandoned during the constitutional reforms of 1918 but was preserved at the personal insistence of Emperor Franz-Josef II, who regarded it as an expression of the Confederation's unity with its natural heritage.",
    detail: "The ceremony is open to the public. Attendance typically exceeds 50,000 along the riverside.",
  },
  {
    numeral: "V",
    title: "The Imperial Hunt",
    subtitle: "Tradition of the Autumn Court",
    description: "Each October, the Imperial Court retires to the Hunting Lodge of Schwarzenwald in the Eastern Marches for the Imperial Hunt — a tradition established by Emperor Karl-Josef I and continued by every subsequent sovereign. The Hunt lasts three days and is attended by members of the Imperial Family, senior ministers of state, and invited guests from the diplomatic corps. The occasion combines ceremonial hunting with formal dinners, musical performances, and private diplomatic conversations. The Hunt is regarded as one of the most important informal diplomatic events in the Danubian calendar.",
    detail: "The Hunting Lodge was built in 1893 and is a protected monument of the Danubian Confederation.",
  },
  {
    numeral: "VI",
    title: "The Imperial Court Balls",
    subtitle: "The Vienna Season · January",
    description: "Every year towards the end of January, the Imperial Court girds itself for the ball season; elaborate preparations are necessary for the Court to present itself in its full splendour. Two balls are held at the Hofburg: the Court Ball and, two weeks later, the Ball at Court. The Court Ball is the state ball of the Danubian Monarchy — around two thousand guests are invited, including Court society, high-ranking representatives from politics and the Church, and the serving officers of the Vienna garrison. Only the highest-ranking guests receive a personal invitation from the Emperor; the rest of the Court is informed that their appearance is requested via an official bulletin. The ball officially starts at eight o’clock in the evening. At half-past eight the Obersthofmeister reports to the Emperor that the guests have arrived; the imperial family makes its entrance at around half-past nine, at which point the court ball orchestra strikes up. Dancing is of secondary importance — the climax of the evening is the Cercle, when one exchanges a few words with Their Imperial Majesties. Until aristocratic young ladies have been presented to the Imperial Family, they cannot ‘come out’ in society. The Ball ends at midnight when the Imperial Family withdraws; guests depart with the famous Court bonbonnières, a coveted souvenir. The Ball at Court, held two weeks later, is the more socially exclusive event: no more than 700 guests are invited, all personally, from the crème de la crème of the aristocracy who are ‘presentable at Court’. It is a correspondingly more intimate occasion, with a fine dinner served at table rather than a buffet.",
    detail: "Court Ball: last Friday of January, from 20:00. Ball at Court: two weeks later, by personal Imperial invitation only. Dress: white tie and decorations. Guests receive the Court bonbonnières upon departure. — By ancient tradition, the date of the Court Ball is fixed by the Empress. Since the passing of Her Imperial Majesty Empress Maria-Theresa of Austria-Danubio, this honour has been assumed by Her Imperial Highness Archduchess Alexis von Habsburg-Danubio, Princess of the Danubian Federation, who each year sets the date of the Ball in the name of the Imperial Household.",
  },
  {
    numeral: "VII",
    title: "The Spring Ball",
    subtitle: "The Garden Season · Early June",
    description: "Held in the first week of June in the illuminated gardens of Schönbrunn Palace, the Spring Ball marks the opening of the summer season and is the most celebrated of the outdoor Imperial entertainments. Unlike the January Court Balls, which are held by Imperial invitation, the Spring Ball is open to a wider circle of guests drawn from the cultural, academic, and civic life of the Confederation. The Schönbrunn gardens are lit by thousands of lanterns for the occasion; dancing takes place on the great terrace before the Gloriette, with the lights of Vienna spread below. The Ball was established in 1926 by Emperor Franz Ferdinand I as a gesture of openness toward the broader society of the Federation, and has been held annually ever since.",
    detail: "Held on the first Saturday of June. Dress: evening dress. Tickets are available to the public by application to the Imperial Chamberlain's Office from the 1st of March each year.",
  },
  {
    numeral: "VIII",
    title: "Federation Day",
    subtitle: "Public Holiday · 17 March",
    description: "Celebrated on the 17th of March each year, Federation Day commemorates the signing of the Acta Danubiana on the 20th of July 1914 — the founding act by which the Danubian Confederation was first conceived — and the subsequent ratification of the Treaty of Vienna in the spring of 1917. The date of the 17th of March was chosen by Emperor Franz Ferdinand I himself as the day on which the Federal Constitution was formally adopted by the Constitutional Assembly of Neustadt. It is the principal national holiday of the Danubian Confederation, observed across all fourteen constituent states and associated kingdoms with public celebrations, military parades, and the opening of the Imperial gardens to the public.",
    detail: "Public holiday throughout the Danubian Confederation. All government offices, schools, and courts are closed. The Emperor delivers a national address from the Hofburg balcony.",
  },
  {
    numeral: "IX",
    title: "The Imperial Birthday",
    subtitle: "Public Holiday · 21 June",
    description: "The 21st of June — the summer solstice — is the birthday of His Imperial Majesty Emperor Maximilian II, and is observed as a public holiday throughout the Danubian Confederation. The day is marked by a solemn Te Deum at the Cathedral of Neustadt, a military review on the Kaiserplatz, and a public reception at the Hofburg at which the Emperor receives delegations from each of the fourteen constituent states. In the evening, the Imperial Box at the Neustadt Opera is traditionally occupied by the Emperor and members of the Imperial Family for a gala performance in his honour. The birthday of the reigning sovereign has been a public holiday since the reign of Emperor Franz Ferdinand I.",
    detail: "Public holiday throughout the Danubian Confederation. The Hofburg gardens are open to the public from 10:00 to sunset. A fireworks display over the Danube concludes the celebrations.",
  },
  {
    numeral: "X",
    title: "Konopiště Day",
    subtitle: "Public Holiday · 28 October",
    description: "Konopiště Day, observed on the 28th of October, commemorates the secret conference held at Konopiště Castle in Bohemia in the autumn of 1913, at which Archduke Franz Ferdinand first proposed the strategic realignment of Austria-Hungary away from the German alliance and toward a new understanding with Britain and France. The conference, long classified and only fully declassified in 2025, is now recognised as the moment at which the idea of the Danubian Federation was born. The holiday is observed with particular solemnity in Bohemia and with civic celebrations in Vienna and Neustadt. It is a day of reflection on the diplomatic courage that prevented the Great War and gave birth to the Confederation.",
    detail: "Public holiday throughout the Danubian Confederation. The Konopiště Castle in Bohemia is open to the public free of charge on this day. Academic symposia and public lectures on the history of the Federation are held across the member states.",
  },
  {
    numeral: "XI",
    title: "The New Year's Concert",
    audio: "/manus-storage/untitled_f960cf21.mp3",
    subtitle: "A Gift to the Confederation",
    description: "On the first day of each year, the Neustadt Philharmonic performs the Imperial New Year's Concert in the Grand Hall of the Hofburg Imperial Palace, broadcast live to the entire Danubian Confederation and to audiences in over forty countries. The concert, established in 1923, always concludes with the performance of the Danubian Hymn and the Emperor's New Year's address to the nation. The programme traditionally includes works by Danubian composers alongside the great masters of the European tradition.",
    detail: "The concert has been broadcast internationally since 1955. Tickets for the live performance are allocated by public lottery.",
  },
];

export default function Traditions() {
  const { t, language } = useLanguage();

  // Spanish translations for tradition items
  const tradEs: Record<string, { title: string; subtitle: string; desc: string }> = {
    "The Proclamation of the Emperor": { title: t("trad.proc.title"), subtitle: t("trad.proc.subtitle"), desc: t("trad.proc.desc") },
    "The Feast of the Eagle": { title: t("trad.eagle.title"), subtitle: t("trad.eagle.subtitle"), desc: t("trad.eagle.desc") },
    "The Investiture of the Order of the Golden Eagle": { title: t("trad.order.title"), subtitle: t("trad.order.subtitle"), desc: t("trad.order.desc") },
    "The Blessing of the Danube": { title: t("trad.danube.title"), subtitle: t("trad.danube.subtitle"), desc: t("trad.danube.desc") },
    "The Imperial Hunt": { title: t("trad.hunt.title"), subtitle: t("trad.hunt.subtitle"), desc: t("trad.hunt.desc") },
    "The Imperial Court Balls": { title: t("trad.courtball.title"), subtitle: t("trad.courtball.subtitle"), desc: t("trad.courtball.desc") },
    "The Spring Ball": { title: t("trad.spring.title"), subtitle: t("trad.spring.subtitle"), desc: t("trad.spring.desc") },
    "Federation Day": { title: t("trad.federation.title"), subtitle: t("trad.federation.subtitle"), desc: t("trad.federation.desc") },
    "The Imperial Birthday": { title: t("trad.birthday.title"), subtitle: t("trad.birthday.subtitle"), desc: t("trad.birthday.desc") },
    "Konopiště Day": { title: t("trad.konopiste.title"), subtitle: t("trad.konopiste.subtitle"), desc: t("trad.konopiste.desc") },
    "The New Year\'s Concert": { title: t("trad.newyear.title"), subtitle: t("trad.newyear.subtitle"), desc: t("trad.newyear.desc") },
  };
  const getTrad = (t_item: { title: string; subtitle: string; description: string }) => {
    if (language === "en") return t_item;
    const es = tradEs[t_item.title];
    if (es) return { title: es.title, subtitle: es.subtitle, description: es.desc };
    return t_item;
  };

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
            {t("trad.pretitle")}
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
            Imperial <span style={{ color: GOLD }}>Traditions</span>
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.1rem",
              color: "oklch(0.65 0.01 85)",
              maxWidth: "600px",
              lineHeight: 1.7,
            }}
          >
            The ceremonies, customs, and rites that have defined the {t("trad.pretitle")} across generations.
          </p>
        </div>
      </section>

      {/* Traditions list */}
      {traditions.map((trad, i) => (
        <section
          key={i}
          style={{
            backgroundColor: i % 2 === 0 ? CREAM : DARK,
            padding: "5rem 0",
          }}
        >
          <div className="container">
            <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Numeral column */}
              <div className="lg:col-span-2 flex flex-col items-start">
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "4rem",
                    fontWeight: 700,
                    color: i % 2 === 0 ? "oklch(0.72 0.12 85 / 0.15)" : "oklch(0.72 0.12 85 / 0.12)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {trad.numeral}
                </div>
                <div
                  style={{
                    width: "2px",
                    height: "60px",
                    background: `linear-gradient(to bottom, ${GOLD}, transparent)`,
                    marginTop: "0.5rem",
                  }}
                />
              </div>

              {/* Content */}
              <div className="lg:col-span-10">
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.25em",
                    color: GOLD,
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                    opacity: 0.8,
                  }}
                >
                  {getTrad(trad).subtitle}
                </div>
                <h2
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    fontWeight: 600,
                    color: i % 2 === 0 ? DARK : CREAM,
                    lineHeight: 1.2,
                    marginBottom: "1.5rem",
                    letterSpacing: "0.03em",
                  }}
                >
                  {getTrad(trad).title}
                </h2>
                <p
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                    fontSize: "1.05rem",
                    lineHeight: 1.9,
                    color: i % 2 === 0 ? "oklch(0.25 0.005 285)" : "oklch(0.75 0.01 85)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {getTrad(trad).description}
                </p>
                <div
                  style={{
                    padding: "1rem 1.25rem",
                    borderLeft: `3px solid ${GOLD}`,
                    background: i % 2 === 0 ? "oklch(0.72 0.12 85 / 0.08)" : "oklch(0.72 0.12 85 / 0.05)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "0.95rem",
                      color: i % 2 === 0 ? "oklch(0.45 0.01 285)" : "oklch(0.65 0.01 85)",
                      lineHeight: 1.7,
                    }}
                  >
                    {trad.detail}
                  </p>
                </div>
                {trad.audio && (
                  <HymnPlayer src={trad.audio} isDark={i % 2 !== 0} />
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Ceremonial calendar */}
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
              Annual Calendar
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
              The Imperial Ceremonial Year
            </h2>
          </div>

          <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { month: "1 January", event: "New Year's Concert", icon: "♩", holiday: false },
              { month: "January · 2nd Friday", event: "First Court Ball", icon: "♥", holiday: false },
              { month: "January · Last Friday", event: "Second Court Ball", icon: "♥", holiday: false },
              { month: "17 March", event: "Federation Day", icon: "⚑", holiday: true },
              { month: "April", event: "Blessing of the Danube", icon: "〰", holiday: false },
              { month: "June · 1st Saturday", event: "The Spring Ball", icon: "✿", holiday: false },
              { month: "21 June", event: "Imperial Birthday", icon: "✦", holiday: true },
              { month: "September", event: "Imperial Investiture", icon: "◈", holiday: false },
              { month: "17 October", event: "Feast of the Eagle", icon: "✶", holiday: false },
              { month: "28 October", event: "Konopiště Day", icon: "◆", holiday: true },
              { month: "November", event: "Day of Remembrance", icon: "✝", holiday: false },
              { month: "December", event: "Imperial Christmas Mass", icon: "❄", holiday: false },
              { month: "As Required", event: "Rite of Coronation", icon: "♛", holiday: false },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  border: `1px solid oklch(0.72 0.12 85 / 0.15)`,
                  padding: "1.5rem",
                  background: "oklch(0.12 0.005 285)",
                  transitionDelay: `${i * 0.08}s`,
                }}
                className="reveal"
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    color: GOLD,
                    marginBottom: "0.75rem",
                    opacity: 0.7,
                  }}
                >
                  {item.icon}
                </div>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: GOLD,
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                    opacity: 0.7,
                  }}
                >
                  {item.month}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: CREAM,
                    marginBottom: item.holiday ? "0.5rem" : 0,
                  }}
                >
                  {item.event}
                </div>
                {item.holiday && (
                  <div style={{
                    display: "inline-block",
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.45rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: GOLD,
                    border: `1px solid oklch(0.72 0.12 85 / 0.4)`,
                    padding: "0.2rem 0.5rem",
                  }}>
                    Public Holiday
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
