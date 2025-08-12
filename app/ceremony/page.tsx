import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function CeremonyPage() {
  return (
    <main className="bg-wedding-cream min-h-screen">
      <FloatingNavbar />

      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-wedding-text text-center mb-8">The Ceremony</h1>
          <p className="text-lg text-wedding-text/80 text-center mb-12 max-w-2xl mx-auto">
            Join us as we exchange vows in a beautiful outdoor setting surrounded by nature and loved ones.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/wedding-venue-sunset.png"
                alt="Wedding ceremony venue at sunset"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl text-wedding-text mb-6">Our Special Moment</h2>
              <p className="text-wedding-text/80 mb-4">
                The ceremony will take place in the beautiful gardens of Willowbrook Manor, where we first met five
                years ago. The intimate outdoor setting provides the perfect backdrop for our vows.
              </p>
              <p className="text-wedding-text/80">
                We'll be surrounded by blooming flowers, ancient oak trees, and the gentle sound of the nearby stream as
                we promise to love each other for eternity.
              </p>
            </div>
          </div>

          <div className="bg-white/50 p-8 rounded-lg mb-12">
            <h2 className="font-serif text-3xl text-wedding-text text-center mb-8">Ceremony Details</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-serif text-xl text-wedding-text mb-4">Time</h3>
                <p className="text-wedding-text/80">3:00 PM</p>
                <p className="text-wedding-text/60 text-sm">Please arrive by 2:45 PM</p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-wedding-text mb-4">Location</h3>
                <p className="text-wedding-text/80">Willowbrook Manor Gardens</p>
                <p className="text-wedding-text/60 text-sm">123 Garden Lane, Countryside</p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-wedding-text mb-4">Dress Code</h3>
                <p className="text-wedding-text/80">Garden Party Attire</p>
                <p className="text-wedding-text/60 text-sm">Comfortable shoes recommended</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-serif text-3xl text-wedding-text mb-6">Weather Contingency</h2>
            <p className="text-wedding-text/80 max-w-2xl mx-auto">
              In case of inclement weather, the ceremony will be moved to the elegant indoor ballroom of Willowbrook
              Manor, which offers equally stunning views of the gardens through floor-to-ceiling windows.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
