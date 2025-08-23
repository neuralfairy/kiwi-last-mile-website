import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kiwilastmile Solutions - iLMS Lead Management System",
  description:
    "Professional B2B SaaS platform for lead management, scoring, and sales pipeline automation. Streamline your lead management with iLMS.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: "lead management, lead scoring, sales pipeline automation, ilms, B2B sales tools",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kiwilastmile Solutions",
              url: "https://kiwilastmile.com",
              description: "Professional B2B SaaS platform for lead management and sales pipeline automation",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                addressCountry: "US",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
