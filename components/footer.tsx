import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white/50 border-t border-wedding-text/10">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl text-wedding-text flex items-center gap-2 mb-4 md:mb-0">
            <span>Amy</span>
            <span className="font-script text-wedding-accent">and</span>
            <span>Daniel</span>
          </Link>

          {/* Wedding Date */}
          <div className="text-wedding-text/80 text-center md:text-right">
            <p className="font-medium">Save the Date</p>
            <p className="text-lg">Coming Soon</p>
          </div>
        </div>

        {/* Tagline Bar */}
        <div className="border-t border-wedding-text/10 pt-4 text-center">
          <p className="text-wedding-text/60 text-sm">Made with Next.js + Tailwind + ❤️</p>
        </div>
      </div>
    </footer>
  )
}
