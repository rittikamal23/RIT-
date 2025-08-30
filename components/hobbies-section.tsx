import { Music, Paintbrush, Scissors } from "lucide-react"

const hobbies = [
  { icon: Music, label: "Singing" },
  { icon: Paintbrush, label: "Drawing" },
  { icon: Scissors, label: "Crafts" },
]

export function HobbiesSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Fun Facts & Hobbies</h2>
      <div className="flex flex-wrap gap-3">
        {hobbies.map((h) => (
          <div key={h.label} className="inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <h.icon className="h-4 w-4" style={{ color: "#22C55E" }} />
            <span className="text-sm">{h.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
