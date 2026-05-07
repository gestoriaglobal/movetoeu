"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900">
            <span className="text-2xl">🌍</span>
            <span>MoveTo.life</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Guides
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center px-4 py-2 bg-[#1B4FFF] text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Check My Eligibility
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-slate-100 pt-4 space-y-3">
            <Link href="/pricing" className="block text-sm font-medium text-slate-600 py-2" onClick={() => setOpen(false)}>
              Pricing
            </Link>
            <Link href="/blog" className="block text-sm font-medium text-slate-600 py-2" onClick={() => setOpen(false)}>
              Guides
            </Link>
            <Link
              href="/quiz"
              className="block text-center px-4 py-2 bg-[#1B4FFF] text-white text-sm font-semibold rounded-lg"
              onClick={() => setOpen(false)}
            >
              Check My Eligibility
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
