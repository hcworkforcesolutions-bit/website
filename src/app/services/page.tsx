import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Briefcase,
  UtensilsCrossed,
  Sparkles,
  HeartPulse,
  ShoppingBag,
  Factory,
  Home,
  Clock,
  Crown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import ServicesQuickNav from "@/components/services/ServicesQuickNav";

export const metadata: Metadata = {
  title: "Staffing Services | HC Workforce Solutions LLC",
  description:
    "Comprehensive staffing services in Armenia and Europe: corporate, hospitality, housekeeping, healthcare, retail, industrial, VIP household, and flexible staffing. HC Workforce Solutions LLC.",
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
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    imageAlt: "Modern corporate office environment",
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
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    imageAlt: "Luxury hotel lobby and hospitality",
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
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    imageAlt: "Professional facility cleaning and housekeeping",
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
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    imageAlt: "Healthcare and medical support professionals",
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
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    imageAlt: "Retail store customer service",
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
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    imageAlt: "Industrial warehouse and operations",
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
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80",
    imageAlt: "Comfortable home and household staffing",
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
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    imageAlt: "Business planning and contract staffing",
  },
  {
    id: "vip",
    icon: Crown,
    title: "VIP & Premium Household Services",
    desc: "Exclusive, bespoke staffing for high-profile clients and luxury households requiring the highest standards of skill, professionalism, and discretion.",
    roles: [
      "Private Chef",
      "Personal Chef for VIP",
      "Housekeeper for VIP",
      "Personal Assistant",
      "Butler",
      "Estate Manager",
      "Private Driver",
      "Nanny for VIP Household",
    ],
    forWho: "VIP clients, luxury residences, high-profile families, executive households, diplomatic residences, international clients",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    imageAlt: "Private chef preparing a gourmet meal for VIP client",
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
            Nine comprehensive staffing categories — including exclusive VIP & Premium services —
            designed to meet the workforce needs of every business, organization, and household
            across Armenia and international markets.
          </p>
        </div>
      </section>

      {/* Sticky Quick Navigation */}
      <ServicesQuickNav />

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-28">
            {services.map(({ id, icon: Icon, title, desc, roles, forWho, image, imageAlt }, i) => (
              <div
                key={id}
                id={id}
                className="scroll-section grid grid-cols-1 lg:grid-cols-2 gap-14 items-start"
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
                  <p className="text-xs text-brand-gold font-semibold uppercase tracking-wider mb-2">
                    Suitable For
                  </p>
                  <p className="text-brand-slate text-sm mb-8 bg-brand-light-gray rounded-lg px-4 py-3">
                    {forWho}
                  </p>
                  <Link href="/contact" className="btn-primary">
                    Request This Staff Type <ArrowRight size={16} />
                  </Link>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  {/* Photo */}
                  <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-6 shadow-card">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-brand-navy/20" />
                  </div>
                  {/* Roles */}
                  <div className="bg-brand-light-gray rounded-2xl p-6">
                    <p className="text-brand-navy font-bold text-sm uppercase tracking-wide mb-4">
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
