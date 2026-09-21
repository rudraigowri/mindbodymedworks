import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Paths } from "@/components/Paths";
import { QuoteBanner } from "@/components/QuoteBanner";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Paths />
        <About />
        <QuoteBanner />
        <Testimonials />
        <FinalCta />
       
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
