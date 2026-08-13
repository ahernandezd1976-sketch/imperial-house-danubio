import { useLanguage } from "../contexts/LanguageContext";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Transparency() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const budgetCategories = [
    { label: t("trans.budget.cat1"), value: t("trans.budget.cat1v"), pct: t("trans.budget.cat1p") },
    { label: t("trans.budget.cat2"), value: t("trans.budget.cat2v"), pct: t("trans.budget.cat2p") },
    { label: t("trans.budget.cat3"), value: t("trans.budget.cat3v"), pct: t("trans.budget.cat3p") },
    { label: t("trans.budget.cat4"), value: t("trans.budget.cat4v"), pct: t("trans.budget.cat4p") },
    { label: t("trans.budget.cat5"), value: t("trans.budget.cat5v"), pct: t("trans.budget.cat5p") },
  ];

  const engagements = [
    { name: t("trans.engagements.m1"), value: t("trans.engagements.m1v") },
    { name: t("trans.engagements.m2"), value: t("trans.engagements.m2v") },
    { name: t("trans.engagements.m3"), value: t("trans.engagements.m3v") },
    { name: t("trans.engagements.m4"), value: t("trans.engagements.m4v") },
    { name: t("trans.engagements.m5"), value: t("trans.engagements.m5v") },
  ];

  const patronages = [
    { label: t("trans.patronages.c1"), value: t("trans.patronages.c1v") },
    { label: t("trans.patronages.c2"), value: t("trans.patronages.c2v") },
    { label: t("trans.patronages.c3"), value: t("trans.patronages.c3v") },
    { label: t("trans.patronages.c4"), value: t("trans.patronages.c4v") },
    { label: t("trans.patronages.c5"), value: t("trans.patronages.c5v") },
  ];

  const staff = [
    { label: t("trans.staff.s1"), value: t("trans.staff.s1v") },
    { label: t("trans.staff.s2"), value: t("trans.staff.s2v") },
    { label: t("trans.staff.s3"), value: t("trans.staff.s3v") },
    { label: t("trans.staff.s4"), value: t("trans.staff.s4v") },
    { label: t("trans.staff.s5"), value: t("trans.staff.s5v") },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">
      <Navigation />
      {/* Header */}
      <section className="relative pt-40 pb-24 px-6 text-center border-b border-[#c9a84c]/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.3em] uppercase text-sm mb-6">{t("trans.header.pretitle")}</p>
          <h1 className="font-serif text-5xl md:text-7xl mb-4">
            <span className="text-[#c9a84c]">{t("trans.header.title1")}</span>
            <span>{t("trans.header.title2")}</span>
          </h1>
          <p className="text-[#a09880] text-lg max-w-2xl mx-auto mt-6 leading-relaxed">{t("trans.header.subtitle")}</p>
          <div className="mt-8 inline-block px-6 py-2 border border-[#c9a84c]/40 rounded-sm">
            <span className="text-[#c9a84c] tracking-widest text-sm font-medium">{t("trans.year")}</span>
          </div>
        </div>
      </section>

      {/* Budget Section */}
      <section className="py-24 px-6 border-b border-[#c9a84c]/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.2em] uppercase text-xs mb-3">{t("trans.budget.pretitle")}</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">{t("trans.budget.title")}</h2>
          <p className="text-[#a09880] max-w-3xl mb-12 leading-relaxed">{t("trans.budget.subtitle")}</p>

          {/* Total */}
          <div className="bg-[#1a1a18] border border-[#c9a84c]/30 p-8 mb-8 text-center">
            <p className="text-[#a09880] text-sm uppercase tracking-wider mb-2">{t("trans.budget.total")}</p>
            <p className="text-[#c9a84c] font-serif text-4xl md:text-5xl">{t("trans.budget.totalValue")}</p>
            <p className="text-[#a09880] text-sm mt-4">{t("trans.budget.perCapita")}: <span className="text-[#f5f0e8]">{t("trans.budget.perCapitaValue")}</span></p>
          </div>

          {/* Breakdown */}
          <h3 className="text-[#c9a84c] text-sm uppercase tracking-wider mb-6">{t("trans.budget.breakdown")}</h3>
          <div className="space-y-4">
            {budgetCategories.map((cat, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-[#333]">
                <span className="text-[#f5f0e8]">{cat.label}</span>
                <div className="flex items-center gap-4">
                  <span className="text-[#a09880] text-sm">{cat.pct}</span>
                  <span className="text-[#c9a84c] font-medium min-w-[140px] text-right">{cat.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year-over-Year Comparison */}
      <section className="py-24 px-6 border-b border-[#c9a84c]/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.2em] uppercase text-xs mb-3">{t("trans.yoy.pretitle")}</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">{t("trans.yoy.title")}</h2>
          <p className="text-[#a09880] max-w-3xl mb-12 leading-relaxed">{t("trans.yoy.subtitle")}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: t("trans.yoy.budget"), v2024: "€ 46.800.000", v2025: "€ 48.200.000", change: "+3,0%" },
              { label: t("trans.yoy.engagements"), v2024: "775", v2025: "810", change: "+4,5%" },
              { label: t("trans.yoy.patronages"), v2024: "134", v2025: "142", change: "+6,0%" },
              { label: t("trans.yoy.travel"), v2024: "29", v2025: "33", change: "+13,8%" },
            ].map((item, i) => (
              <div key={i} className="bg-[#1a1a18] border border-[#c9a84c]/20 p-6">
                <p className="text-[#a09880] text-xs uppercase tracking-wider mb-4">{item.label}</p>
                <div className="flex items-end justify-between mb-3">
                  <div>
                    <p className="text-[#666] text-xs mb-1">2024</p>
                    <p className="text-[#a09880] font-serif text-lg">{item.v2024}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#666] text-xs mb-1">2025</p>
                    <p className="text-[#f5f0e8] font-serif text-lg">{item.v2025}</p>
                  </div>
                </div>
                <div className="border-t border-[#333] pt-3">
                  <p className="text-[#c9a84c] font-serif text-sm text-center">{item.change}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#666] text-xs mt-8 text-center italic">{t("trans.yoy.note")}</p>
        </div>
      </section>

      {/* Engagements Section */}
      <section className="py-24 px-6 border-b border-[#c9a84c]/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.2em] uppercase text-xs mb-3">{t("trans.engagements.pretitle")}</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">{t("trans.engagements.title")}</h2>
          <p className="text-[#a09880] max-w-3xl mb-12 leading-relaxed">{t("trans.engagements.subtitle")}</p>

          <div className="bg-[#1a1a18] border border-[#c9a84c]/30 p-8 mb-8 text-center">
            <p className="text-[#a09880] text-sm uppercase tracking-wider mb-2">{t("trans.engagements.total")}</p>
            <p className="text-[#c9a84c] font-serif text-5xl">{t("trans.engagements.totalValue")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {engagements.map((m, i) => (
              <div key={i} className="bg-[#141412] border border-[#333] p-6 text-center">
                <p className="text-[#c9a84c] font-serif text-3xl mb-2">{m.value}</p>
                <p className="text-[#a09880] text-sm">{m.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patronages Section */}
      <section className="py-24 px-6 border-b border-[#c9a84c]/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.2em] uppercase text-xs mb-3">{t("trans.patronages.pretitle")}</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">{t("trans.patronages.title")}</h2>
          <p className="text-[#a09880] max-w-3xl mb-12 leading-relaxed">{t("trans.patronages.subtitle")}</p>

          <div className="bg-[#1a1a18] border border-[#c9a84c]/30 p-8 mb-8 text-center">
            <p className="text-[#a09880] text-sm uppercase tracking-wider mb-2">{t("trans.patronages.total")}</p>
            <p className="text-[#c9a84c] font-serif text-5xl">{t("trans.patronages.totalValue")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {patronages.map((p, i) => (
              <div key={i} className="bg-[#141412] border border-[#333] p-5 text-center">
                <p className="text-[#c9a84c] font-serif text-2xl mb-1">{p.value}</p>
                <p className="text-[#a09880] text-xs">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-24 px-6 border-b border-[#c9a84c]/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.2em] uppercase text-xs mb-3">{t("trans.staff.pretitle")}</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">{t("trans.staff.title")}</h2>
          <p className="text-[#a09880] max-w-3xl mb-12 leading-relaxed">{t("trans.staff.subtitle")}</p>

          <div className="bg-[#1a1a18] border border-[#c9a84c]/30 p-8 mb-8 text-center">
            <p className="text-[#a09880] text-sm uppercase tracking-wider mb-2">{t("trans.staff.total")}</p>
            <p className="text-[#c9a84c] font-serif text-5xl">{t("trans.staff.totalValue")}</p>
          </div>

          <div className="space-y-3">
            {staff.map((s, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-[#333]">
                <span className="text-[#f5f0e8]">{s.label}</span>
                <span className="text-[#c9a84c] font-medium">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel & Celestial Clipper Section */}
      <section className="py-24 px-6 border-b border-[#c9a84c]/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.2em] uppercase text-xs mb-3">{t("trans.travel.pretitle")}</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">{t("trans.travel.title")}</h2>
          <p className="text-[#a09880] max-w-3xl mb-12 leading-relaxed">{t("trans.travel.subtitle")}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-[#1a1a18] border border-[#c9a84c]/30 p-6 text-center">
              <p className="text-[#a09880] text-sm uppercase tracking-wider mb-2">{t("trans.travel.total")}</p>
              <p className="text-[#c9a84c] font-serif text-4xl">{t("trans.travel.totalValue")}</p>
            </div>
            <div className="bg-[#141412] border border-[#333] p-6 text-center">
              <p className="text-[#a09880] text-sm uppercase tracking-wider mb-2">{t("trans.travel.domestic")}</p>
              <p className="text-[#f5f0e8] font-serif text-3xl">{t("trans.travel.domesticValue")}</p>
            </div>
            <div className="bg-[#141412] border border-[#333] p-6 text-center">
              <p className="text-[#a09880] text-sm uppercase tracking-wider mb-2">{t("trans.travel.international")}</p>
              <p className="text-[#f5f0e8] font-serif text-3xl">{t("trans.travel.internationalValue")}</p>
            </div>
          </div>

          {/* Celestial Clipper */}
          <div className="bg-[#1a1a18] border border-[#c9a84c]/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">✈</span>
              <h3 className="font-serif text-2xl text-[#c9a84c]">{t("trans.travel.clipper")}</h3>
            </div>
            <p className="text-[#a09880] leading-relaxed mb-6">{t("trans.travel.clipperDesc")}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#0a0a0a] border border-[#333] p-4 text-center">
                <p className="text-[#a09880] text-xs uppercase tracking-wider mb-1">{t("trans.travel.clipperFlights")}</p>
                <p className="text-[#c9a84c] font-serif text-2xl">{t("trans.travel.clipperFlightsValue")}</p>
              </div>
              <div className="bg-[#0a0a0a] border border-[#333] p-4 text-center">
                <p className="text-[#a09880] text-xs uppercase tracking-wider mb-1">{t("trans.travel.clipperHours")}</p>
                <p className="text-[#c9a84c] font-serif text-2xl">{t("trans.travel.clipperHoursValue")}</p>
              </div>
              <div className="bg-[#0a0a0a] border border-[#333] p-4 text-center">
                <p className="text-[#a09880] text-xs uppercase tracking-wider mb-1">{t("trans.travel.clipperCost")}</p>
                <p className="text-[#c9a84c] font-serif text-2xl">{t("trans.travel.clipperCostValue")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Year in Highlights */}
      <section className="py-24 px-6 border-b border-[#c9a84c]/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c9a84c] tracking-[0.2em] uppercase text-xs mb-3">{t("trans.highlights.pretitle")}</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">{t("trans.highlights.title")}</h2>
          <p className="text-[#a09880] max-w-3xl mb-12 leading-relaxed">{t("trans.highlights.subtitle")}</p>

          {/* Year in Images - Family Photo */}
          <div className="relative mb-16 overflow-hidden border border-[#c9a84c]/20">
            <img
              src="/manus-storage/imperial_family_event_2025_e44a1b50.png"
              alt="Emperor Maximilian II, Crown Prince Leopold, and Archduchess Eleonora at a state event, 2025"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-[#f5f0e8] font-serif text-lg">{t("trans.highlights.photoCaption")}</p>
            </div>
          </div>

          {/* Key Figures Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-[#1a1a18] border border-[#c9a84c]/30 p-6 text-center">
              <p className="text-3xl mb-2">🌐</p>
              <p className="text-[#c9a84c] font-serif text-3xl mb-1">{t("trans.highlights.kf1v")}</p>
              <p className="text-[#a09880] text-xs">{t("trans.highlights.kf1")}</p>
            </div>
            <div className="bg-[#1a1a18] border border-[#c9a84c]/30 p-6 text-center">
              <p className="text-3xl mb-2">🏛</p>
              <p className="text-[#c9a84c] font-serif text-3xl mb-1">{t("trans.highlights.kf2v")}</p>
              <p className="text-[#a09880] text-xs">{t("trans.highlights.kf2")}</p>
            </div>
            <div className="bg-[#1a1a18] border border-[#c9a84c]/30 p-6 text-center">
              <p className="text-3xl mb-2">👥</p>
              <p className="text-[#c9a84c] font-serif text-3xl mb-1">{t("trans.highlights.kf3v")}</p>
              <p className="text-[#a09880] text-xs">{t("trans.highlights.kf3")}</p>
            </div>
            <div className="bg-[#1a1a18] border border-[#c9a84c]/30 p-6 text-center">
              <p className="text-3xl mb-2">✈</p>
              <p className="text-[#c9a84c] font-serif text-3xl mb-1">{t("trans.highlights.kf4v")}</p>
              <p className="text-[#a09880] text-xs">{t("trans.highlights.kf4")}</p>
            </div>
          </div>

          {/* Highlighted Events */}
          <h3 className="text-[#c9a84c] text-sm uppercase tracking-wider mb-8">{t("trans.highlights.eventsTitle")}</h3>
          <div className="space-y-6">
            {/* Event 1: Budapest */}
            <div className="bg-[#141412] border-l-4 border-[#c9a84c] p-6">
              <div className="flex items-start gap-4">
                <span className="text-[#c9a84c] font-serif text-lg min-w-[100px]">{t("trans.highlights.ev1date")}</span>
                <div>
                  <h4 className="text-[#f5f0e8] font-medium text-lg mb-2">{t("trans.highlights.ev1title")}</h4>
                  <p className="text-[#a09880] leading-relaxed">{t("trans.highlights.ev1desc")}</p>
                </div>
              </div>
            </div>

            {/* Event 2: Federative Land Tour */}
            <div className="bg-[#141412] border-l-4 border-[#c9a84c] p-6">
              <div className="flex items-start gap-4">
                <span className="text-[#c9a84c] font-serif text-lg min-w-[100px]">{t("trans.highlights.ev2date")}</span>
                <div>
                  <h4 className="text-[#f5f0e8] font-medium text-lg mb-2">{t("trans.highlights.ev2title")}</h4>
                  <p className="text-[#a09880] leading-relaxed">{t("trans.highlights.ev2desc")}</p>
                </div>
              </div>
            </div>

            {/* Event 3: Americas Tour */}
            <div className="bg-[#141412] border-l-4 border-[#c9a84c] p-6">
              <div className="flex items-start gap-4">
                <span className="text-[#c9a84c] font-serif text-lg min-w-[100px]">{t("trans.highlights.ev3date")}</span>
                <div>
                  <h4 className="text-[#f5f0e8] font-medium text-lg mb-2">{t("trans.highlights.ev3title")}</h4>
                  <p className="text-[#a09880] leading-relaxed">{t("trans.highlights.ev3desc")}</p>
                </div>
              </div>
            </div>

            {/* Event 4: Federation Day */}
            <div className="bg-[#141412] border-l-4 border-[#c9a84c] p-6">
              <div className="flex items-start gap-4">
                <span className="text-[#c9a84c] font-serif text-lg min-w-[100px]">{t("trans.highlights.ev4date")}</span>
                <div>
                  <h4 className="text-[#f5f0e8] font-medium text-lg mb-2">{t("trans.highlights.ev4title")}</h4>
                  <p className="text-[#a09880] leading-relaxed">{t("trans.highlights.ev4desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#a09880] text-sm leading-relaxed mb-4">{t("trans.footer.note")}</p>
          <p className="text-[#c9a84c] text-xs tracking-widest uppercase">{t("trans.footer.audit")}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
