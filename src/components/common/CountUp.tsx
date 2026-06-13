"use client"

import { useEffect, useRef, useState } from "react"

interface CountUpProps {
  to: number
  suffix?: string
  duration?: number
}

export default function CountUp({ to, suffix = "", duration = 1500 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          setValue(Math.floor(progress * to))
          if (progress < 1) requestAnimationFrame(tick)
          else setValue(to)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [to, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
