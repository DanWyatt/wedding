import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"

export default function VenuePage() {
  return (
    <main className="bg-wedding-cream min-h-screen">
      <FloatingNavbar />

      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-wedding-text text-center mb-8">The Venue</h1>
          <p className="text-lg text-wedding-text/80 text-center mb-12 max-w-2xl mx-auto">
            Join us at the beautiful Sunset Gardens, where rolling hills meet golden sunsets.
          </p>

          <div className="bg-white/50 p-8 rounded-lg mb-8">
            <img
              src="/wedding-venue-sunset.png"
              alt="Sunset Gardens Venue"
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
            />

            <h2 className="font-serif text-2xl text-wedding-text mb-4">Sunset Gardens</h2>
            <p className="text-wedding-text/80 mb-6">
              Nestled in the heart of wine country, Sunset Gardens offers breathtaking views of rolling vineyards and
              majestic mountains. This enchanting location provides the perfect backdrop for our special day, with its
              romantic gardens, elegant architecture, and stunning sunset views.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-wedding-text mb-3">Address</h3>
                <p className="text-wedding-text/70 mb-4">
                  123 Vineyard Lane
                  <br />
                  Napa Valley, CA 94558
                </p>

                <h3 className="font-semibold text-wedding-text mb-3">Ceremony</h3>
                <p className="text-wedding-text/70 mb-4">
                  4:00 PM in the Rose Garden
                  <br />
                  Outdoor ceremony with mountain views
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-wedding-text mb-3">Reception</h3>
                <p className="text-wedding-text/70 mb-4">
                  6:00 PM in the Grand Pavilion
                  <br />
                  Dancing under the stars
                </p>

                <h3 className="font-semibold text-wedding-text mb-3">Parking</h3>
                <p className="text-wedding-text/70">
                  Complimentary valet parking available
                  <br />
                  Additional parking in adjacent lot
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/50 p-8 rounded-lg">
            <h2 className="font-serif text-2xl text-wedding-text mb-4">Getting There</h2>
            <p className="text-wedding-text/80 mb-4">
              Sunset Gardens is easily accessible from San Francisco (1.5 hours) and Sacramento (1 hour). We recommend
              arriving 30 minutes before the ceremony begins.
            </p>
            <p className="text-wedding-text/70">
              For guests flying in, the nearest airport is San Francisco International (SFO), approximately 90 minutes
              away by car.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
