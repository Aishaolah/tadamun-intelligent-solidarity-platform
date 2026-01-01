import EducationFond from "@/Components/Education/EducationFond";
import DiscoverEdu from "@/Components/Education/DiscoverEdu";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer"


export default function HomePage() {
    return <div>
        <Navbar />
        <DiscoverEdu />
        <EducationFond />
        <Footer />
    </div>
}