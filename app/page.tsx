import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollProgress } from "@/components/scroll-progress"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { AchievementsSection } from "@/components/achievements-section"
import { HobbiesSection } from "@/components/hobbies-section"
import { ContactSection } from "@/components/contact-section"
import { BackToTop } from "@/components/back-to-top"

export default function HomePage() {
  return (
    <main>
      <ScrollProgress />
      <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">
            Rittika Mal
          </a>
          <ThemeToggle />
        </div>
      </header>

      <HeroSection />

      <section id="about" className="mx-auto max-w-5xl px-4 py-16">
        <AboutSection />
      </section>

      <section id="skills" className="mx-auto max-w-5xl px-4 py-16">
        <SkillsSection />
      </section>

      <section id="projects" className="mx-auto max-w-5xl px-4 py-16">
        <ProjectsSection />
      </section>

      <section id="experience" className="mx-auto max-w-5xl px-4 py-16">
        <ExperienceSection />
      </section>

      <section id="achievements" className="mx-auto max-w-5xl px-4 py-16">
        <AchievementsSection />
      </section>

      <section id="hobbies" className="mx-auto max-w-5xl px-4 py-16">
        <HobbiesSection />
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-4 py-16">
        <ContactSection />
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rittika Mal. All rights reserved.
        </div>
      </footer>

      <BackToTop />
    </main>
  )
}
