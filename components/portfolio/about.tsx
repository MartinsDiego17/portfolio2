"use client"

import { useEffect, useRef, useState } from "react"
import { User, Heart, Code, Coffee, Gamepad2, Music } from "lucide-react"
import Image from "next/image"

const stats = [
  { label: "Años de experiencia", value: "2+" },
  { label: "Proyectos completados", value: "10+" },
  { label: "Tazas de café", value: "∞" },
]

const interests = [
  { icon: Code, label: "Open Source" },
  { icon: Coffee, label: "Café" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: Music, label: "Música" },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <User className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Conoceme</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-balance">Sobre Mí</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image with unique border */}
          <div
            className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary rounded-tl-3xl rounded-br-3xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary rounded-tr-3xl rounded-bl-3xl" />

              {/* Main image container with unique shape */}
              <div className="relative overflow-hidden rounded-tl-[80px] rounded-br-[80px] rounded-tr-2xl rounded-bl-2xl shadow-2xl box-glow">
                <img
                  src="/images/programming.png"
                  alt="Diego Martins trabajando"
                  className="w-full aspect-4/5 object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-2xl shadow-xl border border-border/50 backdrop-blur-glass">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Apasionado</p>
                    <p className="text-sm text-muted-foreground">por el código</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Desarrollador apasionado por crear experiencias digitales únicas
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Soy un desarrollador de software especializado en React y Node.js, con experiencia en el diseño y desarrollo de sistemas escalables, eficientes y centrados en la experiencia de usuario.
              </p>
              <p>
                Apasionado por la creación de soluciones digitales, con un fuerte enfoque en aprendizaje continuo, atención al detalle, comunicación efectiva y trabajo colaborativo en equipos multidisciplinarios.
              </p>
              <p>
                Cuando no estoy programando, me vas a encontrar explorando proyectos open source, jugando videojuegos o disfrutando de buena música con una taza de café.
              </p>
            </div>

            {/* Interests */}
            <div className="flex flex-wrap gap-3 mb-8">
              {interests.map((interest) => (
                <div
                  key={interest.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <interest.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{interest.label}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary text-shadow-glow">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
