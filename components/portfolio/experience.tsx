"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type Experience = {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string
  technologies: string[]
  link?: string
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Operador de puntos de venta",
    company: "Le Pain Quotidien",
    location: "Ezeiza, Buenos Aires",
    period: "2024 - 2025",
    description: "Fortaleciendo habilidades de comunicación con extranjeros y atención al cliente, así como también el manejo de puntos de venta.",
    technologies: ["Comunicación con extranjeros", "Sistemas POS", "Gestión de caja", "Atención al cliente", "Control de inventario"],
    link: "https://www.lepainquotidien.com/ar/es"
  },
  {
    id: 2,
    title: "Mesero",
    company: "La Barra Boulevard",
    location: "Iquique, Chile",
    period: "2023 - 2024",
    description: "Desarrollando habilidades de atención al cliente, servicio personalizado y el uso de software de gestión de restaurantes (POS).",
    technologies: ["Servicio al cliente", "Trabajo en equipo"],
    link: "https://www.instagram.com/labarraboulevard/"
  }
]

export function Experience() {
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
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    )

    const items = sectionRef.current?.querySelectorAll("[data-id]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 md:py-32 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 " />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trayectoria</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-balance">Experiencia Laboral</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            <span className="text-pretty">
              Desarrollador en formación con experiencia en entornos de trabajo de alta demanda
            </span>
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              data-id={exp.id}
              className={`relative mb-12 last:mb-0 transition-all duration-700 ${visibleItems.includes(exp.id)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"}`}>
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary box-glow-sm -translate-x-1/2 mt-6 z-10`} />

                {/* Card */}
                <div className="ml-8 md:ml-0 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-glass">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <a
                        target="_blank"
                        href={exp.link}
                        className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                      >
                        {exp.company}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
