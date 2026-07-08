"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function EmployerForm() {
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
        <h3 className="text-xl font-bold text-brand-navy mb-2">Request Submitted!</h3>
        <p className="text-brand-slate">Thank you! We will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
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
  );
}
