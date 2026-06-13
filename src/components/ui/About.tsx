import { GraduationCapIcon, BuildingsIcon, SparkleIcon } from "@phosphor-icons/react/dist/ssr"
import ScrollReveal from "@/components/common/ScrollReveal"
import CountUp from "@/components/common/CountUp"
import Timeline from "@/components/common/Timeline"
import ScrambleText from "@/components/common/ScrambleText"

const highlights = [
  {
    icon: <GraduationCapIcon size={16} weight="bold" />,
    title: "Formación",
    description: "Desarrollo de Aplicaciones Multiplataforma",
  },
  {
    icon: <BuildingsIcon size={16} weight="bold" />,
    title: "Experiencia",
    description: "Prácticas desarrollando una plataforma web para una empresa de formación en VR",
  },
  {
    icon: <SparkleIcon size={16} weight="bold" />,
    title: "Enfoque",
    description: "Desarrollo web moderno combinado con inteligencia artificial",
  },
]

const stats = [
  { value: 16, suffix: "+", label: "Tecnologías" },
  { value: 2, suffix: "", label: "Proyectos" },
  { value: 1, suffix: "+", label: "Año de experiencia" },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_55%_55%_at_75%_50%,#000_40%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="parallax-blob pointer-events-none absolute -left-40 top-1/3 h-112 w-md rounded-full bg-violet-600/20 blur-[120px]"
      />

      <div className="relative z-10 mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div>
          <ScrollReveal className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-400" />
            </span>
            Aprendiendo ahora: RAG &amp; LLMs
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              <ScrambleText text="Sobre mí" />
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80} className="mt-6 space-y-4 text-lg leading-relaxed text-gray-400">
            <p>
              Soy un desarrollador{" "}
              <span className="font-semibold text-violet-300">Fullstack Junior</span> recién
              graduado, apasionado por construir productos web completos, desde la interfaz hasta
              la base de datos.
            </p>
            <p>
              Durante mis prácticas desarrollé una plataforma web completa desde cero. Esa
              experiencia me enseñó a trabajar con código real, en{" "}
              <span className="font-semibold text-violet-300">producción</span>, con plazos
              reales.
            </p>
            <p>
              Actualmente busco mi primer empleo como desarrollador mientras sigo construyendo
              proyectos que combinan desarrollo web moderno con{" "}
              <span className="font-semibold text-violet-300">inteligencia artificial</span>.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240} className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {stats.map(({ value, suffix, label }) => (
              <div key={label}>
                <p className="text-3xl font-bold text-white md:text-4xl">
                  <CountUp to={value} suffix={suffix} />
                </p>
                <p className="mt-1 text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>

        <Timeline items={highlights} />
      </div>
    </section>
  )
}
