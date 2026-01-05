"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function Reviews() {
  const review = [
    {
      msg: "Tadamun helped our neighborhood raise funds quickly and transparently — updates were clear and reliable.",
      name: "Amina B.",
      from: "Algiers, Algeria",
    },
    {
      msg: "The platform is simple to use and made it easy for donors to support local families in need.",
      name: "Rachid L.",
      from: "Oran, Algeria",
    },
    {
      msg: "Campaign management and communication were excellent — supporters received timely progress reports.",
      name: "Noura H.",
      from: "Constantine, Algeria",
    },
    {
      msg: "A trustworthy place to share a story and get help for urgent family needs.",
      name: "Karim S.",
      from: "Annaba, Algeria",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <section className="mt-20 mb-20">
      <div className="w-[90%] md:w-3/4 mx-auto">
        <Slider {...settings}>
          {review.map((d, index) => (
            <div key={index} className="flex justify-center">
              <div className="text-center flex flex-col items-center gap-4 px-4 max-w-2xl mx-auto">
                <span className="text-4xl md:text-7xl leading-none">“</span>
                <p className="text-sm md:text-base leading-relaxed">
                  {d.msg}
                </p>
                <h3 className="font-semibold">{d.name}</h3>
                <h4 className="text-sm text-gray-600">{d.from}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Reviews;
