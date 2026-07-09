import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const serviceLinks = [
  { label: "Corporate & Administrative", href: "/services#corporate" },
  { label: "Hospitality Staffing", href: "/services#hospitality" },
  { label: "Housekeeping & Facilities", href: "/services#housekeeping" },
  { label: "Healthcare & Medical", href: "/services#healthcare" },
  { label: "Retail & Customer Service", href: "/services#retail" },
  { label: "Industrial & Operational", href: "/services#industrial" },
  { label: "Household Staffing", href: "/services#household" },
  { label: "Temporary & Contract", href: "/services#temporary" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries We Serve", href: "/industries" },
  { label: "For Employers", href: "/for-employers" },
  { label: "For Job Seekers", href: "/for-job-seekers" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Main Footer */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="relative w-16 h-16 mb-4">
              <Image
                src="/images/logo-dark-bg.png"
                alt="HC Workforce Solutions LLC"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Armenia&apos;s trusted workforce and staffing solutions partner. We connect qualified
              talent with businesses across every sector.
            </p>
            <p className="text-brand-gold text-xs font-medium uppercase tracking-widest">
              Connecting People • Supporting Families • Empowering Businesses
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {/* UPDATE: Replace # with your actual social media URLs */}
              <a
                href="https://www.facebook.com/HCWorkforceSolutionsLLC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/hcworkforcesolutions.am/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/linkedin.com-company-hcworkforcesolutionsllc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              {/* UPDATE: Replace with your actual WhatsApp number */}
              <a
                href="https://wa.me/37491151795"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Yerevan, Armenia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-gold flex-shrink-0" />
                {/* UPDATE: Replace with your actual phone number */}
                <a
                  href="tel:+37491151795"
                  className="text-white/70 text-sm hover:text-brand-gold transition-colors"
                >
                  +374 91 151795
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-brand-gold flex-shrink-0" />
                {/* UPDATE: Replace with your actual WhatsApp number */}
                <a
                  href="https://wa.me/37491151795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 text-sm hover:text-brand-gold transition-colors"
                >
                  WhatsApp: +374 91 151795
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-gold flex-shrink-0" />
                {/* UPDATE: Replace with your actual email address */}
                <a
                  href="mailto:info@hcworkforcesolutions.com"
                  className="text-white/70 text-sm hover:text-brand-gold transition-colors"
                >
                  info@hcworkforcesolutions.com
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-white/60 text-xs font-medium uppercase tracking-wide mb-2">Office Hours</p>
              <p className="text-white/80 text-sm">Monday – Friday: 9:00 AM – 6:00 PM</p>
              <p className="text-white/80 text-sm">Saturday: 10:00 AM – 2:00 PM</p>
              <p className="text-white/50 text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} HC Workforce Solutions LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-white/50 text-sm hover:text-brand-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-white/50 text-sm hover:text-brand-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
