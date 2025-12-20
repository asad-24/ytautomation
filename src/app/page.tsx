import { LiquidHeader } from "@/components/liquid-header";
import { Hero } from "@/components/hero";
import { TrustedByStrip } from "@/components/trusted-by-strip";
import { ServicesGrid } from "@/components/services-grid";
import { WorkGallery } from "@/components/work-gallery";
import { CaseStudies } from "@/components/case-studies";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { StickyCTA } from "@/components/sticky-cta";
import { LiquidBackgroundEngine } from "@/components/liquid-background-engine";
import { LiquidSection } from "@/components/liquid-section";
import { YoutubeBubbles } from "@/components/youtube-bubbles";
import FAQAccordion from "@/components/faq-accordion";

export default function Home() {
  return (
    <>
      <LiquidBackgroundEngine />
      <YoutubeBubbles />
      <LiquidHeader />
      <main className="overflow-hidden relative">
        <LiquidSection theme="hero">
          <Hero />
          <TrustedByStrip />
        </LiquidSection>
        
        <LiquidSection theme="services" id="services">
          <ServicesGrid />
        </LiquidSection>
        
        <LiquidSection theme="hero" id="work">
          <WorkGallery />
        </LiquidSection>
        
        <LiquidSection theme="caseStudies" id="case-studies">
          <CaseStudies />
        </LiquidSection>
        
        <LiquidSection theme="testimonials" id="process">
          <HowItWorks />
        </LiquidSection>
        
        <LiquidSection theme="pricing" id="pricing">
          <Pricing />
        </LiquidSection>
        
        <LiquidSection theme="testimonials">
          <Testimonials />
        </LiquidSection>
        
        <LiquidSection theme="pricing" id="faq">
          <FAQAccordion />
        </LiquidSection>
        
        <LiquidSection theme="footer">
          <Footer />
        </LiquidSection>
      </main>
      <StickyCTA />
    </>
  );
}
