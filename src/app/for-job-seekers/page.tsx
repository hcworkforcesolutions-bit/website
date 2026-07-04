"use client";

import Link from "next/link";
import {
  Users,
  FileText,
  UserCheck,
  Briefcase,
  Heart,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const whyApply = [
  {
    icon: Briefcase,
    title: "Diverse Opportunities",
    desc: "Access jobs across 8+ categories and 9+ industries throughout Armenia.",
  },
  {
    icon: UserCheck,
    title: "Professional Representation",
    desc: "We advocate for you with employers and ensure you are matched to the right role.",
  },
  {
    icon: Heart,
    title: "Personal Support",
    desc: "We guide you through every stage — application, interview, and placement.",
  },
  {
    icon: Star,
    title: "Fair Opportunities",
    desc: "We connect you with reputable employers who value professionalism and reliability.",
  },
];

const applicationSteps = [
  {
    num: "01",
    title: "Submit Your Application",
    desc: "Complete our candidate registration form with your personal details, work history, and preferred job category.",
  },
  {
    num: "02",
    title: "Initial Review",
    desc: "Our team reviews your application and contacts you within 48 hours to discuss your profile and goals.",
  },
  {
    num: "03",
    title: "Candidate Interview",
    desc: "We conduct a brief interview to understand your experience, skills, availability, and employment preferences.",
  },
  {
    num: "04",
    title: "Registration & Screening",
    desc: "We complete your candidate profile including references, documentation, and skills assessment.",
  },
  {
    num: "05",
    title: "Job Matching",
    desc: "We match you to suitable opportunities with employers looking for candidates with your profile.",
  },
  {
    num: "06",
    title: "Placement & Support",
    desc: "Once placed, we support your transition and remain available if you need assistance.",
  },
];

const jobCategories = [
  { title: "Hospitality & Hotels", roles: "Housekeeping, Front Desk, Food & Beverage, Guest Services" },
  { title: "Healthcare Support", roles: "Caregivers, Patient Support, Healthcare Assistants" },
  { title: "Retail & Customer Service", roles: "Cashiers, Sales Associates, Merchandisers" },
  { title: "Corporate & Administrative", roles: "Receptionists, Admin Assistants, Office Staff" },
  { title: "Industrial & Warehouse", roles: "Factory Workers, Warehouse Staff, Packing" },
  { title: "Housekeeping & Cleaning", roles: "Commercial Cleaners, Janitorial Staff, Building Housekeepers" },
  { title: "Household Services", roles: "Housekeepers, Nannies, Domestic Helpers, Elderly Care" },
  { title: "Logistics & Operations", roles: "Logistics Support, Packing, Operations Workers" },
];

export default function ForJobSeekersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-gradient pt-36 pb-24">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                <Users size={20} className="text-brand-gold" />
              </div>
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">
                For Job Seekers
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Your Next Opportunity in Armenia Starts Here
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              HC Workforce Solutions connects skilled, motivated workers with reputable employers
              across Armenia. Whatever your background and experience, we work to find the right
              opportunity for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#apply" className="btn-primary">
                Apply Now <ArrowRight size={16} />
              </Link>
              <Link href="#categories" className="btn-outline-white">
                Available Roles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Apply With HC */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="section-label mb-3">Why Apply With Us</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="section-title mb-4">We Work For You</h2>
            <p className="section-subtitle">
              We go beyond job listings — we actively represent and support candidates throughout
              the entire process.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyApply.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card text-center border border-gray-100">
                <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-brand-gold" />
                </div>
                <h3 className="text-brand-navy font-bold text-sm mb-3">{title}</h3>
                <p className="text-brand-slate text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Opportunities */}
      <section id="categories" className="section-padding bg-brand-light-gray">
        <div className="container-max">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="section-label mb-3">Available Roles</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="section-title mb-4">Opportunities Across Every Sector</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {jobCategories.map(({ title, roles }) => (
              <div key={title} className="card border border-gray-100 hover:border-brand-gold/30 transition-colors">
                <h3 className="text-brand-navy font-bold text-sm mb-2">{title}</h3>
                <p className="text-brand-slate text-xs leading-relaxed">{roles}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section id="process" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="section-label mb-3">How to Apply</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="section-title mb-4">A Simple, Supported Process</h2>
            <p className="section-subtitle">
              We make it straightforward to apply and stay with you throughout.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationSteps.map(({ num, title, desc }) => (
              <div key={num} className="card border border-gray-100">
                <span className="text-brand-gold font-bold text-3xl font-heading mb-4 block">{num}</span>
                <h3 className="text-brand-navy font-bold text-base mb-2">{title}</h3>
                <p className="text-brand-slate text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section-padding bg-brand-navy">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Register as a Candidate
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Complete the form to register your interest and our team will be in touch within
                48 hours to discuss your profile and available opportunities.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Free to register — no fees to job seekers",
                  "Opportunities across multiple industries",
                  "Full support through your application",
                  "Your information is kept strictly confidential",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-brand-gold flex-shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-brand-gold/15 border border-brand-gold/30 rounded-2xl p-6">
                <p className="text-brand-gold font-semibold text-sm mb-1">Contact Us Directly</p>
                <p className="text-white/70 text-sm">
                  Prefer to contact us directly? Call or WhatsApp us at{" "}
                  <a href="tel:+37491151795" className="text-brand-gold hover:underline font-semibold">
                    +374 91 151795
                  </a>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-brand-navy font-bold text-xl mb-2">
                <FileText size={20} className="inline mr-2 text-brand-gold" />
                Candidate Registration
              </h3>
              <p className="text-brand-slate text-sm mb-6">
                Fill in your details and we&apos;ll reach out to discuss your opportunities.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="input-field" />
                  <input type="text" placeholder="Last Name" className="input-field" />
                </div>
                <input type="email" placeholder="Email Address" className="input-field" />
                <input type="tel" placeholder="Phone Number" className="input-field" />
                <select className="select-field">
                  <option value="">Preferred Job Category</option>
                  <option>Hospitality & Hotels</option>
                  <option>Healthcare Support</option>
                  <option>Retail & Customer Service</option>
                  <option>Corporate & Administrative</option>
                  <option>Industrial & Warehouse</option>
                  <option>Housekeeping & Cleaning</option>
                  <option>Household Services</option>
                  <option>Other</option>
                </select>
                <select className="select-field">
                  <option value="">Employment Type Preference</option>
                  <option>Permanent / Full-Time</option>
                  <option>Part-Time</option>
                  <option>Temporary / Short-Term</option>
                  <option>Live-In</option>
                  <option>Flexible / Open</option>
                </select>
                <textarea
                  rows={3}
                  placeholder="Brief summary of your experience and skills..."
                  className="input-field resize-none"
                />
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" className="mt-1" />
                  <label htmlFor="consent" className="text-brand-slate text-xs">
                    I consent to HC Workforce Solutions LLC storing and using my information to
                    contact me about relevant employment opportunities.
                  </label>
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Submit Application <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
