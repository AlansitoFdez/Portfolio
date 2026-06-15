"use client"

import { useLanguage } from "@/components/common/LanguageProvider"

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-0.5 rounded-full bg-white/5 p-1 text-xs font-semibold text-gray-400">
      {(["es", "en"] as const).map((option) => (
        <button
          key={option}
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={`rounded-full px-2.5 py-1.5 uppercase transition-colors ${
            lang === option ? "bg-violet-600 text-white" : "hover:text-white"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
