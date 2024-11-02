import Image from "next/image";
import Navbar from "./component/Navbar"
import Slider from "./component/Slider"
import Sub from "./component/Sub"
import About from "./component/About"
import Style from "./component/Style"
import Design from "./component/Design"
import Hero from "./component/Hero"
import Services from "./component/Services"
import Data from "./component/Data";
import Contact from "./component/Contact"
function Home() {
  return (
    <div className="">
      <Navbar />
      <Data />
      <Slider  />
      <Sub />
      <About />
      <Style />
      <Services />
      <Hero />
      <Design />
      <Contact />
    </div>
  );
}
export default Home