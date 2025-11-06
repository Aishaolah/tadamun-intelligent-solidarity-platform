
import MapClient from '@/Components/MapClient';
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import Company from '@/Components/company';
import Diagram from '@/Components/Diagram';
import Reviews from '@/Components/Reviews';
import Donate from '@/Components/Donate';
import Categories from '@/Components/Categories';

export default function Page() {
  return (
    <div>
      <Navbar />
      <Donate />
      <Categories/>
    </div>
  );
}

