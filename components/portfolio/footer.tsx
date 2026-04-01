import { Github, Linkedin, Mail, Shield } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="py-12 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm">
              &copy; {currentYear} Alexander Trouten. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:alextrouten42@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/alexander-t42/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/alextrouten42"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Built with Next.js &bull; Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  )
}
