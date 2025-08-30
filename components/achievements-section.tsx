const achievements = [
  "Completed Google AI/ML Certification (2024)",
  "Top 5 in College Hackathon (2024)",
  "Built and launched an AI Chatbot project",
]

export function AchievementsSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Achievements</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {achievements.map((a) => (
          <div key={a} className="rounded-md border px-4 py-3" style={{ borderColor: "#6C63FF" }}>
            <p className="text-sm">{a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
