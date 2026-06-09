import { projects } from "@/content/projects"

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-violet-500/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {project.wip && (
                  <span className="text-xs bg-violet-500/20 text-violet-400 px-2 py-1 rounded-full">
                    En construcción
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}