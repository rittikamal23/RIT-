import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, ExternalLink } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="mx-auto max-w-5xl px-4 py-16 md:py-24" aria-label="Introduction">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">Welcome</p>
          <h1 className="text-pretty text-4xl font-bold leading-tight md:text-5xl">{"Hi, I’m Rittika Mal👋"}</h1>
          <p className="text-pretty text-base leading-relaxed">
            {
              "2nd-year B.Tech CSE (AI & ML) student at MCKV Institute of Engineering. Passionate about software development & AI/ML."
            }
          </p>
          <p className="text-pretty text-base" style={{ color: "#6C63FF" }}>
            {"Exploring AI one project at a time 🚀"}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#projects">
              <Button className="hover:translate-y-[-1px] transition" style={{ backgroundColor: "#6C63FF" }}>
                View My Projects
              </Button>
            </a>
            <a href="/Rittika_Mal_CV.pdf" target="_blank" rel="noreferrer">
              <Button variant="outline" className="gap-2 hover:translate-y-[-1px] transition bg-transparent">
                <Download className="h-4 w-4" /> Download CV
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-4 pt-3">
            <a href="mailto:rittikamal23@gmail.com" className="text-sm underline-offset-4 hover:underline">
              rittikamal23@gmail.com
            </a>
            <a
              href="https://github.com/rittikamal23/v0-empty-chat"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline"
            >
              <Github className="h-4 w-4" /> GitHub <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="justify-self-center">
          <img
            src="/images/profile-college-girl.png"
            alt="Portrait of a college student"
            className="h-56 w-56 rounded-full border shadow-md md:h-72 md:w-72"
          />
        </div>
      </div>
    </section>
  )
}
