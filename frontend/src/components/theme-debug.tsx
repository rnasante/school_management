"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeDebug() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-lg bg-card p-4 shadow-lg border">
      <div className="space-y-2 text-sm">
        <div>
          <span className="font-bold">Theme:</span> {theme}
        </div>
        <div>
          <span className="font-bold">Resolved Theme:</span> {resolvedTheme}
        </div>
        <div className="flex gap-2">
          <button onClick={() => setTheme("light")} className="rounded bg-blue-500 px-2 py-1 text-white">
            Light
          </button>
          <button onClick={() => setTheme("dark")} className="rounded bg-blue-500 px-2 py-1 text-white">
            Dark
          </button>
          <button onClick={() => setTheme("system")} className="rounded bg-blue-500 px-2 py-1 text-white">
            System
          </button>
        </div>
      </div>
    </div>
  )
}

