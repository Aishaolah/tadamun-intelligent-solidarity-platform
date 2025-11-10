"use client";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { DonorSubRoleEnum, BeneficiarySubRoleEnum } from "../../../lib/schemas/onboarding";

export default function Step1AccountType() {
  const { control, watch } = useFormContext();
  const role = watch("step1.role");

  return (
    <div className="space-y-4">
      <Controller
        control={control}
        name="step1.role"
        defaultValue="donor"
        render={({ field }) => (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: "donor", title: "I am a Donor", desc: "Give to causes you care about" },
              { id: "volunteer", title: "I am a Volunteer", desc: "Offer time or skills" },
              { id: "beneficiary", title: "I need Help", desc: "Request assistance" },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => field.onChange(opt.id)}
                aria-pressed={field.value === opt.id}
                className={`p-4 rounded-lg border text-left transition-shadow ${
                  field.value === opt.id ? "ring-2 ring-blue-500 border-transparent" : ""
                }`}
              >
                <div className="font-medium">{opt.title}</div>
                <div className="text-sm text-gray-500">{opt.desc}</div>
              </button>
            ))}
          </div>
        )}
      />

      {role === "donor" && (
        <Controller
          control={control}
          name="step1.donorSubRole"
          defaultValue="individual"
          render={({ field }) => (
            <div className="mt-2">
              <div className="text-sm font-medium mb-2">Donor Type</div>
              <div className="flex gap-2">
                {["individual", "enterprise", "association"].map((s) => (
                  <label key={s} className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      value={s}
                      checked={field.value === s}
                      onChange={() => field.onChange(s)}
                    />
                    <span className="capitalize">{s}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        />
      )}

      {role === "beneficiary" && (
        <Controller
          control={control}
          name="step1.beneficiarySubRole"
          defaultValue="individual"
          render={({ field }) => (
            <div className="mt-2">
              <div className="text-sm font-medium mb-2">Are you an individual or a family?</div>
              <div className="flex gap-2">
                {["individual", "family"].map((s) => (
                  <label key={s} className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      value={s}
                      checked={field.value === s}
                      onChange={() => field.onChange(s)}
                    />
                    <span className="capitalize">{s}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        />
      )}
    </div>
  );
}
