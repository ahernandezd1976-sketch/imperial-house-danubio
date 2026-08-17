// Press page — {t("press.page.title")} · Court Season Special · January 2026
// Design philosophy: Broadsheet editorial aesthetic — serif typography, generous whitespace,
// full-bleed photography, pull quotes in gold, classical column layout.

import { Link } from "wouter";
import { useLanguage } from "../contexts/LanguageContext";

const IMAGES = {
  cortege:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663301701844/DGTyc4b55NDjb7mPZJGomf/court_ball_cortege_entrance_2026f-58PFPZ4Kt79zNqpHSg7Nix.webp",
  ballroom:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663301701844/DGTyc4b55NDjb7mPZJGomf/court_ball_ballroom_2026-ag9gdxHfEGojhMmkrRFVV9.webp",
  drones:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663301701844/DGTyc4b55NDjb7mPZJGomf/court_ball_drones_hofburg_2026-KMjneK7x9r8wgiLBsGJN3t.webp",
  strauss:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663301701844/DGTyc4b55NDjb7mPZJGomf/court_ball_strauss_conductor_2026-myTCkTh5MLwLQB4NVVjUC9.webp",
  debutante:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663301701844/DGTyc4b55NDjb7mPZJGomf/court_ball_debutante_2026-T382LCcytXP7ShNj4UzLdg.webp",
  bonbonniere:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663301701844/DGTyc4b55NDjb7mPZJGomf/court_ball_bonbonniere_2026-ghN6XBLhrLj7RWZo93CVFW.webp",
};

