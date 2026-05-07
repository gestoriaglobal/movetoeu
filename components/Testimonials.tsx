const testimonials = [
  {
    quote:
      "I spent three weeks trying to figure out the Portugal D8 requirements from government sites. MoveTo.life gave me a complete checklist in five minutes.",
    name: "James O.",
    origin: "US → Portugal",
    type: "Software engineer",
  },
  {
    quote:
      "The red-flag feature caught a problem with my income documentation before I submitted. Saved me a rejection.",
    name: "Sara M.",
    origin: "UK → Spain",
    type: "Freelance designer",
  },
  {
    quote:
      "As an Arabic speaker applying from Saudi Arabia, I was worried about being underserved. The platform is very clear and thorough.",
    name: "Khalid A.",
    origin: "Saudi Arabia → Greece",
    type: "Remote marketing manager",
  },
  {
    quote:
      "Cheaper than a 30-minute immigration lawyer consultation. Much more actionable.",
    name: "Ana C.",
    origin: "Brazil → Portugal",
    type: "UX researcher",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 border-t border-[#E5E3DC] bg-[#F6F5F0]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-4 flex items-start gap-4">
          <span className="font-mono text-xs text-[#6B6860] mt-1">WHAT PEOPLE SAY</span>
          <div className="flex-1 h-px bg-[#E5E3DC] mt-2.5" />
        </div>

        <div className="mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-[#1A1916]">
            Built for people doing it themselves.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#FCFBF7] border border-[#E5E3DC] rounded-lg p-7"
            >
              <p className="text-[#1A1916] leading-relaxed mb-6 font-display text-lg italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-[#1A1916]">{t.name}</div>
                  <div className="font-mono text-xs text-[#6B6860]">{t.type}</div>
                </div>
                <span className="font-mono text-xs text-[#7B5CF0] bg-[#F0EBFB] px-2.5 py-1 rounded">
                  {t.origin}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
