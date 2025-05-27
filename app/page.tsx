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
  HomePageHero,
  Poison,
  HappyHour,
} from "@/components";

const Home = () => {
  return (
    <div>
      <HomePageHero />
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
