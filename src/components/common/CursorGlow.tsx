"use client"

import { useEffect, useRef } from "react"

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    const parent = el?.parentElement
    if (!el || !parent) return

    const handleMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect()
      el.style.setProperty("--x", `${e.clientX - rect.left}px`)
      el.style.setProperty("--y", `${e.clientY - rect.top}px`)
      el.style.opacity = "1"
    }
    const handleLeave = () => {
      el.style.opacity = "0"
    }

    parent.addEventListener("mousemove", handleMove)
    parent.addEventListener("mouseleave", handleLeave)
    return () => {
      parent.removeEventListener("mousemove", handleMove)
      parent.removeEventListener("mouseleave", handleLeave)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(124, 58, 237, 0.18), transparent 70%)",
      }}
    />
  )
}
