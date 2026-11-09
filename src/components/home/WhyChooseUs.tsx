import { Shield, Search, UserCheck, Headphones, Zap, Lock } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Rigorous Screening Standards",
    desc: "Every candidate is background-checked, reference-verified, and skill-assessed before being presented to you.",
  },
  {
    icon: Search,
    title: "Precision Talent Matching",
    desc: "We go beyond CVs — understanding your environment, culture, and expectations to find candidates who truly fit.",
  },
  {
    icon: Lock,
    title: "Absolute Discretion",
    desc: "For sensitive and VIP placements, we operate under strict confidentiality. Your privacy and security are paramount.",
  },
  {
    icon: Zap,
    title: "Fast, Reliable Turnaround",
    desc: "Urgent staffing need? We respond within 24 hours and move efficiently without compromising on quality.",
  },
  {
    icon: Headphones,
    title: "Ongoing Placement Support",
    desc: "Our support doesn't end at placement. We stay engaged to ensure lasting satisfaction on both sides.",
  },
  {
    icon: UserCheck,
    title: "Premium & Standard Placements",
    desc: "From everyday business staffing to elite VIP household roles — we deliver excellence at every level.",
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
              What Sets Us Apart
            </h2>
            <p className="section-subtitle mb-8">
              We don&apos;t just fill vacancies. We build relationships — placing the right
              person in the right role with the precision, care, and discretion that every
              client deserves.
            </p>
            <div className="bg-brand-navy rounded-2xl p-8 text-white">
              <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">
                Our Promise to Every Client
              </p>
              <p className="text-white/80 leading-relaxed text-sm">
                Every candidate we present has been personally reviewed by our team. We never
                forward unvetted applications. Whether you need a corporate receptionist or a
                private chef for a VIP residence — our standard is the same: excellence,
                reliability, and complete professionalism from day one.
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
