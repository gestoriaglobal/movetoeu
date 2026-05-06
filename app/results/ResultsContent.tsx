"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { checkEligibility, VISA_NAMES, VISA_FLAGS } from "@/lib/eligibility";
import Disclaimer from "@/components/Disclaimer";
import ChatWidget from "@/components/ChatWidget";

const CHECKLISTS: Record<string, string[]> = {
  portugal: [
    "Valid passport (6+ months validity beyond intended stay)",
    "Completed national visa application form",
    "2 passport-size photos (4.5 × 3.5 cm)",
    "Employment contract or freelance agreements (non-Portuguese employer)",
    "Bank statements — last 3–6 months showing €3,680+/month",
    "Proof of savings (€11,040 minimum for solo applicant)",
    "Proof of accommodation in Portugal (12-month lease or deed)",
    "Health insurance policy (€30,000 minimum coverage)",
    "Criminal record certificate (apostilled + translated to Portuguese)",
    "Portuguese NIF (tax identification number)",
    "Cover letter / motivation letter",
    "Tax residence certificate from home country",
  ],
  spain: [
    "Valid passport (minimum 1 year validity remaining)",
    "Completed visa application form (Visado de Nómada Digital)",
    "2 recent passport-size photos",
    "Employment contract or service agreements (non-Spanish company)",
    "Bank statements — last 3 months showing €2,646+/month",
    "Health insurance with full coverage in Spain",
    "Criminal record certificate (apostilled)",
    "Proof of accommodation in Spain",
    "Social Security registration or equivalent documentation",
    "Cover letter explaining remote work situation",
    "Proof of company registration of employer (if employed)",
  ],
  greece: [
    "Valid passport (6+ months validity remaining)",
    "Completed application form",
    "2 passport-size photos",
    "Proof of remote employment (contract or agreements with non-Greek employer)",
    "Bank statements showing €3,500+/month for last 3 months",
    "Health insurance policy",
    "Criminal record certificate (apostilled)",
    "Proof of accommodation in Greece",
    "Cover letter explaining remote work situation",
  ],
};

const TIMELINES: Record<string, { step: string; duration: string }[]> = {
  portugal: [
    { step: "Gather and apostille all required documents", duration: "2–4 weeks" },
    { step: "Obtain Portuguese NIF remotely (via tax rep)", duration: "1–2 weeks" },
    { step: "Open Portuguese bank account (optional at this stage)", duration: "1–2 weeks" },
    { step: "Book consulate appointment in your home country", duration: "4–8 weeks wait" },
    { step: "Attend visa appointment + submit application", duration: "1 day" },
    { step: "Wait for visa decision from consulate", duration: "30–60 days" },
    { step: "Travel to Portugal on entry visa", duration: "—" },
    { step: "Apply for 2-year residence permit at AIMA", duration: "Variable (book early)" },
  ],
  spain: [
    { step: "Gather and apostille all required documents", duration: "2–4 weeks" },
    { step: "Book appointment at Spanish consulate in your country", duration: "2–4 weeks wait" },
    { step: "Submit visa application and documents", duration: "1 day" },
    { step: "Wait for visa decision", duration: "30–90 days" },
    { step: "Enter Spain on issued visa", duration: "—" },
    { step: "Register with local authorities (empadronamiento)", duration: "First week" },
    { step: "Register with Social Security (if applicable)", duration: "First month" },
  ],
  greece: [
    { step: "Gather and apostille all required documents", duration: "2–4 weeks" },
    { step: "Book appointment at Greek consulate", duration: "1–2 weeks wait" },
    { step: "Submit visa application", duration: "1 day" },
    { step: "Wait for approval decision", duration: "~10 business days" },
    { step: "Receive visa and travel to Greece", duration: "—" },
    { step: "Register address and obtain residency permit", duration: "First month" },
  ],
};

