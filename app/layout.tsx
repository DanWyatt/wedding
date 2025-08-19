import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const CormorantGaramondFont = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
})

const Revive80SignatureFont = localFont({
  src: '../public/Revive80signature.otf',
  display: "swap",
  weight: "400",
  variable: "--font-revive80signature",
})

export const metadata: Metadata = {
  title: "Amy & Daniel - Wedding",
  description: "Join us for our special day",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${CormorantGaramondFont.variable} ${Revive80SignatureFont.variable}`}>
      <head>
        <style>{`
          html {
            font-family: ${CormorantGaramondFont.style.fontFamily};
            --font-sans: ${CormorantGaramondFont.variable};
            --font-serif: ${CormorantGaramondFont.variable};
            --font-script: ${Revive80SignatureFont.variable};
          }
        `}</style>
      </head>
      <body className="font-serif">{children}</body>
    </html>
  )
}
