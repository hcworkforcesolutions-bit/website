import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const strengths = [
  "Thorough candidate screening and vetting process",
  "Specialists across 8 staffing categories",
  "Serving all major industries in Armenia",
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
                  Armenia&apos;s Workforce Partner for Every Sector
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed mb-6">
                  HC Workforce Solutions LLC was founded on a simple belief: the right people, in
                  the right role, change everything for a business.
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
              <p className="text-brand-gold text-3xl font-bold">8+</p>
              <p className="text-white/80 text-xs mt-1">Service Categories</p>
            </div>
          </div>

          {/* Right – Content */}
          <div className="order-1 lg:order-2">
            <p className="section-label mb-3">HC Workforce Solutions LLC</p>
            <div className="gold-divider mb-6" />
            <h2 className="section-title mb-6">
              Helping Businesses Find the Right People
            </h2>
            <p className="section-subtitle mb-6">
              We are a workforce and staffing solutions company providing qualified personnel to
              businesses, organizations, institutions, and households across Armenia.
            </p>
            <p className="text-brand-slate leading-relaxed mb-8">
              From hotels and hospitals to factories, retail stores, and family homes — we source,
              screen, and place reliable workers so your operations never skip a beat. Our approach
              combines professional rigor with a human touch, ensuring every placement is the right
              fit for both employer and employee.
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
