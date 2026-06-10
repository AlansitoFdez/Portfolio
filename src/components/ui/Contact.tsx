export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">¿Hablamos?</h2>
        <p className="text-gray-400 text-lg mb-10">
          Estoy buscando mi primer empleo como desarrollador. Si tienes un proyecto o una oportunidad, escríbeme.
        </p>
        <a
          href="mailto:alanfdiosdado@gmail.com"
          className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-medium px-8 py-4 rounded-lg transition-colors text-lg"
        >
          Envíame un email
        </a>
        <div className="flex items-center justify-center gap-8 mt-10">
          <a
            href="https://github.com/AlansitoFdez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/alanfdez-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}