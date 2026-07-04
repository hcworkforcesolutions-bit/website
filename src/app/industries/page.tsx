import type { Metadata } from "next";
import Link from "next/link";
import {
  Hotel,
  UtensilsCrossed,
  HeartPulse,
  ShoppingBag,
  Building2,
  Factory,
  Warehouse,
  Building,
  Home,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | HC Workforce Solutions LLC",
  description:
    "HC Workforce Solutions LLC serves hotels, restaurants, healthcare, retail, corporate offices, factories, warehouses, property management, and households across Armenia.",
};

const industries = [
  {
    id: "hotels",
    icon: Hotel,
    title: "Hotels & Hospitality",
    desc: "Armenia's hospitality sector demands professional, service-oriented staff who represent your brand with excellence. We source and place qualified hospitality professionals across all hotel departments.",
    roles: ["Front Office Staff", "Room Attendants", "Housekeeping Teams", "Concierge Personnel", "Guest Services Staff", "Hotel Supervisors"],
    challenge: "Maintaining consistent service standards with reliable, trained staff — especially during peak seasons.",
    solution: "We provide pre-screened hospitality professionals who understand service culture and are ready to work from day one.",
  },
  {
    id: "restaurants",
    icon: UtensilsCrossed,
    title: "Restaurants & Food Service",
    desc: "From casual dining to fine restaurants and café operations, we staff food service businesses with experienced, service-ready personnel who keep your operation running smoothly.",
    roles: ["Restaurant Staff", "Food & Beverage Personnel", "Service Staff", "Kitchen Support", "Cashiers", "Café Personnel"],
    challenge: "High turnover and the need for staff who can work efficiently in fast-paced environments.",
    solution: "We match dependable, experienced food service workers to your team quickly and efficiently.",
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "Healthcare & Medical Facilities",
    desc: "Healthcare environments require compassionate, detail-oriented support staff. We supply qualified support personnel for hospitals, clinics, and rehabilitation facilities across Armenia.",
    roles: ["Healthcare Assistants", "Patient Support Staff", "Caregivers", "Clinic Support Personnel", "Hospital Support Staff", "Medical Admin"],
    challenge: "Finding reliable, compassionate, and professionally vetted support staff for sensitive healthcare environments.",
    solution: "All healthcare support staff undergo thorough screening and are matched for both skill and temperament.",
  },
  {
    id: "retail",
    icon: ShoppingBag,
    title: "Retail & Commercial Businesses",
    desc: "Retail businesses need customer-facing staff who are professional, presentable, and sales-oriented. We place experienced retail personnel for stores, supermarkets, and shopping centers.",
    roles: ["Cashiers", "Sales Associates", "Merchandisers", "Customer Service Representatives", "Inventory Staff", "Store Support"],
    challenge: "Finding reliable customer-facing staff who represent the brand professionally and handle busy periods with ease.",
    solution: "We source retail staff with proven customer service experience and professional presentation.",
  },
  {
    id: "offices",
    icon: Building2,
    title: "Offices & Corporate Organizations",
    desc: "Corporate environments require professional, organized, and reliable administrative staff. We serve offices, SMEs, startups, and large corporations across Yerevan and Armenia.",
    roles: ["Receptionists", "Administrative Assistants", "Office Coordinators", "Front Desk Personnel", "Data Entry Staff", "Executive Support"],
    challenge: "Finding organized, professional, and reliable office support staff who integrate smoothly into business operations.",
    solution: "We place thoroughly vetted administrative professionals who are ready to contribute from day one.",
  },
  {
    id: "factories",
    icon: Factory,
    title: "Factories & Manufacturing",
    desc: "Manufacturing and production environments require reliable, hardworking operational staff. We supply factory workers and production personnel to manufacturers across Armenia.",
    roles: ["Factory Workers", "Production Workers", "Assembly Staff", "Quality Control Support", "Operations Support Workers", "Packing Personnel"],
    challenge: "Maintaining consistent production output with dependable, physically capable workers.",
    solution: "We source reliable factory and production workers who are physically fit, dependable, and ready to work.",
  },
  {
    id: "warehousing",
    icon: Warehouse,
    title: "Warehousing & Logistics",
    desc: "Logistics and warehousing operations depend on reliable, efficient personnel. We place warehouse and logistics support staff who keep supply chains moving.",
    roles: ["Warehouse Personnel", "Logistics Support Staff", "Inventory Control Staff", "Packing Personnel", "Loading/Unloading Staff", "Operations Workers"],
    challenge: "Keeping warehouse operations efficient and on-schedule with dependable, capable personnel.",
    solution: "We supply vetted warehouse and logistics staff matched to your operational requirements.",
  },
  {
    id: "property",
    icon: Building,
    title: "Property & Facilities Management",
    desc: "Commercial buildings, shopping centers, and property management companies need reliable facility support staff. We provide cleaning, maintenance support, and building personnel.",
    roles: ["Commercial Cleaners", "Janitorial Staff", "Building Housekeepers", "Utility Workers", "Public Area Attendants", "Facility Support Staff"],
    challenge: "Maintaining clean, well-managed facilities with consistent, professional cleaning and support staff.",
    solution: "We place dependable facility support workers who take pride in maintaining professional standards.",
  },
  {
    id: "household",
    icon: Home,
    title: "Household & Family Support",
    desc: "Families, elderly clients, and expat households across Armenia rely on trusted domestic professionals. We carefully match household staff to family environments.",
    roles: ["Housekeepers", "Nannies", "Domestic Helpers", "Elderly Support Workers", "Live-In Staff", "Live-Out Staff"],
    challenge: "Finding trustworthy, reliable, and discreet domestic staff who fit the family environment.",
    solution: "Every household candidate is thoroughly screened, reference-checked, and personally matched to your family needs.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-gradient pt-36 pb-24">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Industries We Serve
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Workforce Solutions for Every Sector
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We understand the unique workforce challenges of each industry and deliver staffing
            solutions tailored to your sector.
          </p>
        </div>
      </section>

      {/* Industry Grid Overview */}
      <section className="section-padding bg-brand-light-gray">
        <div className="container-max">
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3 mb-4">
            {industries.map(({ id, icon: Icon, title }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex flex-col items-center text-center p-3 bg-white rounded-2xl hover:shadow-card transition-all group"
              >
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-2 group-hover:bg-brand-gold/20 transition-colors">
                  <Icon size={20} className="text-brand-gold" />
                </div>
                <p className="text-brand-navy text-xs font-medium leading-tight">{title.split(" & ")[0]}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Industries */}
      <section className="section-padding bg-white">
        <div className="container-max space-y-20">
          {industries.map(({ id, icon: Icon, title, desc, roles, challenge, solution }, i) => (
            <div key={id} id={id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center">
                    <Icon size={22} className="text-brand-gold" />
                  </div>
                  <p className="section-label">{`Industry ${String(i + 1).padStart(2, "0")}`}</p>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4">{title}</h2>
                <p className="text-brand-slate leading-relaxed mb-6">{desc}</p>

                <div className="space-y-4 mb-8">
                  <div className="bg-brand-light-gray rounded-xl p-4">
                    <p className="text-brand-navy font-semibold text-xs uppercase tracking-wide mb-2">
                      Industry Challenge
                    </p>
                    <p className="text-brand-slate text-sm">{challenge}</p>
                  </div>
                  <div className="bg-brand-gold/10 rounded-xl p-4 border border-brand-gold/20">
                    <p className="text-brand-gold font-semibold text-xs uppercase tracking-wide mb-2">
                      Our Solution
                    </p>
                    <p className="text-brand-navy text-sm">{solution}</p>
                  </div>
                </div>

                <Link href="/contact" className="btn-primary">
                  Request {title.split(" & ")[0]} Staff <ArrowRight size={16} />
                </Link>
              </div>

              <div className={`${i % 2 === 1 ? "lg:order-1" : ""} bg-brand-light-gray rounded-3xl p-8`}>
                <p className="text-brand-navy font-bold text-sm uppercase tracking-wide mb-5">
                  Roles We Place
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {roles.map((role) => (
                    <div key={role} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3">
                      <div className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0" />
                      <span className="text-brand-navy text-sm">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-navy">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Serving Your Industry With the Right People
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Tell us your staffing need and we&apos;ll connect you with qualified candidates
            tailored to your sector.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request Staff <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-outline-white">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
