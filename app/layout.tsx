import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MoveToEU — AI-Powered EU Visa Guidance",
    template: "%s | MoveToEU",
  },
  description:
    "Get your EU digital nomad visa right the first time. Personalized eligibility checks, document checklists, and step-by-step guidance for Portugal D8, Spain, and Greece — in minutes, not weeks.",
  keywords: [
    "EU digital nomad visa",
    "Portugal digital nomad visa",
    "Spain digital nomad visa",
    "Greece digital nomad visa",
    "EU visa checklist",
    "EU visa guidance",
    "digital nomad Portugal",
    "visa requirements 2026",
  ],
  openGraph: {
    title: "MoveToEU — AI-Powered EU Visa Guidance",
    description:
      "Personalized EU visa guidance for digital nomads. Know exactly what you need, in minutes.",
    url: "https://movetoeu.co",
    siteName: "MoveToEU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoveToEU — AI-Powered EU Visa Guidance",
    description:
      "Personalized EU visa guidance for digital nomads. Know exactly what you need, in minutes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FCFBF7] text-[#1A1916] antialiased">
        {children}
      </body>
    </html>
  );
}
