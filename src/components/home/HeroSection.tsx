import Link from "next/link";
import { ArrowRight, Users, Building2, Briefcase } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gold accent circles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-gold/5 rounded-full blur-2xl" />

      <div className="container-max px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">
        <div className="max-w-4xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-brand-gold rounded-full" />
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">
              Workforce Solutions · Yerevan, Armenia
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Workforce Solutions That{" "}
            <span className="text-gold-gradient">Keep Your Business</span>{" "}
            Moving
          </h1>

          {/* Subheadline */}
          <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl">
            Providing qualified staffing support for hospitality, healthcare, retail, facilities
            management, administration, operations, and household services across Armenia.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Request Staff <ArrowRight size={18} />
            </Link>
            <Link href="/for-employers" className="btn-outline-white text-base px-8 py-4">
              Partner With Us
            </Link>
            <Link href="/for-job-seekers" className="btn-outline-white text-base px-8 py-4">
              Apply for Jobs
            </Link>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: Building2,
                title: "For Businesses",
                desc: "Reliable, screened staff for every sector",
              },
              {
                icon: Users,
                title: "For Workers",
                desc: "Meaningful opportunities across Armenia",
              },
              {
                icon: Briefcase,
                title: "For Households",
                desc: "Trusted domestic and care staffing",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-center gap-4 bg-white/8 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4"
              >
                <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{title}</p>
                  <p className="text-white/60 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full fill-white">
          <path d="M0,80L1440,0L1440,80L0,80Z" />
        </svg>
      </div>
    </section>
  );
}
