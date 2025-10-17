import { FloatingNavbar } from "@/components/floating-navbar"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-wedding-cream">
      <FloatingNavbar />

      <HeroSection />

      <Footer />
    </main>
  )
}
