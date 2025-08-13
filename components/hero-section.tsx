"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DateTime } from "luxon";

const heroImages = ["/romantic-wedding-sunset.png", "/elegant-wedding-venue.png", "/wedding-ceremony-setup.png"]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const weddingDate = DateTime.fromObject({year: 2026, month: 5, day: 2, hour: 12, minute: 0, second: 0}, {zone: 'Europe/London'});
  const getDateDuration = () => weddingDate.diff(DateTime.now(), ['months', 'days', 'hours'])
  const [dateDifference, setDateDifference] = useState(getDateDuration())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const dateDifferenceInterval = setInterval(() => {
      setDateDifference(getDateDuration())
    }, 60000)

    return () => clearInterval(dateDifferenceInterval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="font-serif text-6xl md:text-4xl lg:text-6xl text-white mb-6 drop-shadow-lg">
          <span className="block md:inline-block">{Math.max(0, dateDifference.months)} months<span className="hidden md:inline">,&nbsp;</span></span>
          <span className="block md:inline-block">{Math.max(0, dateDifference.days)} days<span className="hidden md:inline">,&nbsp;</span></span>
          <span className="block md:inline-block">{Math.max(0, Math.ceil(dateDifference.hours))} hours<span className="hidden md:inline">&nbsp;</span></span>
          <span className="block md:inline-block">to go</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-4 drop-shadow-md">Amy and Daniel are getting married</p>
        <p className="text-lg md:text-xl text-white/80 mb-8 drop-shadow-md">Save the date for our special day</p>
        <Button
          asChild
          className="bg-wedding-accent hover:bg-wedding-accent/90 text-white px-8 py-3 rounded-full text-lg shadow-lg"
        >
          <Link href="/rsvp">RSVP Now</Link>
        </Button>
      </div>
    </section>
  )
}
