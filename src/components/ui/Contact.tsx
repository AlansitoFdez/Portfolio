import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr"

const socials = [
  { label: "GitHub", href: "https://github.com/AlansitoFdez", icon: GithubLogoIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/alanfdez-dev", icon: LinkedinLogoIcon },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-112 w-md rounded-full bg-violet-600/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="animate-fade-up text-3xl font-bold tracking-tight md:text-4xl">¿Hablamos?</h2>
        <p className="animate-fade-up mt-4 text-lg text-gray-400 [animation-delay:80ms]">
          Estoy buscando mi primer empleo como desarrollador. Si tienes un proyecto o una oportunidad,
          escríbeme.
        </p>

        <div className="animate-fade-up mt-10 [animation-delay:160ms]">
          <a
            href="mailto:alanfdiosdado@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-violet-700 active:scale-[0.98]"
          >
            <EnvelopeSimpleIcon size={20} weight="bold" />
            Envíame un email
          </a>
        </div>

        <div className="animate-fade-up mt-10 flex items-center justify-center gap-6 [animation-delay:240ms]">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
            >
              <Icon size={20} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
