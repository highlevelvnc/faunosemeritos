import LoadingScreen from "@/components/shared/LoadingScreen";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import PortfolioSection from "@/components/home/PortfolioSection";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Hero />
      <Services />
      <PortfolioSection />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
