import React from "react";
import MultiStepForm from "../../Components/onboarding/MultiStepForm";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Create your Tadamun account</h1>
          <p className="text-gray-600">Join the platform as a donor, volunteer, or someone in need.</p>
        </header>

        <MultiStepForm />
      </div>
    </main>
  );
}
