"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";

const TOTAL_STEPS = 6;

const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia",
  "Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Belarus","Belgium","Belize",
  "Benin","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria",
  "Burkina Faso","Cambodia","Cameroon","Canada","Chile","China","Colombia","Costa Rica",
  "Croatia","Cuba","Cyprus","Czech Republic","Denmark","Dominican Republic","Ecuador",
  "Egypt","El Salvador","Estonia","Ethiopia","Finland","France","Georgia","Germany",
  "Ghana","Greece","Guatemala","Honduras","Hungary","Iceland","India","Indonesia",
  "Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan",
  "Kenya","Kosovo","Kuwait","Kyrgyzstan","Latvia","Lebanon","Libya","Liechtenstein",
  "Lithuania","Luxembourg","Malaysia","Malta","Mexico","Moldova","Monaco","Mongolia",
  "Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands",
  "New Zealand","Nicaragua","Nigeria","North Macedonia","Norway","Oman","Pakistan",
  "Panama","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania",
  "Russia","Rwanda","Saudi Arabia","Senegal","Serbia","Singapore","Slovakia","Slovenia",
  "South Africa","South Korea","Spain","Sri Lanka","Sudan","Sweden","Switzerland",
  "Syria","Taiwan","Tajikistan","Tanzania","Thailand","Tunisia","Turkey","Turkmenistan",
  "Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay",
  "Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
];

