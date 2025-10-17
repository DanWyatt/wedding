import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { events } from "@/app/information/const"
import Image from "next/image"

const eveningEvents = events.filter((eventsItem) => (eventsItem.eventType !== 'ceremony'))

export default function ReceptionPage() {
  return (
    <main className="bg-wedding-cream min-h-screen">
      <FloatingNavbar />

      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-wedding-text text-center mb-8">The Reception</h1>
          <p className="text-lg text-wedding-text/80 text-center mb-12 max-w-2xl mx-auto">
            Celebrate with us into the night at Cott Farm's wedding barn, in the heart of Somerset.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-serif text-3xl text-wedding-text mb-6">An Evening of Celebration</h2>
              <p className="text-wedding-text/80 mb-4">
                Following the ceremony, join us for cocktails and canapés in the countryside setting,
                before moving into the beautifully decorated ballroom for the wedding breakfast.
              </p>
              <p className="text-wedding-text/80">
                The evening will feature live music, delicious food, and plenty of opportunities to create lasting
                memories with family and friends.
              </p>
            </div>
            <div>
              <Image
                src="/cott-barn.jpg"
                alt="Cott Barn Farm Wedding Barn"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          {/* Order of the day */}
          <div className="mb-16">
            <div className="bg-white/50 p-8 rounded-lg">
              <h2 className="font-serif text-3xl text-wedding-text text-center mb-8">Order of the Evening</h2>
              {eveningEvents.map((eventsItem, index) => (
                <div key={eventsItem.time} className={
                  `flex items-center sm:gap-4 relative sm:before:absolute sm:before:w-[2px] sm:before:left-[7px] sm:before:z-2 sm:before:bg-stone-200
                  ${(index === 0 || index === eveningEvents.length - 1) ? "sm:before:h-[50%]" : "sm:before:h-full"}
                  ${(index > 0) ? "sm:before:top-0" : "sm:before:bottom-0"}`}
                >
                  <div className="flex-shrink-0 relative sm:before:block sm:before:w-4 sm:before:h-4 sm:before:mt-1 sm:before:rounded-full sm:before:bg-stone-200 sm:before:relative sm:before:z-2"></div>
                  <div className="flex-shrink-0 relative before:block before:absolute before:-bottom-4">
                    <div className="w-20 text-lg/15 text-center text-wedding-accent font-semibold">{eventsItem.time}</div>
                  </div>
                  <div className="text-lg sm:text-2xl ml-4 sm:ml-0 text-wedding-text">{eventsItem.event}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/50 p-8 rounded-lg">
              <h3 className="font-serif text-2xl text-wedding-text mb-6">Entertainment</h3>
              <div className="grid md:grid-cols-2 gap-12 space-y-4">
                <div>
                  <h4 className="font-semibold text-wedding-text">Live Duo</h4>
                  <p className="text-wedding-text/70">
                    Introducing <a href="https://www.facebook.com/TheBowtieBoysUK/" rel="noopener nofollow noreferrer external" target="_blank" className="text-wedding-accent hover:underline">The Bowtie Boys</a>,
                    a well-polished international vocal duo act who will provide live music throughout the evening.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-wedding-text">DJ &amp; Disco</h4>
                  <p className="text-wedding-text/70">
                    MJS Entertainment will keep the dance floor alive with your favorite hits.
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
