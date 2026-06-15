"use client"

import { useEffect, useState } from "react"
import { ArrowUpIcon } from "@phosphor-icons/react/dist/ssr"
import { useTranslation } from "@/components/common/LanguageProvider"

export default function BackToTop() {
  const { nav: t } = useTranslation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <a
      href="#hero"
      aria-label={t.backToTop}
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0f0f0f]/80 text-gray-400 shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:border-violet-500/40 hover:text-violet-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUpIcon size={18} weight="bold" />
    </a>
  )
}
