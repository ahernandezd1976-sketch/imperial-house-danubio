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
