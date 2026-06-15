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
    about: {
      badge: "Aprendiendo ahora: RAG & LLMs",
      title: "Sobre mí",
      paragraphs: [
        {
          before: "Soy un desarrollador ",
          highlight: "Fullstack Junior",
          after:
            " recién graduado, apasionado por construir productos web completos, desde la interfaz hasta la base de datos.",
        },
        {
          before:
            "Durante mis prácticas desarrollé una plataforma web completa desde cero. Esa experiencia me enseñó a trabajar con código real, en ",
          highlight: "producción",
          after: ", con plazos reales.",
        },
        {
          before:
            "Actualmente busco mi primer empleo como desarrollador mientras sigo construyendo proyectos que combinan desarrollo web moderno con ",
          highlight: "inteligencia artificial",
          after: ".",
        },
      ],
      stats: [
        { suffix: "+", label: "Tecnologías" },
        { suffix: "", label: "Proyectos" },
        { suffix: "+", label: "Año de experiencia" },
      ],
      highlights: [
        { title: "Formación", description: "Desarrollo de Aplicaciones Multiplataforma" },
        {
          title: "Experiencia",
          description: "Prácticas desarrollando una plataforma web para una empresa de formación en VR",
        },
        { title: "Enfoque", description: "Desarrollo web moderno combinado con inteligencia artificial" },
      ],
    },
    projects: {
      title: "Proyectos",
      wip: "En construcción",
      code: "Código",
      items: [
        {
          title: "Cinesfera",
          description:
            "Red social cinematográfica con búsqueda de películas y series, sistema de reseñas, listas personalizadas, seguimiento de usuarios y recomendaciones personalizadas mediante IA.",
        },
        {
          title: "RAG para Cinesfera",
          description:
            "Extensión de Cinesfera con sistema de memoria persistente que mejora las recomendaciones con el tiempo usando recuperación aumentada por generación (RAG).",
        },
      ],
    },
    skills: {
      techCount: "tecnologías",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Base de datos",
        devops: "DevOps",
      },
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
    about: {
      badge: "Currently learning: RAG & LLMs",
      title: "About me",
      paragraphs: [
        {
          before: "I'm a recently graduated ",
          highlight: "Fullstack Junior",
          after: " developer, passionate about building complete web products, from the interface to the database.",
        },
        {
          before:
            "During my internship I built a full web platform from scratch. That experience taught me to work with real code, in ",
          highlight: "production",
          after: ", with real deadlines.",
        },
        {
          before:
            "I'm currently looking for my first job as a developer while continuing to build projects that combine modern web development with ",
          highlight: "artificial intelligence",
          after: ".",
        },
      ],
      stats: [
        { suffix: "+", label: "Technologies" },
        { suffix: "", label: "Projects" },
        { suffix: "+", label: "Year of experience" },
      ],
      highlights: [
        { title: "Education", description: "Multiplatform Application Development" },
        {
          title: "Experience",
          description: "Internship developing a web platform for a VR training company",
        },
        { title: "Focus", description: "Modern web development combined with artificial intelligence" },
      ],
    },
    projects: {
      title: "Projects",
      wip: "In progress",
      code: "Code",
      items: [
        {
          title: "Cinesfera",
          description:
            "Movie social network with search for films and shows, a review system, custom lists, user following and AI-powered personalized recommendations.",
        },
        {
          title: "RAG for Cinesfera",
          description:
            "Extension of Cinesfera with a persistent memory system that improves recommendations over time using retrieval-augmented generation (RAG).",
        },
      ],
    },
    skills: {
      techCount: "technologies",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        devops: "DevOps",
      },
    },
  },
} as const

export type Lang = keyof typeof dictionary
