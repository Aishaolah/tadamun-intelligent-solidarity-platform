import Hero from "@/Components/Home/Hero";
import Company from "@/Components/Home/company";
import Reviews from "@/Components/Home/Reviews";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import CategoriesSection from "@/Components/Home/CategoriesSection";
import HowItWorks from "@/Components/Home/HowItWorks";
import ImpactStats from "@/Components/Home/ImpactStats";

export default function HomePage() {
    return <div>
        <Navbar />
        <Hero />
        <Company />
        <HowItWorks />
        <CategoriesSection />
        <ImpactStats />
        <Reviews />
        <Footer />
    </div>
}