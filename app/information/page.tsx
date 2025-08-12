"use client"

import { useState } from "react"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    question: "What should I wear?",
    answer:
      "We've requested garden party attire for the ceremony. Think smart casual with comfortable shoes as we'll be on grass. For the reception, you're welcome to dress up a bit more if you'd like!",
  },
  {
    question: "Will the ceremony be outdoors?",
    answer:
      "Yes, weather permitting! The ceremony will take place in the beautiful gardens of Willowbrook Manor. If it rains, we'll move to the elegant indoor ballroom with stunning garden views.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, Willowbrook Manor has ample free parking on-site. There's also valet service available if you prefer.",
  },
  {
    question: "Can I bring a plus-one?",
    answer:
      "Plus-ones are indicated on your invitation. If you have any questions about your invitation, please reach out to us directly.",
  },
  {
    question: "Are children welcome?",
    answer:
      "We love children, but we've decided to have an adults-only celebration to allow all our guests to relax and enjoy the evening. We hope you understand!",
  },
  {
    question: "What time should I arrive?",
    answer:
      "Please arrive by 2:45 PM for the 3:00 PM ceremony. This gives everyone time to find their seats and settle in before we begin.",
  },
  {
    question: "Will there be transportation provided?",
    answer:
      "We recommend arranging your own transportation. The venue is easily accessible by car and taxi services are readily available in the area.",
  },
  {
    question: "What if I have dietary restrictions?",
    answer:
      "Please let us know about any dietary restrictions when you RSVP. Our caterers can accommodate most dietary needs including vegetarian, vegan, and gluten-free options.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer:
      "We'd love for you to enjoy the moment with us! Please feel free to take photos, but we ask that you remain seated during the ceremony. Our photographer will capture all the key moments.",
  },
  {
    question: "What's the weather backup plan?",
    answer:
      "If weather doesn't cooperate, the ceremony will move to Willowbrook Manor's beautiful indoor ballroom. The reception will continue as planned in the same ballroom.",
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white/50 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/20 transition-colors"
      >
        <h3 className="font-semibold text-wedding-text">{question}</h3>
        {isOpen ? (
          <ChevronUp className="text-wedding-accent flex-shrink-0 ml-4" size={20} />
        ) : (
          <ChevronDown className="text-wedding-accent flex-shrink-0 ml-4" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-wedding-text/80">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function InformationPage() {
  return (
    <main className="bg-wedding-cream min-h-screen">
      <FloatingNavbar />

      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-wedding-text text-center mb-8">Information</h1>
          <p className="text-lg text-wedding-text/80 text-center mb-12 max-w-2xl mx-auto">
            Everything you need to know about our special day, from the timeline to frequently asked questions.
          </p>

          {/* Order of the day */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl text-wedding-text text-center mb-8">Order of the Day</h2>
            <div className="bg-white/50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-2xl text-wedding-text mb-6">Ceremony Day</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-20 text-wedding-accent font-semibold flex-shrink-0">2:45 PM</div>
                      <div className="text-wedding-text">Guest arrival and seating</div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-20 text-wedding-accent font-semibold flex-shrink-0">3:00 PM</div>
                      <div className="text-wedding-text">Wedding ceremony begins</div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-20 text-wedding-accent font-semibold flex-shrink-0">3:30 PM</div>
                      <div className="text-wedding-text">Ceremony concludes, confetti moment</div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-20 text-wedding-accent font-semibold flex-shrink-0">3:45 PM</div>
                      <div className="text-wedding-text">Photos with family and wedding party</div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-20 text-wedding-accent font-semibold flex-shrink-0">4:00 PM</div>
                      <div className="text-wedding-text">Cocktail hour begins on the terrace</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-wedding-text mb-6">Reception Evening</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-20 text-wedding-accent font-semibold flex-shrink-0">5:30 PM</div>
                      <div className="text-wedding-text">Wedding party introductions</div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-20 text-wedding-accent font-semibold flex-shrink-0">6:00 PM</div>
                      <div className="text-wedding-text">Wedding breakfast served</div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-20 text-wedding-accent font-semibold flex-shrink-0">7:30 PM</div>
                      <div className="text-wedding-text">Speeches and toasts</div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-20 text-wedding-accent font-semibold flex-shrink-0">8:30 PM</div>
                      <div className="text-wedding-text">First dance and party begins</div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-20 text-wedding-accent font-semibold flex-shrink-0">11:00 PM</div>
                      <div className="text-wedding-text">Evening food served</div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-20 text-wedding-accent font-semibold flex-shrink-0">12:00 AM</div>
                      <div className="text-wedding-text">Sparkler send-off and farewell</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="font-serif text-3xl text-wedding-text text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-wedding-text/80 mb-4">Still have questions?</p>
            <p className="text-wedding-text">
              Feel free to reach out to us directly at{" "}
              <a href="mailto:amy.daniel.wedding@email.com" className="text-wedding-accent hover:underline">
                amy.daniel.wedding@email.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
