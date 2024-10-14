import Hero from "./components/Hero/Hero";
import Plans3 from "./components/Plans3/Plans3";
import Reviews from "./components/Reviews/Reviews";
import Faq from "./components/Faq/Faq";
import Why from "./components/Why/Why";
// import Compare from "./comparison/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Plans3 />
      <Why />
      <Reviews />
      <Faq />
    </>
  );
}
