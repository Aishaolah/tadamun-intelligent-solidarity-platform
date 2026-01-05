"use client";
import React from "react";
import {
  FiUserPlus,
  FiHeart,
  FiBarChart2,
  FiGlobe,
} from "react-icons/fi";

const steps = [
  {
    title: "Create an Account",
    text: "Sign up in minutes and access all features.",
    icon: FiUserPlus,
  },
  {
    title: "Start or Support a Fundraiser",
    text: "Create a campaign or donate to existing ones.",
    icon: FiHeart,
  },
  {
    title: "Transparent Tracking",
    text: "Track donations and progress clearly.",
    icon: FiBarChart2,
  },
  {
    title: "Impact Lives",
    text: "Your support reaches people who truly need it.",
    icon: FiGlobe,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-14">
        How It Works
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <div
              key={i}
              className="group text-center p-6 rounded-xl border
                         hover:shadow-md transition-all duration-300"
            >
              <Icon className="text-5xl mx-auto mb-4 text-primary
                               group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
