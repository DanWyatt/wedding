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
            Join us as we exchange vows under the ringing bells of the beautiful Grade I listed <span className="inline-block">St Nicholas Church</span>.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/combe-st-nicholas-church.jpg"
                alt="Wedding ceremony venue at sunset"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl text-wedding-text mb-6">Our Special Moment</h2>
              <p className="text-wedding-text/80">
                Located in the village of Combe St Nicholas, a village nestled in lovely countryside, situated on the edge of the Blackdown Hills, an Area of Outstanding Natural Beauty.
                Where Amy had grown up for many years, this was the natural location to exchange our&nbsp;vows.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-center">
            <div className="bg-white/50 p-8 rounded-lg">
              <h3 className="font-serif text-2xl text-wedding-text mb-6">Ceremony Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-wedding-text">Time</h4>
                  <p className="text-wedding-text/70">
                    Please arrive by 11:45am ready for the start of the ceremony at 12:00 noon.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-wedding-text">Photography</h4>
                  <p className="text-wedding-text/70">
                    Please refrain from taking photos of the ceremony, we will have a photographer making sure to capture every magic moment.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-wedding-text">Dress code</h4>
                  <p className="text-wedding-text/70">
                    The wedding is themed around wildflowers so you may wish to wear something in keeping with this, but as long as it's suitable for the occasion then it's fine.
                    Be aware that parking at the evening venue is on a field, so be mindful of footwear etc.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/50 p-8 rounded-lg">
              <h3 className="font-serif text-2xl text-wedding-text mb-6">Getting here</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-wedding-text">Location</h4>
                  <p className="text-wedding-text/70">
                    <span className="block lg:inline">St Nicholas' Church, <br className="hidden lg:inline"/></span>
                    <span className="block lg:inline">Combe St Nicholas, </span>
                    <span className="block lg:inline">Chard, </span>
                    <span className="block lg:inline">TA20&nbsp;3NG</span>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-wedding-text">Parking</h4>
                  <p className="text-wedding-text/70">
                    The church itself has very limited parking, please allow those who may need close-by parking to park here.
                    There is good parking around the village, however please be respectful of the residents and do not block&nbsp;access.
                  </p>
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
