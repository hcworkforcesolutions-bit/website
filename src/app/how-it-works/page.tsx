import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  ClipboardList,
  Search,
  UserCheck,
  Users,
  Handshake,
  Headphones,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | HC Workforce Solutions LLC",
  description:
    "Discover the HC Workforce Solutions process — from initial consultation to successful placement. A professional, streamlined staffing process for employers in Armenia.",
};

const steps = [
  {
    icon: MessageSquare,
    num: "Step 01",
    title: "Initial Consultation",
    subtitle: "Understanding Your Needs",
    desc: "We begin with a detailed consultation to understand your business, the specific role you need to fill, your preferred candidate profile, and your timeline. This is where we listen — thoroughly.",
    details: [
      "Discuss your business and workforce requirements",
      "Define the role, responsibilities, and expectations",
      "Understand your company culture and team dynamics",
      "Agree on timeline, staffing model, and next steps",
    ],
    color: "bg-brand-gold/10",
  },
  {
    icon: ClipboardList,
    num: "Step 02",
    title: "Workforce Assessment",
    subtitle: "Defining the Ideal Profile",
    desc: "Based on the consultation, our team prepares a detailed candidate profile. We assess what skills, experience, personality traits, and qualities the ideal candidate should have for your specific situation.",
    details: [
      "Define specific skills and experience requirements",
      "Identify personality and work style requirements",
      "Confirm compensation expectations and terms",
      "Set clear assessment criteria for candidate screening",
    ],
    color: "bg-brand-blue/10",
  },
  {
    icon: Search,
    num: "Step 03",
    title: "Candidate Sourcing",
    subtitle: "Finding the Right Talent",
    desc: "We leverage our candidate network, industry contacts, and targeted outreach to identify individuals who match your requirements. We don't wait for applications — we proactively source.",
    details: [
      "Search our active candidate database",
      "Targeted outreach to passive candidates",
      "Industry-specific candidate networks",
      "Active recruitment across relevant channels",
    ],
    color: "bg-brand-gold/10",
  },
  {
    icon: UserCheck,
    num: "Step 04",
    title: "Screening & Shortlisting",
    subtitle: "Rigorous Candidate Vetting",
    desc: "Every candidate goes through our thorough vetting process before being presented to you. We verify backgrounds, check references, assess skills, and conduct structured interviews.",
    details: [
      "Background and documentation verification",
      "Reference checks with previous employers",
      "Skills and competency assessment",
      "Structured interview and suitability evaluation",
    ],
    color: "bg-brand-blue/10",
  },
  {
    icon: Users,
    num: "Step 05",
    title: "Client Interviews",
    subtitle: "You Meet Your Candidates",
    desc: "We present you with a curated shortlist of vetted candidates. You review their profiles, conduct interviews (which we can facilitate), and select your preferred candidate with full confidence.",
    details: [
      "Receive detailed candidate profiles and summaries",
      "Interview facilitation and scheduling support",
      "Candidate comparison and assessment support",
      "Full transparency throughout the selection process",
    ],
    color: "bg-brand-gold/10",
  },
  {
    icon: Handshake,
    num: "Step 06",
    title: "Placement",
    subtitle: "The Right Person in the Right Role",
    desc: "Once you select your candidate, we manage the placement process — coordinating all necessary documentation, terms, and the candidate's successful start with your organization.",
    details: [
      "Placement coordination and documentation support",
      "Clear communication with all parties",
      "Smooth handover and onboarding support",
      "Contract and engagement setup assistance",
    ],
    color: "bg-brand-blue/10",
  },
  {
    icon: Headphones,
    num: "Step 07",
    title: "Ongoing Support",
    subtitle: "We Stay With You",
    desc: "Our commitment doesn't end at placement. We follow up with both employer and employee in the days and weeks after placement to ensure everything is working well and address any issues promptly.",
    details: [
      "Regular post-placement check-ins",
      "Rapid response to any issues or concerns",
      "Replacement guarantee if placement is unsuccessful",
      "Available for future staffing needs",
    ],
    color: "bg-brand-gold/10",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-gradient pt-36 pb-24">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Our Process
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            How HC Workforce Solutions Works
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A professional, transparent, and supported process from first contact to successful
            long-term placement.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-12">
            {steps.map(({ icon: Icon, num, title, subtitle, desc, details }, i) => (
              <div key={num} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center">
                      <Icon size={26} className="text-brand-gold" />
                    </div>
                    <div>
                      <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">{num}</span>
                      <p className="text-brand-slate text-sm">{subtitle}</p>
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4">{title}</h2>
                  <p className="text-brand-slate leading-relaxed mb-6">{desc}</p>
                  <ul className="space-y-2">
                    {details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <CheckCircle2 size={15} className="text-brand-gold mt-0.5 flex-shrink-0" />
                        <span className="text-brand-slate text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""} bg-brand-light-gray rounded-3xl p-10 flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-brand-navy rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <Icon size={36} className="text-brand-gold" />
                    </div>
                    <p className="text-brand-gold font-bold text-4xl font-heading">{`0${i + 1}`}</p>
                    <p className="text-brand-navy font-bold text-xl mt-2">{title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Timeline */}
      <section className="section-padding bg-brand-navy">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">The Full Journey at a Glance</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {steps.map(({ num, title }) => (
              <div key={num} className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-3">
                <span className="text-brand-gold font-bold text-sm">{num.replace("Step ", "")}</span>
                <span className="text-white text-sm font-medium">{title}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary">
              Get Started Today <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
