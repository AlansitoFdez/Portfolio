"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { dictionary, type Lang } from "@/content/dictionary"

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "es",
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es")

  useEffect(() => {
    const stored = localStorage.getItem("lang")
    if (stored === "es" || stored === "en") setLangState(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    localStorage.setItem("lang", next)
  }

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}

export function useTranslation() {
  const { lang } = useLanguage()
  return dictionary[lang]
}
