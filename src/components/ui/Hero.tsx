import { ArrowRight, GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr"

const socials = [
  { label: "GitHub", href: "https://github.com/AlansitoFdez", icon: GithubLogo },
  { label: "LinkedIn", href: "https://linkedin.com/in/alanfdez-dev", icon: LinkedinLogo },
  { label: "Email", href: "mailto:alanfdiosdado@gmail.com", icon: EnvelopeSimple },
]

export default function Hero() {
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
        className="pointer-events-none absolute -right-40 top-1/4 h-112 w-md rounded-full bg-violet-600/20 blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Disponible para trabajar
        </div>

        <h1 className="animate-fade-up max-w-3xl text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl [animation-delay:80ms]">
          Alan Fernández Diosdado
        </h1>

        <p className="animate-fade-up mt-3 text-xl font-medium text-violet-400 md:text-2xl [animation-delay:160ms]">
          Full Stack Developer
        </p>

        <p className="animate-fade-up mt-5 max-w-xl text-base leading-relaxed text-gray-400 md:text-lg [animation-delay:240ms]">
          Construyo productos web completos, del frontend a la base de datos, combinando
          desarrollo moderno con inteligencia artificial.
        </p>

        <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-4 [animation-delay:320ms]">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 font-medium text-white transition-colors hover:bg-violet-700 active:scale-[0.98]"
          >
            Ver proyectos
            <ArrowRight size={18} weight="bold" />
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/10 px-6 py-3 font-medium text-gray-300 transition-colors hover:border-violet-400/60 hover:text-white active:scale-[0.98]"
          >
            Hablemos
          </a>
        </div>

        <div className="animate-fade-up mt-12 flex items-center gap-5 [animation-delay:400ms]">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-gray-400 transition-all hover:scale-110 hover:text-white"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
