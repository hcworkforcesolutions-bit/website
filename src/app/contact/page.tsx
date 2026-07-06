"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Linkedin, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactPage() {
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
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-gradient pt-36 pb-24">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Contact HC Workforce Solutions
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Whether you need staff, want to apply for a job, or are interested in a business
            partnership — we&apos;re ready to help.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding bg-brand-light-gray">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Phone */}
              <div className="card border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-navy font-bold text-sm mb-1">Phone</p>
                    {/* UPDATE: Replace with your actual phone number */}
                    <a href="tel:+37491151795" className="text-brand-gold font-semibold hover:underline">
                      +374 91 151795
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="card border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-brand-navy font-bold text-sm mb-1">WhatsApp</p>
                    {/* UPDATE: Replace with your actual WhatsApp number */}
                    <a
                      href="https://wa.me/37491151795"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-semibold hover:underline"
                    >
                      +374 91 151795
                    </a>
                    <p className="text-brand-slate text-xs mt-1">Chat with us on WhatsApp</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-navy font-bold text-sm mb-1">Email</p>
                    {/* UPDATE: info@hcworkforcesolutions.com email address */}
                    <a href="mailto:info@hcworkforcesolutions.com" className="text-brand-gold font-semibold hover:underline text-sm">
                      info@hcworkforcesolutions.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="card border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-navy font-bold text-sm mb-1">Location</p>
                    <p className="text-brand-slate text-sm">Yerevan, Armenia</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="card border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-navy font-bold text-sm mb-3">Office Hours</p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-brand-slate">Monday – Friday</span>
                        <span className="text-brand-navy font-medium">9:00 – 18:00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-brand-slate">Saturday</span>
                        <span className="text-brand-navy font-medium">10:00 – 14:00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-brand-slate">Sunday</span>
                        <span className="text-red-500 font-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="card border border-gray-100">
                <p className="text-brand-navy font-bold text-sm mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {/* UPDATE: Replace href with your actual social media URLs */}
                  <a
                    href="https://www.facebook.com/HCWorkforceSolutionsLLC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-brand-light-gray rounded-lg flex items-center justify-center hover:bg-brand-gold/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} className="text-brand-navy" />
                  </a>
                  <a
                    href="https://www.instagram.com/hcworkforcesolutions.am/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-brand-light-gray rounded-lg flex items-center justify-center hover:bg-brand-gold/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} className="text-brand-navy" />
                  </a>
                  <a
                    href="https://linkedin.com/company/hcworkforcesolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-brand-light-gray rounded-lg flex items-center justify-center hover:bg-brand-gold/20 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} className="text-brand-navy" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-card p-8 md:p-10">
                <h2 className="text-2xl font-bold text-brand-navy mb-2">Send Us a Message</h2>
                <p className="text-brand-slate text-sm mb-8">
                  Whether you&apos;re an employer looking for staff, a job seeker, or a potential
                  partner — fill in the form and we&apos;ll get back to you promptly.
                </p>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <CheckCircle size={56} className="text-green-500 mb-4" />
                    <h3 className="text-xl font-bold text-brand-navy mb-2">Message Sent!</h3>
                    <p className="text-brand-slate">Thank you for contacting us. We will get back to you within 24 business hours.</p>
                  </div>
                ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-brand-navy text-xs font-semibold uppercase tracking-wide mb-2">
                        Your Name *
                      </label>
                      <input name="name" type="text" placeholder="Full Name" className="input-field" required />
                    </div>
                    <div>
                      <label className="block text-brand-navy text-xs font-semibold uppercase tracking-wide mb-2">
                        Company / Organization
                      </label>
                      <input name="company" type="text" placeholder="Company Name (if applicable)" className="input-field" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-brand-navy text-xs font-semibold uppercase tracking-wide mb-2">
                        Email Address *
                      </label>
                      <input name="email" type="email" placeholder="your@email.com" className="input-field" required />
                    </div>
                    <div>
                      <label className="block text-brand-navy text-xs font-semibold uppercase tracking-wide mb-2">
                        Phone Number
                      </label>
                      <input name="phone" type="tel" placeholder="+374 __ ______" className="input-field" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-brand-navy text-xs font-semibold uppercase tracking-wide mb-2">
                      Inquiry Type *
                    </label>
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
                    <label className="block text-brand-navy text-xs font-semibold uppercase tracking-wide mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Please describe your inquiry in detail — the more information you provide, the better we can assist you."
                      className="input-field resize-none"
                      required
                    />
                  </div>
                  <button type="submit" disabled={submitting} className="btn-primary w-full justify-center text-base py-4">
                    {submitting ? "Sending..." : (<span className="flex items-center gap-2">Send Message <ArrowRight size={18} /></span>)}
                  </button>
                  <p className="text-brand-slate text-xs text-center">
                    We typically respond within 24 business hours.
                  </p>
                </form>
                )}
              </div>

              {/* Map Placeholder */}
              <div className="mt-6 bg-brand-light-gray rounded-2xl overflow-hidden h-64 flex items-center justify-center border border-gray-200">
                {/* UPDATE: Replace this with a real Google Maps embed iframe */}
                <div className="text-center p-8">
                  <MapPin size={32} className="text-brand-gold mx-auto mb-3" />
                  <p className="text-brand-navy font-semibold">HC Workforce Solutions LLC</p>
                  <p className="text-brand-slate text-sm">Yerevan, Armenia</p>
                  <a
                    href="https://maps.google.com/?q=Yerevan,Armenia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold text-sm font-semibold hover:underline mt-3 inline-block"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="section-padding bg-brand-navy">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">Prefer to Contact Us Directly?</h2>
            <p className="text-white/60">Choose the channel that works best for you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <a
              href="tel:+37491151795"
              className="flex flex-col items-center p-6 bg-white/10 rounded-2xl hover:bg-white/15 transition-colors text-center"
            >
              <Phone size={24} className="text-brand-gold mb-3" />
              <p className="text-white font-semibold text-sm">Call Us</p>
              <p className="text-white/60 text-xs mt-1">+374 91 151795</p>
            </a>
            <a
              href="https://wa.me/37491151795"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-green-600/20 rounded-2xl hover:bg-green-600/30 transition-colors text-center"
            >
              <MessageCircle size={24} className="text-green-400 mb-3" />
              <p className="text-white font-semibold text-sm">WhatsApp</p>
              <p className="text-white/60 text-xs mt-1">+374 91 151795</p>
            </a>
            <a
              href="mailto:info@hcworkforcesolutions.com"
              className="flex flex-col items-center p-6 bg-white/10 rounded-2xl hover:bg-white/15 transition-colors text-center"
            >
              <Mail size={24} className="text-brand-gold mb-3" />
              <p className="text-white font-semibold text-sm">Email Us</p>
              <p className="text-white/60 text-xs mt-1">info@hcworkforcesolutions.com</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
