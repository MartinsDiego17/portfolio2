"use client"

import { useEffect, useRef, useState } from "react"
import { Layers, Monitor, Server, Database, Cloud, Wrench } from "lucide-react"
import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiVitest,
  SiNestjs,
  SiPostgresql,
  SiSupabase,
  SiRedis,
  SiVercel,
  SiNetlify,
  SiRender,
  SiGit,
  SiFigma,
  SiPostman,
} from "@icons-pack/react-simple-icons"

const stackCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Monitor,
    technologies: [
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss },
      { name: "Tailwind", Icon: SiTailwindcss },
      { name: "Javascript", Icon: SiJavascript },
      { name: "Typescript", Icon: SiTypescript },
      { name: "React", Icon: SiReact },
      { name: "NextJs", Icon: SiNextdotjs },
      { name: "Astro", Icon: SiAstro },
      { name: "Zustand", Icon: null },
      { name: "Redux", Icon: SiRedux },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    technologies: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express", Icon: SiExpress },
      { name: "Vitest", Icon: SiVitest },
      { name: "NestJs", Icon: SiNestjs },
    ],
  },
  {
    id: "database",
    title: "Bases de Datos",
    icon: Database,
    technologies: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Supabase", Icon: SiSupabase },
      { name: "Redis", Icon: SiRedis },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    technologies: [
      { name: "Vercel", Icon: SiVercel },
      { name: "Netlify", Icon: SiNetlify },
      { name: "Render", Icon: SiRender },
    ],
  },
  {
    id: "tools",
    title: "Herramientas",
    icon: Wrench,
    technologies: [
      { name: "Git", Icon: SiGit },
      { name: "VS Code", Icon: null },
      { name: "Figma", Icon: SiFigma },
      { name: "Postman", Icon: SiPostman },
    ],
  },
]

export function TechStack() {
  const [visibleItems, setVisibleItems] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id")
            if (id) {
              setVisibleItems((prev) => [...new Set([...prev, id])])
            }
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    )

    const items = sectionRef.current?.querySelectorAll("[data-id]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="stack"
      className="py-24 md:py-32 relative"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Layers className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Tecnologías</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-balance">Stack Tecnológico</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            <span className="text-pretty">
              Las herramientas y tecnologías que utilizo para dar vida a los proyectos
            </span>
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {stackCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              data-id={category.id}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
              className={`group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-200 ${
                visibleItems.includes(category.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${activeCategory === category.id ? "box-glow-sm" : ""}`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Technologies — icon grid */}
              <div className="grid grid-cols-3 gap-3">
                {category.technologies.map((tech, techIndex) => {
                  const isHovered = hoveredTech === `${category.id}-${tech.name}`
                  return (
                    <div
                      key={tech.name}
                      onMouseEnter={() => setHoveredTech(`${category.id}-${tech.name}`)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className={`relative flex flex-col items-center justify-center gap-2 p-3 rounded-xl border transition-all duration-200 cursor-default
                        ${visibleItems.includes(category.id)
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"}
                        ${isHovered
                          ? "bg-primary/15 border-primary/50 scale-105 shadow-md"
                          : "bg-secondary/40 border-border/30 hover:border-primary/20"
                        }`}
                      style={{
                        transitionDelay: visibleItems.includes(category.id)
                          ? "0ms"
                          : `${categoryIndex * 100 + techIndex * 60}ms`,
                      }}
                    >
                      {/* Icon */}
                      {tech.Icon && (
                        <tech.Icon
                          size={24}
                          className={`transition-all duration-200 ${
                            isHovered
                              ? "text-primary"
                              : "text-muted-foreground opacity-70"
                          }`}
                        />
                      )}

                      {/* Name */}
                      <span
                        className={`text-xs font-medium text-center leading-tight transition-colors duration-200 ${
                          isHovered ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {tech.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}