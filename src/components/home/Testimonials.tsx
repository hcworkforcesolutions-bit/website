import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arman Petrosyan",
    role: "General Manager, Yerevan Boutique Hotel",
    quote:
      "HC Workforce Solutions understood exactly what we needed. The housekeeping and front office staff they placed have been outstanding — reliable, professional, and a great fit for our team culture.",
    rating: 5,
  },
  {
    name: "Narine Hakobyan",
    role: "HR Director, Commercial Retail Group",
    quote:
      "We've worked with other agencies before, but none matched the quality and speed of HC Workforce Solutions. Their retail staff candidates came pre-screened and were ready to contribute from day one.",
    rating: 5,
  },
  {
    name: "David Simonyan",
    role: "Operations Manager, Logistics Company, Yerevan",
    quote:
      "When we needed warehouse personnel urgently, HC Workforce Solutions delivered within 48 hours. Every candidate was vetted and professional. We've made them our primary staffing partner.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="section-label mb-3">Client Testimonials</p>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="section-title mb-4">Trusted by Businesses Across Armenia</h2>
          <p className="section-subtitle">
            Hear from employers who rely on HC Workforce Solutions to keep their teams strong.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, quote, rating }) => (
            <div key={name} className="card border border-gray-100 flex flex-col">
              <Quote size={28} className="text-brand-gold/30 mb-4" />
              <p className="text-brand-slate text-sm leading-relaxed flex-1 mb-6 italic">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-brand-navy font-semibold text-sm">{name}</p>
                <p className="text-brand-slate text-xs mt-0.5">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
