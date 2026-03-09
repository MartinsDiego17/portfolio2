"use client"

import { Github, Linkedin, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/MartinsDiego17",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/diego-martins-563954278/",
    icon: Linkedin,
  },
]

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Sobre mí", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border/50 bg-card/50 backdrop-blur-glass">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3 items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#hero" className="inline-block mb-4">
          <span className="font-bold text-lg hidden sm:inline-block">
            Diego.<span className="text-primary">dev</span>
          </span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()}  Diego Martins. Casi todos los derechos reservados.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Scroll to Top */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full border-primary/30 hover:bg-primary/20 hover:text-primary hover:border-primary transition-all duration-300"
            >
              <ArrowUp className="h-5 w-5" />
              <span className="sr-only">Volver arriba</span>
            </Button>
          </div>
        </div>

        {/* Made with love */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground inline-flex items-center gap-1.5">
            Desarrollado en Next.js y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
