import { Target, BookOpen, Wrench, TrendingUp } from "lucide-react"

const goals = [
  {
    icon: Target,
    title: "SOC Analyst Role",
    description:
      "Actively pursuing a Tier 1 SOC Analyst position where I can apply my skills in threat detection and incident response.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Currently studying for Splunk Certified Power User Certification",
  },
  {
    icon: Wrench,
    title: "Hands-On Labs",
    description:
      "Building out my home lab environment with Splunk, Security Onion, and various SIEM tools for practical experience.",
  },
  {
    icon: TrendingUp,
    title: "Skill Development",
    description:
      "Focusing on log analysis, SIEM operations, threat hunting, and developing Python scripts for security automation.",
  },
]

export function GoalsSection() {
  return (
    <section id="goals" className="py-24 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-primary tracking-wider mb-2">FOCUS</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Current Goals
        </h3>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Here&apos;s what I&apos;m currently working on to advance my cybersecurity career 
          and expand my technical capabilities.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {goals.map((goal) => (
            <div
              key={goal.title}
              className="p-6 rounded-lg bg-card border border-border"
            >
              <div className="p-2 rounded-md bg-primary/10 text-primary w-fit mb-4">
                <goal.icon className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{goal.title}</h4>
              <p className="text-sm text-muted-foreground">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
