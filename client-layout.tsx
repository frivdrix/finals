"use client"
import type React from "react"
import { useState } from "react"
import "../styles/global.css"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white w-full">
        <div className="w-full px-4 py-2 lg:px-8 lg:py-4">
          <div className="max-w-full lg:max-w-[1400px] lg:mx-auto flex items-center justify-between gap-3 lg:gap-4">
            <div className="flex items-center gap-1 lg:gap-2 flex-shrink-0 min-w-fit">
              <span className="font-heading text-lg lg:text-3xl whitespace-nowrap tracking-tight lg:tracking-wide leading-tight">
                LetsGrowPro
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav hidden md:flex items-center gap-6">
              <a href="/case-studies-page" className="text-black hover:text-primary transition-colors font-medium">Case Studies</a>
              <a href="/f-a-q-page" className="text-black hover:text-primary transition-colors font-medium">FAQ</a>
              <a href="/contact-page" className="text-black hover:text-primary transition-colors font-medium">Contact</a>
              <a href="/contact-page" className="bg-primary text-black hover:bg-primary/90 border border-black/10 px-6 py-2 rounded-full font-semibold transition-colors">
                Book a Demo
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn md:hidden inline-flex items-center justify-center rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              Menu
            </button>
          </div>

          {/* Mobile Navigation Menu - only visible when menu is open on mobile */}
          {isMenuOpen && (
            <div className="mobile-menu md:hidden border-t border-gray-200 bg-white mt-2">
              <div className="px-4 py-3 flex flex-col gap-2">
                <a href="/case-studies-page" className="text-black hover:text-primary transition-colors py-2 px-2 font-medium text-sm" onClick={() => setIsMenuOpen(false)}>
                  Case Studies
                </a>
                <a href="/f-a-q-page" className="text-black hover:text-primary transition-colors py-2 px-2 font-medium text-sm" onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </a>
                <a href="/contact-page" className="text-black hover:text-primary transition-colors py-2 px-2 font-medium text-sm" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
                <a href="/contact-page" className="w-full bg-primary text-white hover:bg-primary/90 border border-black/10 px-6 py-2 rounded-full font-semibold text-sm transition-colors text-center" onClick={() => setIsMenuOpen(false)}>
                  Book a Demo
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="w-full min-h-screen overflow-x-hidden">
        {/* Global container wrapper to keep md look on big screens */}
        <div className="mx-auto max-w-[1200px] px-4 lg:px-8">
          {children}
        </div>

        <footer className="border-t border-gray-200 bg-white py-8 lg:py-12 w-full overflow-x-hidden">
          <div className="w-full px-4 lg:px-8">
            <div className="max-w-full lg:max-w-[1400px] lg:mx-auto">
              <small className="text-gray-600">De-Wixified on Vercel • Edit freely</small>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
