import Link from "next/link";

const navLinks = [
  { label: "Portugal D8 Visa", href: "/visas/portugal" },
  { label: "Spain Digital Nomad Visa", href: "/visas/spain" },
  { label: "Greece Digital Nomad Visa", href: "/visas/greece" },
  { label: "Pricing", href: "/#pricing" },
  { label: "How it works", href: "/#how-it-works" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E3DC] bg-[#F6F5F0]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <div className="font-display text-2xl text-[#1A1916] mb-3">MoveToEU</div>
            <p className="text-sm text-[#6B6860] leading-relaxed max-w-xs">
              AI-powered EU visa guidance for digital nomads and remote workers.
              Not a law firm. Guidance only.
            </p>
          </div>

          {/* Guides */}
          <div>
            <div className="font-mono text-xs text-[#6B6860] uppercase tracking-widest mb-4">
              Visa Guides
            </div>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B6860] hover:text-[#1A1916] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="font-mono text-xs text-[#6B6860] uppercase tracking-widest mb-4">
              Legal
            </div>
            <ul className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B6860] hover:text-[#1A1916] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-xs text-[#6B6860] leading-relaxed">
              MoveToEU is not a licensed immigration attorney or law firm.
              All content is informational only.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-[#E5E3DC] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <span className="font-mono text-xs text-[#6B6860]">
            © {new Date().getFullYear()} MoveToEU. All rights reserved.
          </span>
          <span className="font-mono text-xs text-[#6B6860]">
            Portugal · Spain · Greece
          </span>
        </div>
      </div>
    </footer>
  );
}