export default function ResultsContent() {
  const params = useSearchParams();

  const answers = {
    nationality: params.get("nationality") || "Unknown",
    destination: params.get("destination") || "portugal",
    purpose: params.get("purpose") || "remote-employee",
    income_range: params.get("income_range") || "under-1000",
    family_status: params.get("family_status") || "solo",
  };
  const name = params.get("name") || "";

  const { result, threshold, income, redFlags } = checkEligibility(answers);

  const visaName = VISA_NAMES[answers.destination] || "EU Digital Nomad Visa";
  const flag = VISA_FLAGS[answers.destination] || "🇪🇺";
  const checklist = CHECKLISTS[answers.destination] || [];
  const timeline = TIMELINES[answers.destination] || [];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <p className="text-sm text-slate-500 mb-1">
          {name ? `Hi ${name} — here are` : "Here are"} your personalized results
        </p>
        <h1 className="text-3xl font-bold text-slate-900">
          {flag} {visaName}
        </h1>
        <p className="text-slate-500 mt-1 text-sm">
          Based on: {answers.nationality} national · {answers.purpose.replace(/-/g, " ")} · {answers.family_status.replace(/-/g, " ")} · {answers.income_range.replace(/-/g, "–")} / month
        </p>
      </div>

      {/* ELIGIBILITY BANNER */}
      {result === "eligible" && (
        <div className="bg-green-50 border-2 border-green-400 rounded-xl p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h2 className="font-bold text-green-900 text-lg">You appear eligible for the {visaName}.</h2>
            <p className="text-green-800 text-sm mt-1">
              Your income (€{income.toLocaleString()}/mo) meets the minimum threshold of €{threshold.toLocaleString()}/mo. Here&apos;s what you need to apply.
            </p>
          </div>
        </div>
      )}

      {result === "borderline" && (
        <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
          </div>
          <div>
            <h2 className="font-bold text-amber-900 text-lg">You may be eligible, but have risk factors.</h2>
            <p className="text-amber-800 text-sm mt-1">
              Your income (€{income.toLocaleString()}/mo) is close to the minimum threshold of €{threshold.toLocaleString()}/mo. Review the red flags below carefully before applying.
            </p>
          </div>
        </div>
      )}

      {result === "ineligible" && (
        <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div>
            <h2 className="font-bold text-red-900 text-lg">Based on your profile, you likely don&apos;t meet the income threshold.</h2>
            <p className="text-red-800 text-sm mt-1">
              The {visaName} requires €{threshold.toLocaleString()}/mo minimum. Your stated range suggests €{income.toLocaleString()}/mo.
              See alternatives below or consider increasing your income before applying.
            </p>
          </div>
        </div>
      )}

      {/* DOCUMENT CHECKLIST */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#1B4FFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          Document Checklist — {flag} {answers.destination.charAt(0).toUpperCase() + answers.destination.slice(1)}
        </h2>
        <p className="text-xs text-slate-500 mb-4">Check off items as you gather them. All foreign documents must be apostilled and officially translated.</p>
        <ul className="space-y-3">
          {checklist.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <input
                type="checkbox"
                id={`doc-${i}`}
                className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#1B4FFF] focus:ring-[#1B4FFF] flex-shrink-0"
              />
              <label htmlFor={`doc-${i}`} className="text-sm text-slate-700 cursor-pointer">
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* TIMELINE */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#1B4FFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Your Application Timeline
        </h2>
        <ol className="space-y-4">
          {timeline.map((t, i) => (
            <li key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1B4FFF] font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-blue-100 mt-1 min-h-[20px]" />
                )}
              </div>
              <div className="pb-4">
                <p className="font-medium text-slate-900 text-sm">{t.step}</p>
                {t.duration !== "—" && (
                  <p className="text-xs text-slate-500 mt-0.5">⏱ {t.duration}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* RED FLAGS */}
      {redFlags.length > 0 && (
        <div className="space-y-3">
          <h2 className="font-bold text-slate-900 text-lg flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            Watch Out For These
          </h2>
          {redFlags.map((flag, i) => (
            <div key={i} className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
              <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-amber-900">{flag}</p>
            </div>
          ))}
        </div>
      )}

      {/* FREEMIUM GATE */}
      <div className="relative rounded-xl border-2 border-dashed border-slate-300 overflow-hidden">
        {/* Blurred preview */}
        <div className="p-6 blur-sm pointer-events-none select-none">
          <div className="space-y-2">
            <div className="h-4 bg-slate-200 rounded w-3/4" />
            <div className="h-4 bg-slate-200 rounded w-1/2" />
            <div className="h-4 bg-slate-200 rounded w-2/3" />
          </div>
        </div>

        {/* Lock overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-lg mb-2">
            Unlock your full guided application →
          </h3>
          <p className="text-slate-600 text-sm mb-4 max-w-sm">
            Get the step-by-step form walkthrough, AI chatbot assistant, embassy appointment tips, and document upload tracker.
          </p>
          <ul className="text-sm text-slate-600 mb-5 space-y-1 text-left">
            {["Step-by-step form walkthrough", "AI chatbot assistant", "Embassy appointment tips", "Document upload tracker"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FFF] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            Upgrade to Guided — $49/mo
          </Link>
        </div>
      </div>

      <Disclaimer />

      <div className="text-center pb-4">
        <Link href="/quiz" className="text-sm text-[#1B4FFF] hover:underline">
          ← Retake quiz with different answers
        </Link>
      </div>

      {/* Chat widget only on results page */}
      <ChatWidget />
    </div>
  );
}
