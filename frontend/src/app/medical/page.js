import MedicalFond from "@/Components/Education/EducationFond";
import DiscoverMed from "@/Components/Medical/DiscoverMed";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer"


export default function HomePage() {
    return <div>
        <Navbar />
        <DiscoverMed />
        <MedicalFond />
        <Footer />
    </div>
}