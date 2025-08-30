"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail, Phone, MapPin, FileDown, ExternalLink, Linkedin, Twitter, Instagram } from "lucide-react"

export function ContactSection() {
  const [status, setStatus] = useState<null | "idle" | "sending" | "sent" | "error">(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())
    try {
      setStatus("sending")
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("sent")
      form.reset()
    } catch {
      setStatus("error")
    } finally {
      setTimeout(() => setStatus(null), 3000)
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-sm text-muted-foreground mb-4">
          {
            "I’m always excited to connect! Whether it’s about AI/ML, software development, or just sharing creative ideas, feel free to reach out 🚀."
          }
        </p>

        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4" />{" "}
            <a className="underline-offset-4 hover:underline" href="mailto:rittikamal23@gmail.com">
              rittikamal23@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4" /> <span>—</span>
          </li>
          <li className="flex items-center gap-2">
            <Github className="h-4 w-4" />{" "}
            <a
              className="underline-offset-4 hover:underline"
              href="https://github.com/rittikamal23/v0-empty-chat"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ExternalLink className="ml-1 inline h-3 w-3" />
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Linkedin className="h-4 w-4" />{" "}
            <a className="underline-offset-4 hover:underline" href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Twitter className="h-4 w-4" />{" "}
            <a className="underline-offset-4 hover:underline" href="#" target="_blank" rel="noreferrer">
              Twitter/X
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Instagram className="h-4 w-4" />{" "}
            <a className="underline-offset-4 hover:underline" href="#" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> <span>Kolkata, India</span>
          </li>
          <li className="flex items-center gap-2">
            <FileDown className="h-4 w-4" />{" "}
            <a
              className="underline-offset-4 hover:underline"
              href="/Rittika_Mal_CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume Download
            </a>
          </li>
        </ul>
      </div>

      <form onSubmit={onSubmit} className="rounded-lg border p-4">
        <div className="grid gap-3">
          <Input required name="name" placeholder="Name" />
          <Input required type="email" name="email" placeholder="Email" />
          <Textarea required name="message" rows={5} placeholder="Message" />
          <Button type="submit" style={{ backgroundColor: "#6C63FF" }}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </Button>
          {status === "sent" && <p className="text-sm text-green-600">Message sent! Thanks for reaching out.</p>}
          {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}
        </div>
      </form>
    </div>
  )
}
