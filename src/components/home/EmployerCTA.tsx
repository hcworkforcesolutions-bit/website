"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";

const benefits = [
  "Access to pre-screened, qualified candidates",
  "Flexible staffing: temporary, contract, or permanent",
  "Fast response to urgent staffing requests",
  "Dedicated account support throughout",
];

export default function EmployerCTA() {
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
    <section className="section-padding bg-brand-light-gray">
      <div className="container-max">
        <div className="bg-navy-gradient rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left */}
            <div className="p-10 lg:p-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                  <Building2 size={20} className="text-brand-gold" />
                </div>
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">
                  For Employers
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to Strengthen Your Workforce?
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Whether you need one specialist or an entire department, we provide qualified,
                screened candidates that align with your business requirements and team culture.
              </p>
              <ul className="space-y-3 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-brand-gold flex-shrink-0" />
                    <span className="text-white/80 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Request Staff Today <ArrowRight size={16} />
                </Link>
                <Link href="/for-employers" className="btn-outline-white">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right – Quick Inquiry */}
            <div className="bg-white/5 backdrop-blur-sm p-10 lg:p-14 border-l border-white/10">
              <h3 className="text-white font-bold text-xl mb-2">Quick Staffing Inquiry</h3>
              <p className="text-white/60 text-sm mb-8">
                Tell us your need and we&apos;ll get back to you within 24 hours.
              </p>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle2 size={48} className="text-green-400 mb-4" />
                  <h3 className="text-white font-bold text-lg mb-2">Inquiry Submitted!</h3>
                  <p className="text-white/60 text-sm">We will contact you within 24 hours.</p>
                </div>
              ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                />
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  required
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                />
                <select name="staff_type" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold appearance-none">
                  <option value="" className="bg-brand-navy">Type of Staff Needed</option>
                  <option value="corporate" className="bg-brand-navy">Corporate & Administrative</option>
                  <option value="hospitality" className="bg-brand-navy">Hospitality</option>
                  <option value="housekeeping" className="bg-brand-navy">Housekeeping & Facilities</option>
                  <option value="healthcare" className="bg-brand-navy">Healthcare & Medical</option>
                  <option value="retail" className="bg-brand-navy">Retail & Customer Service</option>
                  <option value="industrial" className="bg-brand-navy">Industrial & Operational</option>
                  <option value="household" className="bg-brand-navy">Household Staffing</option>
                  <option value="other" className="bg-brand-navy">Other</option>
                </select>
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Brief description of your staffing need..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold resize-none"
                />
                <button type="submit" disabled={submitting} className="btn-primary w-full justify-center">
                  {submitting ? "Submitting..." : <span className="flex items-center gap-2">Submit Inquiry <ArrowRight size={16} /></span>}
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
