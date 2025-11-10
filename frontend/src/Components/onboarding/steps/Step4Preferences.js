import React from "react";
import { useFormContext } from "react-hook-form";

const CAUSES = ["Education", "Healthcare", "Poverty", "Disaster Relief"];
const VOL_AREAS = ["Teaching", "Healthcare", "Logistics", "Community Outreach"];

export default function Step4Preferences() {
  const { register, watch } = useFormContext();
  const role = watch("step1.role");

  return (
    <div className="space-y-4">
      {role === "donor" && (
        <>
          <div>
            <label className="block text-sm font-medium">Preferred causes</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {CAUSES.map((c) => (
                <label key={c} className="inline-flex items-center gap-2">
                  <input type="checkbox" value={c} {...register("step4.preferredCauses")} />
                  <span>{c}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Donation frequency</label>
            <select {...register("step4.donationFrequency")} className="mt-1 block w-full rounded-md border p-2">
              <option value="one-time">One-time</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </>
      )}

      {role === "volunteer" && (
        <>
          <div>
            <label className="block text-sm font-medium">Areas of interest</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {VOL_AREAS.map((v) => (
                <label key={v} className="inline-flex items-center gap-2">
                  <input type="checkbox" value={v} {...register("step4.volunteerAreas")} />
                  <span>{v}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Available hours per week</label>
            <input type="number" {...register("step4.hoursPerWeek", { valueAsNumber: true })} className="mt-1 block w-full rounded-md border p-2" />
          </div>
        </>
      )}

      {role === "beneficiary" && (
        <>
          <div>
            <label className="block text-sm font-medium">Type of aid needed</label>
            <div className="flex gap-2 mt-2">
              {["financial", "goods", "services"].map((t) => (
                <label key={t} className="inline-flex items-center gap-2">
                  <input type="checkbox" value={t} {...register("step4.aidTypes")} />
                  <span className="capitalize">{t}</span>
                </label>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
