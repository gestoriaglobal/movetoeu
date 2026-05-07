import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      {/* Eyebrow label */}
      <div className="mb-8 flex items-center gap-2">
        <span className="font-mono text-xs text-[#7B5CF0] tracking-widest uppercase">
          AI Visa Guidance
        </span>
        <span className="w-8 h-px bg-[#7B5CF0] opacity-50" />
        <span className="font-mono text-xs text-[#6B6860]">
          Portugal · Spain · Greece
        </span>
      </div>

      {/* Headline */}
      <div className="max-w-3xl">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-[#1A1916] mb-6">
          Your EU visa,{" "}
          <span className="italic">step by step.</span>
        </h1>
        <p className="text-lg text-[#6B6860] leading-relaxed max-w-xl mb-10">
          Stop guessing what documents you need. MoveTo.Life gives you a
          personalized eligibility check, complete document checklist, and a
          guided application flow — in minutes, not weeks.
        </p>
      </div>

      {/* CTA group */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Link
          href="/app/check"
          className="inline-flex items-center gap-2 bg-[#7B5CF0] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#6d4fe0] transition-colors"
        >
          Check my eligibility — free
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-80">
            <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <span className="font-mono text-xs text-[#6B6860]">
          No account required · Takes 2 minutes
        </span>
      </div>

      {/* Trust bar */}
      <div className="mt-16 pt-8 border-t border-[#E5E3DC]">
        <p className="font-mono text-xs text-[#6B6860] mb-5 uppercase tracking-widest">
          Trusted by nomads from
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {["🇺🇸 United States", "🇬🇧 United Kingdom", "🇧🇷 Brazil", "🇸🇦 Saudi Arabia", "🇮🇳 India", "🇲🇽 Mexico"].map((country) => (
            <span key={country} className="text-sm text-[#6B6860]">
              {country}
            </span>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: "3", label: "EU visa types covered", suffix: "" },
          { value: "2", label: "Minutes to eligibility check", suffix: "min" },
          { value: "$2,000+", label: "Average lawyer fee saved", suffix: "" },
          { value: "100%", label: "Guidance only — no legal advice", suffix: "" },
        ].map((stat) => (
          <div key={stat.label} className="border border-[#E5E3DC] rounded-lg p-4 bg-[#F6F5F0]">
            <div className="font-display text-3xl text-[#1A1916] mb-1">
              {stat.value}
            </div>
            <div className="font-mono text-xs text-[#6B6860] leading-tight">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}