import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { CertificationsSection } from "@/components/portfolio/certifications-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { GoalsSection } from "@/components/portfolio/goals-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ReferencesSection } from "@/components/portfolio/references-section"
import { MissionSection } from "@/components/portfolio/mission-section"
import { Footer } from "@/components/portfolio/footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CertificationsSection />
      <ExperienceSection />
      <GoalsSection />
      <ProjectsSection />
      <ReferencesSection />
      <MissionSection />
      <Footer />
    </main>
  )
}
