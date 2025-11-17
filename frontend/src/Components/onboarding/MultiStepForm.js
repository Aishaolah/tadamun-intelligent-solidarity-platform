"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OnboardingFullSchema } from "../../lib/schemas/onboarding";
import Step1AccountType from "./steps/Step1AccountType";
import Step2CoreInfo from "./steps/Step2CoreInfo";
import Step3Payment from "./steps/Step3Payment";
import Step4Preferences from "./steps/Step4Preferences";

const STEP_TITLES = [
  "Account type",
  "Core information",
  "Payment (donors only)",
  "Help preferences",
];

export default function MultiStepForm() {
  const methods = useForm({
    resolver: zodResolver(OnboardingFullSchema),
    defaultValues: {
      step1: { role: "donor" },
      step2: undefined,
      step3: undefined,
      step4: {},
    },
    mode: "onBlur",
  });

  const [stepIndex, setStepIndex] = useState(0);

  const goNext = async () => {
    const valid = await methods.trigger();
    if (!valid) {
      return;
    }
    setStepIndex((s) => Math.min(s + 1, STEP_TITLES.length - 1));
  };

  const goBack = () => setStepIndex((s) => Math.max(0, s - 1));

  const onSubmit = async (data) => {
    console.log("Final onboarding payload:", data);

    if (data.step1.role === "donor" && data.step3) {
      await processPaymentIntentMock(data.step3);
    }

    alert("Signup complete (mock). Check console for payload.");
  };

  const processPaymentIntentMock = async (payment) => {
    console.log("Mock process payment intent:", payment);
    return new Promise((res) => setTimeout(res, 500));
  };

  const role = methods.getValues("step1")?.role;
  const showPaymentStep = role === "donor";

  const visibleSteps = showPaymentStep
    ? [<Step1AccountType key="s1" />, <Step2CoreInfo key="s2" />, <Step3Payment key="s3" />, <Step4Preferences key="s4" />]
    : [<Step1AccountType key="s1" />, <Step2CoreInfo key="s2" />, <Step4Preferences key="s4" />];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-6"
          noValidate
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{STEP_TITLES[stepIndex]}</h2>
            <div className="text-sm text-gray-500">
              Step {stepIndex + 1} / {visibleSteps.length}
            </div>
          </div>

          <div>{visibleSteps[stepIndex]}</div>

          <div className="flex justify-between gap-2">
            <button
              type="button"
              onClick={goBack}
              disabled={stepIndex === 0}
              className="px-4 py-2 rounded-md border disabled:opacity-50"
            >
              Back
            </button>

            {stepIndex < visibleSteps.length - 1 ? (
              <button
                type="button"
                onClick={goNext}
                className="px-4 py-2 rounded-md bg-blue-600 text-white"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-green-600 text-white"
              >
                Complete Signup
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
