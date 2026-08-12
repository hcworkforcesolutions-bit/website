import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import CompanyOverview from "@/components/home/CompanyOverview";
import ServiceCategories from "@/components/home/ServiceCategories";
import IndustryHighlights from "@/components/home/IndustryHighlights";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorksPreview from "@/components/home/HowItWorksPreview";
import Testimonials from "@/components/home/Testimonials";
import EmployerCTA from "@/components/home/EmployerCTA";
import WorkerCTA from "@/components/home/WorkerCTA";
import StatsSection from "@/components/home/StatsSection";

export const metadata: Metadata = {
  title: "HC Workforce Solutions LLC | Staffing Agency Armenia & Europe",
  description:
    "Armenia-based staffing and workforce solutions partner now serving European markets. Qualified staffing for hospitality, healthcare, retail, corporate, VIP household, and more. Request staff or apply today.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CompanyOverview />
      <StatsSection />
      <ServiceCategories />
      <IndustryHighlights />
      <WhyChooseUs />
      <Testimonials />
      <HowItWorksPreview />
      <EmployerCTA />
      <WorkerCTA />
    </>
  );
}
