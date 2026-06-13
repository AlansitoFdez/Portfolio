"use client"

import { useRef } from "react"

interface SpotlightWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function SpotlightWrapper({ children, className = "" }: SpotlightWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    ref.current?.style.setProperty("--x", `${e.clientX - rect.left}px`)
    ref.current?.style.setProperty("--y", `${e.clientY - rect.top}px`)
  }

  return (
    <div ref={ref} onMouseMove={handleMove} className={`group relative overflow-hidden ${className}`}>
      {children}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(160px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.35), transparent 70%)",
        }}
      />
    </div>
  )
}
