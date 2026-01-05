
import Donate from "@/Components/Donate/Donate";
import Categories from "@/Components/Donate/Categories";
import More from "@/Components/Donate/More";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function SignUpPage() {
    return (
        <div>
            <Navbar />
            <Donate />
            <Categories />
            <More />
            <Footer />
        </div>
    );
}