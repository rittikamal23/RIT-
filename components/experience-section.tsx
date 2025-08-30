const items = [
  {
    role: "Open-source Contributor",
    org: "Community Projects",
    duration: "2024 — Present",
    desc: "Contributed bug fixes and documentation improvements for ML repos.",
  },
  {
    role: "Freelance Developer",
    org: "Self-employed",
    duration: "2023 — 2024",
    desc: "Built small web apps with React and Node.js for local clients.",
  },
]

export function ExperienceSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <ol className="relative border-s">
        {items.map((it, idx) => (
          <li key={idx} className="mb-8 ms-6">
            <span
              className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full border bg-background"
              style={{ borderColor: "#6C63FF" }}
              aria-hidden
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#6C63FF" }} />
            </span>
            <h3 className="font-semibold">{it.role}</h3>
            <p className="text-sm text-muted-foreground">
              {it.org} • {it.duration}
            </p>
            <p className="mt-2 text-sm leading-relaxed">{it.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
