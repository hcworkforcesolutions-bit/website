"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "For Employers", href: "/for-employers" },
  { label: "For Job Seekers", href: "/for-job-seekers" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceCategories = [
  { label: "Corporate & Administrative", href: "/services#corporate", desc: "Office & business support staff" },
  { label: "Hospitality Staffing", href: "/services#hospitality", desc: "Hotels, resorts & restaurants" },
  { label: "Housekeeping & Facilities", href: "/services#housekeeping", desc: "Commercial cleaning & facility support" },
  { label: "Healthcare & Medical", href: "/services#healthcare", desc: "Clinics, hospitals & care environments" },
  { label: "Retail & Customer Service", href: "/services#retail", desc: "Stores, supermarkets & boutiques" },
  { label: "Industrial & Operational", href: "/services#industrial", desc: "Factories, warehouses & logistics" },
  { label: "Household Staffing", href: "/services#household", desc: "Domestic helpers, nannies & carers" },
  { label: "Temporary & Contract", href: "/services#temporary", desc: "Flexible short-term & seasonal roles" },
  { label: "VIP & Premium Services", href: "/services#vip", desc: "Private chefs, butlers & VIP household" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const textClass = scrolled
    ? "text-brand-navy hover:text-brand-gold"
    : "text-white/90 hover:text-brand-gold";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-brand-navy/95 backdrop-blur-sm py-4"
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
            link.label === "Services" ? (
              <div key="Services" className="relative" ref={megaRef}>
                <button
                  onClick={() => setMegaOpen((prev) => !prev)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${textClass}`}
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {megaOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 z-50">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                      <p className="text-brand-navy font-bold text-sm">Our Staffing Services</p>
                      <Link
                        href="/services"
                        className="text-brand-gold text-xs font-semibold flex items-center gap-1 hover:underline"
                        onClick={() => setMegaOpen(false)}
                      >
                        View All <ArrowRight size={12} />
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {serviceCategories.map((cat) => (
                        <Link
                          key={cat.href}
                          href={cat.href}
                          onClick={() => setMegaOpen(false)}
                          className={`rounded-xl px-3 py-3 transition-all hover:bg-brand-light-gray group ${
                            cat.label === "VIP & Premium Services"
                              ? "col-span-3 bg-brand-navy/5 border border-brand-gold/20"
                              : ""
                          }`}
                        >
                          <p className={`text-sm font-semibold group-hover:text-brand-gold transition-colors ${
                            cat.label === "VIP & Premium Services" ? "text-brand-gold" : "text-brand-navy"
                          }`}>
                            {cat.label === "VIP & Premium Services" ? "⭐ " : ""}{cat.label}
                          </p>
                          <p className="text-xs text-brand-slate mt-0.5">{cat.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${textClass}`}
                onClick={() => setMegaOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA Buttons */}
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
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[85vh] overflow-y-auto">
          <nav className="container-max px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-3 text-brand-navy font-medium hover:text-brand-gold hover:bg-brand-light-gray rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Services sub-links on mobile */}
            <div className="ml-3 border-l-2 border-brand-gold/30 pl-4 space-y-1 pt-1">
              {serviceCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`block px-3 py-2 text-sm hover:text-brand-gold transition-colors rounded-lg hover:bg-brand-light-gray ${
                    cat.label === "VIP & Premium Services" ? "text-brand-gold font-medium" : "text-brand-slate"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {cat.label === "VIP & Premium Services" ? "⭐ " : ""}{cat.label}
                </Link>
              ))}
            </div>
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
