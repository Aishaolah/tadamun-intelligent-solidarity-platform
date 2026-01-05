import Hero from "@/Components/Home/Hero";
import Company from "@/Components/Home/company";
import Reviews from "@/Components/Home/Reviews";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function HomePage() {
    return <div>
        <Navbar />
        <Hero />
        <Company />
        <Reviews className="mb-10" />
        <Footer />
    </div>
}