type QuizData = {
  nationality: string;
  destination: string;
  purpose: string;
  income_range: string;
  family_status: string;
  email: string;
  name: string;
  consent: boolean;
};

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<QuizData>({
    nationality: "",
    destination: "",
    purpose: "",
    income_range: "",
    family_status: "",
    email: "",
    name: "",
    consent: false,
  });

  const progress = ((step - 1) / TOTAL_STEPS) * 100;

  function updateField<K extends keyof QuizData>(key: K, value: QuizData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function canAdvance() {
    switch (step) {
      case 1: return data.nationality.trim().length > 0;
      case 2: return data.destination.length > 0;
      case 3: return data.purpose.length > 0;
      case 4: return data.income_range.length > 0;
      case 5: return data.family_status.length > 0;
      case 6: return data.email.trim().length > 3 && data.consent;
      default: return false;
    }
  }

  async function handleSubmit() {
    setLoading(true);
    try {
      // Save lead to Supabase
      await supabase.from("leads").insert({
        email: data.email,
        name: data.name,
        nationality: data.nationality,
        destination: data.destination,
        purpose: data.purpose,
        income_range: data.income_range,
        family_status: data.family_status,
      });
    } catch (_e) {
      // Non-blocking — proceed even if Supabase insert fails
    }

    // Pass quiz data via URL params to results page
    const params = new URLSearchParams({
      nationality: data.nationality,
      destination: data.destination,
      purpose: data.purpose,
      income_range: data.income_range,
      family_status: data.family_status,
      name: data.name,
    });
    router.push(`/results?${params.toString()}`);
  }

  const RadioCard = ({
    value,
    selected,
    onClick,
    children,
  }: {
    value: string;
    selected: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
        selected
          ? "border-[#1B4FFF] bg-blue-50"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
            selected ? "border-[#1B4FFF]" : "border-slate-300"
          }`}
        >
          {selected && <div className="w-2.5 h-2.5 rounded-full bg-[#1B4FFF]" />}
        </div>
        {children}
      </div>
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Nav />
      <main className="flex-1 py-10 px-4 sm:px-6">
        <div className="max-w-lg mx-auto">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
              <span>Step {step} of {TOTAL_STEPS}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1B4FFF] rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
            {/* STEP 1: Nationality */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">What is your nationality?</h2>
                <p className="text-slate-500 text-sm mb-6">This affects your visa requirements and processing times.</p>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="e.g. American, British, Brazilian..."
                    value={data.nationality}
                    onChange={(e) => updateField("nationality", e.target.value)}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1B4FFF] transition-colors"
                  />
                  <div className="relative">
                    <select
                      value={data.nationality}
                      onChange={(e) => updateField("nationality", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#1B4FFF] transition-colors appearance-none bg-white"
                    >
                      <option value="">Or select from list...</option>
                      {COUNTRIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Destination */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Where do you want to move?</h2>
                <p className="text-slate-500 text-sm mb-6">Select your target country.</p>
                <div className="space-y-3">
                  {[
                    { value: "portugal", flag: "🇵🇹", title: "Portugal", sub: "D8 Digital Nomad Visa" },
                    { value: "spain", flag: "🇪🇸", title: "Spain", sub: "Digital Nomad Visa" },
                    { value: "greece", flag: "🇬🇷", title: "Greece", sub: "Digital Nomad Visa" },
                  ].map((opt) => (
                    <RadioCard
                      key={opt.value}
                      value={opt.value}
                      selected={data.destination === opt.value}
                      onClick={() => updateField("destination", opt.value)}
                    >
                      <span className="text-3xl">{opt.flag}</span>
                      <div>
                        <p className="font-semibold text-slate-900">{opt.title}</p>
                        <p className="text-sm text-slate-500">{opt.sub}</p>
                      </div>
                    </RadioCard>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: Purpose */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">How do you earn your income?</h2>
                <p className="text-slate-500 text-sm mb-6">This determines which visa type applies to you.</p>
                <div className="space-y-3">
                  {[
                    { value: "remote-employee", icon: "💻", title: "Remote Employee", sub: "Employed by a company abroad" },
                    { value: "freelancer", icon: "🧑‍💼", title: "Freelancer / Contractor", sub: "Independent work for multiple clients" },
                    { value: "business-owner", icon: "🏢", title: "Business Owner", sub: "I own and run my own business" },
                  ].map((opt) => (
                    <RadioCard
                      key={opt.value}
                      value={opt.value}
                      selected={data.purpose === opt.value}
                      onClick={() => updateField("purpose", opt.value)}
                    >
                      <span className="text-2xl">{opt.icon}</span>
                      <div>
                        <p className="font-semibold text-slate-900">{opt.title}</p>
                        <p className="text-sm text-slate-500">{opt.sub}</p>
                      </div>
                    </RadioCard>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4: Income */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">What is your monthly income?</h2>
                <p className="text-slate-500 text-sm mb-6">
                  This is the most important eligibility factor. Use your net monthly income after tax.
                </p>
                <div className="space-y-3">
                  {[
                    { value: "under-1000", label: "Under €1,000 / month" },
                    { value: "1000-2000", label: "€1,000 – €2,000 / month" },
                    { value: "2000-3000", label: "€2,000 – €3,000 / month" },
                    { value: "3000-3680", label: "€3,000 – €3,680 / month" },
                    { value: "3680-5000", label: "€3,680 – €5,000 / month" },
                    { value: "5000-plus", label: "€5,000+ / month" },
                  ].map((opt) => (
                    <RadioCard
                      key={opt.value}
                      value={opt.value}
                      selected={data.income_range === opt.value}
                      onClick={() => updateField("income_range", opt.value)}
                    >
                      <span className="font-medium text-slate-900">{opt.label}</span>
                    </RadioCard>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 5: Family */}
            {step === 5 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Who are you moving with?</h2>
                <p className="text-slate-500 text-sm mb-6">
                  Income thresholds increase for family applications.
                </p>
                <div className="space-y-3">
                  {[
                    { value: "solo", icon: "👤", title: "Just me", sub: "Solo applicant" },
                    { value: "partner", icon: "👫", title: "Me + partner", sub: "Bringing a spouse or partner" },
                    { value: "partner-children", icon: "👨‍👩‍👦", title: "Me + partner + children", sub: "Full family relocation" },
                  ].map((opt) => (
                    <RadioCard
                      key={opt.value}
                      value={opt.value}
                      selected={data.family_status === opt.value}
                      onClick={() => updateField("family_status", opt.value)}
                    >
                      <span className="text-2xl">{opt.icon}</span>
                      <div>
                        <p className="font-semibold text-slate-900">{opt.title}</p>
                        <p className="text-sm text-slate-500">{opt.sub}</p>
                      </div>
                    </RadioCard>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 6: Email capture */}
            {step === 6 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Where should we send your checklist?</h2>
                <p className="text-slate-500 text-sm mb-6">
                  Get your personalized results plus a copy in your inbox.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">First name</label>
                    <input
                      type="text"
                      placeholder="Your first name"
                      value={data.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1B4FFF] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={data.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1B4FFF] transition-colors"
                      required
                    />
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={data.consent}
                      onChange={(e) => updateField("consent", e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#1B4FFF] focus:ring-[#1B4FFF]"
                    />
                    <span className="text-sm text-slate-600">
                      I agree to receive visa guidance emails from MoveTo.life. You can unsubscribe at any time.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                disabled={step === 1}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                ← Back
              </button>

              {step < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canAdvance()}
                  className="px-6 py-3 bg-[#1B4FFF] text-white font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Continue →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!canAdvance() || loading}
                  className="px-6 py-3 bg-[#1B4FFF] text-white font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "See My Results →"
                  )}
                </button>
              )}
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-4">
            Takes about 2 minutes · Free · No credit card required
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
