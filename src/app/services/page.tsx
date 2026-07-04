import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  UtensilsCrossed,
  Sparkles,
  HeartPulse,
  ShoppingBag,
  Factory,
  Home,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Staffing Services | HC Workforce Solutions LLC",
  description:
    "Comprehensive staffing services in Armenia: corporate, hospitality, housekeeping, healthcare, retail, industrial, household, and flexible staffing. HC Workforce Solutions LLC.",
};

const services = [
  {
    id: "corporate",
    icon: Briefcase,
    title: "Corporate & Administrative Staffing",
    desc: "Professional support staff for offices, businesses, and corporate environments across Armenia.",
    roles: [
      "Receptionists",
      "Administrative Assistants",
      "Office Coordinators",
      "Customer Service Personnel",
      "Front Desk Staff",
      "Data Entry Staff",
    ],
    forWho: "Offices, SMEs, corporations, startups, commercial buildings",
  },
  {
    id: "hospitality",
    icon: UtensilsCrossed,
    title: "Hospitality Staffing",
    desc: "Trained hospitality professionals for hotels, resorts, restaurants, and food service businesses.",
    roles: [
      "Hotel Front Office Staff",
      "Room Attendants",
      "Housekeeping Personnel",
      "Restaurant Staff",
      "Food & Beverage Personnel",
      "Guest Services Staff",
    ],
    forWho: "Hotels, resorts, restaurants, cafés, catering companies",
  },
  {
    id: "housekeeping",
    icon: Sparkles,
    title: "Housekeeping & Facility Support Staffing",
    desc: "Reliable cleaning and facility support personnel for commercial and public spaces.",
    roles: [
      "Commercial Cleaners",
      "Office Cleaners",
      "Building Housekeepers",
      "Janitorial Staff",
      "Utility Workers",
      "Public Area Attendants",
      "Facility Support Personnel",
    ],
    forWho: "Shopping centers, office buildings, factories, warehouses, public facilities",
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "Healthcare & Medical Support Staffing",
    desc: "Compassionate, professional healthcare support staff for medical facilities and care environments.",
    roles: [
      "Caregivers",
      "Healthcare Assistants",
      "Patient Support Staff",
      "Clinic Support Personnel",
      "Hospital Support Personnel",
    ],
    forWho: "Hospitals, clinics, medical centers, rehabilitation facilities",
  },
  {
    id: "retail",
    icon: ShoppingBag,
    title: "Retail & Customer Service Staffing",
    desc: "Customer-focused, professional retail staff for stores and commercial businesses.",
    roles: [
      "Cashiers",
      "Sales Associates",
      "Merchandisers",
      "Customer Service Representatives",
      "Store Support Personnel",
      "Inventory Staff",
    ],
    forWho: "Retail stores, supermarkets, shopping centers, boutiques",
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Industrial & Operational Staffing",
    desc: "Dependable operational workers for manufacturing, logistics, and industrial environments.",
    roles: [
      "Factory Workers",
      "Warehouse Personnel",
      "Production Workers",
      "Logistics Support Staff",
      "Packing Personnel",
      "Operations Support Workers",
    ],
    forWho: "Factories, warehouses, manufacturing companies, logistics firms",
  },
  {
    id: "household",
    icon: Home,
    title: "Household Staffing Solutions",
    desc: "Trusted domestic professionals for families, households, and expat communities in Armenia.",
    roles: [
      "Housekeepers",
      "Nannies",
      "Domestic Helpers",
      "Elderly Support Workers",
      "Live-In Staff",
      "Live-Out Staff",
    ],
    forWho: "Families, elderly clients, expat households, private residences",
  },
  {
    id: "temporary",
    icon: Clock,
    title: "Temporary, Contract & Long-Term Staffing",
    desc: "Flexible staffing models that adapt to your business needs — short-term, seasonal, or permanent.",
    roles: [
      "Temporary Staffing",
      "Contract Placement",
      "Seasonal Staffing",
      "Permanent Placement",
      "Project-Based Staffing",
    ],
    forWho: "All industries and sectors — tailored to your specific staffing model",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-gradient pt-36 pb-24">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Staffing Solutions for Every Need
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Eight comprehensive staffing categories designed to meet the workforce needs of every
            business, organization, and household across Armenia.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-24">
            {services.map(({ id, icon: Icon, title, desc, roles, forWho }, i) => (
              <div
                key={id}
                id={id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center">
                      <Icon size={26} className="text-brand-gold" />
                    </div>
                    <span className="section-label">{`0${i + 1}`}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4">{title}</h2>
                  <p className="text-brand-slate leading-relaxed mb-6">{desc}</p>
                  <p className="text-xs text-brand-gold font-semibold uppercase tracking-wider mb-4">
                    Suitable For
                  </p>
                  <p className="text-brand-slate text-sm mb-8 bg-brand-light-gray rounded-lg px-4 py-3">
                    {forWho}
                  </p>
                  <Link href="/contact" className="btn-primary">
                    Request This Staff Type <ArrowRight size={16} />
                  </Link>
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""} bg-brand-light-gray rounded-3xl p-8`}>
                  <p className="text-brand-navy font-bold text-sm uppercase tracking-wide mb-5">
                    Roles We Place
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {roles.map((role) => (
                      <div key={role} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3">
                        <CheckCircle2 size={15} className="text-brand-gold flex-shrink-0" />
                        <span className="text-brand-navy text-sm font-medium">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-navy">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don&apos;t See Exactly What You Need?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Contact us directly. We work with a wide range of businesses and can source
            specialized roles on request.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Our Team <ArrowRight size={16} />
            </Link>
            <Link href="/for-employers" className="btn-outline-white">
              For Employers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
