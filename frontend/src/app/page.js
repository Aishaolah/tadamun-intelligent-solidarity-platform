import Navbar from '@/Components/Navbar';
import Home from '@/Components/Home'
import About from "@/Components/About"
import SignUp from "@/Components/SignUp"
import Login from "@/Components/Login"

export default function Page() {
  return (
    <div>
      <Navbar />
      <About />
      <SignUp/>
      <Login/>
    </div>
  );
}
