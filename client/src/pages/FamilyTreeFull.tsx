/**
 * Family Tree — Imperial Modernism / Vienna Secession Reborn.
 * Native archival route using the shared Navigation, Footer, LanguageContext,
 * Cinzel/Cormorant typography, black-gold palette, and supplied official art.
 */
import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowDown,
  BookOpen,
  Check,
  Crown,
  Gem,
  Shield,
  Sparkles,
  Swords,
  Search,
  X,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { getFamilyMembers, type FamilyMember } from "@/i18n/familyMembers";
import { familyTreeAssets } from "@/lib/familyTreeAssets";
import "./familyTree.css";

type LineagePerson = {
  id: string;
  name: string;
  dates: string;
  reign?: string;
  roleKey: string;
  epithetKey?: string;
  noteKey?: string;
  bridge?: boolean;
};

type BranchMember = [name: string, dates: string, roleKey: string];

type Branch = {
  id: string;
  titleKey: string;
  subtitleKey: string;
  excluded?: boolean;
  members: BranchMember[];
};

type SearchCategory = "all" | "lineage" | "household" | "branches" | "succession";

type SearchEntry = {
  id: string;
  name: string;
  meta: string;
  category: Exclude<SearchCategory, "all">;
};

const lineage: LineagePerson[] = [
  { id: "franz-joseph", name: "Franz Joseph I", dates: "1830–1916", reign: "1848–1916", roleKey: "tree.person.fj.role", epithetKey: "tree.person.fj.epithet" },
  { id: "karl-ludwig", name: "Karl Ludwig", dates: "1833–1896", roleKey: "tree.person.karlLudwig.role", noteKey: "tree.person.karlLudwig.note", bridge: true },
  { id: "franz-ferdinand", name: "Franz Ferdinand I", dates: "1863–1922", reign: "1916–1922", roleKey: "tree.person.franzFerdinand.role", epithetKey: "tree.person.franzFerdinand.epithet" },
  { id: "otto-franz", name: "Otto Franz", dates: "1865–1906", roleKey: "tree.person.ottoFranz.role", noteKey: "tree.person.ottoFranz.note", bridge: true },
  { id: "karl", name: "Karl I", dates: "1887–1939", reign: "1922–1939", roleKey: "tree.person.karl.role", epithetKey: "tree.person.karl.epithet" },
  { id: "otto", name: "Otto I", dates: "1912–1980", reign: "1939–1955", roleKey: "tree.person.otto.role", epithetKey: "tree.person.otto.epithet", noteKey: "tree.person.otto.note" },
  { id: "rudolf", name: "Rudolf", dates: "1919–2010", roleKey: "tree.person.rudolf.role", noteKey: "tree.person.rudolf.note", bridge: true },
  { id: "friedrich", name: "Friedrich I", dates: "1936–1988", reign: "1955–1988", roleKey: "tree.person.friedrich.role", epithetKey: "tree.person.friedrich.epithet", noteKey: "tree.person.friedrich.note" },
  { id: "maximilian", name: "Maximilian II", dates: "1954–", reign: "1988–", roleKey: "tree.person.max.role", epithetKey: "tree.person.max.epithet", noteKey: "tree.person.max.note" },
];

const reigns = lineage.filter((person) => person.reign);

