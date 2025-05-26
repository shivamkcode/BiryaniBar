import {
  About,
  AboutUs,
  Chef,
  FindUs,
  Gallery,
  Intro,
  Laurels,
  Reservations,
  SpecialMenu,
  Testimony,
} from "@/components";
import HappyHour from "@/components/HappyHour";
import Hero from "@/components/Header";
import Poison from "@/components/Poison";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Reservations />
      <SpecialMenu />
      <Chef />
      <About />
      <HappyHour />
      <Testimony />
      <Intro src="/assets/meal.mp4" />
      <Laurels />
      <Poison />
      <Gallery />
      <FindUs />
    </div>
  );
};

export default Home;
