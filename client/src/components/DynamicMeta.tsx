import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ogData: Record<string, { title: string; description: string }> = {
  de: {
    title: "Kaiserliches Haus Österreich-Donau",
    description: "Offizielle Website der Kaiserlichen Familie der Donauföderation. Geschichte, Traditionen, Heraldik und die Kaiserliche Familie.",
  },
  en: {
    title: "Imperial House of Austria-Danubio",
    description: "Official website of the Imperial Family of the Danubian Federation. History, traditions, heraldry, and the Imperial Family.",
  },
  hu: {
    title: "Osztrák-Dunai Császári Ház",
    description: "A Dunai Föderáció Császári Családjának hivatalos weboldala. Történelem, hagyományok, heraldika és a Császári Család.",
  },
  fr: {
    title: "Maison Impériale d'Autriche-Danubio",
    description: "Site officiel de la Famille Impériale de la Fédération danubienne. Histoire, traditions, héraldique et la Famille Impériale.",
  },
  cs: {
    title: "Císařský dům Rakousko-Dunaj",
    description: "Oficiální webové stránky císařské rodiny Dunajské federace. Historie, tradice, heraldika a císařská rodina.",
  },
  hr: {
    title: "Carski dom Austrija-Dunav",
    description: "Službena web stranica Carske obitelji Dunavske Federacije. Povijest, tradicije, heraldika i Carska obitelj.",
  },
  es: {
    title: "Casa Imperial de Austria-Danubio",
    description: "Sitio web oficial de la Familia Imperial de la Federación del Danubio. Historia, tradiciones, heráldica y la Familia Imperial.",
  },
};

export default function DynamicMeta() {
  const { language } = useLanguage();

  useEffect(() => {
    const data = ogData[language] || ogData.de;
    
    // Update document title
    document.title = data.title;
    
    // Update or create OG meta tags
    const updateMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    const updateNameMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    updateMeta("og:title", data.title);
    updateMeta("og:description", data.description);
    updateMeta("og:type", "website");
    updateMeta("og:locale", language === "de" ? "de_AT" : language === "en" ? "en_GB" : language === "hu" ? "hu_HU" : language === "fr" ? "fr_FR" : language === "cs" ? "cs_CZ" : language === "hr" ? "hr_HR" : "es_ES");
    
    // Twitter card
    updateNameMeta("twitter:card", "summary_large_image");
    updateNameMeta("twitter:title", data.title);
    updateNameMeta("twitter:description", data.description);
    
    // General description
    updateNameMeta("description", data.description);
    
    // Language
    document.documentElement.lang = language;
  }, [language]);

  return null;
}