const branches: Branch[] = [
  {
    id: "franz-joseph-household",
    titleKey: "tree.branch.franz.title",
    subtitleKey: "tree.branch.franz.subtitle",
    members: [
      ["Elisabeth ‘Sisi’ of Bavaria", "1837–1898", "tree.member.sisi"],
      ["Sophie", "1855–1857", "tree.member.sophie"],
      ["Gisela", "1856–1932", "tree.member.gisela"],
      ["Rudolf", "1858–1889", "tree.member.rudolf"],
      ["Marie Valerie", "1868–1924", "tree.member.marie"],
    ],
  },
  {
    id: "hohenberg",
    titleKey: "tree.branch.hohenberg.title",
    subtitleKey: "tree.branch.hohenberg.subtitle",
    excluded: true,
    members: [
      ["Sophie Chotek", "1868–1938", "tree.member.sophieChotek"],
      ["Maximilian, Duke of Hohenberg", "1902–1962", "tree.member.hohenbergFounder"],
      ["Franz Ferdinand, Duke of Hohenberg", "1927–2015", "tree.member.hohenbergHead"],
      ["Maximilian, Duke of Hohenberg", "born 1961", "tree.member.hohenbergCurrent"],
      ["Franz Ferdinand von Hohenberg", "born 1988", "tree.member.hohenbergHeir"],
    ],
  },
  {
    id: "karl-zita",
    titleKey: "tree.branch.karl.title",
    subtitleKey: "tree.branch.karl.subtitle",
    members: [
      ["Otto", "1912–1980", "tree.member.ottoSucceeded"],
      ["Adelheid", "1914–1971", "tree.member.archduchess"],
      ["Robert", "1915–1996", "tree.member.austriaEste"],
      ["Felix", "1916–2011", "tree.member.archduke"],
      ["Carl Ludwig", "1918–2007", "tree.member.archduke"],
      ["Rudolf", "1919–2010", "tree.member.rudolfFather"],
      ["Charlotte", "1921–1989", "tree.member.archduchess"],
      ["Elisabeth", "1922–1993", "tree.member.archduchess"],
    ],
  },
  {
    id: "living-house",
    titleKey: "tree.branch.living.title",
    subtitleKey: "tree.branch.living.subtitle",
    members: [
      ["Crown Prince Leopold von Habsburg", "born 1994", "tree.succession.heir"],
      ["Archduchess Eleonora von Habsburg", "born 1996", "tree.member.archduchess"],
      ["Archduchess Gisela von Habsburg", "born 1961", "tree.member.archduchess"],
      ["Archduchess Alexis von Habsburg", "born 1960", "tree.member.archduchess"],
      ["Archduke Reiner von Habsburg", "age 31", "tree.succession.nephew"],
      ["Archduke Charles Bertroch", "born 1957", "tree.member.archduke"],
    ],
  },
];

const portraitOrder = ["LP", "KR", "EL", "GI", "AL", "CB", "RV"];

function localisedName(name: string, language: Language) {
  if (language === "de") return name.replace(/ I$/, " I.").replace(/ II$/, " II.").replace("of Bavaria", "in Bayern").replace("Duke of Hohenberg", "Herzog von Hohenberg").replace("born", "geb.");
  if (language === "hu") return name.replace("Franz Joseph", "Ferenc József").replace("Franz Ferdinand", "Ferenc Ferdinánd").replace("Karl I", "I. Károly").replace("Otto I", "I. Ottó").replace("Friedrich I", "I. Frigyes").replace("Maximilian II", "II. Miksa").replace("Crown Prince", "Koronaherceg").replace("Archduchess", "Főhercegnő").replace("Archduke", "Főherceg").replace("born", "szül.").replace("age", "éves");
  if (language === "fr") return name.replace("Franz Joseph", "François-Joseph").replace("Franz Ferdinand", "François-Ferdinand").replace("Karl I", "Charles Ier").replace("Otto I", "Otto Ier").replace("Friedrich I", "Frédéric Ier").replace("Maximilian II", "Maximilien II").replace("Crown Prince", "Prince héritier").replace("Archduchess", "Archiduchesse").replace("Archduke", "Archiduc").replace("Duke of Hohenberg", "Duc de Hohenberg").replace("born", "né en").replace("age", "âge");
  if (language === "cs") return name.replace("Franz Joseph", "František Josef").replace("Franz Ferdinand", "František Ferdinand").replace("Karl I", "Karel I.").replace("Otto I", "Otto I.").replace("Friedrich I", "Fridrich I.").replace("Maximilian II", "Maxmilián II.").replace("Crown Prince", "Korunní princ").replace("Archduchess", "Arcivévodkyně").replace("Archduke", "Arcivévoda").replace("Duke of Hohenberg", "Vévoda z Hohenbergu").replace("born", "nar.").replace("age", "věk");
  if (language === "hr") return name.replace("Franz Joseph", "Franjo Josip").replace("Franz Ferdinand", "Franjo Ferdinand").replace("Karl I", "Karlo I.").replace("Otto I", "Otto I.").replace("Friedrich I", "Friedrich I.").replace("Maximilian II", "Maksimilijan II.").replace("Crown Prince", "Prijestolonasljednik").replace("Archduchess", "Nadvojvotkinja").replace("Archduke", "Nadvojvoda").replace("Duke of Hohenberg", "Vojvoda od Hohenberga").replace("born", "rođ.").replace("age", "dob");
  if (language === "es") return name.replace("Franz Joseph", "Francisco José").replace("Franz Ferdinand", "Francisco Fernando").replace("Karl Ludwig", "Carlos Luis").replace("Carl Ludwig", "Carlos Luis").replace("Karl I", "Carlos I").replace("Otto Franz", "Otón Francisco").replace("Otto I", "Otón I").replace(/^Otto$/, "Otón").replace("Friedrich I", "Federico I").replace("Maximilian II", "Maximiliano II").replace("Maximilian,", "Maximiliano,").replace("Elisabeth", "Isabel").replace("Marie Valerie", "María Valeria").replace(/^Robert$/, "Roberto").replace(/^Felix$/, "Félix").replace(/^Charlotte$/, "Carlota").replace("Crown Prince", "Príncipe Heredero").replace("Archduchess", "Archiduquesa").replace("Archduke", "Archiduque").replace("Duke of Hohenberg", "Duque de Hohenberg").replace("of Bavaria", "de Baviera").replace("Leopold", "Leopoldo").replace("born", "nac.").replace("age", "edad");
  return name;
}

