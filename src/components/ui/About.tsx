import { GraduationCapIcon, BuildingsIcon, SparkleIcon } from "@phosphor-icons/react/dist/ssr"

const highlights = [
  {
    icon: GraduationCapIcon,
    title: "Formación",
    description: "Desarrollo de Aplicaciones Multiplataforma",
  },
  {
    icon: BuildingsIcon,
    title: "Experiencia",
    description: "Prácticas desarrollando una plataforma web para una empresa de formación en VR",
  },
  {
    icon: SparkleIcon,
    title: "Enfoque",
    description: "Desarrollo web moderno combinado con inteligencia artificial",
  },
]

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div>
          <h2 className="animate-fade-up text-3xl font-bold tracking-tight md:text-4xl">Sobre mí</h2>
          <div className="animate-fade-up mt-6 space-y-4 text-lg leading-relaxed text-gray-400 [animation-delay:80ms]">
            <p>
              Soy un desarrollador Fullstack Junior recién graduado, apasionado por construir
              productos web completos, desde la interfaz hasta la base de datos.
            </p>
            <p>
              Durante mis prácticas desarrollé una plataforma web completa desde cero. Esa
              experiencia me enseñó a trabajar con código real, en producción, con plazos reales.
            </p>
            <p>
              Actualmente busco mi primer empleo como desarrollador mientras sigo construyendo
              proyectos que combinan desarrollo web moderno con inteligencia artificial.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {highlights.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="animate-fade-up flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
              style={{ animationDelay: `${160 + index * 80}ms` }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                <Icon size={20} weight="bold" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-400">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
