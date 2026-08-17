import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "wouter";

const GOLD = "#C8A415";

export default function News() {
  const { t } = useLanguage();

  const newsItems = [
    { dateKey: "news.item1.date", titleKey: "news.item1.title", bodyKey: "news.item1.body", tagKey: "news.item1.tag" },
    { dateKey: "news.item2.date", titleKey: "news.item2.title", bodyKey: "news.item2.body", tagKey: "news.item2.tag" },
    { dateKey: "news.item3.date", titleKey: "news.item3.title", bodyKey: "news.item3.body", tagKey: "news.item3.tag" },
  ];

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

      {/* News Items */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-sm tracking-[0.3em] uppercase mb-8" style={{ color: GOLD, fontFamily: "'Cinzel', serif" }}>
          {t("news.latest")}
        </h2>
        <div className="space-y-8">
          {newsItems.map((item, i) => (
            <article
              key={i}
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
            </article>
          ))}
        </div>
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

