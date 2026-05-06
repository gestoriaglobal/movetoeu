import Link from "next/link";

const visas = [
  {
    country: "Portugal",
    flag: "🇵🇹",
    name: "D8 Digital Nomad Visa",
    income: "€3,480/mo",
    stay: "Up to 2 years",
    renew: "Renewable → residency",
    highlight: "Most popular for US/UK nomads",
    href: "/visas/portugal",
    tags: ["Freelancers", "Remote employees", "Entrepreneurs"],
  },
  {
    country: "Spain",
    flag: "🇪🇸",
    name: "Digital Nomad Visa",
    income: "€2,646/mo",
    stay: "Up to 3 years",
    renew: "Renewable",
    highlight: "Best for LATAM + Spanish speakers",
    href: "/visas/spain",
    tags: ["Remote employees", "Freelancers"],
  },
  {
    country: "Greece",
    flag: "🇬🇷",
    name: "Digital Nomad Visa",
    income: "€3,500/mo",
    stay: "12 months",
    renew: "Renewable",
    highlight: "Fastest processing, low cost of living",
    href: "/visas/greece",
    tags: ["Remote employees", "Low cost of living"],
  },
];

export default function VisaTypes() {
  return (
    <section className="py-20 border-t border-[#E5E3DC] bg-[#F6F5F0]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-4 flex items-start gap-4">
          <span className="font-mono text-xs text-[#6B6860] mt-1">VISA TYPES COVERED</span>
          <div className="flex-1 h-px bg-[#E5E3DC] mt-2.5" />
        </div>

        <div className="mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-[#1A1916] mb-3">
            Three countries. One platform.
          </h2>
          <p className="text-[#6B6860] max-w-lg">
            We focus on the three EU digital nomad visas with the highest
            applicant success rates and clearest requirements for non-EU nationals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {visas.map((visa) => (
            <Link
              key={visa.country}
              href={visa.href}
              className="group bg-[#FCFBF7] border border-[#E5E3DC] rounded-lg p-6 flex flex-col hover:border-[#7B5CF0] hover:shadow-sm transition-all"
            >
              {/* Country header */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl">{visa.flag}</span>
                <div>
                  <div className="font-mono text-xs text-[#6B6860]">{visa.country}</div>
                  <div className="text-sm font-medium text-[#1A1916]">{visa.name}</div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-[#F6F5F0] rounded p-3">
                  <div className="font-mono text-[10px] text-[#6B6860] mb-1 uppercase">Min income</div>
                  <div className="font-display text-lg text-[#1A1916]">{visa.income}</div>
                </div>
                <div className="bg-[#F6F5F0] rounded p-3">
                  <div className="font-mono text-[10px] text-[#6B6860] mb-1 uppercase">Initial stay</div>
                  <div className="font-display text-lg text-[#1A1916]">{visa.stay}</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {visa.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-[#7B5CF0] bg-[#F0EBFB] px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Highlight */}
              <p className="text-xs text-[#6B6860] mt-auto">
                {visa.highlight}
              </p>

              <div className="mt-4 text-sm text-[#7B5CF0] group-hover:underline">
                View full guide →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
