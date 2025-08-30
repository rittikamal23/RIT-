export function AboutSection() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-1">
        <h2 className="text-2xl font-semibold">About Me</h2>
      </div>
      <div className="space-y-4 md:col-span-2">
        <p className="leading-relaxed">
          {"I'm a 2nd-year B.Tech CSE (AI & ML) student at "}
          <span className="font-medium">MCKV Institute of Engineering</span>
          {
            ", specializing in artificial intelligence and machine learning. I enjoy building practical software that blends data, models, and great UX."
          }
        </p>
        <p className="leading-relaxed">
          {
            "My interests include natural language processing, model evaluation, and full‑stack web development. I’m currently exploring how to ship AI features reliably and ethically."
          }
        </p>
        <p className="leading-relaxed">
          {"Apart from coding, I enjoy singing, drawing, and making handcraft items 🎶🎨✨"}
        </p>
      </div>
    </div>
  )
}
