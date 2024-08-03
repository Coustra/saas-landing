import Advantages from "./components/Advantages";
import { Comparison } from "./components/Comparison";
import Features from "./components/Features";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Comparison />
      <Features />
      <Advantages />
    </main>
  );
}
