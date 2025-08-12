"use client"

import type React from "react"

import { useState } from "react"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function RSVPPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attendance: "",
    guestCount: "1",
    dietaryRestrictions: "",
    songRequest: "",
    message: "",
    events: [] as string[],
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAttendanceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, attendance: value }))
  }

  const handleEventChange = (event: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      events: checked ? [...prev.events, event] : prev.events.filter((e) => e !== event),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your RSVP! We'll be in touch soon.",
        })
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          attendance: "",
          guestCount: "1",
          dietaryRestrictions: "",
          songRequest: "",
          message: "",
          events: [],
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to submit RSVP. Please try again.",
        })
      }
    } catch (error) {
      console.error("Submit error:", error)
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-wedding-cream min-h-screen">
      <FloatingNavbar />

      <div className="pt-32 pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-wedding-text text-center mb-8">RSVP</h1>
          <p className="text-lg text-wedding-text/80 text-center mb-12">
            Please let us know if you'll be joining us for our special day. We can't wait to celebrate with you!
          </p>

          {submitStatus.type && (
            <div
              className={`mb-8 p-4 rounded-lg text-center ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-200"
                  : "bg-red-100 text-red-800 border border-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="bg-white/50 p-8 rounded-lg">
              <h2 className="font-serif text-2xl text-wedding-text mb-6">Your Information</h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-wedding-text font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-wedding-text/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-accent bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-wedding-text font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-wedding-text/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-accent bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-wedding-text font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-wedding-text/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-accent bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Attendance */}
            <div className="bg-white/50 p-8 rounded-lg">
              <h2 className="font-serif text-2xl text-wedding-text mb-6">Will you be attending?</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => handleAttendanceChange("yes")}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    formData.attendance === "yes"
                      ? "border-wedding-accent bg-wedding-accent/10"
                      : "border-wedding-text/20 bg-white hover:border-wedding-accent/50"
                  }`}
                >
                  <div className="text-center">
                    <h3 className="font-semibold text-wedding-text text-lg mb-2">Joyfully Accept</h3>
                    <p className="text-wedding-text/70">Can't wait to celebrate with you!</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleAttendanceChange("no")}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    formData.attendance === "no"
                      ? "border-wedding-accent bg-wedding-accent/10"
                      : "border-wedding-text/20 bg-white hover:border-wedding-accent/50"
                  }`}
                >
                  <div className="text-center">
                    <h3 className="font-semibold text-wedding-text text-lg mb-2">Regretfully Decline</h3>
                    <p className="text-wedding-text/70">We'll miss you on our special day</p>
                  </div>
                </button>
              </div>

              {formData.attendance === "yes" && (
                <div className="mt-6">
                  <label htmlFor="guestCount" className="block text-wedding-text font-medium mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-wedding-text/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-accent bg-white"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>
              )}
            </div>

            {/* Events */}
            {formData.attendance === "yes" && (
              <div className="bg-white/50 p-8 rounded-lg">
                <h2 className="font-serif text-2xl text-wedding-text mb-6">Which events will you attend?</h2>

                <div className="space-y-3">
                  {[
                    { id: "ceremony", title: "Wedding Ceremony", desc: "3:00 PM - Rose Garden" },
                    { id: "cocktails", title: "Cocktail Hour", desc: "4:00 PM - Terrace" },
                    { id: "reception", title: "Reception & Dinner", desc: "6:00 PM - Grand Ballroom" },
                    { id: "dancing", title: "Dancing", desc: "8:30 PM - Under the Stars" },
                  ].map((event) => (
                    <label
                      key={event.id}
                      className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        formData.events.includes(event.id)
                          ? "border-wedding-accent bg-wedding-accent/10"
                          : "border-wedding-text/20 bg-white hover:border-wedding-accent/50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.events.includes(event.id)}
                        onChange={(e) => handleEventChange(event.id, e.target.checked)}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-wedding-text">{event.title}</h3>
                        <p className="text-wedding-text/70 text-sm">{event.desc}</p>
                      </div>
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          formData.events.includes(event.id)
                            ? "border-wedding-accent bg-wedding-accent"
                            : "border-wedding-text/30"
                        }`}
                      >
                        {formData.events.includes(event.id) && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Information */}
            {formData.attendance === "yes" && (
              <div className="bg-white/50 p-8 rounded-lg">
                <h2 className="font-serif text-2xl text-wedding-text mb-6">Additional Information</h2>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="dietaryRestrictions" className="block text-wedding-text font-medium mb-2">
                      Dietary Restrictions or Allergies
                    </label>
                    <textarea
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      rows={3}
                      value={formData.dietaryRestrictions}
                      onChange={handleInputChange}
                      placeholder="Please let us know about any dietary restrictions or food allergies..."
                      className="w-full px-4 py-3 border border-wedding-text/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-accent bg-white resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="songRequest" className="block text-wedding-text font-medium mb-2">
                      Song Request
                    </label>
                    <input
                      type="text"
                      id="songRequest"
                      name="songRequest"
                      value={formData.songRequest}
                      onChange={handleInputChange}
                      placeholder="Any song you'd love to hear at our reception?"
                      className="w-full px-4 py-3 border border-wedding-text/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-accent bg-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Message */}
            <div className="bg-white/50 p-8 rounded-lg">
              <h2 className="font-serif text-2xl text-wedding-text mb-6">Message for the Couple</h2>

              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Share your well wishes, memories, or anything you'd like us to know..."
                className="w-full px-4 py-3 border border-wedding-text/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-accent bg-white resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-wedding-accent hover:bg-wedding-accent/90 text-white px-12 py-4 rounded-full text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit RSVP"}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  )
}
