"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Menu", href: "/menu" },
  { name: "Ceremony", href: "/ceremony" },
  { name: "Reception", href: "/reception" },
  { name: "Information", href: "/information" },
  { name: "Accommodation", href: "/accommodation" },
  { name: "Gifts", href: "/gifts" },
]

export function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 50)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isHomePage = usePathname() === "/"

  if (isHomePage) {
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50)
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isLargeNavbar = usePathname() === "/" && !isScrolled

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          !isHomePage || isScrolled ? "bg-wedding-cream/95 backdrop-blur-sm shadow-lg py-3" : "bg-transparent py-6",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-1 flex justify-center md:justify-start">
              <Link
                href="/"
                className={cn(
                  "font-serif transition-all duration-300 flex items-center gap-2",
                  isLargeNavbar ? "text-4xl md:text-6xl drop-shadow-lg" : "text-4xl",
                  isLargeNavbar && !isMobileMenuOpen ? "text-white" : "text-wedding-text",
                )}
              >
                <span>Amy</span>
                <span className={`relative x-2 -mx-1 font-script text-wedding-accent text-5xl/4 ${isLargeNavbar ? "md:text-7xl/6" : ""}`}>and</span>
                <span>Daniel</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "hover:text-wedding-accent transition-colors duration-200 font-medium",
                    isLargeNavbar ? "text-white drop-shadow-md" : "text-wedding-text",
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className={cn(
                  "bg-wedding-accent hover:bg-wedding-accent/90 text-white px-6 py-2 rounded-full",
                  isLargeNavbar && "drop-shadow-lg",
                )}
              >
                <Link href="/rsvp">RSVP</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className={cn(
                  "hover:text-wedding-accent transition-colors",
                  isLargeNavbar && !isMobileMenuOpen ? "text-white drop-shadow-md" : "text-wedding-text",
                )}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-wedding-cream/95 backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={toggleMobileMenu}
                  className="text-2xl text-wedding-text hover:text-wedding-accent transition-colors duration-200 font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-wedding-accent hover:bg-wedding-accent/90 text-white px-8 py-3 rounded-full text-lg"
                onClick={toggleMobileMenu}
              >
                <Link href="/rsvp">RSVP</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
