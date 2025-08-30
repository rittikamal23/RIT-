import { Badge } from "@/components/ui/badge"

const categories = [
  {
    title: "Programming",
    items: ["Python", "C/C++", "Java", "JavaScript"],
  },
  {
    title: "AI / ML",
    items: ["TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    title: "Web Dev",
    items: ["HTML", "CSS", "React", "Node.js"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Linux"],
  },
]

export function SkillsSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-lg border p-5 transition-transform duration-150 hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="mb-3 font-medium" style={{ color: "#6C63FF" }}>
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <Badge key={item} variant="secondary" className="text-sm">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
