import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"

export default function AccommodationPage() {
  return (
    <main className="bg-wedding-cream min-h-screen">
      <FloatingNavbar />

      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-wedding-text text-center mb-8">Accommodation</h1>
          <p className="text-lg text-wedding-text/80 text-center mb-12 max-w-2xl mx-auto">
            We've reserved blocks of rooms at nearby hotels for your convenience with special rates for wedding guests.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/50 p-8 rounded-lg">
              <img
                src="/placeholder-ubcqb.png"
                alt="Vineyard Inn"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="font-serif text-2xl text-wedding-text mb-3">Vineyard Inn</h2>
              <p className="text-wedding-text/80 mb-4">
                Our preferred hotel, just 5 minutes from the venue. Enjoy luxury accommodations with vineyard views and
                complimentary breakfast.
              </p>

              <div className="space-y-2 mb-4">
                <p className="text-wedding-text/70">
                  <strong>Distance:</strong> 5 minutes from venue
                </p>
                <p className="text-wedding-text/70">
                  <strong>Rate:</strong> $189/night (special wedding rate)
                </p>
                <p className="text-wedding-text/70">
                  <strong>Amenities:</strong> Pool, spa, restaurant, free WiFi
                </p>
                <p className="text-wedding-text/70">
                  <strong>Booking:</strong> Call (555) 123-4567
                </p>
              </div>

              <p className="text-sm text-wedding-text/60">
                Mention "Amy & Daniel Wedding" for special rate. Book by March 1st.
              </p>
            </div>

            <div className="bg-white/50 p-8 rounded-lg">
              <img
                src="/modern-boutique-hotel.png"
                alt="Garden Suites"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="font-serif text-2xl text-wedding-text mb-3">Garden Suites</h2>
              <p className="text-wedding-text/80 mb-4">
                Boutique hotel with spacious suites, perfect for families. Features kitchenettes and separate living
                areas.
              </p>

              <div className="space-y-2 mb-4">
                <p className="text-wedding-text/70">
                  <strong>Distance:</strong> 10 minutes from venue
                </p>
                <p className="text-wedding-text/70">
                  <strong>Rate:</strong> $149/night (special wedding rate)
                </p>
                <p className="text-wedding-text/70">
                  <strong>Amenities:</strong> Kitchenette, pool, gym, parking
                </p>
                <p className="text-wedding-text/70">
                  <strong>Booking:</strong> Call (555) 987-6543
                </p>
              </div>

              <p className="text-sm text-wedding-text/60">
                Mention "Amy & Daniel Wedding" for special rate. Book by March 1st.
              </p>
            </div>

            <div className="bg-white/50 p-8 rounded-lg">
              <img
                src="/charming-bed-and-breakfast.png"
                alt="Rosewood B&B"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="font-serif text-2xl text-wedding-text mb-3">Rosewood B&B</h2>
              <p className="text-wedding-text/80 mb-4">
                Charming bed & breakfast with personalized service and homemade breakfast. Perfect for a romantic
                getaway.
              </p>

              <div className="space-y-2 mb-4">
                <p className="text-wedding-text/70">
                  <strong>Distance:</strong> 15 minutes from venue
                </p>
                <p className="text-wedding-text/70">
                  <strong>Rate:</strong> $129/night (special wedding rate)
                </p>
                <p className="text-wedding-text/70">
                  <strong>Amenities:</strong> Breakfast, garden, library, WiFi
                </p>
                <p className="text-wedding-text/70">
                  <strong>Booking:</strong> Call (555) 456-7890
                </p>
              </div>

              <p className="text-sm text-wedding-text/60">
                Mention "Amy & Daniel Wedding" for special rate. Book by March 1st.
              </p>
            </div>

            <div className="bg-white/50 p-8 rounded-lg">
              <h2 className="font-serif text-2xl text-wedding-text mb-3">Alternative Options</h2>
              <p className="text-wedding-text/80 mb-4">For additional accommodations, consider these nearby options:</p>

              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-wedding-text">Valley Lodge</h3>
                  <p className="text-wedding-text/70">Budget-friendly option, 20 minutes away • $89/night</p>
                </div>
                <div>
                  <h3 className="font-semibold text-wedding-text">Luxury Resort & Spa</h3>
                  <p className="text-wedding-text/70">Premium accommodations, 25 minutes away • $299/night</p>
                </div>
                <div>
                  <h3 className="font-semibold text-wedding-text">Vacation Rentals</h3>
                  <p className="text-wedding-text/70">Check Airbnb and VRBO for house rentals in the area</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/50 p-8 rounded-lg mt-8">
            <h2 className="font-serif text-2xl text-wedding-text mb-4">Transportation</h2>
            <p className="text-wedding-text/80 mb-4">
              We'll provide shuttle service from Vineyard Inn and Garden Suites to the venue. Shuttles will run every 30
              minutes starting at 3:30 PM.
            </p>
            <p className="text-wedding-text/70">
              For other accommodations, ride-sharing services are readily available, or feel free to drive and use our
              complimentary valet parking.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
