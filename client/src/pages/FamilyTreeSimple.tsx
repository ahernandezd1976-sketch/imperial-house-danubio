/**
 * Simple Family Tree — printable regal register within the main site shell.
 * Uses shared navigation/footer and LanguageContext; no standalone chrome.
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { Crown, Download, Gem, Printer } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { familyTreeAssets } from "@/lib/familyTreeAssets";
import "./familyTree.css";

function nameFor(language: Language, english: string, german?: string) {
  if (language === "de") return german ?? english
    .replace("Crown Prince", "Kronprinz")
    .replace("Archduchess", "Erzherzogin")
    .replace("Archduke", "Erzherzog")
    .replace("Duke of Hohenberg", "Herzog von Hohenberg")
    .replace("Karl I", "Karl I.")
    .replace("Otto I", "Otto I.")
    .replace("Friedrich I", "Friedrich I.")
    .replace("Maximilian II", "Maximilian II.")
    .replace("Franz Ferdinand I", "Franz Ferdinand I.");
  const variants: Partial<Record<Language, Record<string, string>>> = {
    hu: {
      "Franz Joseph I": "I. Ferenc József",
      "Franz Ferdinand I": "I. Ferenc Ferdinánd",
      "Karl I": "I. Károly",
      "Otto I": "I. Ottó",
      "Friedrich I": "I. Frigyes",
      "Maximilian II": "II. Miksa",
    },
    fr: {
      "Franz Joseph I": "François-Joseph Ier",
      "Franz Ferdinand I": "François-Ferdinand Ier",
      "Karl I": "Charles Ier",
      "Otto I": "Otto Ier",
      "Friedrich I": "Frédéric Ier",
      "Maximilian II": "Maximilien II",
    },
    cs: {
      "Franz Joseph I": "František Josef I.",
      "Franz Ferdinand I": "František Ferdinand I.",
      "Karl I": "Karel I.",
      "Otto I": "Otto I.",
      "Friedrich I": "Fridrich I.",
      "Maximilian II": "Maxmilián II.",
    },
    hr: {
      "Franz Joseph I": "Franjo Josip I.",
      "Franz Ferdinand I": "Franjo Ferdinand I.",
      "Karl I": "Karlo I.",
      "Otto I": "Otto I.",
      "Friedrich I": "Friedrich I.",
      "Maximilian II": "Maksimilijan II.",
    },
  };
  return variants[language]?.[english] ?? english;
}

function lifeFor(language: Language, value: string) {
  if (language === "de") return value.replace("born", "geb.").replace("age", "Alter");
  if (language === "hu") return value.replace("born", "szül.").replace("age", "életkor");
  if (language === "fr") return value.replace("born", "né en").replace("age", "âge");
  if (language === "cs") return value.replace("born", "nar.").replace("age", "věk");
  if (language === "hr") return value.replace("born", "rođ.").replace("age", "dob");
  return value;
}

function PersonBox({ name, life, detail, reign, featured = false }: { name: string; life: string; detail: string; reign?: string; featured?: boolean }) {
  return (
    <div className={`ift-simple-person ${featured ? "featured" : ""}`}>
      {featured && <Crown size={18} />}
      <strong>{name}</strong><span>{life}</span>{reign && <b>{reign}</b>}<small>{detail}</small>
    </div>
  );
}

export default function FamilyTreeSimple() {
  const { language, t } = useLanguage();
  const emperor = language === "de" ? familyTreeAssets.emperorDe : familyTreeAssets.emperorEn;
  const pdf = language === "de" ? familyTreeAssets.pdfDe : familyTreeAssets.pdfEn;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = t("tree.meta.simple");
  }, [language, t]);

  return (
    <div className="family-tree-route ift-simple-route">
      <Navigation />
      <main className="ift-simple-page">
        <div className="ift-simple-toolbar ift-no-print">
          <Link href="/family-tree">{t("tree.action.full")}</Link>
          <div>
            <a href={pdf} target="_blank" rel="noreferrer" download><Download size={16} />{t("tree.simple.download")}</a>
            <button onClick={() => window.print()}><Printer size={16} />{t("tree.simple.print")}</button>
          </div>
        </div>

        <article className="ift-simple-sheet">
          <div className="ift-simple-banner"><img src={familyTreeAssets.crown} alt="" /></div>
          <header className="ift-simple-header">
            <img src={familyTreeAssets.arms} alt="Imperial coat of arms" />
            <p>{t("header.imperialHouse")} · Austria-Danubio</p>
            <h1>{t("tree.simple.title")}</h1>
            <h2>{t("tree.simple.subtitle")}</h2>
            <div className="ift-simple-flourish"><span /><Gem size={14} /><span /></div>
            <small>{t("tree.simple.corrected")}</small>
          </header>

          <section className="ift-simple-monarch">
            <img src={emperor} alt={t("tree.hero.sovereign")} />
            <div><small>{t("tree.hero.current")}</small><h2>{t("tree.hero.sovereign")}</h2><p>{t("tree.hero.factBorn")} · {t("tree.hero.sovereignTitle")} · {t("tree.hero.since")}</p><em>{t("tree.hero.factWidow")}</em></div>
          </section>

          <section className="ift-simple-register">
            <h3>{t("tree.simple.origin")}</h3>
            <div className="ift-simple-couple">
              <PersonBox name={nameFor(language, "Franz Joseph I", "Franz Joseph I.")} life="1830–1916" reign="1848–1916" detail={t("tree.person.fj.role")} featured />
              <span className="ift-marriage">∞</span>
              <PersonBox name={language === "de" ? "Elisabeth ‘Sisi’ in Bayern" : "Elisabeth ‘Sisi’ of Bavaria"} life="1837–1898" detail={t("tree.member.sisi")} />
            </div>
            <div className="ift-children-grid four">
              <PersonBox name="Sophie" life="1855–1857" detail={t("tree.member.sophie")} />
              <PersonBox name="Gisela" life="1856–1932" detail={t("tree.member.gisela")} />
              <PersonBox name="Rudolf" life="1858–1889" detail={t("tree.member.rudolf")} />
              <PersonBox name="Marie Valerie" life="1868–1924" detail={t("tree.member.marie")} />
            </div>
          </section>

          <div className="ift-simple-divider"><span /><Crown size={17} /><span /></div>

          <section className="ift-simple-register">
            <h3>{t("tree.simple.branch")}</h3><p className="ift-register-note">{t("tree.simple.passed")}</p>
            <div className="ift-simple-line">
              <PersonBox name="Karl Ludwig" life="1833–1896" detail={t("tree.person.karlLudwig.role")} />
              <PersonBox name={nameFor(language, "Franz Ferdinand I", "Franz Ferdinand I.")} life="1863–1922" reign="1916–1922" detail={t("tree.person.franzFerdinand.role")} featured />
              <PersonBox name="Otto Franz" life="1865–1906" detail={t("tree.person.ottoFranz.role")} />
              <PersonBox name={nameFor(language, "Karl I", "Karl I.")} life="1887–1939" reign="1922–1939" detail={t("tree.person.karl.role")} featured />
              <PersonBox name={nameFor(language, "Otto I", "Otto I.")} life="1912–1980" reign="1939–1955" detail={t("tree.person.otto.role")} featured />
              <PersonBox name="Rudolf" life="1919–2010" detail={t("tree.person.rudolf.role")} />
              <PersonBox name={nameFor(language, "Friedrich I", "Friedrich I.")} life="1936–1988" reign="1955–1988" detail={t("tree.person.friedrich.role")} featured />
              <PersonBox name={nameFor(language, "Maximilian II", "Maximilian II.")} life="1954–" reign={`1988–${t("tree.reigns.present")}`} detail={t("tree.person.max.role")} featured />
            </div>
          </section>

          <div className="ift-simple-divider"><span /><Crown size={17} /><span /></div>

          <section className="ift-simple-register">
            <h3>{t("tree.simple.current")}</h3>
            <div className="ift-simple-couple">
              <PersonBox name={nameFor(language, "Maximilian II", "Maximilian II.")} life="1954–" reign={`1988–${t("tree.reigns.present")}`} detail={t("tree.hero.sovereignTitle")} featured />
              <span className="ift-marriage">∞</span>
              <PersonBox name="Maria-Cristina" life="1954–2000" detail={t("tree.household.memorialText")} />
            </div>
            <div className="ift-children-grid two">
              <PersonBox name={nameFor(language, "Crown Prince Leopold von Habsburg")} life={lifeFor(language, "born 1994")} detail={t("tree.succession.heir")} featured />
              <PersonBox name={nameFor(language, "Archduchess Eleonora von Habsburg")} life={lifeFor(language, "born 1996")} detail={t("tree.member.archduchess")} />
            </div>
            <div className="ift-extended-house">
              <PersonBox name={nameFor(language, "Archduchess Gisela von Habsburg")} life={lifeFor(language, "born 1961")} detail={t("tree.member.archduchess")} />
              <PersonBox name={nameFor(language, "Archduchess Alexis von Habsburg")} life={lifeFor(language, "born 1960")} detail={t("tree.member.archduchess")} />
              <PersonBox name={nameFor(language, "Archduke Reiner von Habsburg")} life={lifeFor(language, "age 31")} detail={t("tree.succession.marshal")} />
              <PersonBox name={nameFor(language, "Archduke Charles Bertroch")} life={lifeFor(language, "born 1957")} detail={t("tree.member.archduke")} />
            </div>
          </section>

          <div className="ift-simple-divider"><span /><Gem size={14} /><span /></div>

          <section className="ift-simple-register ift-collateral-register">
            <h3>{t("tree.simple.collateral")}</h3><p className="ift-exclusion-note">{t("tree.simple.excluded")}</p>
            <div className="ift-simple-line compact">
              <PersonBox name={nameFor(language, "Franz Ferdinand I & Sophie Chotek")} life="1868–1938" detail={t("tree.member.sophieChotek")} />
              <PersonBox name={nameFor(language, "Maximilian, Duke of Hohenberg")} life="1902–1962" detail={t("tree.member.hohenbergFounder")} />
              <PersonBox name={nameFor(language, "Franz Ferdinand, Duke of Hohenberg")} life="1927–2015" detail={t("tree.member.hohenbergHead")} />
              <PersonBox name={nameFor(language, "Maximilian, Duke of Hohenberg")} life={lifeFor(language, "born 1961")} detail={t("tree.member.hohenbergCurrent")} />
              <PersonBox name={nameFor(language, "Franz Ferdinand von Hohenberg")} life={lifeFor(language, "born 1988")} detail={t("tree.member.hohenbergHeir")} />
            </div>
          </section>

          <section className="ift-simple-succession">
            <h3>{t("tree.simple.succession")}</h3>
            <ol><li><b>1</b><span><strong>Leopold von Habsburg</strong><small>{t("tree.succession.heir")}</small></span></li><li><b>2</b><span><strong>Reiner von Habsburg</strong><small>{t("tree.succession.marshal")}</small></span></li></ol>
          </section>

          <footer className="ift-simple-footer"><img src={familyTreeAssets.arms} alt="" /><p>“Aquila et Flumen in Aeternum”</p><small>{t("tree.simple.note")}</small></footer>
        </article>
      </main>
      <Footer />
    </div>
  );
}
