import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portugal Digital Nomad Visa (D8) — Requirements 2026",
  description:
    "Complete guide to the Portugal D8 Digital Nomad Visa. Eligibility requirements, income threshold, required documents, and step-by-step application process for 2026.",
  openGraph: {
    title: "Portugal Digital Nomad Visa (D8) — Requirements 2026 | MoveTo.life",
    description:
      "Everything you need to apply for the Portugal D8 Digital Nomad Visa in 2026 — requirements, documents, timelines.",
  },
};

const requirements = [
  { label: "Minimum monthly income", value: "€3,480 (4× Portuguese min wage)" },
  { label: "Proof of remote work", value: "Employment contract or freelance contracts" },
  { label: "Health insurance", value: "Comprehensive EU-valid coverage" },
  { label: "Accommodation", value: "Rental contract or property deed" },
  { label: "Criminal record check", value: "Apostilled from country of origin" },
  { label: "Passport validity", value: "Minimum 3 months beyond intended stay" },
];

const timeline = [
  { step: "Gather documents", duration: "2–4 weeks", desc: "Criminal record, income proof, health insurance" },
  { step: "SEF appointment", duration: "1–6 weeks", desc: "Appointment availability varies by location" },
  { step: "Processing", duration: "2–4 months", desc: "Immigration authority review" },
  { step: "Visa issuance", duration: "Ongoing", desc: "Initial 2-year residence permit" },
];

export default function PortugalVisaPage() {
  return (
    <>
      <Nav />
      <main className="pt-28 pb-20 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 font-mono text-xs text-[#6B6860]">
            <Link href="/" className="hover:text-[#1A1916]">Home</Link>
            <span>/</span>
            <span>Visa Guides</span>
            <span>/</span>
            <span className="text-[#1A1916]">Portugal D8</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">
            {/* Main content */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="text-3xl">🇵🇹</span>
                <span className="font-mono text-xs text-[#7B5CF0] uppercase tracking-widest">Portugal</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl text-[#1A1916] mb-4 leading-tight">
                Portugal D8 Digital Nomad Visa
              </h1>
              <p className="text-lg text-[#6B6860] mb-10 max-w-2xl leading-relaxed">
                The Portugal D8 visa is the most accessible EU digital nomad visa
                for non-EU nationals. It offers a path to 2-year residence with a
                route to permanent residency — and it accepts both remote employees
                and freelancers.
              </p>

              {/* Key facts */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { label: "Initial permit", value: "2 years" },
                  { label: "Min income", value: "€3,480/mo" },
                  { label: "Path to PR", value: "5 years" },
                  { label: "Tax regime", value: "NHR available" },
                ].map((f) => (
                  <div key={f.label} className="bg-[#F6F5F0] border border-[#E5E3DC] rounded-lg p-4">
                    <div className="font-mono text-[10px] text-[#6B6860] mb-1 uppercase">{f.label}</div>
                    <div className="font-display text-2xl text-[#1A1916]">{f.value}</div>
                  </div>
                ))}
              </div>

              {/* Requirements */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-[#1A1916] mb-6">
                  Eligibility requirements
                </h2>
                <div className="border border-[#E5E3DC] rounded-lg overflow-hidden">
                  {requirements.map((req, i) => (
                    <div
                      key={req.label}
                      className={`flex items-start gap-4 p-4 ${i < requirements.length - 1 ? "border-b border-[#E5E3DC]" : ""}`}
                    >
                      <svg className="text-[#7B5CF0] mt-0.5 flex-shrink-0" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M2 6.5l3.5 3.5L11 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-[#1A1916]">{req.label}</span>
                        <span className="text-sm text-[#6B6860] ml-2">— {req.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-[#1A1916] mb-6">
                  Application timeline
                </h2>
                <div className="flex flex-col gap-4">
                  {timeline.map((t, i) => (
                    <div key={t.step} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-7 h-7 rounded-full bg-[#F0EBFB] border border-[#7B5CF0] flex items-center justify-center">
                          <span className="font-mono text-[10px] text-[#7B5CF0]">{i + 1}</span>
                        </div>
                        {i < timeline.length - 1 && (
                          <div className="w-px flex-1 bg-[#E5E3DC] my-1" />
                        )}
                      </div>
                      <div className="pb-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-[#1A1916]">{t.step}</span>
                          <span className="font-mono text-[10px] text-[#7B5CF0] bg-[#F0EBFB] px-2 py-0.5 rounded">{t.duration}</span>
                        </div>
                        <p className="text-sm text-[#6B6860]">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-[#F6F5F0] border border-[#E5E3DC] rounded-lg p-5">
                <p className="font-mono text-xs text-[#6B6860] leading-relaxed">
                  <span className="text-[#1A1916] font-medium">Disclaimer:</span> This guide is for
                  informational purposes only and does not constitute legal advice. Requirements
                  change frequently. Always verify with the official Portuguese Immigration
                  and Borders Service (SEF/AIMA) or consult a licensed immigration attorney.
                </p>
              </div>
            </div>

            {/* Sidebar CTA */}
            <aside className="lg:sticky lg:top-24 flex flex-col gap-4">
              <div className="bg-[#1A1916] rounded-xl p-7 text-[#FCFBF7]">
                <div className="font-mono text-xs text-[#7B5CF0] mb-3 uppercase tracking-widest">
                  Free checklist
                </div>
                <h3 className="font-display text-2xl mb-3 leading-snug">
                  Get your Portugal D8 document checklist
                </h3>
                <p className="text-sm text-[#6B6860] mb-6">
                  Enter your profile. We generate a personalized list of every
                  document you need — including exactly which versions and
                  apostille requirements apply to your nationality.
                </p>
                <Link
                  href="/app/check?country=portugal"
                  className="block text-center text-sm font-medium bg-[#7B5CF0] text-white py-3 px-4 rounded-lg hover:bg-[#6d4fe0] transition-colors"
                >
                  Check eligibility free →
                </Link>
                <p className="mt-3 font-mono text-xs text-[#6B6860] text-center">
                  No account required
                </p>
              </div>

              <div className="border border-[#E5E3DC] rounded-xl p-5 bg-[#F6F5F0]">
                <div className="font-mono text-xs text-[#6B6860] mb-3">ALSO AVAILABLE</div>
                <div className="flex flex-col gap-2">
                  <Link href="/visas/spain" className="flex items-center gap-2 text-sm text-[#6B6860] hover:text-[#1A1916]">
                    🇪🇸 Spain Digital Nomad Visa →
                  </Link>
                  <Link href="/visas/greece" className="flex items-center gap-2 text-sm text-[#6B6860] hover:text-[#1A1916]">
                    🇬🇷 Greece Digital Nomad Visa →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
