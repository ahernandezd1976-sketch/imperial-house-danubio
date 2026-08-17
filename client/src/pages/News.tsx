import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "wouter";

const GOLD = "#C8A415";
const ITEMS_PER_PAGE = 3;

function ShareButtons({ title, index }: { title: string; index: number }) {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const url = `${window.location.origin}/news?lang=${language}#item-${index}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-2 mt-3">
      {/* Twitter/X */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 border border-white/10 hover:border-[#C8A415]/40 transition-all duration-200 hover:scale-110"
        title="Share on X"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40 hover:text-white/70">
          <path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      </a>
      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 border border-white/10 hover:border-[#C8A415]/40 transition-all duration-200 hover:scale-110"
        title="Share on Facebook"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/40 hover:text-white/70">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </a>
      {/* Copy Link */}
      <button
        onClick={() => {
          navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        className="p-1.5 border border-white/10 hover:border-[#C8A415]/40 transition-all duration-200 hover:scale-110"
        title="Copy link"
      >
        <span className="text-xs text-white/40 hover:text-white/70">
          {copied ? "✓" : "⎘"}
        </span>
      </button>
    </div>
  );
}

export default function News() {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const newsItems = [
    { dateKey: "news.item1.date", titleKey: "news.item1.title", bodyKey: "news.item1.body", tagKey: "news.item1.tag", category: "publication" },
    { dateKey: "news.item2.date", titleKey: "news.item2.title", bodyKey: "news.item2.body", tagKey: "news.item2.tag", category: "website" },
    { dateKey: "news.item3.date", titleKey: "news.item3.title", bodyKey: "news.item3.body", tagKey: "news.item3.tag", category: "event" },
  ];

  const categories = [
    { id: "all", labelKey: "news.filter.all" },
    { id: "publication", labelKey: "news.filter.publication" },
    { id: "website", labelKey: "news.filter.website" },
    { id: "event", labelKey: "news.filter.event" },
  ];

  const filteredItems = activeFilter === "all"
    ? newsItems
    : newsItems.filter((item) => item.category === activeFilter);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  return (
    <div className="min-h-screen bg-[#0d0b09]">
      <Navigation />
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: GOLD, fontFamily: "'Cinzel', serif" }}>
          {t("news.pretitle")}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
          {t("news.title")}
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {t("news.subtitle")}
        </p>
      </section>

      {/* Featured News Item */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div
          className="relative border-2 p-8 md:p-10 transition-all duration-300 hover:shadow-[0_0_30px_oklch(0.72_0.12_85_/_0.15)]"
          style={{ borderColor: GOLD, background: "oklch(0.72 0.12 85 / 0.03)" }}
        >
          {/* Featured badge */}
          <div
            className="absolute -top-3 left-6 px-4 py-1 text-[0.6rem] tracking-[0.25em] uppercase font-bold"
            style={{ background: GOLD, color: "#0d0b09", fontFamily: "'Cinzel', serif" }}
          >
            {t("news.featured.badge")}
          </div>
          {/* Gold corner accents */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2" style={{ borderColor: GOLD }} />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: GOLD }} />

          <div className="flex items-center gap-3 mb-4 mt-2">
            <span className="text-xs tracking-[0.2em] uppercase text-white/50" style={{ fontFamily: "'Cinzel', serif" }}>
              {t("news.featured.date")}
            </span>
            <span
              className="text-[0.6rem] tracking-[0.15em] uppercase px-2 py-0.5"
              style={{ background: `oklch(0.72 0.12 85 / 0.2)`, color: GOLD, fontFamily: "'Cinzel', serif" }}
            >
              {t("news.featured.tag")}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl text-white mb-4 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {t("news.featured.title")}
          </h2>
          <p className="text-white/70 leading-relaxed text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {t("news.featured.body")}
          </p>
          {/* Decorative line */}
          <div className="mt-6 h-px w-24" style={{ background: `linear-gradient(to right, ${GOLD}, transparent)` }} />
        </div>
      </section>

      {/* Category Filters */}
      <section className="max-w-3xl mx-auto px-6 pb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveFilter(cat.id); setVisibleCount(ITEMS_PER_PAGE); }}
              className="text-[0.6rem] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-200 hover:scale-[0.97]"
              style={{
                borderColor: activeFilter === cat.id ? GOLD : "oklch(1 0 0 / 0.15)",
                background: activeFilter === cat.id ? "oklch(0.72 0.12 85 / 0.1)" : "transparent",
                color: activeFilter === cat.id ? GOLD : "oklch(1 0 0 / 0.5)",
                fontFamily: "'Cinzel', serif",
              }}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>
      </section>

      {/* News Items */}
      <section className="max-w-3xl mx-auto px-6 pb-8">
        <h2 className="text-sm tracking-[0.3em] uppercase mb-8" style={{ color: GOLD, fontFamily: "'Cinzel', serif" }}>
          {t("news.latest")}
        </h2>
        <div className="space-y-8">
          {displayedItems.map((item, i) => (
            <article
              key={item.category + i}
              id={`item-${i}`}
              className="border-l-2 pl-6 py-4 transition-all duration-300 hover:pl-8"
              style={{ borderColor: `oklch(0.72 0.12 85 / ${i === 0 ? '0.8' : '0.3'})` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs tracking-[0.2em] uppercase text-white/40" style={{ fontFamily: "'Cinzel', serif" }}>
                  {t(item.dateKey)}
                </span>
                <span
                  className="text-[0.6rem] tracking-[0.15em] uppercase px-2 py-0.5"
                  style={{ background: `oklch(0.72 0.12 85 / 0.15)`, color: GOLD, fontFamily: "'Cinzel', serif" }}
                >
                  {t(item.tagKey)}
                </span>
              </div>
              <h3 className="text-xl text-white mb-2 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {t(item.titleKey)}
              </h3>
              <p className="text-white/60 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {t(item.bodyKey)}
              </p>
              <ShareButtons title={t(item.titleKey)} index={i} />
            </article>
          ))}
        </div>
      </section>

      {/* Load More Button */}
      <section className="max-w-3xl mx-auto px-6 pb-16 text-center">
        {hasMore ? (
          <button
            onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
            className="px-8 py-3 border text-xs tracking-[0.25em] uppercase transition-all duration-200 hover:scale-[0.97] hover:shadow-[0_0_20px_oklch(0.72_0.12_85_/_0.2)]"
            style={{ borderColor: GOLD, color: GOLD, fontFamily: "'Cinzel', serif" }}
          >
            {t("news.loadmore")}
          </button>
        ) : (
          <p className="text-white/30 text-sm tracking-[0.15em] uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
            {t("news.nomore")}
          </p>
        )}
      </section>

      {/* Subscribe Section */}
      <section className="max-w-xl mx-auto px-6 pb-20 text-center">
        <div className="border border-[oklch(0.72_0.12_85_/_0.2)] p-8">
          <h3 className="text-lg text-white mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
            {t("news.subscribe.title")}
          </h3>
          <p className="text-white/50 text-sm mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {t("news.subscribe.text")}
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={t("news.subscribe.placeholder")}
              className="flex-1 bg-transparent border border-white/20 px-4 py-2 text-white text-sm focus:border-[#C8A415] outline-none transition-colors"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            />
            <button
              type="submit"
              className="px-6 py-2 text-xs tracking-[0.2em] uppercase transition-all duration-200 hover:scale-[0.97]"
              style={{ background: GOLD, color: "#0d0b09", fontFamily: "'Cinzel', serif" }}
            >
              {t("news.subscribe.button")}
            </button>
          </form>
        </div>
      </section>

      {/* Back link */}
      <div className="max-w-3xl mx-auto px-6 pb-12">
        <Link href="/" className="text-sm hover:underline transition-colors" style={{ color: GOLD, fontFamily: "'Cinzel', serif" }}>
          {t("news.back")}
        </Link>
      </div>

      <Footer />
    </div>
  );
}
