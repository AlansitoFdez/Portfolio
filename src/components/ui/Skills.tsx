const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "Python", "FastAPI"],
  "Base de datos": ["PostgreSQL", "MongoDB", "pgvector"],
  DevOps: ["Git", "GitHub", "Vercel", "Render", "Docker"],
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-violet-400 font-semibold mb-4 text-sm uppercase tracking-widest">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/5 border border-white/10 text-gray-300 text-sm px-3 py-1.5 rounded-lg"
                  >
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