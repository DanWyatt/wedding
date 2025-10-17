"use client"

import { useState } from "react"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { events, faqData } from "@/app/information/const"
import { ChevronDown, ChevronUp } from "lucide-react"

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
            Everything you need to know about our special day, from the timeline to <span className="inline-block">frequently asked questions</span>.
          </p>

          {/* Order of the day */}
          <div className="mb-16">
            <div className="bg-white/50 p-8 rounded-lg">
              <h2 className="font-serif text-3xl text-wedding-text text-center mb-8">Order of the Day</h2>
              {events.map((eventsItem, index) => (
                <div key={eventsItem.time} className={
                  `flex items-center sm:gap-4 relative sm:before:absolute sm:before:w-[2px] sm:before:left-[7px] sm:before:z-2 sm:before:bg-stone-200
                  ${(index === 0 || index === events.length - 1) ? "sm:before:h-[50%]" : "sm:before:h-full"}
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
