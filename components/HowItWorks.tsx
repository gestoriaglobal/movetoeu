const steps = [
  {
    index: "01",
    title: "Tell us your situation",
    description:
      "Enter your nationality, destination country, employment type, and income range. Takes under two minutes.",
  },
  {
    index: "02",
    title: "Get your eligibility verdict",
    description:
      "We check your profile against the real requirements for Portugal D8, Spain Digital Nomad, or Greece Digital Nomad — and tell you clearly whether you qualify, flag gaps, or need another path.",
  },
  {
    index: "03",
    title: "Download your personalized checklist",
    description:
      "A country-specific list of every document you need, with official source links and a timeline for when to gather each one. Free.",
  },
  {
    index: "04",
    title: "Follow the guided application flow",
    description:
      "Upgrade to get a step-by-step walkthrough, red-flag detection, form-filling guidance, and a timeline calibrated to your departure date.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 border-t border-[#E5E3DC]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-14 flex items-start gap-4">
          <span className="font-mono text-xs text-[#6B6860] mt-1">HOW IT WORKS</span>
          <div className="flex-1 h-px bg-[#E5E3DC] mt-2.5" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.index}
              className="bg-[#F6F5F0] border border-[#E5E3DC] rounded-lg p-7 flex gap-5"
            >
              <span className="font-mono text-xs text-[#7B5CF0] mt-1 flex-shrink-0 w-6">
                {step.index}
              </span>
              <div>
                <h3 className="font-display text-xl text-[#1A1916] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B6860] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer note */}
        <p className="mt-8 font-mono text-xs text-[#6B6860] leading-relaxed max-w-2xl">
          MoveToEU is a guidance tool, not a law firm. All information is
          for educational purposes only. We always recommend verifying requirements
          with official government sources and consulting a licensed immigration
          attorney for complex cases.
        </p>
      </div>
    </section>
  );
}
