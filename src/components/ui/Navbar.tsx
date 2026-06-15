"use client"

import { useEffect, useState } from "react"
import PillNav from "@/components/common/PillNav"
import LanguageToggle from "@/components/common/LanguageToggle"
import { useTranslation } from "@/components/common/LanguageProvider"

const sectionIds = ["hero", "about", "projects", "skills", "contact"]

export default function Navbar() {
  const { nav: t } = useTranslation()
  const items = [
    { label: t.about, href: "#about" },
    { label: t.projects, href: "#projects" },
    { label: t.skills, href: "#skills" },
    { label: t.contact, href: "#contact" },
  ]

  const [activeHref, setActiveHref] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    let lastY = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 10)
      setHidden(y > lastY && y > 100)
      lastY = y

      const offset = window.innerHeight * 0.3

      let current = sections[0]
      for (const section of sections) {
        if (section.getBoundingClientRect().top - offset <= 0) {
          current = section
        }
      }

      if (current) setActiveHref(`#${current.id}`)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-transform duration-300 ${
        hidden ? "-translate-y-24" : "translate-y-0"
      }`}
    >
      <div
        className={`flex items-center gap-2 rounded-full p-1 transition-all duration-300 ${
          scrolled ? "bg-[#0f0f0f]/60 shadow-lg shadow-black/20 ring-1 ring-white/10 backdrop-blur-md" : ""
        }`}
      >
        <PillNav
          logo="/logo.svg"
          logoAlt="Alan Fernández Diosdado"
          items={items}
          homeHref="#hero"
          activeHref={activeHref}
          baseColor="#7c3aed"
          pillColor="#0f0f0f"
          pillTextColor="#a1a1aa"
          hoveredPillTextColor="#ffffff"
          navAriaLabel={t.primary}
          homeAriaLabel={t.home}
          menuAriaLabel={t.menu}
        />
        <LanguageToggle />
      </div>
    </header>
  )
}
