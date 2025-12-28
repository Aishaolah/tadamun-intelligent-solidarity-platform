// Temporarily comment out the problematic import
// import MultiStepForm from "../../Components/onboarding/MultiStepForm";

export default function SignupPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Sign Up
      </h1>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        Create your TADAMUN account.
      </p>
      <div style={{ background: '#f9fafb', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <p style={{ marginBottom: '1rem' }}>
          Sign up functionality will be restored soon.
        </p>
        <a 
          href="/login" 
          style={{ 
            display: 'inline-block',
            padding: '0.75rem 1.5rem', 
            background: '#2563eb', 
            color: 'white',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: '500'
          }}
        >
          Go to Login
        </a>
      </div>
    </div>
  );
}
