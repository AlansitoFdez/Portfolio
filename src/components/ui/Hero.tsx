export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Alan Fernández Diosdado</h1>
      <p className="text-xl text-violet-500 mb-2">Full Stack Developer</p>
      <p className="text-lg text-gray-400 mb-8">Transformando ideas en productos reales</p>
      <a
        href="#projects"
        className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
      >
        Ver proyectos
      </a>
    </section>
  )
}