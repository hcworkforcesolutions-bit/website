import { Star, Quote, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    initial: "S.R.",
    role: "Business Director",
    sector: "Staffing & Recruitment",
    location: "International Client",
    quote:
      "We had been stuck for over a month trying to fill critical roles. HC Workforce Solutions moved our pipeline forward — their network quality is exactly what we needed to get the right people in place.",
    rating: 5,
  },
  {
    initial: "N.K.",
    role: "HR Manager",
    sector: "Hospitality Industry",
    location: "Yerevan, Armenia",
    quote:
      "The standard of candidates was exceptional. We would confidently recommend HC Workforce Solutions to any business serious about finding the best person for the job — they deliver on that promise.",
    rating: 5,
  },
  {
    initial: "M.T.",
    role: "Operations Lead",
    sector: "Corporate & Admin",
    location: "Armenia",
    quote:
      "Our team has discussed the level of support we receive at length — HC Workforce Solutions genuinely goes beyond what you expect from a staffing partner. Truly appreciating the way they support us.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-brand-light-gray">
      <div className="container-max">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="section-label mb-3">Client Feedback</p>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="section-title mb-4">What Our Clients Are Saying</h2>
          <p className="section-subtitle">
            Real feedback from employers and partners who trust us to deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.map(({ initial, role, sector, location, quote, rating }) => (
            <div key={initial + role} className="card border border-gray-100 flex flex-col">
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
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-brand-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-gold text-xs font-bold">{initial}</span>
                  </div>
                  <div>
                    <p className="text-brand-navy font-semibold text-sm">{role}</p>
                    <p className="text-brand-slate text-xs mt-0.5">{sector} · {location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy Notice */}
        <div className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 px-6 py-4 max-w-2xl mx-auto text-center justify-center">
          <ShieldCheck size={18} className="text-brand-gold flex-shrink-0 mt-0.5" />
          <p className="text-brand-slate text-xs leading-relaxed">
            Client identities are kept confidential by request. Feedback is shared with permission,
            represented by initials and role only to protect the privacy of our partners.
          </p>
        </div>
      </div>
    </section>
  );
}
