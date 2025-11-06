
import MapClient from '@/Components/MapClient';
import Navbar from '@/Components/Navbar';
import About from "@/Components/About"
import SignUp from "@/Components/SignUp"
import Login from "@/Components/Login"
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
      <About />
      <SignUp/>
      <Hero />
      <Company />
      <Diagram />
      <Reviews />
      <Login/>
      <Donate />
      <Categories/>
    </div>
  );
}

