import React from "react";
import { useFormContext } from "react-hook-form";

export default function Step2CoreInfo() {
  const { register, watch, formState } = useFormContext();
  const role = watch("step1.role");
  const donorSub = watch("step1.donorSubRole");
  const beneficiarySub = watch("step1.beneficiarySubRole");
  const { errors } = formState;

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Full name</label>
        <input {...register("step2.fullName")} className="mt-1 block w-full rounded-md border p-2" />
        <p className="text-sm text-red-600">{errors?.step2?.fullName?.message}</p>
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" {...register("step2.email")} className="mt-1 block w-full rounded-md border p-2" />
        <p className="text-sm text-red-600">{errors?.step2?.email?.message}</p>
      </div>

      <div>
        <label className="block text-sm font-medium">Password</label>
        <input type="password" {...register("step2.password")} className="mt-1 block w-full rounded-md border p-2" />
        <p className="text-sm text-red-600">{errors?.step2?.password?.message}</p>
      </div>

      {/* Donor - Individual */}
      {role === "donor" && donorSub === "individual" && (
        <>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input {...register("step2.phone")} className="mt-1 block w-full rounded-md border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Address</label>
            <input {...register("step2.address")} className="mt-1 block w-full rounded-md border p-2" />
          </div>
        </>
      )}

      {/* Donor - Organization */}
      {role === "donor" && (donorSub === "enterprise" || donorSub === "association") && (
        <>
          <div>
            <label className="block text-sm font-medium">Organization Name</label>
            <input {...register("step2.organizationName")} className="mt-1 block w-full rounded-md border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Tax ID</label>
            <input {...register("step2.taxId")} className="mt-1 block w-full rounded-md border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Contact Person</label>
            <input {...register("step2.contactPerson")} className="mt-1 block w-full rounded-md border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Official Address</label>
            <input {...register("step2.officialAddress")} className="mt-1 block w-full rounded-md border p-2" />
          </div>
        </>
      )}

      {/* Volunteer */}
      {role === "volunteer" && (
        <>
          <div>
            <label className="block text-sm font-medium">Skills (comma separated)</label>
            <input {...register("step2.skills")} placeholder="e.g. teaching, first aid" className="mt-1 block w-full rounded-md border p-2" />
            <p className="text-sm text-gray-500">We'll split by commas into an array before sending to the API.</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Availability</label>
            <input {...register("step2.availability")} className="mt-1 block w-full rounded-md border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Why do you want to volunteer?</label>
            <textarea {...register("step2.motivation")} className="mt-1 block w-full rounded-md border p-2" />
          </div>
        </>
      )}

      {/* Beneficiary */}
      {role === "beneficiary" && (
        <>
          <div>
            <label className="block text-sm font-medium">Story / Description of Need</label>
            <textarea {...register("step2.story")} className="mt-1 block w-full rounded-md border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Urgency</label>
            <select {...register("step2.urgency")} className="mt-1 block w-full rounded-md border p-2">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Location</label>
            <input {...register("step2.location")} className="mt-1 block w-full rounded-md border p-2" />
          </div>
        </>
      )}
    </div>
  );
}
