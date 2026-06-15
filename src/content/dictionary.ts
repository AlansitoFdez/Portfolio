export const dictionary = {
  es: {
    hero: {
      badge: "Disponible para trabajar",
      description:
        "Construyo productos web completos, del frontend a la base de datos, combinando desarrollo moderno con inteligencia artificial.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Hablemos",
      nextSection: "Ir a la siguiente sección",
    },
  },
  en: {
    hero: {
      badge: "Available for work",
      description:
        "I build full-stack web products, from the frontend to the database, combining modern web development with artificial intelligence.",
      ctaProjects: "View projects",
      ctaContact: "Let's talk",
      nextSection: "Go to next section",
    },
  },
} as const

export type Lang = keyof typeof dictionary
