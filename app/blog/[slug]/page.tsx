import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";

type BlogPost = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
};

const POSTS: Record<string, BlogPost> = {
  "portugal-d8-visa-guide": {
    title: "Portugal D8 Visa: Complete 2026 Guide for Remote Workers",
    description:
      "Everything you need to know about the Portugal D8 Digital Nomad Visa — income requirements, documents, processing times, and step-by-step application for 2026.",
    date: "January 2026",
    readTime: "12 min read",
    content: <PortugalD8Article />,
  },
  "spain-digital-nomad-visa": {
    title: "Spain Digital Nomad Visa: Everything You Need to Know",
    description:
      "Complete guide to Spain's Digital Nomad Visa for 2026 — income requirements, application steps, and what to expect.",
    date: "January 2026",
    readTime: "10 min read",
    content: <ComingSoonArticle country="Spain" visa="Digital Nomad Visa" flag="🇪🇸" />,
  },
  "eu-visa-rejection-reasons": {
    title: "Top 5 Reasons EU Visa Applications Get Rejected (And How to Avoid Them)",
    description:
      "The most common reasons digital nomad visa applications fail — and how to avoid every one of them.",
    date: "February 2026",
    readTime: "8 min read",
    content: <ComingSoonArticle country="All EU Countries" visa="Digital Nomad Visas" flag="🌍" />,
  },
};

function ComingSoonArticle({ country, visa, flag }: { country: string; visa: string; flag: string }) {
  return (
    <div className="text-center py-16">
      <span className="text-6xl mb-4 block">{flag}</span>
      <h2 className="text-2xl font-bold text-slate-900 mb-3">Full guide coming soon</h2>
      <p className="text-slate-600 mb-6">
        We&apos;re writing a comprehensive {country} {visa} guide. In the meantime, check your eligibility.
      </p>
      <Link href="/quiz" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FFF] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
        Check My Eligibility — Free
      </Link>
    </div>
  );
}

