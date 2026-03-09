"use client"

import { useEffect, useRef, useState } from "react"
import { Folder, ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import zendaImage from "@/public/images/projects/zenda.png";
import yourHiringImage from "@/public/images/projects/yourhiring.png";
import pulsetech from "@/public/images/projects/pulsetech.png";
import zaporta from "@/public/images/projects/zaporta.png";

const projects = [
  {
    id: 1,
    title: "Zenda",
    description: "Plataforma de gestión de turnos entre psicólogos profesionales y pacientes",
    image: zendaImage.src,
    technologies: ["Next.js", "TypeScript", "Tailwind", "NestJs", "Supabase"],
    liveUrl: "https://zenda-i3jv.vercel.app/",
    githubUrl: "https://github.com/MartinsDiego17/zenda",
    featured: true,
  },
  {
    id: 2,
    title: "Pulsetech",
    description: "Aplicación para agencia propia de desarrollo y diseño de sitios web",
    image: pulsetech.src,
    technologies: ["Astro", "Typescript", "Tailwind"],
    liveUrl: "https://pulsetech-chi.vercel.app/",
    githubUrl: "https://github.com/MartinsDiego17/Pulsetech",
    featured: true,
  },
  {
    id: 3,
    title: "Landing para personal trainer",
    description: "Aplicación destinada a la promoción de servicios y productos de un entrenador personal",
    image: zaporta.src,
    technologies: ["Astro", "Tailwind", "Typescript"],
    liveUrl: "https://santi-zaporta.vercel.app/",
    githubUrl: "https://github.com/MartinsDiego17/santi-zaporta",
    featured: false,
  },
  {
    id: 4,
    title: "YourHiring",
    description: "Gestión de pustulaciones laborales",
    image: yourHiringImage.src,
    technologies: ["Astro", "Tailwind"],
    liveUrl: "https://your-hiring.vercel.app/",
    githubUrl: "https://github.com/MartinsDiego17/YourHiring",
    featured: false,
  },
]

export function Projects() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute("data-id") || "0")
            setVisibleItems((prev) => [...new Set([...prev, id])])
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    const items = sectionRef.current?.querySelectorAll("[data-id]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 md:py-32 relative"
    >
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Folder className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-balance">Proyectos Recientes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            <span className="text-pretty">
              Una selección de proyectos que demuestran mi experiencia en desarrollo fullstack
            </span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              data-id={project.id}
              className={`group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${visibleItems.includes(project.id)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                } ${project.featured ? "md:col-span-1 lg:col-span-1" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span className="sr-only">Ver proyecto</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="p-3 rounded-full bg-card text-foreground hover:scale-110 transition-transform"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">Ver código</span>
                  </a>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Destacado
                    </Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/80 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 5 && (
                    <Badge variant="secondary" className="bg-secondary/80 text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="rounded-xl border-2 hover:bg-primary/10 hover:border-primary"
            asChild
          >
            <a href="https://github.com/MartinsDiego17" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              Ver más en GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
