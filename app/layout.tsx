import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import FloatingElements from "@/components/floating-elements"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KSV Praveen - Full Stack Developer",
  description: "AI-powered full stack developer specializing in Next.js, React, and modern web technologies",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FloatingElements />
        {children}
      </body>
    </html>
  )
}
