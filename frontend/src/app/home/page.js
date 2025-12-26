import Hero from "@/Components/Home/Hero";
import Company from "@/Components/Home/company";
import Reviews from "@/Components/Home/Reviews";
import Navbar from "@/Components/Home/Navbar";

export default function HomePage() {
    return <div>
        <Navbar />
        <Hero />
        <Company />
        <Reviews />
    </div>
}