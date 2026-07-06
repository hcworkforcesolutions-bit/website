"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  UserCheck,
  ClipboardList,
  Handshake,
  Headphones,
  Zap,
  CheckCircle2,
  ArrowRight,
  Building2,
} from "lucide-react";

const process = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Share Your Requirements",
    desc: "Tell us about the role, your business, the skills required, and your preferred timeline. The more detail you share, the better we can match.",
  },
  {
    icon: Search,
    step: "02",
    title: "We Source & Screen",
    desc: "Our team identifies and thoroughly vets candidates from our network — checking backgrounds, references, and assessing relevant skills.",
  },
  {
    icon: UserCheck,
    step: "03",
    title: "Shortlist Presented",
    desc: "We present you with a curated shortlist of qualified candidates who genuinely match your requirements.",
  },
  {
    icon: Handshake,
    step: "04",
    title: "Interview & Select",
    desc: "You interview and select your preferred candidate. We coordinate the process and provide support at every stage.",
  },
  {
    icon: Zap,
    step: "05",
    title: "Placement & Onboarding",
    desc: "We support the placement and initial onboarding to ensure a smooth start for both employer and employee.",
  },
  {
    icon: Headphones,
    step: "06",
    title: "Ongoing Support",
    desc: "Our team remains available to address any issues and ensure both parties are satisfied with the placement.",
  },
];

const staffingModels = [
  {
    title: "Temporary Staffing",
    desc: "Short-term staff for specific periods, projects, or events.",
    best: "Seasonal demand, project coverage, staff absences",
  },
  {
    title: "Contract Staffing",
    desc: "Workers placed on a defined contract duration with clear terms.",
    best: "Fixed-term projects, specific operational needs",
  },
  {
    title: "Seasonal Staffing",
    desc: "Staff scaled up or down based on seasonal business demand.",
    best: "Tourism, retail peaks, agricultural seasons",
  },
  {
    title: "Permanent Placement",
    desc: "Full recruitment and placement of long-term, permanent employees.",
    best: "Core team building, key role filling",
  },
];

const whyEmployers = [
  "Save significant time on candidate sourcing and initial screening",
  "Reduce hiring risk with professionally vetted candidates",
  "Access a wider pool of qualified candidates beyond job boards",
  "Fill positions faster without compromising on quality",
  "Flexible staffing models that match your business needs",
  "Dedicated support from an experienced staffing team",
  "Ongoing follow-up to ensure placement success",
  "Deep understanding of Armenia's workforce landscape",
];

export default function ForEmployersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const response = await fetch("https://formspree.io/f/maqgvzaw", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setSubmitting(false);
    if (response.ok) setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-gradient pt-36 pb-24">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                <Building2 size={20} className="text-brand-gold" />
              </div>
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">
                For Employers
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Find the Right People for Your Business
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              HC Workforce Solutions provides qualified, pre-screened staffing solutions to
              businesses across Armenia. From one placement to team-wide staffing — we make
              hiring easier, faster, and more reliable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request Staff Today <ArrowRight size={16} />
              </Link>
              <Link href="#process" className="btn-outline-white">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Why Choose Us</p>
              <div className="gold-divider mb-6" />
              <h2 className="section-title mb-6">
                Why Businesses in Armenia Choose HC Workforce Solutions
              </h2>
              <p className="section-subtitle mb-8">
                We don&apos;t just fill vacancies. We provide workforce solutions that save you
                time, reduce risk, and deliver results.
              </p>
              <ul className="space-y-3">
                {whyEmployers.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-brand-slate text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-light-gray rounded-3xl p-8 space-y-4">
              <h3 className="text-brand-navy font-bold text-lg mb-6">Our Staffing Models</h3>
              {staffingModels.map(({ title, desc, best }) => (
                <div key={title} className="bg-white rounded-2xl p-5 border border-gray-100">
                  <h4 className="text-brand-navy font-bold text-sm mb-2">{title}</h4>
                  <p className="text-brand-slate text-xs mb-3">{desc}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-gold text-xs font-semibold">Best for:</span>
                    <span className="text-brand-slate text-xs">{best}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="section-padding bg-brand-light-gray">
        <div className="container-max">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="section-label mb-3">Our Process</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="section-title mb-4">How We Deliver Your Staffing Solution</h2>
            <p className="section-subtitle">
              A clear, professional process that keeps you informed and in control from start to placement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="card border border-gray-100">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center">
                    <Icon size={22} className="text-brand-gold" />
                  </div>
                  <span className="text-brand-gold font-bold text-xl font-heading">{step}</span>
                </div>
                <h3 className="text-brand-navy font-bold text-base mb-3">{title}</h3>
                <p className="text-brand-slate text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="section-padding bg-brand-navy">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Request Staff?
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Submit your staffing inquiry today and our team will contact you within 24 hours
                to discuss your requirements and begin the sourcing process.
              </p>
              <p className="text-brand-gold text-sm font-semibold">
                Fast response • Professional process • Quality candidates
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-brand-navy font-bold text-xl mb-6">Staffing Request Form</h3>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 size={56} className="text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Request Submitted!</h3>
                  <p className="text-brand-slate">Thank you! We will contact you within 24 hours.</p>
                </div>
              ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <input name="name" type="text" placeholder="Your Name" className="input-field" required />
                  <input name="company" type="text" placeholder="Company Name" className="input-field" />
                </div>
                <input name="email" type="email" placeholder="Email Address" className="input-field" required />
                <input name="phone" type="tel" placeholder="Phone Number" className="input-field" />
                <select name="staff_type" className="select-field">
                  <option value="">Type of Staff Needed</option>
                  <option>Corporate & Administrative</option>
                  <option>Hospitality</option>
                  <option>Housekeeping & Facilities</option>
                  <option>Healthcare & Medical</option>
                  <option>Retail & Customer Service</option>
                  <option>Industrial & Operational</option>
                  <option>Household Staffing</option>
                  <option>Other</option>
                </select>
                <select name="staffing_model" className="select-field">
                  <option value="">Staffing Model</option>
                  <option>Temporary</option>
                  <option>Contract</option>
                  <option>Seasonal</option>
                  <option>Permanent</option>
                  <option>Not Sure</option>
                </select>
                <textarea
                  name="requirements"
                  rows={4}
                  placeholder="Describe your staffing requirements in detail..."
                  className="input-field resize-none"
                />
                <button type="submit" disabled={submitting} className="btn-primary w-full justify-center">
                  {submitting ? "Submitting..." : <span className="flex items-center gap-2">Submit Staffing Request <ArrowRight size={16} /></span>}
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
