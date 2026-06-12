"use client"

import { useRef, useState } from "react"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  baseRotate?: number
}

export default function TiltCard({ children, className = "", baseRotate = 0 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: `perspective(800px) rotate(${baseRotate}deg)`,
  })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return

    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (0.5 - y) * 8
    const rotateY = (x - 0.5) * 8

    setStyle({
      transform: `perspective(800px) rotate(${baseRotate}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      "--spot-x": `${x * 100}%`,
      "--spot-y": `${y * 100}%`,
      "--spot-opacity": 1,
    } as React.CSSProperties)
  }

  const handleLeave = () => {
    setStyle({
      transform: `perspective(800px) rotate(${baseRotate}deg)`,
      "--spot-opacity": 0,
    } as React.CSSProperties)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className={`relative transition-transform duration-200 ease-out [transform-style:preserve-3d] ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: "var(--spot-opacity, 0)",
          background:
            "radial-gradient(250px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(124, 58, 237, 0.25), transparent 70%)",
        }}
      />
      {children}
    </div>
  )
}
