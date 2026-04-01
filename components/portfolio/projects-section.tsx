import { Github, ExternalLink, FolderGit2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
    {
        title: "Splunk SIEM Home Lab",
        description:
            "Designed and deployed a Splunk Enterprise SIEM lab to simulate real-world security monitoring. Ingested logs from Windows, Linux, and network sources, created custom dashboards, and developed detection logic to identify suspicious activity and authentication anomalies.",
        technologies: ["Splunk", "Windows Server", "Linux", "PowerShell"],
        githubUrl: "https://github.com/alextrouten42/splunk-homelab",
        liveUrl: null,
    },
    {
        title: "Network Security Architecture (Home Lab)",
        description:
            "Built a segmented home network environment using pfSense to enforce access controls and isolate devices. Configured firewall rules, VLAN segmentation, IDS/IPS monitoring, and secure VPN access to simulate enterprise network security practices.",
        technologies: ["pfSense", "Suricata", "VLAN", "OpenVPN"],
        githubUrl: "https://github.com/alextrouten42/home-network-security",
        liveUrl: null,
    },
    {
        title: "Azure Sentinel Threat Detection Lab",
        description:
            "Deployed a cloud-based security monitoring lab using Microsoft Sentinel and Azure virtual machines. Ingested authentication logs and created KQL queries to detect suspicious RDP activity and anomalous login patterns.",
        technologies: ["Microsoft Sentinel", "Azure", "KQL", "Windows VM"],
        githubUrl: "https://github.com/alextrouten42/azure-sentinel-lab",
        liveUrl: null,
    },
    {
        title: "Security Onion SIEM Monitoring Lab",
        description:
            "Developed a virtual cybersecurity lab using Security Onion, pfSense, and Ubuntu systems to centralize log collection and analyze network activity. Processed over 20,000 logs to test detection capabilities and simulate threat monitoring workflows.",
        technologies: ["Security Onion", "pfSense", "Ubuntu", "Elastic Stack"],
        githubUrl: "https://github.com/alextrouten42/SecOnion-Lab",
        liveUrl: null,
    },
    {
        title: "SOC Architecture & Risk Analysis (Capstone)",
        description:
            "Designed a cloud-based Security Operations Center architecture using AWS, focusing on centralized log management, alert triage, and incident response workflows. Mapped detection use cases to MITRE ATT&CK techniques including brute force and privilege escalation scenarios.",
        technologies: ["AWS", "SIEM", "MITRE ATT&CK", "Cloud Security"],
        githubUrl: "https://github.com/alextrouten42/soc-architecture",
        liveUrl: null,
    },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-primary tracking-wider mb-2">PORTFOLIO</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Projects
        </h3>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Hands-on projects demonstrating practical cybersecurity skills. Each project 
          includes documentation and source code.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  <FolderGit2 className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="gap-2">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
