import PillNav from "@/components/common/PillNav"

const items = [
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contact" },
]

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <PillNav
        logo="/logo.svg"
        logoAlt="Alan Fernández Diosdado"
        items={items}
        homeHref="#hero"
        baseColor="#3f2d5c"
        pillColor="#18181b"
        pillTextColor="#a1a1aa"
        hoveredPillTextColor="#ffffff"
      />
    </header>
  )
}
