"use client"

import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

function CopyButton({ text, label }: { text: string; label: string }) {
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
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? "Copied!" : `Copy ${label}`}
    </button>
  )
}

export default function GiftsPage() {
  return (
    <main className="bg-wedding-cream min-h-screen">
      <FloatingNavbar />

      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-wedding-text text-center mb-8">Honeymoon Fund</h1>
          <p className="text-lg text-wedding-text/80 text-center mb-12 max-w-2xl mx-auto">
            Your presence is the greatest gift of all. For those who wish to contribute to our honeymoon adventure, we
            would be incredibly grateful for your support.
          </p>

          <div className="bg-white/50 p-8 rounded-lg mb-8">
            <h2 className="font-serif text-3xl text-wedding-text text-center mb-8">Our Italian Adventure</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-wedding-text/80 mb-6">
                  We're planning an amazing honeymoon to Italy! Instead of traditional gifts, we would love your help in
                  creating unforgettable memories as we start our married life together.
                </p>
                <p className="text-wedding-text/80 mb-6">
                  Your contribution will help us experience the romance and beauty of Italy, from the rolling hills of
                  Tuscany to the canals of Venice.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-wedding-text mb-4">Our Dream Experiences</h3>
                <ul className="space-y-2 text-wedding-text/70">
                  <li>• Romantic dinner overlooking the Tuscan countryside</li>
                  <li>• Wine tasting in the vineyards of Chianti</li>
                  <li>• Gondola ride through the canals of Venice</li>
                  <li>• Hands-on cooking class in Rome</li>
                  <li>• Day trip along the stunning Amalfi Coast</li>
                  <li>• Sunset viewing from the Leaning Tower of Pisa</li>
                </ul>
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
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-wedding-text">Account Name:</span>
                    <span className="text-wedding-text">Amy & Daniel Johnson</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-wedding-text">Sort Code:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-wedding-text">12-34-56</span>
                      <CopyButton text="123456" label="Sort Code" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-wedding-text">Account Number:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-wedding-text">12345678</span>
                      <CopyButton text="12345678" label="Account Number" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-wedding-text">Reference:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-wedding-text">Honeymoon Fund</span>
                      <CopyButton text="Honeymoon Fund" label="Reference" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/50 p-8 rounded-lg">
              <h2 className="font-serif text-2xl text-wedding-text mb-4">Why Italy?</h2>
              <p className="text-wedding-text/80 mb-4">
                Italy holds a special place in our hearts. It's where Daniel proposed during our trip to the Amalfi
                Coast two years ago, and we've dreamed of returning as husband and wife ever since.
              </p>
              <p className="text-wedding-text/80">
                We can't wait to explore the art, culture, cuisine, and romance that Italy has to offer while creating
                memories that will last a lifetime.
              </p>
            </div>

            <div className="bg-white/50 p-8 rounded-lg">
              <h2 className="font-serif text-2xl text-wedding-text mb-4">Thank You</h2>
              <div className="space-y-4 text-wedding-text/80">
                <p>
                  <strong>Your Generosity:</strong> Any contribution, no matter the size, means the world to us and will
                  help make our honeymoon truly magical.
                </p>
                <p>
                  <strong>Thank You Notes:</strong> We'll send personalized thank you notes within three months of the
                  wedding, sharing photos and stories from our Italian adventure.
                </p>
                <p>
                  <strong>Questions:</strong> If you have any questions about contributing to our honeymoon fund, please
                  don't hesitate to reach out to us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
