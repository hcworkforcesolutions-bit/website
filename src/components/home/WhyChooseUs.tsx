import { Shield, Search, UserCheck, Headphones, Zap, Award } from "lucide-react";

const reasons = [
  {
    icon: Search,
    title: "Thorough Candidate Sourcing",
    desc: "We tap into a wide network of qualified candidates and proactively source talent matched to your specific needs.",
  },
  {
    icon: Shield,
    title: "Rigorous Screening Standards",
    desc: "Every candidate is background-checked, reference-verified, and skill-assessed before being presented to you.",
  },
  {
    icon: UserCheck,
    title: "Right-Fit Matching",
    desc: "We take time to understand your business culture, requirements, and team dynamics to find the perfect match.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Urgent staffing need? We respond quickly and efficiently without compromising on quality or due diligence.",
  },
  {
    icon: Headphones,
    title: "Ongoing Placement Support",
    desc: "Our support doesn't end at placement. We stay engaged to ensure both employer and employee satisfaction.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    desc: "With experience across 9+ sectors, we understand the unique workforce challenges each industry faces.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-brand-light-gray">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="section-label mb-3">Why HC Workforce Solutions</p>
            <div className="gold-divider mb-6" />
            <h2 className="section-title mb-6">
              What Sets Us Apart as Your Staffing Partner
            </h2>
            <p className="section-subtitle mb-8">
              We don&apos;t just fill vacancies. We build workforce partnerships that help
              businesses operate consistently, confidently, and professionally.
            </p>
            <div className="bg-brand-navy rounded-2xl p-8 text-white">
              <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">
                Our Promise to You
              </p>
              <p className="text-white/80 leading-relaxed text-sm">
                Every candidate we present has been personally reviewed by our team. We do not
                forward unvetted applications. Our commitment is to save you time, reduce hiring
                risk, and deliver staff you can rely on from day one.
              </p>
            </div>
          </div>

          {/* Right – Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card border border-gray-100">
                <div className="w-10 h-10 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-gold" />
                </div>
                <h3 className="text-brand-navy font-bold text-sm mb-2">{title}</h3>
                <p className="text-brand-slate text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
