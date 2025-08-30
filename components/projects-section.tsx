import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "AI Chatbot 🤖",
    description: "Built with Python & TensorFlow — answers queries with NLP techniques.",
    stack: ["Python", "TensorFlow", "NLP"],
    github: "#",
    demo: "#",
  },
  {
    title: "Image Classifier",
    description: "CNN-based classifier with PyTorch, trained on custom dataset.",
    stack: ["PyTorch", "Python"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "Responsive site with React + Tailwind, featuring dark mode and animations.",
    stack: ["React", "Next.js", "Tailwind"],
    github: "#",
    demo: "#",
  },
]

export function ProjectsSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="group rounded-lg border p-5 transition-shadow hover:shadow-md">
            <h3 className="text-lg font-semibold group-hover:underline underline-offset-4">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded bg-secondary px-2 py-1 text-xs">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <a href={p.github} target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Github className="h-4 w-4" /> GitHub
                </Button>
              </a>
              <a href={p.demo} target="_blank" rel="noreferrer">
                <Button size="sm" className="gap-2" style={{ backgroundColor: "#6C63FF" }}>
                  Live Demo <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
