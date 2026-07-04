import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Consultation", desc: "We discuss your business needs and workforce requirements." },
  { num: "02", title: "Assessment", desc: "We evaluate your staffing gaps and ideal candidate profile." },
  { num: "03", title: "Sourcing", desc: "We identify and reach qualified candidates from our network." },
  { num: "04", title: "Screening", desc: "Candidates are vetted, verified, and shortlisted." },
  { num: "05", title: "Placement", desc: "Selected candidates are placed and onboarding is supported." },
  { num: "06", title: "Follow-Up", desc: "We stay engaged to ensure a smooth, successful placement." },
];

export default function HowItWorksPreview() {
  return (
    <section className="section-padding bg-brand-navy">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Our Process
          </p>
          <div className="w-16 h-1 bg-brand-gold rounded-full mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            How We Deliver the Right Talent
          </h2>
          <p className="text-white/60 text-lg">
            A streamlined, professional process from first contact to successful placement.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map(({ num, title, desc }, i) => (
            <div key={num} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+24px)] right-0 h-px bg-brand-gold/20" />
              )}
              <div className="w-14 h-14 bg-brand-gold/15 border border-brand-gold/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-gold font-bold text-sm">{num}</span>
              </div>
              <h4 className="text-white font-semibold text-sm mb-2">{title}</h4>
              <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/how-it-works" className="btn-primary">
            See Full Process <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
