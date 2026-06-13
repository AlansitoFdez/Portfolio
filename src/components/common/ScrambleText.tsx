"use client"

import { useRef, useState } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÑabcdefghijklmnopqrstuvwxyz"

function scramble(text: string, revealed: number) {
  return text
    .split("")
    .map((char, i) => (char === " " || i < revealed ? char : CHARS[Math.floor(Math.random() * CHARS.length)]))
    .join("")
}

interface ScrambleTextProps {
  text: string
  className?: string
}

export default function ScrambleText({ text, className = "" }: ScrambleTextProps) {
  const [display, setDisplay] = useState(text)
  const animating = useRef(false)

  const handleEnter = () => {
    if (animating.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    animating.current = true
    let revealed = 0

    const interval = setInterval(() => {
      setDisplay(scramble(text, revealed))
      revealed += 1
      if (revealed > text.length + 3) {
        clearInterval(interval)
        setDisplay(text)
        animating.current = false
      }
    }, 65)
  }

  return (
    <span onMouseEnter={handleEnter} className={`inline-block cursor-default ${className}`}>
      {display}
    </span>
  )
}
