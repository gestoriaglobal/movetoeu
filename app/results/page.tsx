import { Suspense } from "react";
import { checkEligibility, VISA_NAMES, VISA_FLAGS } from "@/lib/eligibility";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";
import ResultsContent from "./ResultsContent";

export default function ResultsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Nav />
      <main className="flex-1 py-10 px-4 sm:px-6">
        <Suspense fallback={
          <div className="max-w-3xl mx-auto text-center py-20">
            <div className="animate-spin w-8 h-8 border-4 border-[#1B4FFF] border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-slate-600">Analyzing your profile...</p>
          </div>
        }>
          <ResultsContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
