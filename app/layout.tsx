import type { Metadata, Viewport } from "next"
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-hanken",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
})

const description =
  "Senior full-stack engineer in Philadelphia. Twelve years of Ruby on Rails, federal modernization, and AI-augmented development."

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adamfreemer.com"),
  title: "Adam Freemer · Senior Full-Stack Engineer · Philadelphia",
  description,
  authors: [{ name: "Adam Freemer" }],
  icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" } },
  openGraph: {
    type: "profile",
    siteName: "Adam Freemer",
    title: "Adam Freemer · Senior Full-Stack Engineer · Philadelphia",
    description,
    url: "https://www.adamfreemer.com/",
    locale: "en_US",
    firstName: "Adam",
    lastName: "Freemer",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adam Freemer — Senior Full-Stack Engineer, Philadelphia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Freemer · Senior Full-Stack Engineer · Philadelphia",
    description,
    images: ["/og-image.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: "#0c0e12",
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adam Freemer",
  givenName: "Adam",
  familyName: "Freemer",
  url: "https://www.adamfreemer.com",
  image: "https://www.adamfreemer.com/og-image.jpg",
  email: "adam@freemer.com",
  jobTitle: "Lead Engineer",
  description,
  worksFor: { "@type": "Organization", name: "Zen Strategies" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Philadelphia",
    addressRegion: "PA",
    addressCountry: "US",
  },
  alumniOf: [
    { "@type": "Organization", name: "Pennsylvania State University" },
    { "@type": "Organization", name: "General Assembly" },
  ],
  knowsAbout: [
    "Ruby on Rails",
    "Ruby",
    "JavaScript",
    "Python",
    "React",
    "Hotwire",
    "Stimulus",
    "TailwindCSS",
    "Django",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Heroku",
    "Vercel",
    "Supabase",
    "Federal modernization",
    "AI-augmented development",
    "Technical leadership",
  ],
  sameAs: [
    "https://github.com/adamfreemer",
    "https://linkedin.com/in/adamfreemer",
    "https://soundcloud.com/adamfreemer",
    "https://www.beatport.com/artist/adam-freemer/505",
    "https://www.instagram.com/adamfreemer",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${hanken.variable} ${jetbrainsMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
