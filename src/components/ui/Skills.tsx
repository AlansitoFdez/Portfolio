const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "Python", "FastAPI"],
  "Base de datos": ["PostgreSQL", "MongoDB", "pgvector"],
  DevOps: ["Git", "GitHub", "Vercel", "Render", "Docker"],
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="animate-fade-up text-3xl font-bold tracking-tight md:text-4xl">Skills</h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              className="animate-fade-up rounded-xl border border-white/10 bg-white/5 p-5"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-violet-400">
                {category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="rounded-md bg-white/5 px-2 py-1 text-xs text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
