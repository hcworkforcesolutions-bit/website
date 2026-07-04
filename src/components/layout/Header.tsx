"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Corporate & Administrative", href: "/services#corporate" },
      { label: "Hospitality Staffing", href: "/services#hospitality" },
      { label: "Housekeeping & Facilities", href: "/services#housekeeping" },
      { label: "Healthcare & Medical", href: "/services#healthcare" },
      { label: "Retail & Customer Service", href: "/services#retail" },
      { label: "Industrial & Operational", href: "/services#industrial" },
      { label: "Household Staffing", href: "/services#household" },
      { label: "Temporary & Contract", href: "/services#temporary" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "For Employers", href: "/for-employers" },
  { label: "For Job Seekers", href: "/for-job-seekers" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-brand-navy/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="relative w-14 h-14">
            <Image
              src={scrolled ? "/images/logo-transparent.png" : "/images/logo-dark-bg.png"}
              alt="HC Workforce Solutions LLC"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-brand-navy hover:text-brand-gold"
                      : "text-white/90 hover:text-brand-gold"
                  }`}
                >
                  {link.label}
                  <ChevronDown size={14} />
                </button>
                {openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-card-hover border border-gray-100 py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-brand-navy hover:bg-brand-light-gray hover:text-brand-gold transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-brand-navy hover:text-brand-gold"
                    : "text-white/90 hover:text-brand-gold"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/for-job-seekers" className="btn-secondary text-xs py-2 px-4">
            Apply Now
          </Link>
          <Link href="/contact" className="btn-primary text-xs py-2 px-4">
            Request Staff
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-brand-navy" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container-max px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-brand-navy font-medium hover:text-brand-gold hover:bg-brand-light-gray rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 border-l-2 border-brand-gold/20 pl-4 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-brand-slate hover:text-brand-gold transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3 border-t border-gray-100 mt-4">
              <Link href="/for-job-seekers" className="btn-secondary justify-center" onClick={() => setMobileOpen(false)}>
                Apply for Jobs
              </Link>
              <Link href="/contact" className="btn-primary justify-center" onClick={() => setMobileOpen(false)}>
                Request Staff
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
