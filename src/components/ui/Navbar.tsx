"use client"

import { useEffect, useState } from "react"
import PillNav from "@/components/common/PillNav"

const items = [
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contact" },
]

const sectionIds = ["hero", "about", "projects", "skills", "contact"]

export default function Navbar() {
  const [activeHref, setActiveHref] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActiveHref(`#${visible.target.id}`)
      },
      { rootMargin: "-40% 0px -50% 0px" }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 10)
      setHidden(y > lastY && y > 100)
      lastY = y
    }

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
        className={`rounded-full p-1 transition-all duration-300 ${
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
        />
      </div>
    </header>
  )
}
