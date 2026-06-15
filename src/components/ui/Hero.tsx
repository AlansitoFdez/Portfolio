"use client"

import { ArrowRightIcon, ArrowDownIcon, GithubLogoIcon, LinkedinLogoIcon, EnvelopeSimpleIcon, CodeIcon } from "@phosphor-icons/react/dist/ssr"
import ScrollReveal from "@/components/common/ScrollReveal"
import MagneticButton from "@/components/common/MagneticButton"
import CursorGlow from "@/components/common/CursorGlow"
import TiltCard from "@/components/common/TiltCard"
import RoleTypewriter from "@/components/common/RoleTypewriter"
import ScrambleName from "@/components/common/ScrambleName"
import SpotlightWrapper from "@/components/common/SpotlightWrapper"
import { useTranslation } from "@/components/common/LanguageProvider"

const socials = [
  { label: "GitHub", href: "https://github.com/AlansitoFdez", icon: GithubLogoIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/alanfdez-dev", icon: LinkedinLogoIcon },
  { label: "Email", href: "mailto:alanfdiosdado@gmail.com", icon: EnvelopeSimpleIcon },
]

const techStack = [
  { name: "TypeScript", slug: "typescript" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Python", slug: "python" },
  { name: "PostgreSQL", slug: "postgresql" },
]

export default function Hero() {
  const { hero: t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center overflow-hidden px-6 pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_55%_55%_at_25%_30%,#000_40%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="parallax-blob pointer-events-none absolute -right-40 top-1/4 h-112 w-md rounded-full bg-violet-600/20 blur-[120px]"
      />
      <div aria-hidden className="noise-overlay pointer-events-none absolute inset-0" />
      <CursorGlow />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <ScrollReveal className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            {t.badge}
          </ScrollReveal>

          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            <ScrambleName words={["Alan", "Fernández", "Diosdado"]} />
          </h1>

          <ScrollReveal delay={320}>
            <p className="mt-3 text-xl font-medium text-violet-400 md:text-2xl">
              <RoleTypewriter />
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-400 md:text-lg">
              {t.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={480} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton>
              <SpotlightWrapper className="rounded-lg">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 font-medium text-white transition-colors hover:bg-violet-700 active:scale-[0.98]"
                >
                  {t.ctaProjects}
                  <ArrowRightIcon size={18} weight="bold" />
                </a>
              </SpotlightWrapper>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#contact"
                className="inline-flex rounded-lg border border-white/10 px-6 py-3 font-medium text-gray-300 transition-colors hover:border-violet-400/60 hover:text-white active:scale-[0.98]"
              >
                {t.ctaContact}
              </a>
            </MagneticButton>
          </ScrollReveal>

          <ScrollReveal delay={560} className="mt-12 flex items-center gap-5">
            {socials.map(({ label, href, icon: Icon }) => (
              <div key={label} className="group relative">
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="text-gray-400 transition-all hover:scale-110 hover:text-white"
                >
                  <Icon size={24} />
                </a>
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/10 bg-[#161616] px-2 py-1 text-xs text-gray-300 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                  {label}
                </span>
              </div>
            ))}
          </ScrollReveal>
        </div>

        <ScrollReveal delay={240} className="hidden lg:col-span-5 lg:block">
          <div className="relative">
            <TiltCard baseRotate={2} className="overflow-hidden rounded-2xl p-px">
              <div
                aria-hidden
                className="chroma-spin absolute -inset-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(124,58,237,0.9)_90deg,transparent_180deg)]"
              />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] p-6 font-mono text-sm leading-relaxed shadow-2xl shadow-black/40">
                <div className="mb-4 flex items-center gap-2 text-xs text-gray-500">
                  <CodeIcon size={14} />
                  profile.ts
                </div>
                <code className="block text-gray-300">
                  <span className="text-violet-400">const</span> dev = {"{"}
                  <br />
                  &nbsp;&nbsp;name: <span className="text-emerald-400">&quot;Alan Fernández&quot;</span>,
                  <br />
                  &nbsp;&nbsp;role: <span className="text-emerald-400">&quot;Full Stack Developer&quot;</span>,
                  <br />
                  &nbsp;&nbsp;stack: [<span className="text-emerald-400">&quot;Next.js&quot;</span>, <span className="text-emerald-400">&quot;Node&quot;</span>, <span className="text-emerald-400">&quot;Python&quot;</span>, <span className="text-emerald-400">&quot;Postgres&quot;</span>],
                  <br />
                  &nbsp;&nbsp;available: <span className="text-amber-400">true</span>,
                  <br />
                  {"}"}
                  <span className="terminal-cursor">|</span>
                </code>
              </div>
            </TiltCard>

            <div className="absolute -bottom-6 -left-6 -rotate-3 rounded-xl border border-white/10 bg-[#161616] px-4 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                {techStack.map(({ name, slug }) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={slug}
                    src={`https://cdn.simpleicons.org/${slug}/9ca3af`}
                    alt={name}
                    width={20}
                    height={20}
                    className="opacity-80 transition-all hover:opacity-100 hover:drop-shadow-[0_0_6px_rgba(124,58,237,0.7)]"
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <a
        href="#about"
        aria-label={t.nextSection}
        className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 transition-colors hover:text-white"
      >
        <ArrowDownIcon size={20} />
      </a>
    </section>
  )
}
