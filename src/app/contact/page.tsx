import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact HC Workforce Solutions LLC in Yerevan, Armenia. Reach us by phone, WhatsApp, or email for staffing inquiries, job applications, and partnership opportunities.",
  openGraph: {
    title: "Contact HC Workforce Solutions LLC",
    description: "Get in touch with our team in Yerevan, Armenia. We respond within 24 hours.",
    url: "https://hcworkforcesolutions.com/contact",
  },
};

export default function ContactPage() {
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
            <div className="lg:col-span-1 space-y-6">
              <div className="card border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-navy font-bold text-sm mb-1">Phone</p>
                    <a href="tel:+37491151795" className="text-brand-gold font-semibold hover:underline">+374 91 151795</a>
                  </div>
                </div>
              </div>
              <div className="card border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-brand-navy font-bold text-sm mb-1">WhatsApp</p>
                    <a href="https://wa.me/37491151795" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">+374 91 151795</a>
                    <p className="text-brand-slate text-xs mt-1">Chat with us on WhatsApp</p>
                  </div>
                </div>
              </div>
              <div className="card border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-navy font-bold text-sm mb-1">Email</p>
                    <a href="mailto:info@hcworkforcesolutions.com" className="text-brand-gold font-semibold hover:underline text-sm">info@hcworkforcesolutions.com</a>
                  </div>
                </div>
              </div>
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
              <div className="card border border-gray-100">
                <p className="text-brand-navy font-bold text-sm mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/HCWorkforceSolutionsLLC" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-light-gray rounded-lg flex items-center justify-center hover:bg-brand-gold/20 transition-colors" aria-label="Facebook">
                    <Facebook size={18} className="text-brand-navy" />
                  </a>
                  <a href="https://www.instagram.com/hcworkforcesolutions.am/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-light-gray rounded-lg flex items-center justify-center hover:bg-brand-gold/20 transition-colors" aria-label="Instagram">
                    <Instagram size={18} className="text-brand-navy" />
                  </a>
                  <a href="https://www.linkedin.com/company/linkedin.com-company-hcworkforcesolutionsllc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-light-gray rounded-lg flex items-center justify-center hover:bg-brand-gold/20 transition-colors" aria-label="LinkedIn">
                    <Linkedin size={18} className="text-brand-navy" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-card p-8 md:p-10">
                <h2 className="text-2xl font-bold text-brand-navy mb-2">Send Us a Message</h2>
                <p className="text-brand-slate text-sm mb-8">
                  Whether you&apos;re an employer looking for staff, a job seeker, or a potential
                  partner — fill in the form and we&apos;ll get back to you promptly.
                </p>
                <ContactForm />
              </div>
              <div className="mt-6 bg-brand-light-gray rounded-2xl overflow-hidden h-64 flex items-center justify-center border border-gray-200">
                <div className="text-center p-8">
                  <MapPin size={32} className="text-brand-gold mx-auto mb-3" />
                  <p className="text-brand-navy font-semibold">HC Workforce Solutions LLC</p>
                  <p className="text-brand-slate text-sm">Yerevan, Armenia</p>
                  <a href="https://maps.google.com/?q=Yerevan,Armenia" target="_blank" rel="noopener noreferrer" className="text-brand-gold text-sm font-semibold hover:underline mt-3 inline-block">
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-navy">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">Prefer to Contact Us Directly?</h2>
            <p className="text-white/60">Choose the channel that works best for you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <a href="tel:+37491151795" className="flex flex-col items-center p-6 bg-white/10 rounded-2xl hover:bg-white/15 transition-colors text-center">
              <Phone size={24} className="text-brand-gold mb-3" />
              <p className="text-white font-semibold text-sm">Call Us</p>
              <p className="text-white/60 text-xs mt-1">+374 91 151795</p>
            </a>
            <a href="https://wa.me/37491151795" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-green-600/20 rounded-2xl hover:bg-green-600/30 transition-colors text-center">
              <MessageCircle size={24} className="text-green-400 mb-3" />
              <p className="text-white font-semibold text-sm">WhatsApp</p>
              <p className="text-white/60 text-xs mt-1">+374 91 151795</p>
            </a>
            <a href="mailto:info@hcworkforcesolutions.com" className="flex flex-col items-center p-6 bg-white/10 rounded-2xl hover:bg-white/15 transition-colors text-center">
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
