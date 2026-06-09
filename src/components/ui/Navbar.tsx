const links = [
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contact" },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-violet-500 font-bold text-lg">Alan.dev</span>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}