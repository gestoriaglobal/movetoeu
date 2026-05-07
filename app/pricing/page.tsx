import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for EU digital nomad visa guidance. Start free, upgrade when ready.",
};

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to understand your eligibility.",
    features: [
      "Eligibility check",
      "Basic document checklist",
      "Eligibility score (eligible / borderline / ineligible)",
      "Red flag warnings",
      "Personalized timeline",
    ],
    notIncluded: [
      "AI chatbot assistant",
      "Step-by-step form walkthrough",
      "Human document review",
    ],
    cta: "Get Started Free",
    href: "/quiz",
    highlight: false,
  },
  {
    name: "Guided",
    price: "$49",
    period: "per month",
    description: "Full support for your application from start to finish.",
    features: [
      "Everything in Free",
      "Full document checklist with details",
      "Step-by-step timeline",
      "AI chatbot assistant (unlimited)",
      "Embassy appointment tips",
      "Document upload tracker",
      "Email support",
    ],
    notIncluded: ["Async human document review"],
    cta: "Start Guided Plan",
    href: "/quiz",
    highlight: true,
  },
  {
    name: "Premium",
    price: "$199",
    period: "per application",
    description: "Human review of your application before you submit.",
    features: [
      "Everything in Guided",
      "Async human document review",
      "Application pre-check by immigration specialist",
      "Priority email support",
      "One revision round included",
    ],
    notIncluded: [],
    cta: "Get Premium",
    href: "/quiz",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Is this legal advice?",
    a: "No. MoveTo.Life is a guidance tool, not a law firm. We provide structured information and personalized checklists based on publicly available visa requirements. We do not provide legal advice and are not a substitute for a licensed immigration attorney.",
  },
  {
    q: "What if my situation changes?",
    a: "You can retake the eligibility quiz at any time — it's always free. If your income, family status, or target country changes, just restart the quiz to get updated results.",
  },
  {
    q: "Which countries do you cover?",
    a: "We cover Portugal (D8 Digital Nomad Visa), Spain (Digital Nomad Visa), and Greece (Digital Nomad Visa) for V1. We're expanding to Italy, Malta, and Germany in the coming months.",
  },
  {
    q: "How accurate is the eligibility check?",
    a: "Our eligibility logic is based on official 2026 visa requirements. However, consulates have discretion, and requirements can change. Always verify the latest requirements directly with the relevant consulate before applying.",
  },
  {
    q: "Can I cancel my Guided plan?",
    a: "Yes. Cancel anytime — no lock-in, no cancellation fees. Your access continues until the end of your billing period.",
  },
  {
    q: "What is the human document review in Premium?",
    a: "An immigration specialist (not an attorney) reviews your prepared document package and flags issues before you submit. This is a checklist review, not legal advice. It typically takes 2–3 business days.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-slate-50 pt-16 pb-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-slate-600">
              Start free. Upgrade when you&apos;re ready to apply.
              Cancel anytime.
            </p>
          </div>
        </section>

        {/* Pricing tiers */}
        <section className="py-16 px-4 sm:px-6 -mt-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-6 border-2 bg-white relative ${
                  tier.highlight
                    ? "border-[#1B4FFF] shadow-2xl shadow-blue-100"
                    : "border-slate-200 shadow-sm"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#1B4FFF] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="font-bold text-xl text-slate-900 mb-1">{tier.name}</h2>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                    <span className="text-slate-500 text-sm">/{tier.period}</span>
                  </div>
                  <p className="text-sm text-slate-600">{tier.description}</p>
                </div>

                <Link
                  href={tier.href}
                  className={`block w-full text-center px-4 py-3 rounded-xl font-semibold text-sm mb-6 transition-colors ${
                    tier.highlight
                      ? "bg-[#1B4FFF] text-white hover:bg-blue-700"
                      : "border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                  }`}
                >
                  {tier.cta}
                </Link>

                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Includes</p>
                  <ul className="space-y-2">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {tier.notIncluded.length > 0 && (
                    <ul className="space-y-2 mt-3">
                      {tier.notIncluded.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-6 px-4 sm:px-6 bg-amber-50 border-y border-amber-200">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-amber-800">
              <strong>Disclaimer:</strong> MoveTo.Life is an AI-powered guidance tool, not a law firm. We do not provide legal advice.
              Always verify requirements with the official consulate or a licensed immigration attorney.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-slate-200 pb-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 bg-[#1B4FFF]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start your EU move today
            </h2>
            <p className="text-blue-200 mb-8">
              Free eligibility check in 2 minutes. No credit card required.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1B4FFF] font-bold rounded-xl hover:bg-blue-50 transition-colors"
            >
              Check My Eligibility — Free
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}