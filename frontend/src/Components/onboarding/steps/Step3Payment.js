import React from "react";
import { useFormContext } from "react-hook-form";

export default function Step3Payment() {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600">
        This is a mocked payment UI. Replace with Stripe Elements (or your gateway) in production. Do not collect raw card data on
        your server — always tokenize via the gateway.
      </div>

      <div>
        <label className="block text-sm font-medium">Card number</label>
        <input {...register("step3.cardNumber")} placeholder="4242 4242 4242 4242" className="mt-1 block w-full rounded-md border p-2" />
        <p className="text-sm text-red-600">{errors?.step3?.cardNumber?.message}</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium">Expiry (MM/YY)</label>
          <input {...register("step3.cardExpiry")} placeholder="MM/YY" className="mt-1 block w-full rounded-md border p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">CVC</label>
          <input {...register("step3.cardCVC")} placeholder="CVC" className="mt-1 block w-full rounded-md border p-2" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Postal code</label>
        <input {...register("step3.postalCode")} className="mt-1 block w-full rounded-md border p-2" />
      </div>

      <div className="text-xs text-gray-500">
        Note: On submit we call a mock <code>processPaymentIntent()</code> which simulates tokenization. Replace with server-assisted
        tokenization in production.
      </div>
    </div>
  );
}
