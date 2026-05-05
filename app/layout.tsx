import type { Metadata } from "next"
import { Sora, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sora",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Adam Freemer — Full-Stack Engineer",
  description:
    "Adam Freemer — Senior Full-Stack Engineer. 10+ years building enterprise software with Ruby on Rails, PostgreSQL, and modern JavaScript.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
