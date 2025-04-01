import type React from "react"
// import { ThemeProvider } from "@/components/theme-provider"
// import { Toaster } from "@/components/ui/toaster"
import './globals.css'
import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "School Management System",
  description: "Dashboard for school administration",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}





