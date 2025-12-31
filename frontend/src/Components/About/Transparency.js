import React from 'react'

const items = [
  {
    title: "Transparency",
    text: "All donations are tracked and reported clearly so donors always know where their contributions go.",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: "Ethical Giving",
    text: "We ensure fairness, dignity, and respect in how aid is distributed and received.",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3v1h6v-1c0-1.657-1.343-3-3-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14v7H5z" />
      </svg>
    )
  },
  {
    title: "Accountability",
    text: "Every action on our platform follows clear rules and responsible practices.",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      </svg>
    )
  },
  {
    title: "Trust",
    text: "We build trust through honesty, security, and long-term commitment to our community.",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 19c0-3.314 2.686-6 6-6s6 2.686 6 6" />
      </svg>
    )
  }
]

function Transparency() {
  return (
    <section className="text-center px-4 md:px-8 mt-12">
      
      {/* TITLE — CLEAR ABOVE */}
      <h2 className="font-[Montserrat] font-bold text-3xl md:text-4xl lg:text-[40px] leading-[122%] text-[#1E3231] mb-16">
        Transparency & Ethics Statement
      </h2>

      {/* CARDS — PUSHED DOWN */}
      <div className="flex justify-center flex-wrap gap-6 mt-12">
        {items.map((item, index) => (
          <div key={index} className="relative w-full sm:w-[calc(50%-12px)] md:w-[241px]">

            {/* ICON CIRCLE */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-[60px] w-[120px] h-[120px] rounded-full bg-[#1E3231] flex items-center justify-center shadow-md">
              {item.icon}
            </div>

            {/* CARD */}
            <div className="bg-[#A0E5AD] h-[260px] rounded-[15px] shadow-md pt-20 px-4">
              <h3 className="font-bold text-lg text-[#1E3231] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#1E3231BF] font-medium leading-relaxed">
                {item.text}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Transparency
