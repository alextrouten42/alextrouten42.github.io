import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "IT Client Specialist",
    company: "State of Michigan",
    location: "Lansing, MI",
    dates: "Oct 2023 - Present",
    responsibilities: [
        [
            "Administered identity and access controls for thousands of users using Active Directory and Azure security groups",
            "Investigated anomalous authentication activity and escalated security incidents through enterprise response workflows",
            "Evaluated firewall rules, VPN access, and network changes to ensure compliance with security governance policies",
            "Reduced data exposure risk by implementing secure access controls within change management processes"
        ]
    ],
  },
  {
    title: "Security Technician",
    company: "Trouten Tech",
    location: "Okemos, MI",
    dates: "Jul 2023 - Present",
    responsibilities: [
        [
            "Hardened 15+ client networks using NIST-based security controls including WPA2/WPA3 encryption",
            "Implemented network segmentation and access control lists to restrict unauthorized traffic and isolate IoT devices",
            "Configured secure VPN access with encrypted authentication for remote users",
            "Delivered security awareness training on phishing, social engineering, and password security best practices"
        ]
    ],
  },
  {
    title: "PC Technician",
    company: "Lansing Community Colege",
    location: "Lansing, MI",
    dates: "Aug 2022 - Oct 2023",
    responsibilities: [
        [
            "Provided technical support for authentication, endpoint, and network issues across a large campus environment",
            "Maintained endpoint security by applying updates and ensuring compliance with organizational standards",
            "Assisted in responding to a cybersecurity incident and supported system recovery efforts",
            "Maintained high ticket resolution performance in a high-volume support environment"
        ]
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-primary tracking-wider mb-2">CAREER</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
          Experience
        </h3>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-border pb-8 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground font-mono">
                  {exp.dates}
                </span>
              </div>
              
              <h4 className="text-xl font-semibold text-foreground">
                {exp.title}
              </h4>
              
              <div className="flex items-center gap-2 text-primary mt-1">
                <Briefcase className="h-4 w-4" />
                <span className="text-sm">
                  {exp.company} &bull; {exp.location}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.responsibilities.map((item, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground text-sm flex items-start gap-2"
                  >
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
