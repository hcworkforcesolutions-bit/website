import Link from "next/link";
import { ArrowRight, Lock, Crown, Building2, Globe, Home, Gem } from "lucide-react";

const clientTypes = [
  {
    icon: Crown,
    label: "VIP & High-Net-Worth Families",
    desc: "Private residences requiring staff of the highest personal and professional standard.",
  },
  {
    icon: Building2,
    label: "C-Suite Executives & Corporate Leaders",
    desc: "Senior executives and business leaders with demanding household and personal staffing needs.",
  },
  {
    icon: Gem,
    label: "Prominent Entrepreneurs & Business Owners",
    desc: "High-achieving business owners who require discreet, dependable household professionals.",
  },
  {
    icon: Globe,
    label: "Diplomatic & Government Residences",
    desc: "Official residences and diplomatic households requiring impeccable, vetted staff.",
  },
  {
    icon: Home,
    label: "Luxury Estate & Property Owners",
    desc: "Owners of premium properties requiring full estate management and household staffing.",
  },
  {
    icon: Lock,
    label: "International & Expat VIP Clients",
    desc: "International clients relocating to or residing in Armenia who expect world-class household service.",
  },
];

const vipRoles = [
  "Private Chef", "Personal Chef for VIP", "Head Housekeeper",
  "Butler", "Estate Manager", "Head Gardener",
  "Maintenance Manager", "Personal Assistant", "Private Driver",
  "Nanny for VIP Household", "Security Coordinator", "Laundry & Wardrobe Manager",
];

export default function EliteClients() {
  return (
    <section className="section-padding bg-brand-navy relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-2xl" />

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/30 rounded-full px-5 py-2 mb-6">
            <Lock size={13} className="text-brand-gold" />
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">
              Elite & Confidential Placements
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            Trusted by Those Who{" "}
            <span className="text-gold-gradient">Demand Excellence</span>
          </h2>
          <p className="text-white/65 text-lg leading-relaxed">
            Some of our most important work is work we cannot discuss in detail. We serve a
            select group of high-profile clients — VIPs, executives, entrepreneurs, and prominent
            families — who require household and personal staff of the absolute highest calibre,
            placed with complete discretion and confidentiality.
          </p>
        </div>

        {/* Client Type Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {clientTypes.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-brand-gold/30 transition-all duration-300"
            >
              <div className="w-11 h-11 bg-brand-gold/15 rounded-xl flex items-center justify-center mb-4">
                <Icon size={20} className="text-brand-gold" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{label}</h3>
              <p className="text-white/55 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* VIP Roles Row */}
        <div className="bg-white/5 border border-brand-gold/20 rounded-2xl p-8 mb-10">
          <div className="flex items-center gap-3 mb-5">
            <Crown size={18} className="text-brand-gold" />
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest">
              Premium Roles We Place for Elite Clients
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {vipRoles.map((role) => (
              <span
                key={role}
                className="bg-white/8 border border-white/15 text-white/80 text-xs font-medium px-4 py-2 rounded-full"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Discretion Guarantee */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-brand-gold/10 border border-brand-gold/25 rounded-2xl p-6">
            <Lock size={20} className="text-brand-gold mb-3" />
            <h4 className="text-white font-bold text-base mb-2">Complete Confidentiality</h4>
            <p className="text-white/65 text-sm leading-relaxed">
              The identity of every high-profile client is fully protected. We never disclose
              names, addresses, or placement details. Our team operates under strict
              non-disclosure agreements at all levels.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <Crown size={20} className="text-brand-gold mb-3" />
            <h4 className="text-white font-bold text-base mb-2">Elevated Vetting Standards</h4>
            <p className="text-white/65 text-sm leading-relaxed">
              For VIP placements, we apply an enhanced screening process — personality
              profiling, character verification, and confidentiality orientation — ensuring
              every placed professional meets the exacting standard our elite clients expect.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-white/50 text-sm mb-5">
            Interested in discreet premium staffing for your residence or household?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request a Confidential Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/services#vip" className="btn-outline-white">
              View VIP Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
