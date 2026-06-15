"use client"

import { CodeIcon, MonitorIcon, HardDrivesIcon, DatabaseIcon, GearSixIcon } from "@phosphor-icons/react/dist/ssr"
import ScrollReveal from "@/components/common/ScrollReveal"
import TiltCard from "@/components/common/TiltCard"
import CountUp from "@/components/common/CountUp"
import { useTranslation } from "@/components/common/LanguageProvider"

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Python", "FastAPI"],
  database: ["PostgreSQL", "MongoDB", "pgvector"],
  devops: ["Git", "GitHub", "Vercel", "Render", "Docker"],
}

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <MonitorIcon size={16} weight="bold" />,
  backend: <HardDrivesIcon size={16} weight="bold" />,
  database: <DatabaseIcon size={16} weight="bold" />,
  devops: <GearSixIcon size={16} weight="bold" />,
}

const totalSkills = Object.values(skills).reduce((sum, items) => sum + items.length, 0)

const learning = "pgvector"

const skillIcons: Record<string, string> = {
  React: "react",
  "Next.js": "nextdotjs",
  TypeScript: "typescript",
  "Tailwind CSS": "tailwindcss",
  "Node.js": "nodedotjs",
  Express: "express",
  Python: "python",
  FastAPI: "fastapi",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Git: "git",
  GitHub: "github",
  Vercel: "vercel",
  Render: "render",
  Docker: "docker",
}

export default function Skills() {
  const { skills: t } = useTranslation()

  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_55%_55%_at_50%_100%,#000_40%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="parallax-blob pointer-events-none absolute -left-40 bottom-0 h-112 w-md rounded-full bg-violet-600/20 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <ScrollReveal className="flex items-baseline gap-3">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Skills</h2>
          <span className="text-sm text-gray-400">
            <CountUp to={totalSkills} suffix="+" /> {t.techCount}
          </span>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items], index) => (
            <ScrollReveal key={category} delay={index * 80}>
              <TiltCard className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
                  {categoryIcons[category]}
                  {t.categories[category as keyof typeof t.categories]}
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {items.map((skill) => (
                    <div
                      key={skill}
                      className="group relative flex flex-col items-center gap-2 rounded-lg border border-white/5 bg-white/2 p-3 text-center transition-all hover:border-violet-500/40 hover:bg-violet-500/5"
                    >
                      {skill === learning && (
                        <span className="absolute right-1.5 top-1.5 flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-400" />
                        </span>
                      )}
                      {skillIcons[skill] ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`https://cdn.simpleicons.org/${skillIcons[skill]}/9ca3af`}
                          alt=""
                          width={24}
                          height={24}
                          className="transition-all group-hover:drop-shadow-[0_0_6px_rgba(124,58,237,0.7)]"
                        />
                      ) : (
                        <CodeIcon size={24} className="text-gray-400" />
                      )}
                      <span className="text-xs text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
