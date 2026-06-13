"use client"

import { useRef, useState } from "react"
import ScrollReveal from "@/components/common/ScrollReveal"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÑabcdefghijklmnopqrstuvwxyz"

function scramble(word: string, revealed: number) {
  return word
    .split("")
    .map((char, i) => (i < revealed ? char : CHARS[Math.floor(Math.random() * CHARS.length)]))
    .join("")
}

interface ScrambleNameProps {
  words: string[]
  className?: string
}

export default function ScrambleName({ words, className = "" }: ScrambleNameProps) {
  const [displayWords, setDisplayWords] = useState(words)
  const animating = useRef(false)

  const handleEnter = () => {
    if (animating.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    animating.current = true
    const maxLength = Math.max(...words.map((w) => w.length))
    let revealed = 0

    const interval = setInterval(() => {
      setDisplayWords(words.map((w) => scramble(w, revealed)))
      revealed += 1
      if (revealed > maxLength + 3) {
        clearInterval(interval)
        setDisplayWords(words)
        animating.current = false
      }
    }, 100)
  }

  return (
    <>
      {words.map((word, i) => (
        <ScrollReveal key={i} delay={80 + i * 80} className={`mr-3 inline-block md:mr-4 ${className}`}>
          <span onMouseEnter={handleEnter} className="inline-block cursor-default">
            {displayWords[i]}
          </span>
        </ScrollReveal>
      ))}
    </>
  )
}
