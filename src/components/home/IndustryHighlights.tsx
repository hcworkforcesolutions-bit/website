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

const industries = [
  { icon: Hotel, label: "Hotels & Hospitality" },
  { icon: UtensilsCrossed, label: "Restaurants & Food Service" },
  { icon: HeartPulse, label: "Healthcare & Medical" },
  { icon: ShoppingBag, label: "Retail & Commercial" },
  { icon: Building2, label: "Offices & Corporate" },
  { icon: Factory, label: "Factories & Manufacturing" },
  { icon: Warehouse, label: "Warehousing & Logistics" },
  { icon: Building, label: "Property & Facilities" },
  { icon: Home, label: "Household & Family" },
];

export default function IndustryHighlights() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label mb-3">Industries We Serve</p>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="section-title mb-4">
            Staffing Expertise Across Armenia&apos;s Key Sectors
          </h2>
          <p className="section-subtitle">
            We understand the unique workforce demands of each industry and tailor our staffing
            solutions accordingly.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-4">
          {industries.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-brand-light-gray transition-colors group cursor-default"
            >
              <div className="w-14 h-14 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-brand-gold/15 transition-colors">
                <Icon size={24} className="text-brand-navy group-hover:text-brand-gold transition-colors" />
              </div>
              <p className="text-brand-navy text-xs font-medium leading-tight">{label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/industries" className="btn-secondary">
            Explore Industries <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
