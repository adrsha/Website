import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Plans3 from "./components/Plans3/Plans3";
import Reviews from "./components/Reviews/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Plans3 />
      <Reviews />
    </>
  );
}
