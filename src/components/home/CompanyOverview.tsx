import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const strengths = [
  "Thorough candidate screening and vetting process",
  "9 staffing categories including VIP & Premium services",
  "Serving Armenia and European markets",
  "Flexible staffing: temporary, contract, and permanent",
  "Dedicated employer and worker support teams",
  "Fast turnaround on staffing requests",
];

export default function CompanyOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left – Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-brand-light-gray rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <p className="section-label mb-3">Who We Are</p>
                <h3 className="text-2xl font-bold text-brand-navy mb-4 font-heading">
                  Your International Staffing Partner
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed mb-6">
                  HC Workforce Solutions LLC was founded on a clear belief: the right people,
                  in the right role, change everything for a business — and that standard applies
                  everywhere we operate.
                </p>
                <div className="space-y-3">
                  {strengths.map((s) => (
                    <div key={s} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
                      <span className="text-brand-slate text-sm">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-navy rounded-2xl p-5 shadow-card-hover">
              <p className="text-brand-gold text-3xl font-bold">9+</p>
              <p className="text-white/80 text-xs mt-1">Service Categories</p>
            </div>
          </div>

          {/* Right – Content */}
          <div className="order-1 lg:order-2">
            <p className="section-label mb-3">HC Workforce Solutions LLC</p>
            <div className="gold-divider mb-6" />
            <h2 className="section-title mb-6">
              The Right People. Every Role. Every Time.
            </h2>
            <p className="section-subtitle mb-6">
              We are an international workforce and staffing solutions company — sourcing,
              screening, and placing exceptional talent for businesses, organizations, institutions,
              and households across all industries and markets.
            </p>
            <p className="text-brand-slate leading-relaxed mb-8">
              From luxury hotels and corporate offices to healthcare facilities, industrial
              operations, and VIP private residences — we deliver professionals who are the right
              fit from day one. Our approach combines rigorous vetting with a genuinely human
              touch, because great placements are about more than matching skills to a job
              description.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary">
                Learn About Us
              </Link>
              <Link href="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
