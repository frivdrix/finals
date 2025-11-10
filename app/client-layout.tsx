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
          {/* Standard max-width container for consistent layout */}
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 lg:gap-4">
            <div className="flex items-center gap-1 lg:gap-2 flex-shrink-0 min-w-fit">
              <a href="/" className="font-heading text-lg lg:text-3xl font-black text-gray-900 whitespace-nowrap tracking-tight lg:tracking-wide leading-tight">
                LetsGrowPro
              </a>
              <svg className="w-4 h-4 lg:w-6 lg:h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M7 14l5-5 5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Desktop Navigation - visible at lg (1024px) and above */}
            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center px-6">
              <a
                href="/case-studies-page"
                className="text-black hover:text-primary transition-colors text-base font-medium whitespace-nowrap"
              >
                Case Studies
              </a>
              <a
                href="/f-a-q-page"
                className="text-black hover:text-primary transition-colors text-base font-medium whitespace-nowrap"
              >
                FAQ
              </a>
              <a
                href="/contact-page"
                className="text-black hover:text-primary transition-colors text-base font-medium whitespace-nowrap"
              >
                Contact
              </a>
            </nav>

            {/* Desktop Get Started Button - visible at lg and above */}
            <a
              href="/contact-page"
              className="hidden lg:inline-block bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-full font-semibold text-base transition-colors flex-shrink-0 whitespace-nowrap"
            >
              Get Started
            </a>

            {/* Mobile menu button - visible below lg (1024px) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu - shown when menu is open on mobile */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white mt-2">
              <div className="px-4 py-3 flex flex-col gap-2">
                <a
                  href="/case-studies-page"
                  className="text-black hover:text-primary transition-colors py-2 px-2 font-medium text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Case Studies
                </a>
                <a
                  href="/f-a-q-page"
                  className="text-black hover:text-primary transition-colors py-2 px-2 font-medium text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
                <a
                  href="/contact-page"
                  className="text-black hover:text-primary transition-colors py-2 px-2 font-medium text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="/contact-page"
                  className="w-full bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-full font-semibold text-sm transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="w-full min-h-screen overflow-x-hidden">
        {children}
        <footer className="border-t border-gray-200 bg-white py-8 lg:py-12 w-full overflow-x-hidden">
          <div className="w-full px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <small className="text-gray-600">De-Wixified on Vercel • Edit freely</small>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
