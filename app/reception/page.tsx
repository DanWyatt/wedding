import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function ReceptionPage() {
  return (
    <main className="bg-wedding-cream min-h-screen">
      <FloatingNavbar />

      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-wedding-text text-center mb-8">The Reception</h1>
          <p className="text-lg text-wedding-text/80 text-center mb-12 max-w-2xl mx-auto">
            Celebrate with us as we dance the night away in the grand ballroom of Willowbrook Manor.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-serif text-3xl text-wedding-text mb-6">An Evening of Celebration</h2>
              <p className="text-wedding-text/80 mb-4">
                Following the ceremony, join us for cocktails on the terrace before moving into the beautifully
                decorated ballroom for dinner, dancing, and merriment.
              </p>
              <p className="text-wedding-text/80">
                The evening will feature live music, delicious food, and plenty of opportunities to create lasting
                memories with family and friends.
              </p>
            </div>
            <div>
              <Image
                src="/elegant-wedding-venue.png"
                alt="Elegant wedding reception ballroom"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="bg-white/50 p-8 rounded-lg mb-12">
            <h2 className="font-serif text-3xl text-wedding-text text-center mb-8">Reception Timeline</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-20 text-wedding-accent font-semibold">4:00 PM</div>
                <div className="text-wedding-text">Cocktail hour on the terrace</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-wedding-accent font-semibold">5:30 PM</div>
                <div className="text-wedding-text">Wedding party introductions</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-wedding-accent font-semibold">6:00 PM</div>
                <div className="text-wedding-text">Dinner service begins</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-wedding-accent font-semibold">7:30 PM</div>
                <div className="text-wedding-text">Speeches and toasts</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-wedding-accent font-semibold">8:30 PM</div>
                <div className="text-wedding-text">First dance and dancing begins</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-wedding-accent font-semibold">11:00 PM</div>
                <div className="text-wedding-text">Late night snacks served</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-wedding-accent font-semibold">12:00 AM</div>
                <div className="text-wedding-text">Reception concludes</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/50 p-8 rounded-lg">
              <h3 className="font-serif text-2xl text-wedding-text mb-6">Entertainment</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-wedding-text">Live Band</h4>
                  <p className="text-wedding-text/70">
                    The Moonlight Serenaders will provide live music throughout the evening
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-wedding-text">DJ</h4>
                  <p className="text-wedding-text/70">
                    DJ Marcus will keep the dance floor alive with your favorite hits
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-wedding-text">Photo Booth</h4>
                  <p className="text-wedding-text/70">Capture fun memories with props and instant prints</p>
                </div>
              </div>
            </div>

            <div className="bg-white/50 p-8 rounded-lg">
              <h3 className="font-serif text-2xl text-wedding-text mb-6">Special Features</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-wedding-text">Sparkler Send-off</h4>
                  <p className="text-wedding-text/70">Join us for a magical sparkler send-off at midnight</p>
                </div>
                <div>
                  <h4 className="font-semibold text-wedding-text">Signature Cocktails</h4>
                  <p className="text-wedding-text/70">
                    Enjoy Amy's Garden Spritz and Daniel's Old Fashioned all evening
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-wedding-text">Dancing Under the Stars</h4>
                  <p className="text-wedding-text/70">Weather permitting, we'll open the terrace for outdoor dancing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
