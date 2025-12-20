"use client";
import AuthForm from "../../components/AuthForm";
// ...existing code...
export default function LoginPage() {
  return (
    <main className="min-h-[calc(100vh-6rem)] flex items-center py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="hidden md:block">
            <img src="/login-illustration.jpg" alt="login" className="w-full h-auto rounded-lg object-cover" />
          </div>

          <div>
            <AuthForm />
          </div>
        </div>
      </div>
    </main>
  );
}
// ...existing code...