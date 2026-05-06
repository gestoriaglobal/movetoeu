import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EU Visa Guides & Resources",
  description: "Expert guides on EU digital nomad visas for Portugal, Spain, and Greece. Updated for 2026.",
};

const posts = [
  {
    slug: "portugal-d8-visa-guide",
    flag: "🇵🇹",
    title: "Portugal D8 Visa: Complete 2026 Guide for Remote Workers",
    excerpt:
      "Everything you need to know about the Portugal Digital Nomad (D8) visa — income requirements, document checklist, processing times, and step-by-step application process for 2026.",
    date: "January 2026",
    readTime: "12 min read",
    tags: ["Portugal", "D8 Visa", "Digital Nomad"],
  },
  {
    slug: "spain-digital-nomad-visa",
    flag: "🇪🇸",
    title: "Spain Digital Nomad Visa: Everything You Need to Know",
    excerpt:
      "The complete guide to Spain's Digital Nomad Visa (Visado de Nómada Digital) — who qualifies, income thresholds, how to apply, and what to expect after arriving in Spain.",
    date: "January 2026",
    readTime: "10 min read",
    tags: ["Spain", "Digital Nomad", "Visa Guide"],
  },
  {
    slug: "eu-visa-rejection-reasons",
    flag: "🌍",
    title: "Top 5 Reasons EU Visa Applications Get Rejected (And How to Avoid Them)",
    excerpt:
      "40% of digital nomad visa applications are rejected for preventable reasons. Here are the most common mistakes — and exactly how to avoid them before you apply.",
    date: "February 2026",
    readTime: "8 min read",
    tags: ["Visa Tips", "Common Mistakes", "All Countries"],
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">
              EU Visa Guides & Resources
            </h1>
            <p className="text-lg text-slate-600">
              In-depth guides for digital nomads and remote workers moving to Europe.
            </p>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0 mt-1">{post.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-[#1B4FFF] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-[#1B4FFF] flex-shrink-0 mt-1 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
            <h2 className="font-bold text-2xl text-slate-900 mb-3">
              Ready to check your eligibility?
            </h2>
            <p className="text-slate-600 mb-5">
              Answer 6 quick questions and get your personalized visa checklist.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FFF] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              Check My Eligibility — Free
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
