import { UserCheck, Mail } from "lucide-react"

const references = [
  {
    name: "Todd Wright",
    role: "IT Client Specialist",
    company: "State of Michigan",
    contact: "Available upon request",
  },
  {
    name: "Robert Adams",
    role: "Personal",
    company: "Personal",
    contact: "Available upon request",
  },
  {
    name: "Dan Klodt",
    role: "Business Relations Manager",
    company: "State of Michigan",
    contact: "Available upon request",
  },
]

export function ReferencesSection() {
  return (
    <section id="references" className="py-24 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-primary tracking-wider mb-2">RECOMMENDATIONS</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          References
        </h3>
        <p className="text-muted-foreground mb-12">
          Professional references available upon request.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {references.map((ref, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border"
            >
              <div className="p-2 rounded-md bg-primary/10 text-primary w-fit mb-4">
                <UserCheck className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-foreground">{ref.name}</h4>
              <p className="text-sm text-primary mt-1">{ref.role}</p>
              <p className="text-sm text-muted-foreground">{ref.company}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3">
                <Mail className="h-3 w-3" />
                <span>{ref.contact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
