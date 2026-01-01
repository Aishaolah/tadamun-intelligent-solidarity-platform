/*import Transparency from "@/Components/Transparency";
import Story from "@/Components/Story";
import Mission from "@/Components/Mission";*/
import Donate from "@/Components/Donate/Donate";
import Categories from "@/Components/Donate/Categories";
import Featured from "@/Components/Donate/Featured";
import More from "@/Components/Donate/More"
import Navbar from "@/Components/Navbar";

export default function SignUpPage() {
    return <div>
        <Navbar/>
        <Donate />
        <Categories />
        <Featured />
        <More />
        {/*<Mission />
        <Story />
        <Transparency />*/}
    </div>
}