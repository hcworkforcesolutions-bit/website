import Link from "next/link";
import { ArrowRight, Users, CheckCircle2 } from "lucide-react";

const benefits = [
  "Access to diverse employment opportunities across Armenia",
  "Support throughout your application and placement process",
  "Fair treatment and professional representation",
  "Opportunities in hospitality, healthcare, retail, and more",
];

export default function WorkerCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-gold/15 rounded-xl flex items-center justify-center">
                <Users size={20} className="text-brand-gold" />
              </div>
              <span className="section-label">For Job Seekers</span>
            </div>
            <div className="gold-divider mb-6" />
            <h2 className="section-title mb-4">
              Your Next Opportunity Starts Here
            </h2>
            <p className="section-subtitle mb-6">
              We help workers across Armenia find meaningful, stable employment with reputable
              businesses and organizations that value their contribution.
            </p>
            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
                  <span className="text-brand-slate text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/for-job-seekers" className="btn-primary">
                Apply Now <ArrowRight size={16} />
              </Link>
              <Link href="/for-job-seekers#process" className="btn-secondary">
                How to Apply
              </Link>
            </div>
          </div>

          {/* Right – Worker categories */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Hospitality & Hotels", roles: "Housekeeping, Front Desk, F&B" },
              { title: "Healthcare Support", roles: "Caregivers, Patient Support" },
              { title: "Retail & Sales", roles: "Cashiers, Sales Associates" },
              { title: "Office & Admin", roles: "Receptionists, Coordinators" },
              { title: "Industrial & Warehouse", roles: "Factory, Logistics Workers" },
              { title: "Household Services", roles: "Housekeepers, Nannies" },
            ].map(({ title, roles }) => (
              <div
                key={title}
                className="bg-brand-light-gray rounded-xl p-5 border border-gray-100 hover:border-brand-gold/30 hover:shadow-card transition-all duration-200"
              >
                <p className="text-brand-navy font-semibold text-sm mb-1">{title}</p>
                <p className="text-brand-slate text-xs">{roles}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