function normalizeSearch(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
}

function SectionHeading({ kicker, title, intro, dark = false }: { kicker: string; title: string; intro: string; dark?: boolean }) {
  return (
    <div className={`ift-section-heading ${dark ? "ift-on-dark" : ""}`}>
      <p className="ift-kicker">{kicker}</p>
      <h2>{title}</h2>
      <div className="ift-flourish" aria-hidden="true"><span /><Gem size={14} /><span /></div>
      <p>{intro}</p>
    </div>
  );
}

function HouseholdCard({ member, t, active }: { member: FamilyMember; t: (key: string) => string; active: boolean }) {
  const portrait = familyTreeAssets.portraits[member.initials] ?? member.portrait;
  return (
    <article id={`household-${member.initials}`} className={`ift-household-card ${active ? "ift-search-match" : ""}`}>
      <div className="ift-household-portrait">
        <img src={portrait} alt={`${member.name} — official portrait`} />
        {(member.isCrownPrince || member.initials === "RV") && <span>{member.isCrownPrince ? t("tree.succession.crownPrince") : t("tree.succession.marshal")}</span>}
      </div>
      <div className="ift-household-copy">
        <p className="ift-age">{member.age}</p>
        <h3>{member.name}</h3>
        <h4>{member.title}</h4>
        <p>{member.bio}</p>
        {!!member.languages?.length && (
          <div className="ift-language-list">
            <small>{t("tree.household.languages")}</small>
            <div>{member.languages.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function FamilyTreeFull() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState<SearchCategory>("all");
  const [activeSearchId, setActiveSearchId] = useState<string | null>(null);
  const portrait = language === "de" ? familyTreeAssets.emperorDe : familyTreeAssets.emperorEn;
  const household = useMemo(() => {
    const members = getFamilyMembers(language).filter((member) => !member.isEmperor);
    return portraitOrder.map((initials) => members.find((member) => member.initials === initials)).filter(Boolean) as FamilyMember[];
  }, [language]);

  const searchEntries = useMemo<SearchEntry[]>(() => {
    const entries: SearchEntry[] = [
      ...lineage.map((person) => ({
        id: `lineage-${person.id}`,
        name: localisedName(person.name, language),
        meta: `${person.dates} · ${t(person.roleKey)}`,
        category: "lineage" as const,
      })),
      ...household.map((member) => ({
        id: `household-${member.initials}`,
        name: member.name,
        meta: member.title,
        category: "household" as const,
      })),
      ...branches.flatMap((branch) => branch.members.map(([name, dates, roleKey], index) => ({
        id: `branch-${branch.id}-${index}`,
        name: localisedName(name, language),
        meta: `${localisedName(dates, language)} · ${t(roleKey)}`,
        category: "branches" as const,
      }))),
      {
        id: "succession-leopold",
        name: localisedName("Crown Prince Leopold von Habsburg", language),
        meta: t("tree.succession.heir"),
        category: "succession" as const,
      },
      {
        id: "succession-reiner",
        name: localisedName("Archduke Reiner von Habsburg", language),
        meta: t("tree.succession.marshal"),
        category: "succession" as const,
      },
    ];
    return entries;
  }, [household, language, t]);

  const searchResults = useMemo(() => {
    const normalized = normalizeSearch(searchQuery.trim());
    return searchEntries.filter((entry) => {
      const inCategory = searchCategory === "all" || entry.category === searchCategory;
      const matchesQuery = !normalized || normalizeSearch(`${entry.name} ${entry.meta}`).includes(normalized);
      return inCategory && matchesQuery;
    });
  }, [searchCategory, searchEntries, searchQuery]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = t("tree.meta.full");
  }, [language, t]);

  const scrollToLineage = () => document.getElementById("family-tree-lineage")?.scrollIntoView({ behavior: "smooth" });
  const selectSearchResult = (id: string) => {
    setActiveSearchId(id);
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" }));
  };
  const resetSearch = () => {
    setSearchQuery("");
    setSearchCategory("all");
    setActiveSearchId(null);
  };

  return (
    <div className="family-tree-route ift-full">
      <Navigation />
      <main>
        <section className="ift-hero">
          <div className="ift-crown-frieze"><img src={familyTreeAssets.crown} alt="" /><div /></div>
          <img className="ift-arms-watermark" src={familyTreeAssets.arms} alt="" aria-hidden="true" />
          <div className="ift-hero-inner">
            <div className="ift-hero-copy">
              <p className="ift-kicker"><Sparkles size={14} />{t("tree.hero.kicker")}</p>
              <h1><span>{t("tree.hero.titleA")}</span>{t("tree.hero.titleB")}</h1>
              <p className="ift-hero-intro">{t("tree.hero.intro")}</p>
              <blockquote>“A.E.I.O.U. — {t("tree.hero.motto")}”</blockquote>
              <div className="ift-hero-actions">
                <button onClick={scrollToLineage}>{t("tree.hero.explore")}<ArrowDown size={17} /></button>
                <Link href="/family-tree/simple">{t("tree.action.simple")}</Link>
              </div>
              <div className="ift-hero-stats">
                <div><strong>178</strong><span>{t("tree.hero.statYears")}</span></div>
                <div><strong>6</strong><span>{t("tree.hero.statSovereigns")}</span></div>
                <div><strong>2</strong><span>{t("tree.hero.statHeirs")}</span></div>
              </div>
            </div>
            <div className="ift-portrait-stage">
              <div className="ift-portrait-frame"><img src={portrait} alt={t("tree.hero.sovereign")} /></div>
              <div className="ift-current-plaque"><span>{t("tree.hero.current")}</span><h2>{t("tree.hero.sovereign")}</h2><p>{t("tree.hero.sovereignTitle")}</p><b>{t("tree.hero.since")}</b></div>
              <div className="ift-wax-seal"><Crown size={24} /><span>1988</span></div>
            </div>
          </div>
        </section>

        <section className="ift-sovereign-strip">
          <div className="ift-container ift-sovereign-inner">
            <div className="ift-crest"><img src={familyTreeAssets.arms} alt="" /></div>
            <div><small>{t("tree.hero.current")}</small><strong>{t("tree.hero.sovereign")}</strong></div>
            <div className="ift-sovereign-facts">
              {["tree.hero.factBorn", "tree.hero.factReign", "tree.hero.factWidow"].map((key) => <span key={key}><Check size={13} />{t(key)}</span>)}
            </div>
          </div>
        </section>

        <section className="ift-genealogy-search ift-no-print" aria-labelledby="genealogy-search-title">
          <div className="ift-container">
            <div className="ift-search-shell">
              <div className="ift-search-heading">
                <Search size={18} aria-hidden="true" />
                <div><small>{t("tree.search.kicker")}</small><h2 id="genealogy-search-title">{t("tree.search.title")}</h2></div>
              </div>
              <div className="ift-search-row">
                <label className="ift-search-input">
                  <Search size={17} aria-hidden="true" />
                  <span className="sr-only">{t("tree.search.label")}</span>
                  <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder={t("tree.search.placeholder")} type="search" autoComplete="off" />
                  {(searchQuery || searchCategory !== "all") && <button type="button" onClick={resetSearch} aria-label={t("tree.search.reset")}><X size={15} /></button>}
                </label>
                <div className="ift-search-filters" aria-label={t("tree.search.filterLabel")}>
                  {(["all", "lineage", "household", "branches", "succession"] as SearchCategory[]).map((category) => (
                    <button type="button" key={category} aria-pressed={searchCategory === category} onClick={() => setSearchCategory(category)}>{t(`tree.search.filter.${category}`)}</button>
                  ))}
                </div>
              </div>
              {(!!searchQuery.trim() || searchCategory !== "all") && (
                <div className="ift-search-results" aria-live="polite">
                  <p>{searchResults.length ? t("tree.search.results").replace("{count}", String(searchResults.length)) : t("tree.search.empty")}</p>
                  {!!searchResults.length && <div>{searchResults.map((entry) => <button type="button" key={entry.id} onClick={() => selectSearchResult(entry.id)}><span>{entry.name}</span><small>{entry.meta}</small></button>)}</div>}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="ift-household-section">
          <div className="ift-container">
            <SectionHeading kicker={t("tree.household.kicker")} title={t("tree.household.title")} intro={t("tree.household.intro")} />
            <div className="ift-household-grid">{household.map((member) => <HouseholdCard key={member.initials} member={member} t={t} active={activeSearchId === `household-${member.initials}`} />)}</div>
            <aside className="ift-memorial"><Crown size={24} /><div><h3>{t("tree.household.memorialTitle")}</h3><p>{t("tree.household.memorialText")}</p></div></aside>
            <Link className="ift-crosslink" href="/family"><BookOpen size={17} />{t("tree.action.family")}</Link>
          </div>
        </section>

        <section className="ift-parchment" id="family-tree-lineage">
          <div className="ift-container">
            <SectionHeading kicker={t("tree.lineage.kicker")} title={t("tree.lineage.title")} intro={t("tree.lineage.intro")} />
            <div className="ift-legend"><span><i className="gold" />{t("tree.lineage.direct")}</span><span><i className="ivory" />{t("tree.lineage.bridge")}</span><span><i className="red" />{t("tree.lineage.principal")}</span></div>
            <div className="ift-lineage-list">
              {lineage.map((person, index) => (
                <div className="ift-lineage-step" key={person.id}>
                  <article id={`lineage-${person.id}`} className={`ift-imperial-card ${person.bridge ? "ift-bridge" : ""} ${activeSearchId === `lineage-${person.id}` ? "ift-search-match" : ""}`}>
                    <span className="ift-ordinal">{String(index + 1).padStart(2, "0")}</span>
                    <Crown className="ift-card-crown" size={18} />
                    <p className="ift-person-dates">{person.dates}</p>
                    <h3>{localisedName(person.name, language)}</h3>
                    <p>{t(person.roleKey)}</p>
                    {person.reign && <b className="ift-reign-ribbon">{t("tree.lineage.reign")} {person.reign}{person.id === "maximilian" ? t("tree.reigns.present") : ""}</b>}
                    {person.epithetKey && <em>“{t(person.epithetKey)}”</em>}
                    {person.noteKey && <small>{t(person.noteKey)}</small>}
                  </article>
                  {index < lineage.length - 1 && <div className="ift-connector"><span /><Crown size={15} /><span /></div>}
                </div>
              ))}
            </div>
            <div className="ift-decree"><span><Crown size={23} /></span><div><small>MCMLXXXVIII</small><p>{t("tree.lineage.decree")}</p></div></div>
          </div>
        </section>

        <section className="ift-branches">
          <div className="ift-container">
            <SectionHeading kicker={t("tree.branches.kicker")} title={t("tree.branches.title")} intro={t("tree.branches.intro")} dark />
            <div className="ift-branch-grid">
              {branches.map((branch) => (
                <details className="ift-branch-register" key={branch.id}>
                  <summary>
                    <span className={branch.excluded ? "excluded" : ""}>{branch.excluded ? <Swords size={21} /> : <Shield size={21} />}</span>
                    <span><small>{t(branch.excluded ? "tree.branches.excluded" : "tree.branches.included")}</small><strong>{t(branch.titleKey)}</strong><em>{t(branch.subtitleKey)}</em></span>
                    <b>{t("tree.branches.open")}</b>
                  </summary>
                  <div className="ift-branch-members">
                    {branch.members.map(([name, dates, roleKey], index) => <div id={`branch-${branch.id}-${index}`} className={activeSearchId === `branch-${branch.id}-${index}` ? "ift-search-match" : ""} key={`${branch.id}-${name}-${dates}`}><i /><p><strong>{localisedName(name, language)}</strong><span>{localisedName(dates, language)} · {t(roleKey)}</span></p></div>)}
                  </div>
                </details>
              ))}
            </div>
            <p className="ift-cadet-note"><Swords size={19} />{t("tree.branches.cadetNote")}</p>
          </div>
        </section>

        <section className="ift-reigns">
          <div className="ift-container">
            <SectionHeading kicker={t("tree.reigns.kicker")} title={t("tree.reigns.title")} intro={t("tree.reigns.intro")} />
            <div className="ift-reign-table">
              {reigns.map((person, index) => (
                <div className={`ift-reign-row ${index === reigns.length - 1 ? "active" : ""}`} key={person.id}>
                  <span>{index + 1}</span><div><strong>{localisedName(person.name, language)}</strong><em>{person.epithetKey ? t(person.epithetKey) : ""}</em></div>
                  <div className="ift-reign-range"><span>{person.reign?.split("–")[0]}</span><i /><span>{person.id === "maximilian" ? t("tree.reigns.present") : person.reign?.split("–")[1]}</span></div>
                  <div className="ift-reign-length"><b>{[68, 6, 17, 16, 33, 38][index]}</b><small>{t("tree.reigns.years")}</small></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ift-succession">
          <div className="ift-container">
            <SectionHeading kicker={t("tree.succession.kicker")} title={t("tree.succession.title")} intro={t("tree.succession.intro")} dark />
            <div className="ift-succession-layout">
              <div className="ift-succession-list">
                {[
                  ["01", "Leopold von Habsburg", "1994", "tree.succession.crownPrince", "tree.succession.heir"],
                  ["02", "Reiner von Habsburg", "31", "tree.succession.marshal", "tree.succession.nephew"],
                ].map(([rank, name, born, role, relation], index) => (
                  <article id={index === 0 ? "succession-leopold" : "succession-reiner"} className={`${index === 0 ? "heir" : ""} ${activeSearchId === (index === 0 ? "succession-leopold" : "succession-reiner") ? "ift-search-match" : ""}`} key={rank}><b>{rank}</b><span>{index === 0 ? <Crown size={25} /> : <Shield size={22} />}</span><div><small>{t(role)}</small><h3>{localisedName(index === 0 ? "Crown Prince Leopold von Habsburg" : "Archduke Reiner von Habsburg", language)}</h3><p>{t(relation)}</p></div><em><small>{t("tree.succession.born")}</small>{born}</em></article>
                ))}
              </div>
              <aside className="ift-alliance"><p><BookOpen size={19} />{t("tree.alliance.kicker")}</p><h3>{t("tree.alliance.title")}</h3><div>{t("tree.alliance.text")}</div><section>{[1, 2, 3].map((n) => <span key={n}>{n === 1 ? <Crown size={20} /> : n === 2 ? <Sparkles size={20} /> : <Shield size={20} />}<strong>{t(`tree.alliance.p${n}`)}</strong><small>{t(`tree.alliance.v${n}`)}</small></span>)}</section></aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
