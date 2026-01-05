"use client";
import React, { useEffect, useState } from "react";

const stats = [
  { label: "Total Donations", value: 125000, suffix: " DA" },
  { label: "People Helped", value: 320 },
  { label: "Active Fundraisers", value: 48 },
  { label: "Cities Reached", value: 22 },
];

export default function ImpactStats() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const step = Math.ceil(end / 60);

      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = start;
          return updated;
        });
      }, 20);
    });
  }, []);

  return (
    <section className="py-20 bg-[#797060] text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
        {stats.map((stat, i) => (
          <div key={i}>
            <h3 className="text-4xl font-bold">
              {counts[i]}
              {stat.suffix || ""}
            </h3>
            <p className="text-black mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
