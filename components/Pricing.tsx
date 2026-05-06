import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Start here. No credit card.",
    features: [
      "Eligibility check (pass / flag / fail)",
      "Country-specific document checklist",
      "Income requirement reference",
      "Official source links",
    ],
    cta: "Check eligibility free",
    href: "/app/check",
    accent: false,
  },
  {
    name: "Guided",
    price: "$49",
    period: "per application",
    description: "For people who want to get it right.",
    features: [
      "Everything in Free",
      "Step-by-step guided application flow",
      "Personalized timeline by departure date",
      "Red-flag detection & weak-spot alerts",
      "Form-filling guidance",
      "AI chatbot for follow-up questions",
      "Email reminders as deadlines approach",
    ],
    cta: "Start for $49",
    href: "/app/checkout?plan=guided",
    accent: true,
  },
  {
    name: "Done-with-you",
    price: "$299",
    period: "per application",
    description: "AI guidance + async human review.",
    features: [
      "Everything in Guided",
      "Async document review by a specialist",
      "Feedback on your specific documents",
      "Pre-submission readiness check",
      "Priority support",
    ],
    cta: "Get expert review",
    href: "/app/checkout?plan=premium",
    accent: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 border-t border-[#E5E3DC]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-4 flex items-start gap-4">
          <span className="font-mono text-xs text-[#6B6860] mt-1">PRICING</span>
          <div className="flex-1 h-px bg-[#E5E3DC] mt-2.5" />
        </div>

        <div className="mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-[#1A1916] mb-3">
            Start free. Upgrade when ready.
          </h2>
          <p className="text-[#6B6860] max-w-lg">
            Most people need the free checklist first. Upgrade if you want the
            full guided walkthrough or async expert review.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border p-7 flex flex-col ${
                plan.accent
                  ? "bg-[#1A1916] border-[#1A1916] text-[#FCFBF7]"
                  : "bg-[#FCFBF7] border-[#E5E3DC] text-[#1A1916]"
              }`}
            >
              {/* Plan name + badge */}
              <div className="mb-5">
                <span
                  className={`font-mono text-xs uppercase tracking-widest ${
                    plan.accent ? "text-[#a990f5]" : "text-[#6B6860]"
                  }`}
                >
                  {plan.name}
                </span>
                {plan.accent && (
                  <span className="ml-2 font-mono text-[10px] bg-[#7B5CF0] text-white px-2 py-0.5 rounded">
                    POPULAR
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="mb-2">
                <span className="font-display text-5xl">{plan.price}</span>
              </div>
              <div
                className={`font-mono text-xs mb-4 ${
                  plan.accent ? "text-[#a990f5]" : "text-[#6B6860]"
                }`}
              >
                {plan.period}
              </div>

              <p
                className={`text-sm mb-6 ${
                  plan.accent ? "text-[#c4baf7]" : "text-[#6B6860]"
                }`}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.accent ? "text-[#7B5CF0]" : "text-[#7B5CF0]"
                      }`}
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <path
                        d="M2 6.5l3.5 3.5L11 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        plan.accent ? "text-[#d6d1f7]" : "text-[#1A1916]"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.href}
                className={`text-center text-sm font-medium py-3 px-4 rounded-lg transition-colors ${
                  plan.accent
                    ? "bg-[#7B5CF0] text-white hover:bg-[#6d4fe0]"
                    : "bg-[#1A1916] text-[#FCFBF7] hover:bg-[#2a2924]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 font-mono text-xs text-[#6B6860] max-w-xl">
          One-time payment per application. No subscription. No surprise fees.
          Paid plans include a 7-day refund window if the guidance does not
          match your situation.
        </p>
      </div>
    </section>
  );
}
