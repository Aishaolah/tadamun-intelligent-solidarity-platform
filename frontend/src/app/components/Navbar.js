import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow py-3 px-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900">
          TADAMUN
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-gray-600 hover:text-gray-900">
            Login
          </Link>
          <Link href="/signup" className="text-gray-600 hover:text-gray-900">
            Sign Up
          </Link>
          <Link 
            href="/demo" 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            🧠 AI Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
