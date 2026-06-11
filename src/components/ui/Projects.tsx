import { ArrowUpRightIcon, GithubLogoIcon } from "@phosphor-icons/react/dist/ssr"
import { projects } from "@/content/projects"

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="animate-fade-up text-3xl font-bold tracking-tight md:text-4xl">Proyectos</h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="animate-fade-up group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/2 p-6 transition-colors hover:border-violet-500/40"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                {project.wip && (
                  <span className="shrink-0 rounded-full bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-400">
                    En construcción
                  </span>
                )}
              </div>

              <p className="text-sm leading-relaxed text-gray-400">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-md bg-white/5 px-2 py-1 text-xs text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-5 pt-2">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
