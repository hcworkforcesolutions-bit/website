"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function JobSeekerForm() {
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

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle2 size={56} className="text-green-500 mb-4" />
        <h3 className="text-xl font-bold text-brand-navy mb-2">Application Submitted!</h3>
        <p className="text-brand-slate">Thank you! We will contact you within 48 hours.</p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <input name="first_name" type="text" placeholder="First Name" className="input-field" required />
        <input name="last_name" type="text" placeholder="Last Name" className="input-field" required />
      </div>
      <input name="email" type="email" placeholder="Email Address" className="input-field" required />
      <input name="phone" type="tel" placeholder="Phone Number" className="input-field" />
      <select name="job_category" className="select-field">
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
      <select name="employment_type" className="select-field">
        <option value="">Employment Type Preference</option>
        <option>Permanent / Full-Time</option>
        <option>Part-Time</option>
        <option>Temporary / Short-Term</option>
        <option>Live-In</option>
        <option>Flexible / Open</option>
      </select>
      <textarea
        name="experience"
        rows={3}
        placeholder="Brief summary of your experience and skills..."
        className="input-field resize-none"
      />
      <div className="flex items-start gap-3">
        <input type="checkbox" id="consent" className="mt-1" required />
        <label htmlFor="consent" className="text-brand-slate text-xs">
          I consent to HC Workforce Solutions LLC storing and using my information to contact me about relevant employment opportunities.
        </label>
      </div>
      <button type="submit" disabled={submitting} className="btn-primary w-full justify-center">
        {submitting ? "Submitting..." : <span className="flex items-center gap-2">Submit Application <ArrowRight size={16} /></span>}
      </button>
    </form>
  );
}