function PortugalD8Article() {
  return (
    <article className="prose prose-slate max-w-none">
      <p className="lead text-xl text-slate-600 leading-relaxed mb-8">
        Portugal&apos;s D8 Digital Nomad Visa is one of Europe&apos;s most popular residency options for remote workers. 
        With access to a stable economy, excellent healthcare, and a path to EU citizenship, it&apos;s easy to understand why 
        thousands of digital nomads apply each year. This guide covers everything you need to know for 2026.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8 not-prose">
        <h3 className="font-bold text-blue-900 text-lg mb-3">Quick Facts — Portugal D8 Visa 2026</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            ["Minimum income (solo)", "€3,680/month"],
            ["Minimum income (with partner)", "€5,520/month"],
            ["Minimum income (partner + 1 child)", "€6,624/month"],
            ["Minimum savings (solo)", "€11,040"],
            ["Health insurance minimum", "€30,000 coverage"],
            ["Processing time", "6–9 months total"],
            ["Visa validity", "1-year temporary → 2-year permit"],
            ["Path to citizenship", "Yes, after 5 years"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between text-sm">
              <span className="text-blue-800 font-medium">{label}</span>
              <span className="text-blue-900 font-bold">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <h2>What is the Portugal D8 Digital Nomad Visa?</h2>
      <p>
        The Portugal D8 visa is a temporary stay visa designed for non-EU nationals who earn their income remotely — 
        whether as employees of foreign companies or as freelancers and independent contractors. Introduced in 2022 and 
        updated since, it allows holders to live in Portugal while working for employers or clients outside Portugal.
      </p>
      <p>
        Unlike traditional work visas, the D8 doesn&apos;t require a Portuguese job offer. Your income must come from sources 
        outside Portugal (or primarily from non-Portuguese clients if you&apos;re freelancing — typically, no more than 20–30% 
        of income from Portuguese sources is advisable, though this isn&apos;t a hard legal threshold).
      </p>

      <h2>Who Qualifies for the Portugal D8 Visa?</h2>
      <p>To be eligible for the Portugal D8 visa in 2026, you must:</p>
      <ul>
        <li>Be a non-EU/EEA/Swiss national</li>
        <li>Work remotely for a company or clients outside Portugal</li>
        <li>Meet the minimum monthly income threshold (€3,680 for solo applicants)</li>
        <li>Have a clean criminal record</li>
        <li>Hold valid health insurance with at least €30,000 coverage</li>
        <li>Provide proof of accommodation in Portugal</li>
      </ul>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 not-prose my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">⚠️</span>
          <div>
            <p className="font-bold text-amber-900 mb-1">Business owners: check your visa type</p>
            <p className="text-amber-800 text-sm">
              If you own and actively run a company, the D8 may not be the right visa. The D2 Entrepreneur Visa or 
              other startup/investment routes may apply. Consult an immigration attorney to confirm the correct pathway.
            </p>
          </div>
        </div>
      </div>

      <h2>Income Requirements in Detail</h2>
      <p>
        The income threshold for the Portugal D8 visa is set at four times Portugal&apos;s national minimum wage. 
        For 2026, this works out to:
      </p>
      <ul>
        <li><strong>Solo applicant:</strong> €3,680/month minimum</li>
        <li><strong>Applicant + partner:</strong> €5,520/month (50% increase per adult)</li>
        <li><strong>Applicant + partner + 1 child:</strong> €6,624/month (additional 20% per minor)</li>
      </ul>
      <p>
        This income can come from employment contracts, freelance agreements, business distributions, or a combination 
        — as long as it&apos;s consistent and verifiable through bank statements. You&apos;ll need to demonstrate this 
        income over the last 3–6 months.
      </p>
      <p>
        In addition to monthly income, consulates increasingly want to see proof of savings equivalent to at least 
        three months of the income threshold: roughly <strong>€11,040 for solo applicants</strong>. Some consulates 
        ask for more.
      </p>

      <h2>Required Documents (Complete Checklist)</h2>
      <p>Prepare all of the following documents before booking your consulate appointment:</p>
      <ol>
        <li><strong>Valid passport</strong> — Must have at least 6 months of validity beyond your intended stay. Some consulates require 12 months.</li>
        <li><strong>Completed national visa application form</strong> — Available from your local Portuguese consulate or VFS Global portal.</li>
        <li><strong>2 passport-size photos</strong> — 4.5 × 3.5 cm, white background, taken within the last 6 months.</li>
        <li><strong>Employment contract or freelance agreements</strong> — Must show your employer or clients are based outside Portugal. Include all active contracts.</li>
        <li><strong>Bank statements (3–6 months)</strong> — Showing consistent income meeting the threshold. Both a personal bank account and business account may be requested if you&apos;re self-employed.</li>
        <li><strong>Proof of savings</strong> — A separate savings account or fixed deposit showing at least €11,040 for solo applicants.</li>
        <li><strong>Proof of accommodation</strong> — A signed 12-month lease agreement or property deed in Portugal. Airbnb and short-term rentals are <em>not accepted</em>. You can sign a lease before arriving.</li>
        <li><strong>Health insurance</strong> — Policy must cover Portugal with a minimum of €30,000 coverage. Many applicants use SafetyWing, Cigna, or Foyer Global.</li>
        <li><strong>Criminal record certificate</strong> — From your home country AND any country you&apos;ve lived in for 12+ months in the last 5 years. Must be <strong>apostilled</strong> and officially translated into Portuguese.</li>
        <li><strong>Portuguese NIF (tax number)</strong> — You can obtain this remotely through a tax representative or in-person at a Portuguese tax office. Required before opening a Portuguese bank account.</li>
        <li><strong>Cover letter / motivation letter</strong> — A personal statement explaining your remote work situation, why you want to live in Portugal, and how you meet the requirements.</li>
        <li><strong>Tax residence certificate</strong> — Confirmation from your current country&apos;s tax authority showing where you&apos;re currently tax resident.</li>
      </ol>

      <div className="bg-red-50 border border-red-200 rounded-xl p-5 not-prose my-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">🚨</span>
          <div>
            <p className="font-bold text-red-900 mb-1">The apostille trap — most common rejection reason</p>
            <p className="text-red-800 text-sm">
              Foreign documents (especially criminal records and birth certificates) must be apostilled by the 
              issuing country AND translated into Portuguese by a certified translator. This takes 2–6 weeks and 
              is the single most common reason applications are rejected or returned incomplete.
            </p>
          </div>
        </div>
      </div>

      <h2>Step-by-Step Application Process</h2>
      <p>The Portugal D8 application happens in two stages: the consulate visa, then the residence permit after arrival.</p>
      
      <h3>Stage 1: Consulate Visa Application</h3>
      <ol>
        <li><strong>Get your Portuguese NIF remotely</strong> (1–2 weeks) — Required for almost every next step. Use a fiscal representative service.</li>
        <li><strong>Gather and apostille all documents</strong> (2–4 weeks) — Start with criminal records, which take the longest.</li>
        <li><strong>Sign a lease in Portugal</strong> — Book a short-term rental first to find a place, then sign a 12-month lease with a landlord. Many Portuguese landlords accept foreign signatories remotely.</li>
        <li><strong>Get health insurance</strong> — Purchase a policy that explicitly covers Portugal.</li>
        <li><strong>Book consulate appointment</strong> — Do this at your nearest Portuguese consulate. Wait times vary from 2 weeks to 3+ months depending on location.</li>
        <li><strong>Attend appointment</strong> — Bring originals and certified copies of all documents. The appointment itself is 20–40 minutes.</li>
        <li><strong>Wait for visa decision</strong> (30–60 days) — If approved, you receive a temporary visa (usually valid for 4 months) to travel to Portugal.</li>
      </ol>

      <h3>Stage 2: Residence Permit at AIMA</h3>
      <ol>
        <li><strong>Enter Portugal</strong> on your entry visa within the validity period.</li>
        <li><strong>Open a Portuguese bank account</strong> — Now required for the AIMA stage. Major options: ActivoBank, Banco BPI, or fintech alternatives like Revolut Business (limited use).</li>
        <li><strong>Book AIMA appointment</strong> — AIMA (formerly SEF) is the immigration authority that issues residence permits. Book early — appointments book out 3–6 months in advance.</li>
        <li><strong>Attend AIMA appointment</strong> — Bring all original documents plus biometrics (fingerprints and photo).</li>
        <li><strong>Receive residence permit</strong> — Initially a 2-year permit, renewable. After 5 years total, you can apply for permanent residency or citizenship.</li>
      </ol>

      <h2>Costs to Budget For</h2>
      <p>Total costs for a Portugal D8 application (solo applicant, estimated):</p>
      <ul>
        <li>Consulate visa fee: ~€90–€120</li>
        <li>Criminal record apostille + translation: €100–€300</li>
        <li>NIF registration (via fiscal rep): €50–€150</li>
        <li>Health insurance (annual): €500–€2,000 depending on coverage</li>
        <li>Portuguese lease deposit (typically 2 months rent): varies</li>
        <li>AIMA residence permit fee: ~€320</li>
        <li>Total estimated: <strong>€1,500–€3,000</strong> excluding accommodation</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li><strong>Not apostilling documents:</strong> All foreign documents need apostilles. Start this process immediately — it takes weeks.</li>
        <li><strong>Relying on Airbnb for accommodation proof:</strong> Must be a formal 12-month lease or property deed.</li>
        <li><strong>Waiting to get the NIF:</strong> You need the NIF before you can open a bank account. Get it at the start, not the end.</li>
        <li><strong>Understating income:</strong> Your bank statements must clearly show the required income threshold. If you have variable income, average across 6 months.</li>
        <li><strong>Booking AIMA appointments late:</strong> AIMA appointments fill up fast. Book your appointment on arrival or before.</li>
        <li><strong>Incomplete translations:</strong> All translations must be certified — use official certified translators, not AI tools.</li>
      </ul>

      <h2>Tax Considerations</h2>
      <p>
        Living in Portugal means you may become tax resident after 183 days in a calendar year. Portugal offers 
        the <strong>Non-Habitual Resident (NHR) 2.0 tax regime</strong> (renamed and updated in 2024), which offers 
        a flat 20% tax rate on Portuguese-sourced income for eligible new residents.
      </p>
      <p>
        Tax planning for an international move is complex — we strongly recommend consulting a Portuguese tax advisor 
        before you arrive, not after.
      </p>

      <h2>Frequently Asked Questions</h2>
      
      <h3>Can I bring my family on the D8 visa?</h3>
      <p>Yes. Family reunification is available after you receive your residence permit. Your income threshold increases proportionally (€5,520 for a couple, €6,624 for couple + one child).</p>

      <h3>Does Portugal allow dual citizenship?</h3>
      <p>Yes. After 5 years of legal residence, you can apply for Portuguese (and therefore EU) citizenship. Portugal generally allows dual citizenship.</p>

      <h3>Can I work for Portuguese clients on a D8 visa?</h3>
      <p>The D8 is intended for workers whose income comes from outside Portugal. While there&apos;s no absolute legal bar on some Portuguese income, having the majority of income from Portuguese sources risks reclassification. Consult an attorney for your specific situation.</p>

      <h3>What&apos;s the difference between the D8 visa and the D7 visa?</h3>
      <p>The D7 is for passive income (rental income, investments, pensions). The D8 is specifically for remote workers who actively earn income. If you have passive income, the D7 may be more appropriate.</p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 not-prose mt-10">
        <h3 className="font-bold text-blue-900 text-lg mb-2">Ready to check your D8 eligibility?</h3>
        <p className="text-blue-800 text-sm mb-4">
          Answer 6 quick questions and get your personalized checklist, eligibility score, and red flag warnings.
        </p>
        <Link href="/quiz" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B4FFF] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm">
          Check My D8 Eligibility — Free →
        </Link>
      </div>
    </article>
  );
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = POSTS[params.slug];
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = POSTS[params.slug];
  if (!post) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-slate-500 mb-6 flex items-center gap-2">
            <Link href="/blog" className="hover:text-slate-700 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-700 truncate">{post.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span>Updated for 2026</span>
            </div>
          </header>

          {/* Content */}
          <div className="mb-10">
            {post.content}
          </div>

          <Disclaimer />

          <div className="mt-8 pt-6 border-t border-slate-200">
            <Link href="/blog" className="text-sm text-[#1B4FFF] hover:underline">
              ← Back to all guides
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}
