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
} from "lucide-react";

const categories = [
  {
    icon: Briefcase,
    id: "corporate",
    title: "Corporate & Administrative",
    desc: "Receptionists, admin assistants, office coordinators, front desk, customer service, and data entry staff.",
  },
  {
    icon: UtensilsCrossed,
    id: "hospitality",
    title: "Hospitality Staffing",
    desc: "Hotel front office, room attendants, housekeeping, restaurant, and food & beverage personnel.",
  },
  {
    icon: Sparkles,
    id: "housekeeping",
    title: "Housekeeping & Facilities",
    desc: "Commercial cleaners, office housekeepers, janitorial staff, utility workers, and public area attendants.",
  },
  {
    icon: HeartPulse,
    id: "healthcare",
    title: "Healthcare & Medical Support",
    desc: "Caregivers, healthcare assistants, patient support, clinic and hospital support personnel.",
  },
  {
    icon: ShoppingBag,
    id: "retail",
    title: "Retail & Customer Service",
    desc: "Cashiers, sales associates, merchandisers, customer service reps, and inventory staff.",
  },
  {
    icon: Factory,
    id: "industrial",
    title: "Industrial & Operational",
    desc: "Factory workers, warehouse personnel, production workers, logistics support, and packing staff.",
  },
  {
    icon: Home,
    id: "household",
    title: "Household Staffing",
    desc: "Housekeepers, nannies, domestic helpers, elderly support workers, live-in and live-out staff.",
  },
  {
    icon: Clock,
    id: "temporary",
    title: "Temporary, Contract & Long-Term",
    desc: "Flexible staffing models: temporary, contract, seasonal, and permanent placements.",
  },
];

export default function ServiceCategories() {
  return (
    <section className="section-padding bg-brand-light-gray">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label mb-3">What We Do</p>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="section-title mb-4">
            Staffing Solutions Across Every Sector
          </h2>
          <p className="section-subtitle">
            From corporate offices to hospitality venues, healthcare facilities to family homes —
            we have the right staffing solution for your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ icon: Icon, id, title, desc }) => (
            <Link
              key={id}
              href={`/services#${id}`}
              className="card group hover:border-brand-gold/30 border border-transparent cursor-pointer"
            >
              <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors">
                <Icon size={22} className="text-brand-gold" />
              </div>
              <h3 className="text-brand-navy font-bold text-base mb-2 group-hover:text-brand-gold transition-colors">
                {title}
              </h3>
              <p className="text-brand-slate text-sm leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
