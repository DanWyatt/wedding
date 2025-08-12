import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Dancing_Script } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing",
})

export const metadata: Metadata = {
  title: "Amy & Daniel - Wedding",
  description: "Join us for our special day",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dancingScript.variable}`}>
      <head>
        <style>{`
html {
  font-family: ${cormorant.style.fontFamily};
  --font-sans: ${cormorant.variable};
  --font-serif: ${cormorant.variable};
  --font-script: ${dancingScript.variable};
}
        `}</style>
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
