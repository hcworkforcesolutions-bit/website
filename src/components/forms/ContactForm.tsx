"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/maqgvzaw", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setSubmitting(false);
    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={56} className="text-green-500 mb-4" />
        <h3 className="text-xl font-bold text-brand-navy mb-2">Message Sent!</h3>
        <p className="text-brand-slate">Thank you for contacting us. We will get back to you within 24 business hours.</p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-brand-navy text-xs font-semibold uppercase tracking-wide mb-2">Your Name *</label>
          <input name="name" type="text" placeholder="Full Name" className="input-field" required />
        </div>
        <div>
          <label className="block text-brand-navy text-xs font-semibold uppercase tracking-wide mb-2">Company / Organization</label>
          <input name="company" type="text" placeholder="Company Name (if applicable)" className="input-field" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-brand-navy text-xs font-semibold uppercase tracking-wide mb-2">Email Address *</label>
          <input name="email" type="email" placeholder="your@email.com" className="input-field" required />
        </div>
        <div>
          <label className="block text-brand-navy text-xs font-semibold uppercase tracking-wide mb-2">Phone Number</label>
          <input name="phone" type="tel" placeholder="+374 __ ______" className="input-field" />
        </div>
      </div>
      <div>
        <label className="block text-brand-navy text-xs font-semibold uppercase tracking-wide mb-2">Inquiry Type *</label>
        <select name="inquiry_type" className="select-field" required>
          <option value="">Select Inquiry Type</option>
          <option>Request Staff (Employer)</option>
          <option>Job Application (Candidate)</option>
          <option>Partnership Inquiry</option>
          <option>General Information</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-brand-navy text-xs font-semibold uppercase tracking-wide mb-2">Message *</label>
        <textarea
          name="message"
          rows={6}
          placeholder="Please describe your inquiry in detail — the more information you provide, the better we can assist you."
          className="input-field resize-none"
          required
        />
      </div>
      <button type="submit" disabled={submitting} className="btn-primary w-full justify-center text-base py-4">
        {submitting ? "Sending..." : <span className="flex items-center gap-2">Send Message <ArrowRight size={18} /></span>}
      </button>
      <p className="text-brand-slate text-xs text-center">We typically respond within 24 business hours.</p>
    </form>
  );
}
