import { createContext, useState, useEffect } from "react";

export const LangContext = createContext();

const translations = {
  en: {
    home: "Home",
    service: "Service",
    project: "Project",
    about: "About",
    contact: "Contact",
  },
  hi: {
    home: "होम",
    service: "सेवा",
    project: "प्रोजेक्ट",
    about: "हमारे बारे में",
    contact: "संपर्क",
  },
};

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ t: translations[lang], lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export default LanguageProvider;