import type { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, Heart, Shield, Users, Award, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | HC Workforce Solutions LLC",
  description:
    "Learn about HC Workforce Solutions LLC — our mission, vision, values, and our commitment to connecting businesses with qualified workforce across Armenia.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We operate with complete transparency and honesty in every interaction with employers and workers alike.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We hold ourselves to the highest standards in candidate screening, client service, and placement quality.",
  },
  {
    icon: Heart,
    title: "Human-Centered",
    desc: "Every worker is a person with goals and potential. Every employer is a partner we respect and support.",
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "We build long-term relationships, not one-time transactions, with both our clients and our candidates.",
  },
];

const employerCommitments = [
  "Understand your business needs before presenting any candidates",
  "Provide only pre-screened, reference-checked candidates",
  "Respond promptly to staffing requests — typically within 24 hours",
  "Maintain open communication throughout the placement process",
  "Follow up after placement to ensure satisfaction",
  "Offer flexible staffing models suited to your business",
];

const workerCommitments = [
  "Treat every candidate with dignity and respect",
  "Provide honest guidance about opportunities and expectations",
  "Match workers to roles that align with their skills and goals",
  "Support candidates through the application and interview process",
  "Advocate for fair compensation and working conditions",
  "Maintain confidentiality of personal information",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-gradient pt-36 pb-24">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">
            About HC Workforce Solutions
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Armenia&apos;s Trusted Workforce Partner
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We exist to connect qualified people with great businesses — and to build the kind of
            workforce relationships that help both employers and workers succeed.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Our Story</p>
              <div className="gold-divider mb-6" />
              <h2 className="section-title mb-6">Built on a Simple Belief</h2>
              <p className="text-brand-slate leading-relaxed mb-4">
                HC Workforce Solutions LLC was founded in Yerevan with one clear purpose: to bridge
                the gap between businesses that need reliable workers and individuals seeking
                meaningful employment.
              </p>
              <p className="text-brand-slate leading-relaxed mb-4">
                We recognized that too many businesses in Armenia struggled to find qualified,
                dependable staff — and too many skilled workers struggled to connect with the right
                opportunities. We built HC Workforce Solutions to change that.
              </p>
              <p className="text-brand-slate leading-relaxed mb-8">
                From hospitality and healthcare to retail, logistics, and beyond, we have grown to
                serve every major sector across Armenia. Our team brings deep knowledge of the
                local workforce landscape combined with professional staffing standards that
                match international best practices.
              </p>
              <div className="bg-brand-light-gray rounded-2xl p-6 border-gold-accent pl-8">
                <p className="text-brand-navy font-semibold text-base italic">
                  &ldquo;Connecting People. Supporting Families. Empowering Businesses.&rdquo;
                </p>
                <p className="text-brand-slate text-sm mt-2">— HC Workforce Solutions LLC</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "8+", label: "Staffing Categories", sub: "From corporate to household" },
                { num: "9+", label: "Industries Served", sub: "Across Armenia's economy" },
                { num: "100%", label: "Candidate Vetting", sub: "Every placement screened" },
                { num: "24h", label: "Response Time", sub: "For employer inquiries" },
              ].map(({ num, label, sub }) => (
                <div key={label} className="bg-brand-navy rounded-2xl p-6 text-center">
                  <p className="text-brand-gold text-3xl font-bold font-heading">{num}</p>
                  <p className="text-white font-semibold text-sm mt-2">{label}</p>
                  <p className="text-white/50 text-xs mt-1">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-brand-light-gray">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card border border-gray-100">
              <div className="w-12 h-12 bg-brand-gold/15 rounded-xl flex items-center justify-center mb-6">
                <Target size={24} className="text-brand-gold" />
              </div>
              <p className="section-label mb-3">Our Mission</p>
              <h3 className="text-xl font-bold text-brand-navy mb-4">
                Delivering Workforce Solutions That Drive Business Success
              </h3>
              <p className="text-brand-slate leading-relaxed">
                To provide businesses, organizations, and households across Armenia with qualified,
                reliable, and professionally screened personnel — while creating meaningful
                employment opportunities for workers across every sector.
              </p>
            </div>
            <div className="card border border-gray-100">
              <div className="w-12 h-12 bg-brand-gold/15 rounded-xl flex items-center justify-center mb-6">
                <Eye size={24} className="text-brand-gold" />
              </div>
              <p className="section-label mb-3">Our Vision</p>
              <h3 className="text-xl font-bold text-brand-navy mb-4">
                Armenia&apos;s Premier Workforce Solutions Partner
              </h3>
              <p className="text-brand-slate leading-relaxed">
                To be recognized as the most trusted, professional, and effective staffing and
                workforce solutions company in Armenia — where every employer finds the right
                people, and every worker finds the right opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="section-label mb-3">What We Stand For</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="section-title mb-4">Our Core Values</h2>
            <p className="section-subtitle">
              These values guide every staffing decision, every client interaction, and every
              candidate conversation we have.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card text-center border border-gray-100">
                <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon size={26} className="text-brand-gold" />
                </div>
                <h3 className="text-brand-navy font-bold text-base mb-3">{title}</h3>
                <p className="text-brand-slate text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="section-padding bg-brand-light-gray">
        <div className="container-max">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="section-label mb-3">Our Commitments</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="section-title mb-4">What You Can Expect From Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Employer Commitment */}
            <div className="bg-brand-navy rounded-2xl p-8">
              <h3 className="text-brand-gold font-bold text-lg mb-6">To Our Employer Partners</h3>
              <ul className="space-y-4">
                {employerCommitments.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Worker Commitment */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-card">
              <h3 className="text-brand-navy font-bold text-lg mb-6">To Our Candidates & Workers</h3>
              <ul className="space-y-4">
                {workerCommitments.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-brand-slate text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-navy">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Whether you&apos;re a business looking for staff or a worker looking for opportunity,
            we&apos;re here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request Staff <ArrowRight size={16} />
            </Link>
            <Link href="/for-job-seekers" className="btn-outline-white">
              Apply for Jobs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