export default function Press() {
  const { t, language } = useLanguage();
  return (
    <div className="min-h-screen bg-[#F5F0E8]" style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}>

      {/* Masthead */}
      <header className="border-b-2 border-[#1a1a1a] py-6 px-6 md:px-16 text-center">
        <p className="text-xs tracking-[0.35em] uppercase text-[#8B7355] mb-1">Die Wiener Eleganz</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
          Court Season Special
        </h1>
        <p className="text-xs tracking-[0.25em] uppercase text-[#8B7355] mt-1">{t("press.page.date")}</p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-24 bg-[#8B7355]" />
          <span className="text-[#8B7355] text-lg">✦</span>
          <div className="h-px flex-1 max-w-24 bg-[#8B7355]" />
        </div>
      </header>

      {/* Hero image — cortège */}
      <div className="relative w-full">
        <img
          src={IMAGES.cortege}
          alt="The Imperial cortège enters the Grand Ballroom of the Hofburg, January 2026"
          className="w-full"
          style={{ display: "block", height: "auto" }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 md:px-16 py-6">
          <p className="text-white/80 text-xs tracking-[0.2em] uppercase">
            {t("press.page.caption.hero")}
          </p>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-6 md:px-8 py-12">

        {/* Headline */}
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-7xl font-bold text-[#1a1a1a] leading-none mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
            The Ball That Never Ends
          </h2>
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="h-px flex-1 max-w-32 bg-[#8B7355]" />
            <span className="text-[#8B7355]">✦</span>
            <div className="h-px flex-1 max-w-32 bg-[#8B7355]" />
          </div>
          <p className="text-sm tracking-[0.2em] uppercase text-[#8B7355]">{t("press.page.byline")}</p>
        <button
          onClick={() => {
            const url = `${window.location.origin}/press?lang=${language}`;
            navigator.clipboard.writeText(url);
            const btn = document.getElementById("copy-link-btn");
            if (btn) { btn.textContent = "✓"; setTimeout(() => btn.textContent = "⎘", 2000); }
          }}
          id="copy-link-btn"
          className="mt-3 text-xs tracking-[0.2em] uppercase px-4 py-1.5 border transition-all duration-200 hover:scale-[0.97]"
          style={{ borderColor: "oklch(0.72 0.12 85 / 0.3)", color: "#8B7355", fontFamily: "'Cinzel', serif" }}
          title="Copy link"
        >⎘</button>
        </div>

        {/* Opening paragraph */}
        <div className="prose-custom mb-10">
          <p className="text-xl md:text-2xl leading-relaxed text-[#2a2a2a] first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:text-[#8B7355]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {t("press.page.intro1")}
          </p>
          <p className="text-lg leading-relaxed text-[#2a2a2a] mt-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {t("press.page.intro2")}
          </p>
        </div>

        {/* Section: The Arrival */}
        <div className="border-t border-[#8B7355] pt-8 mb-10">
          <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6 tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The Arrival
          </h3>
          <p className="text-lg leading-relaxed text-[#2a2a2a] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {t("press.page.arrival.p1")}
          </p>
          <p className="text-lg leading-relaxed text-[#2a2a2a] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {t("press.page.arrival.p2")} <em>"{t("press.page.arrival.quote1")}"</em> she says. <em>"{t("press.page.arrival.quote2")}"</em>
          </p>
          <p className="text-lg leading-relaxed text-[#2a2a2a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {t("press.page.arrival.p3")}
          </p>
        </div>

        {/* Two-column: debutante image + waltz section */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <img
              src={IMAGES.debutante}
              alt="Debutante presentation at the Imperial Court Ball, Hofburg Palace, January 2026"
                          className="w-full"
            style={{ display: "block", height: "auto" }}
          />
            <p className="text-xs text-[#8B7355] tracking-[0.15em] uppercase mt-2">
              {t("press.page.caption.debutante")}
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6 tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              The Waltz Descends
            </h3>
            <p className="text-lg leading-relaxed text-[#2a2a2a] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {t("press.page.waltz.p1")}
            </p>
            {/* Pull quote */}
            <blockquote className="border-l-4 border-[#8B7355] pl-4 my-4">
              <p className="text-xl italic text-[#8B7355]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                "{t("press.page.waltz.quote")}"
              </p>
              <cite className="text-xs tracking-[0.2em] uppercase text-[#8B7355] not-italic">— Johann Leopold Strauss</cite>
            </blockquote>
            <p className="text-lg leading-relaxed text-[#2a2a2a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {t("press.page.waltz.p2")}
            </p>
          </div>
        </div>

        {/* Strauss image full width */}
        <div className="mb-10">
          <img
            src={IMAGES.strauss}
            alt="Johann Leopold Strauss conducts the Imperial Court Orchestra, Hofburg Grand Ballroom, January 2026"
            className="w-full"
            style={{ display: "block", height: "auto" }}
          />
          <p className="text-xs text-[#8B7355] tracking-[0.15em] uppercase mt-2">
            {t("press.page.caption.strauss")}
          </p>
        </div>

        {/* Ballroom waltz section */}
        <div className="grid md:grid-cols-2 gap-8 mb-10 items-start">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6 tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              What to Wear
            </h3>
            <p className="text-lg leading-relaxed text-[#2a2a2a] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {t("press.page.fashion.p2")}
            </p>
            <p className="text-lg leading-relaxed text-[#2a2a2a] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {t("press.page.fashion.p3")}
            </p>
            <blockquote className="border-l-4 border-[#8B7355] pl-4 my-4">
              <p className="text-xl italic text-[#8B7355]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                "{t("press.page.fashion.quote")}"
              </p>
            </blockquote>
            <p className="text-lg leading-relaxed text-[#2a2a2a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {t("press.page.fashion.p4")}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={IMAGES.ballroom}
              alt="Waltzing at the Imperial Court Ball, Hofburg Grand Ballroom, January 2026"
                          className="w-full"
            style={{ display: "block", height: "auto" }}
          />
            <p className="text-xs text-[#8B7355] tracking-[0.15em] uppercase mt-2">
              {t("press.page.caption.waltz")}
            </p>
          </div>
        </div>

        {/* Drones section — full bleed */}
        <div className="mb-10">
          <img
            src={IMAGES.drones}
            alt="360 drones form the double-headed eagle above the Hofburg, January 2026"
            className="w-full"
            style={{ display: "block", height: "auto" }}
          />
          <p className="text-xs text-[#8B7355] tracking-[0.15em] uppercase mt-2">
            {t("press.page.caption.drones")}
          </p>
        </div>

        {/* Above the Hofburg section */}
        <div className="border-t border-[#8B7355] pt-8 mb-10">
          <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6 tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Above the Hofburg
          </h3>
          <p className="text-lg leading-relaxed text-[#2a2a2a] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {t("press.page.drones.p1")}
          </p>
          <p className="text-lg leading-relaxed text-[#2a2a2a] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {t("press.page.drones.p2")}
          </p>
          <blockquote className="border-l-4 border-[#8B7355] pl-4 my-6">
            <p className="text-2xl italic text-[#8B7355]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              "{t("press.page.drones.quote")}"
            </p>
            <cite className="text-xs tracking-[0.2em] uppercase text-[#8B7355] not-italic">— Princess Mathilde von Schwarzenberg</cite>
          </blockquote>
        </div>

        {/* The Bonbonnière */}
        <div className="border-t border-[#8B7355] pt-8 mb-10">
          <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6 tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The Bonbonnière
          </h3>
          <p className="text-lg leading-relaxed text-[#2a2a2a] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {t("press.page.bonbonniere.p1")}
          </p>
          <p className="text-center text-sm italic text-[#8B7355] tracking-wide my-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {t("press.page.bonbonniere.vega")}
          </p>
          {/* Bonbonnière image */}
          <img
            src={IMAGES.bonbonniere}
            alt="The 2026 Court Ball bonbonnière by Wiener Werkstätte Neu — imperial black lacquer with double-headed eagle in 24-carat gold relief"
            className="w-full"
            style={{ display: "block", height: "auto", maxWidth: "600px", margin: "0 auto" }}
          />
          <p className="text-xs text-[#8B7355] tracking-[0.15em] uppercase mt-2 text-center">
            {t("press.page.caption.bonbonniere")}
          </p>
        </div>

        {/* Footer rule */}
        <div className="flex items-center gap-4 my-8">
          <div className="h-px flex-1 bg-[#8B7355]" />
          <span className="text-[#8B7355]">✦</span>
          <div className="h-px flex-1 bg-[#8B7355]" />
        </div>
        <p className="text-center text-xs tracking-[0.2em] uppercase text-[#8B7355]">
          {t("press.page.footer1")}
        </p>
        <p className="text-center text-xs tracking-[0.2em] uppercase text-[#8B7355] mt-1">
          {t("press.page.footer2")}
        </p>

        {/* Back link */}
        <div className="text-center mt-12">
          <Link href="/">
            <span className="text-sm tracking-[0.25em] uppercase text-[#8B7355] hover:text-[#1a1a1a] transition-colors cursor-pointer border-b border-[#8B7355]">
              {t("press.page.back")}
            </span>
          </Link>
        </div>
      </article>
    </div>
  );
}
