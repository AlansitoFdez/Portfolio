"use client"

import { useEffect, useState } from "react"

const roles = ["Full Stack Developer", "AI Enthusiast", "Backend Engineer"]

export default function RoleTypewriter() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  useEffect(() => {
    if (reduced) {
      setText(roles[0])
      return
    }

    const current = roles[roleIndex]

    if (!deleting && text === current) {
      const timeout = setTimeout(() => setDeleting(true), 2000)
      return () => clearTimeout(timeout)
    }

    if (deleting && text === "") {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
      return
    }

    const speed = deleting ? 40 : 80
    const timeout = setTimeout(() => {
      setText(current.slice(0, deleting ? text.length - 1 : text.length + 1))
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex, reduced])

  return (
    <span>
      {text}
      <span className="terminal-cursor">|</span>
    </span>
  )
}
