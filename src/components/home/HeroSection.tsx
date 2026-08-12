import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Building2, Briefcase, CheckCircle2 } from "lucide-react";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <div>
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-brand-gold rounded-full" />
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">
                International Workforce Solutions · Yerevan, Armenia
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Workforce Solutions That{" "}
              <span className="text-gold-gradient">Keep Your Business</span>{" "}
              Moving
            </h1>

            {/* Subheadline */}
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl">
              We connect businesses with exceptional talent — placing the right people in the right
              roles across every industry, from corporate offices and luxury hospitality to
              healthcare facilities, retail operations, and VIP household services.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              {[
                "Pre-screened & reference-checked staff",
                "24-hour response guarantee",
                "8 staffing categories",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand-gold flex-shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Request Staff <ArrowRight size={18} />
              </Link>
              <Link href="/for-job-seekers" className="btn-outline-white text-base px-8 py-4">
                Apply for Jobs
              </Link>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
                  className="flex items-center gap-3 bg-white/8 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3"
                >
                  <div className="w-9 h-9 bg-brand-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xs">{title}</p>
                    <p className="text-white/60 text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[580px]">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=85"
                alt="Professional executive team — HC Workforce Solutions"
                fill
                className="object-cover"
                priority
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />

              {/* Floating stat card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { num: "9+", label: "Staffing Categories" },
                      { num: "24h", label: "Response Time" },
                      { num: "100%", label: "Candidate Vetting" },
                    ].map(({ num, label }) => (
                      <div key={label}>
                        <p className="text-brand-gold text-2xl font-bold font-heading">{num}</p>
                        <p className="text-brand-navy text-xs font-medium mt-1">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-brand-gold/30 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 border-2 border-brand-gold/20 rounded-full" />
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
