import {
  About,
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  Navbar,
  Reservations,
  SpecialMenu,
  Testimony,
} from "@/components";
import HappyHour from "@/components/HappyHour";
import Poison from "@/components/Poison";

const Home = () => {
  return (
    <div className='bg-[url("/assets/wave_element.png")] bg-black bg-cover bg-center bg-no-repeat'>
      <Navbar />
      <Header />
      <AboutUs />
      <Reservations />
      <SpecialMenu />
      <Chef />
      <About />
      <Testimony />
      <HappyHour />
      <Intro />
      <Laurels />
      <Poison />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default Home;
