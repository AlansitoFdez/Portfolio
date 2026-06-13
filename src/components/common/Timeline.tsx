"use client"

import { useState } from "react"
import ScrollReveal from "@/components/common/ScrollReveal"

interface TimelineItem {
  icon: React.ReactNode
  title: string
  description: string
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  const [hovered, setHovered] = useState(-1)

  return (
    <div className="relative flex flex-col pl-8">
      {items.map(({ icon: Icon, title, description }, index) => {
        const active = hovered !== -1 && index <= hovered

        return (
          <ScrollReveal key={title} delay={160 + index * 80}>
            <div
              className="group relative pb-8 last:pb-0"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(-1)}
            >
              {index > 0 && (
                <div
                  className={`absolute -left-8 -top-8 h-8 w-px transition-colors duration-300 ${
                    active ? "bg-violet-500" : "bg-white/10"
                  }`}
                />
              )}
              <div
                className={`absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full border bg-[#0f0f0f] text-violet-400 transition-all duration-300 ${
                  active ? "border-violet-500 shadow-[0_0_12px_rgba(124,58,237,0.6)]" : "border-white/10"
                }`}
              >
                {Icon}
              </div>
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-400">{description}</p>
            </div>
          </ScrollReveal>
        )
      })}
    </div>
  )
}
