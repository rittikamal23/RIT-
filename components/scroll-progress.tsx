"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const w = height > 0 ? (scrollTop / height) * 100 : 0
      setWidth(w)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-40 h-1 bg-transparent">
      <div
        className="h-full transition-[width] duration-150"
        style={{ width: `${width}%`, backgroundColor: "#6C63FF" }}
      />
    </div>
  )
}
