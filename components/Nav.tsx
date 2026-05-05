"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FCFBF7]/95 backdrop-blur-sm border-b border-[#E5E3DC]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl text-[#1A1916] tracking-tight">MoveToEU</span>
          <span className="font-mono text-[10px] text-[#7B5CF0] bg-[#F0EBFB] px-1.5 py-0.5 rounded leading-none">BETA</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          <Link href="/visas/portugal" className="text-sm text-[#6B6860] hover:text-[#1A1916] transition-colors">
            Portugal
          </Link>
          <Link href="/visas/spain" className="text-sm text-[#6B6860] hover:text-[#1A1916] transition-colors">
            Spain
          </Link>
          <Link href="/visas/greece" className="text-sm text-[#6B6860] hover:text-[#1A1916] transition-colors">
            Greece
          </Link>
          <Link href="/#pricing" className="text-sm text-[#6B6860] hover:text-[#1A1916] transition-colors">
            Pricing
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/app"
            className="text-sm text-[#6B6860] hover:text-[#1A1916] transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/app/check"
            className="text-sm bg-[#1A1916] text-[#FCFBF7] px-4 py-2 rounded-lg hover:bg-[#2a2924] transition-colors"
          >
            Check eligibility free →
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-[#6B6860]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#E5E3DC] bg-[#FCFBF7] px-6 py-4 flex flex-col gap-4">
          <Link href="/visas/portugal" className="text-sm text-[#6B6860]" onClick={() => setMenuOpen(false)}>Portugal D8</Link>
          <Link href="/visas/spain" className="text-sm text-[#6B6860]" onClick={() => setMenuOpen(false)}>Spain Digital Nomad</Link>
          <Link href="/visas/greece" className="text-sm text-[#6B6860]" onClick={() => setMenuOpen(false)}>Greece Digital Nomad</Link>
          <Link href="/#pricing" className="text-sm text-[#6B6860]" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link
            href="/app/check"
            className="text-sm bg-[#1A1916] text-[#FCFBF7] px-4 py-2 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Check eligibility free →
          </Link>
        </div>
      )}
    </header>
  );
}
