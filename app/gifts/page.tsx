"use client"

import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { Copy, Check } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 bg-wedding-accent text-white px-4 py-2 rounded-full text-sm hover:bg-wedding-accent/90 transition-colors"
    >
      {copied ? "Copied!" : <Copy size={16} />}
    </button>
  )
}

export default function GiftsPage() {
  return (
    <main className="bg-wedding-cream min-h-screen">
      <FloatingNavbar />

      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-wedding-text text-center mb-8">Gifts</h1>
          <p className="text-lg text-wedding-text/80 text-center mb-12 max-w-2xl mx-auto">
            Your presence is the greatest gift of all. For those who wish to contribute to our honeymoon getaway, we
            would be incredibly grateful for your support.
          </p>

          <div className="bg-white/50 p-8 rounded-lg mb-8">
            <h2 className="font-serif text-3xl text-wedding-text text-center mb-8">Our Italian Adventure</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center text-justify">
              <div>
                <p className="text-wedding-text/80 mb-6">
                  We're planning an amazing honeymoon to Sorrento in Italy! Instead of traditional gifts, we would love your help in
                  creating unforgettable memories as we start our married life together.
                </p>
                <p className="text-wedding-text/80 mb-0">
                  Your contribution will help us experience the romance and beauty of the Amalfi Coast,
                  to the archaeological phenomenon of Pompeii, and the vibrant and characterful city of Naples.
                </p>
              </div>
              <div>
                <Image
                  src="/sorrento.jpg"
                  alt="Sorrento, Italy. Photo by Emran Yousof"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="bg-white/50 p-8 rounded-lg mb-8">
            <h2 className="font-serif text-2xl text-wedding-text text-center mb-6">Bank Details</h2>
            <p className="text-wedding-text/80 text-center mb-8">
              If you would like to contribute to our honeymoon fund, you can transfer directly to our account:
            </p>

            <div className="max-w-md mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <span className="font-semibold text-wedding-text">Account Name:</span>
                    <span className="text-wedding-text">Amy Emery<i className="select-none"> or </i>Daniel Wyatt</span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <span className="font-semibold text-wedding-text">Account Number:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-wedding-text">5025<span className="select-none"> </span>0694</span>
                      <CopyButton text="50250694"/>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <span className="font-semibold text-wedding-text">Sort Code:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-wedding-text">40<span className="select-none">-</span>63<span className="select-none">-</span>01</span>
                      <CopyButton text="406301"/>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <span className="font-semibold text-wedding-text">Bank:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-wedding-text">Coventry Building Society</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-2xl text-center text-wedding-text mt-8 mb-4">Thank You for your generosity</h2>
            <p className="text-wedding-text/80 text-center">Any contribution, no matter the size, means the world to us and will help make our honeymoon truly magical.</p>
            <p className="text-wedding-text/80 text-center">If you have any questions about contributing to our honeymoon fund, please don't hesitate to reach out to us directly.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
