import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Disclaimer bar */}
      <div className="bg-amber-50 border-t border-amber-200 px-4 py-3">
        <p className="max-w-6xl mx-auto text-xs text-amber-800 text-center leading-relaxed">
          <strong>Disclaimer:</strong> MoveTo.Life is an AI-powered guidance tool, not a law firm. We do not provide legal advice.
          Always verify requirements with the official consulate or a licensed immigration attorney.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-3">
              <span>🌍</span>
              <span>MoveTo.Life</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              AI-powered visa guidance for digital nomads and remote workers moving to Europe. Free eligibility check, personalized checklists.
            </p>
          </div>

          {/* Visas */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Visa Guides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog/portugal-d8-visa-guide" className="hover:text-white transition-colors">
                  🇵🇹 Portugal D8 Visa
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  🇪🇸 Spain Digital Nomad
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  🇬🇷 Greece Digital Nomad
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/quiz" className="hover:text-white transition-colors">
                  Eligibility Check
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Guides & Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MoveTo.Life. All rights reserved.</p>
          <p>Not a law firm. Guidance only — always consult a licensed attorney.</p>
        </div>
      </div>
    </footer>
  );
}