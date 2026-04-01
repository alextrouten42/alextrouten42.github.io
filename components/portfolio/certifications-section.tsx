import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2026",
    credlyUrl: "https://www.credly.com/badges/7d24fe63-3ebd-4360-afc7-e050ca2d0676",
  },
  {
    name: "ISC2 Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    date: "2026",
    credlyUrl: "https://www.credly.com/badges/c90fcdf9-1998-47cc-9744-c46734204236",
    },

]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-primary tracking-wider mb-2">CREDENTIALS</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
          Certifications
        </h3>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {cert.issuer} &bull; {cert.date}
                    </p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-8 text-center">
          Click any certification to verify on Credly
        </p>
      </div>
    </section>
  )
}
