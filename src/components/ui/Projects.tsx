import { ArrowRightIcon, ArrowUpRightIcon, GithubLogoIcon } from "@phosphor-icons/react/dist/ssr"
import { projects } from "@/content/projects"
import ScrollReveal from "@/components/common/ScrollReveal"
import TiltCard from "@/components/common/TiltCard"
import ScrambleText from "@/components/common/ScrambleText"

const techIcons: Record<string, string> = {
  React: "react",
  "Next.js": "nextdotjs",
  "Node.js": "nodedotjs",
  TypeScript: "typescript",
  Python: "python",
  FastAPI: "fastapi",
  PostgreSQL: "postgresql",
  "Tailwind CSS": "tailwindcss",
  Vercel: "vercel",
  Render: "render",
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_55%_55%_at_50%_0%,#000_40%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="parallax-blob pointer-events-none absolute -right-40 top-1/2 h-112 w-md rounded-full bg-violet-600/20 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Proyectos</h2>
        </ScrollReveal>

        <div className="mt-12 flex flex-col divide-y divide-white/10">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100} className="py-10 first:pt-0">
              <TiltCard className="group relative grid grid-cols-[auto_1fr] items-start gap-6 overflow-hidden rounded-2xl p-4 md:gap-10 md:pr-16">
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-2xl bg-violet-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <span className="font-mono text-5xl font-bold text-white/10 transition-colors duration-300 group-hover:text-violet-500/40 md:text-7xl">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-white md:text-3xl">
                      <ScrambleText text={project.title} />
                    </h3>
                    {project.wip && (
                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-400">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-400" />
                        </span>
                        En construcción
                      </span>
                    )}
                    {!project.wip && project.demo && (
                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </span>
                        Live
                      </span>
                    )}
                  </div>

                  <p className="max-w-2xl text-base leading-relaxed text-gray-400">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 text-xs text-gray-300">
                        {techIcons[tech] && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={`https://cdn.simpleicons.org/${techIcons[tech]}/9ca3af`}
                            alt=""
                            width={12}
                            height={12}
                          />
                        )}
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-5 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                      >
                        <GithubLogoIcon size={16} weight="bold" />
                        Código
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
                      >
                        Demo
                        <ArrowUpRightIcon size={16} weight="bold" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 translate-x-2 text-gray-500 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-violet-400 group-hover:opacity-100 md:flex">
                  <ArrowRightIcon size={28} weight="bold" />
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
