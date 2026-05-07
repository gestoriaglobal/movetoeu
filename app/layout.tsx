import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MoveTo.life — AI-Powered EU Visa Guidance",
    template: "%s | MoveTo.life",
  },
  description:
    "Get personalized EU visa guidance for Portugal, Spain, and Greece digital nomad visas. AI-powered, country-specific checklists and timelines for remote workers.",
  keywords: [
    "EU digital nomad visa",
    "Portugal D8 visa",
    "Spain digital nomad visa",
    "Greece digital nomad visa",
    "remote work visa Europe",
  ],
  openGraph: {
    title: "MoveTo.life — AI-Powered EU Visa Guidance",
    description:
      "AI-powered visa guidance for digital nomads moving to Europe. Free eligibility check.",
    type: "website",
    url: "https://moveto.life",
  },
  metadataBase: new URL("https://moveto.life"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
