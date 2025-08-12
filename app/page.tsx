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

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-wedding-text mb-6">Wedding Menu</h2>
          <p className="text-lg text-wedding-text/80 mb-8 max-w-2xl mx-auto">
            Discover our carefully curated menu featuring seasonal ingredients and dishes that celebrate our love story.
            From appetizers to dessert, every bite is crafted with care.
          </p>
          <Button asChild className="bg-wedding-accent hover:bg-wedding-accent/90 text-white px-8 py-3 rounded-full">
            <Link href="/menu">View Full Menu</Link>
          </Button>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-20 px-4 bg-white/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-wedding-text mb-6">The Venue</h2>
          <p className="text-lg text-wedding-text/80 mb-8 max-w-2xl mx-auto">
            Join us at the beautiful Sunset Gardens, where rolling hills meet golden sunsets. This enchanting location
            provides the perfect backdrop for our special day.
          </p>
          <Button asChild className="bg-wedding-accent hover:bg-wedding-accent/90 text-white px-8 py-3 rounded-full">
            <Link href="/venue">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="accommodation" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-wedding-text mb-6">Accommodation</h2>
          <p className="text-lg text-wedding-text/80 mb-8 max-w-2xl mx-auto">
            We've reserved blocks of rooms at nearby hotels for your convenience. Find comfortable lodging options close
            to our venue with special rates for wedding guests.
          </p>
          <Button asChild className="bg-wedding-accent hover:bg-wedding-accent/90 text-white px-8 py-3 rounded-full">
            <Link href="/accommodation">View Hotels</Link>
          </Button>
        </div>
      </section>

      {/* Gifts Section */}
      <section id="gifts" className="py-20 px-4 bg-white/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-wedding-text mb-6">Wedding Gifts</h2>
          <p className="text-lg text-wedding-text/80 mb-8 max-w-2xl mx-auto">
            Your presence is the greatest gift of all. For those who wish to honor us with a gift, we've created a
            registry of items that will help us start our new life together.
          </p>
          <Button asChild className="bg-wedding-accent hover:bg-wedding-accent/90 text-white px-8 py-3 rounded-full">
            <Link href="/gifts">View Registry</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
