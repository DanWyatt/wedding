"use client"

import { useState } from "react"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { ChevronDown, ChevronUp } from "lucide-react"

const events = [
  {
    time: "12 Noon",
    event: "Wedding ceremony at Combe St Nicholas Church"
  },
  {
    time: "1:30 PM",
    event: "Arrive at Cott Farm for drinks, photos & canapes"
  },
  {
    time: "3:00 PM",
    event: "Wedding breakfast"
  },
  {
    time: "5:45 PM",
    event: "Speeches"
  },
  {
    time: "6:30 PM",
    event: "Evening guests arrive"
  },
  {
    time: "7:25 PM",
    event: "Cake cutting"
  },
  {
    time: "7:30 PM",
    event: "First dance, music & dancing"
  },
  {
    time: "8:30 PM",
    event: "Woodfired pizzas"
  },
  {
    time: "9:30 PM",
    event: "More music and dancing"
  },
  {
    time: "Midnight",
    event: "Carriages & camping"
  },
]

const faqData = [
  {
    question: "What should I wear?",
    answer:
      "The wedding is themed around wildflowers so you may wish to wear something in keeping with this, but as long as it's suitable for the occasion then it's fine. Be aware that parking at the venue is on a field, so be mindful of footwear etc.",
  },
  {
    question: "Is there parking available at the church?",
    answer:
      "The church itself does not have parking, but you should find parking around the village. However please be respectful of the residents and do not block access.",
  },
  {
    question: "Is there parking available at the venue?",
    answer:
      "Yes, on arrival you will be signposted to the carpark. This will be on a field with plenty of space.",
  },
  {
    question: "Can I bring a plus-one?",
    answer:
      "Plus-ones are indicated on your invitation. If you have any questions about your invitation, please reach out to us directly.",
  },
  {
    question: "Are children welcome?",
    answer:
      "Unless indicated on your invitation, then unfortunatly not. We hope you understand.",
  },
  {
    question: "What time should I arrive for the ceremony?",
    answer:
      "Please arrive by 11:45am to allow time for parking and getting seated.",
  },
  {
    question: "What time should I arrive for the evening reception?",
    answer:
      "Please arrive at 6:30pm or onwards.",
  },
  {
    question: "Will there be transportation provided?",
    answer:
      "No, you will need to arrange your own transport, either by car or by taxi. Combe St Nicholas is served by the Hatch Green Coaches 99 bus, however it is not possible to travel to the reception via public transport.",
  },
  {
    question: "For those driving, are alcohol-free drinks available?",
    answer:
      "Yes, the bar will stock a wide range of non-alcoholic drinks.",
  },
  {
    question: "What if I have dietary restrictions?",
    answer:
      "Please let us know about any dietary restrictions when you RSVP. Our caterers can accommodate most dietary needs including vegetarian, vegan, and gluten-free options.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer:
      "We have a photographer that will be taking photos, please instead be in the moment and enjoy the day.",
  },
  {
    question: "Can I post photos taken after the ceremony to social media (Facebook, Instagram etc)?",
    answer:
      "Please wait until the following day to post any photos or videos to social media. When filming, please repect the privacy and wishes of the other guests.",
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
              {events.map((eventsItem, index) => (
                <div key={eventsItem.time} className={
                  `flex items-center gap-4 relative before:absolute before:w-1 before:left-2 before:z-2 before:bg-stone-200
                  ${(index === 0 || index === events.length - 1) ? "before:h-[50%]" : "before:h-full"}
                  ${(index > 0) ? "before:top-0" : "before:bottom-0"}`}
                >
                  <div className="flex-shrink-0 relative before:block before:w-5 before:h-5 before:rounded-full before:bg-stone-200 before:relative before:z-2"></div>
                  <div className="flex-shrink-0 relative before:block before:absolute before:-bottom-4">
                    <div className="w-20 text-lg/15 text-center text-wedding-accent font-semibold">{eventsItem.time}</div>
                  </div>
                  <div className="text-2xl text-wedding-text">{eventsItem.event}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="font-serif text-3xl text-wedding-text text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4 grid lg:grid-cols-2 gap-2">
              {faqData.map((faq, index) => (
                <div><FAQItem key={index} question={faq.question} answer={faq.answer} /></div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-wedding-text/80 mb-4">Still have questions?</p>
            <p className="text-wedding-text">
              Feel free to reach out to us directly.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
