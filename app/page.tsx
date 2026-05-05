import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import VisaTypes from "@/components/VisaTypes";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <HowItWorks />
      <VisaTypes />
      <Pricing />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
}
