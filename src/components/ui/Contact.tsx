"use client"

import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr"
import ScrollReveal from "@/components/common/ScrollReveal"
import ScrambleText from "@/components/common/ScrambleText"
import { useTranslation } from "@/components/common/LanguageProvider"

const socials = [
  { label: "GitHub", href: "https://github.com/AlansitoFdez", icon: GithubLogoIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/alanfdez-dev", icon: LinkedinLogoIcon },
]

export default function Contact() {
  const { contact: t } = useTranslation()

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_55%_55%_at_70%_50%,#000_40%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="parallax-blob pointer-events-none absolute -right-40 bottom-0 h-112 w-md rounded-full bg-violet-600/15 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <ScrollReveal className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          {t.badge}
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            <ScrambleText text={t.title} />
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <p className="mt-4 text-lg text-gray-400">{t.description}</p>
        </ScrollReveal>

        <ScrollReveal delay={160} className="mt-10">
          <a
            href="mailto:alanfdiosdado@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-violet-700 active:scale-[0.98]"
          >
            <EnvelopeSimpleIcon size={20} weight="bold" />
            {t.cta}
          </a>
        </ScrollReveal>

        <ScrollReveal delay={240} className="mt-10 flex items-center justify-center gap-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-violet-500/40 hover:bg-violet-500/5 hover:text-violet-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
