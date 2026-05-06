import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-20 border-t border-[#E5E3DC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#1A1916] rounded-xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="font-mono text-xs text-[#7B5CF0] mb-4 uppercase tracking-widest">
              Free to start
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#FCFBF7] mb-4 leading-tight">
              Know where you stand before you pack anything.
            </h2>
            <p className="text-[#6B6860] text-sm leading-relaxed">
              Two minutes. Your nationality, destination, and employment type.
              We do the rest — no account required.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/app/check"
              className="inline-flex items-center gap-2 bg-[#7B5CF0] text-white text-sm font-medium px-7 py-3.5 rounded-lg hover:bg-[#6d4fe0] transition-colors whitespace-nowrap"
            >
              Check my eligibility free
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7h9M7.5 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <p className="mt-3 font-mono text-xs text-[#6B6860] text-center">
              No credit card · Free forever
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
