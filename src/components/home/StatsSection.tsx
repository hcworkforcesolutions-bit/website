const stats = [
  { value: "9+", label: "Staffing Categories" },
  { value: "100%", label: "Candidates Pre-Screened" },
  { value: "24h", label: "Response Guarantee" },
  { value: "VIP", label: "Elite Placements Available" },
];

export default function StatsSection() {
  return (
    <section className="bg-brand-navy py-14">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl sm:text-4xl font-bold text-brand-gold font-heading">{value}</p>
              <p className="text-white/60 text-sm mt-2 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
