import Advantages from "./components/Advantages";
import { Comparison } from "./components/Comparison";
import Features from "./components/Features";
import Hero from "./components/Hero";
import { Pricing } from "./components/Pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Comparison />
      <Features />
      <Advantages />
      <Pricing />
    </main>
  );
}
