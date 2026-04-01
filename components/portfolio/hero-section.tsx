import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 relative"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary font-mono text-sm tracking-wider mb-4">
          CYBERSECURITY PROFESSIONAL
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
          Your Name
        </h1>
        <h2 className="text-xl sm:text-2xl text-primary mb-6">
          Cybersecurity / SOC Analyst
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Passionate about defending digital infrastructure, solving complex security challenges, 
          and continuously learning to stay ahead of evolving threats. Building a career in 
          security operations with hands-on experience and industry certifications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button asChild size="lg" className="gap-2">
            <a href="#projects">
              View Projects
              <ArrowDown className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/alextrouten42"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/alexander-t42/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:alextrouten42@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  )
}
