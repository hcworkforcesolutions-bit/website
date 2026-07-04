import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import CompanyOverview from "@/components/home/CompanyOverview";
import ServiceCategories from "@/components/home/ServiceCategories";
import IndustryHighlights from "@/components/home/IndustryHighlights";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorksPreview from "@/components/home/HowItWorksPreview";
import EmployerCTA from "@/components/home/EmployerCTA";
import WorkerCTA from "@/components/home/WorkerCTA";
import StatsSection from "@/components/home/StatsSection";

export const metadata: Metadata = {
  title: "HC Workforce Solutions LLC | Staffing & Recruitment Agency Armenia",
  description:
    "Armenia's trusted workforce solutions partner. We provide qualified staffing for hospitality, healthcare, retail, corporate, and industrial sectors. Request staff or apply today.",
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
      <HowItWorksPreview />
      <EmployerCTA />
      <WorkerCTA />
    </>
  );
}
