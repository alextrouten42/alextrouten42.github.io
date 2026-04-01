import { Github, Linkedin, Mail, FileText, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-primary tracking-wider mb-2">ABOUT</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          About Me
        </h3>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a dedicated cybersecurity professional with a strong foundation in IT 
              operations and a focused passion for security operations center (SOC) work. 
              My journey in technology has given me hands-on experience with network security, 
              threat detection, and incident response.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing opportunities in cybersecurity where I can apply my 
              technical skills and certifications to protect organizations from evolving 
              threats. I believe in continuous learning and staying current with the 
              latest security tools, techniques, and best practices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not analyzing logs or building home lab environments, I&apos;m 
              working on expanding my knowledge through hands-on projects and 
              pursuing additional certifications to strengthen my expertise.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-3">
                <a
                  href="mailto:Alextrouten42@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>alextrouten42@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/alexander-t42/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Linkedin className="h-4 w-4 shrink-0" />
                  <span>linkedin.com/in/alexander-t42/</span>
                </a>
                <a
                  href="https://github.com/alextrouten42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Github className="h-4 w-4 shrink-0" />
                  <span>github.com/alextrouten42</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>East Lansing</span>
                </div>
              </div>
            </div>

            <Button asChild className="w-full gap-2">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" />
                Download Resume (PDF)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
