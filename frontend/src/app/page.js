import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import Company from '@/Components/company';
import Diagram from '@/Components/Diagram';

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Company />   {/* animated partners */}
      <Diagram />   {/* now clean, no logos */}
    </div>
  );
}

