"use client";

import { useEffect, useState } from "react";

const serviceItems = [
  { id: "corporate", label: "Corporate" },
  { id: "hospitality", label: "Hospitality" },
  { id: "housekeeping", label: "Housekeeping" },
  { id: "healthcare", label: "Healthcare" },
  { id: "retail", label: "Retail" },
  { id: "industrial", label: "Industrial" },
  { id: "household", label: "Household" },
  { id: "temporary", label: "Temporary" },
];

export default function ServicesQuickNav() {
  const [active, setActive] = useState("corporate");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-80px 0px -50% 0px" }
    );

    serviceItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-[72px] z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="container-max">
        <div className="flex gap-1 py-3 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide">
          {serviceItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all flex-shrink-0 ${
                active === id
                  ? "bg-brand-gold text-brand-navy"
                  : "text-brand-slate hover:text-brand-navy hover:bg-brand-light-gray"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
