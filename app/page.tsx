import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1">
        {/* HERO */}
        <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block"></span>
              Free eligibility check — no credit card required
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Get your EU visa answer{" "}
              <span className="text-[#1B4FFF]">in minutes, not weeks.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              AI-powered, country-specific guidance for remote workers and digital nomads.
              Free to start.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B4FFF] text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Check My Eligibility — Free
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            {/* Trust bar */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Covering Portugal · Spain · Greece · and more
              </span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Updated for 2026
              </span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No legal jargon
              </span>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Visa processes are broken.
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Getting a European digital nomad visa shouldn&apos;t require a law degree or a €5,000 consultant.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "📋",
                  title: "Confusing requirements",
                  desc: "Each country has different rules, thresholds, and document lists — spread across government websites in multiple languages.",
                },
                {
                  icon: "💸",
                  title: "Expensive consultants",
                  desc: "Immigration attorneys charge €1,500–€5,000 for the same guidance that should be freely available.",
                },
                {
                  icon: "❌",
                  title: "Constant rejection risk",
                  desc: "40% of applications are rejected due to incomplete paperwork or missing apostilles — fixable problems no one warns you about.",
                },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-start p-6 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="text-4xl mb-4">{item.icon}</span>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                How it works
              </h2>
              <p className="text-lg text-slate-600">Three steps to clarity.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Tell us your profile",
                  desc: "Answer 6 quick questions about your nationality, income, destination, and work situation.",
                },
                {
                  step: "02",
                  title: "Get your instant checklist",
                  desc: "Receive a personalized document checklist, eligibility score, and red flag warnings specific to your case.",
                },
                {
                  step: "03",
                  title: "Follow your guided plan",
                  desc: "Step-by-step timeline with deadlines, embassy tips, and an AI assistant to answer your questions.",
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1B4FFF] text-white font-bold text-lg flex items-center justify-center">
                      {item.step}
                    </span>
                    <div className="hidden md:block flex-1 h-px bg-slate-300"></div>
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B4FFF] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
              >
                Start Free Eligibility Check
              </Link>
            </div>
          </div>
        </section>

        {/* VISA CARDS */}
        <section className="py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Visas we cover
              </h2>
              <p className="text-lg text-slate-600">
                Comprehensive guidance for the most popular EU digital nomad visas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  flag: "🇵🇹",
                  country: "Portugal",
                  name: "D8 Digital Nomad Visa",
                  processing: "6–9 months",
                  income: "€3,680/mo",
                  tag: "Most Popular",
                  tagColor: "bg-blue-100 text-blue-700",
                },
                {
                  flag: "🇪🇸",
                  country: "Spain",
                  name: "Digital Nomad Visa",
                  processing: "30–90 days",
                  income: "€2,646/mo",
                  tag: "Fastest EU Option",
                  tagColor: "bg-green-100 text-green-700",
                },
                {
                  flag: "🇬🇷",
                  country: "Greece",
                  name: "Digital Nomad Visa",
                  processing: "~10 business days",
                  income: "€3,500/mo",
                  tag: "Great for Beginners",
                  tagColor: "bg-purple-100 text-purple-700",
                },
              ].map((visa) => (
                <div key={visa.country} className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl">{visa.flag}</span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${visa.tagColor}`}>
                      {visa.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-1">{visa.country}</h3>
                  <p className="text-slate-500 text-sm mb-4">{visa.name}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Processing time</span>
                      <span className="font-medium text-slate-900">{visa.processing}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Min. income</span>
                      <span className="font-medium text-slate-900">{visa.income}</span>
                    </div>
                  </div>
                  <Link
                    href="/quiz"
                    className="block w-full text-center px-4 py-2.5 border-2 border-[#1B4FFF] text-[#1B4FFF] font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm"
                  >
                    Check Eligibility →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="py-20 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-lg text-slate-600">
                Start free. Upgrade when you&apos;re ready to apply.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Free",
                  price: "$0",
                  period: "forever",
                  features: [
                    "Eligibility check",
                    "Basic document checklist",
                    "Eligibility score",
                    "Red flag warnings",
                  ],
                  cta: "Get Started Free",
                  href: "/quiz",
                  highlight: false,
                },
                {
                  name: "Guided",
                  price: "$49",
                  period: "per month",
                  features: [
                    "Everything in Free",
                    "Full document checklist",
                    "Step-by-step timeline",
                    "AI chatbot assistant",
                    "Embassy appointment tips",
                    "Document upload tracker",
                  ],
                  cta: "Start Guided Plan",
                  href: "/pricing",
                  highlight: true,
                },
                {
                  name: "Premium",
                  price: "$199",
                  period: "per application",
                  features: [
                    "Everything in Guided",
                    "Async human document review",
                    "Priority support",
                    "Application pre-check",
                  ],
                  cta: "Get Premium",
                  href: "/pricing",
                  highlight: false,
                },
              ].map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-xl p-6 border-2 ${
                    tier.highlight
                      ? "border-[#1B4FFF] bg-white shadow-xl shadow-blue-100 relative"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-[#1B4FFF] text-white text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                    <span className="text-slate-500 text-sm">/{tier.period}</span>
                  </div>
                  <ul className="space-y-2 mt-5 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tier.href}
                    className={`block w-full text-center px-4 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                      tier.highlight
                        ? "bg-[#1B4FFF] text-white hover:bg-blue-700"
                        : "border-2 border-slate-300 text-slate-700 hover:border-slate-400"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="py-8 px-4 sm:px-6 bg-amber-50 border-y border-amber-200">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Important:</strong> MoveTo.life is an AI-powered guidance tool, not a law firm. We do not provide legal advice.
              Always verify requirements with the official consulate or a licensed immigration attorney.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
