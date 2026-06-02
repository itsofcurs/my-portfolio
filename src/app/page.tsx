import Hero from "@/components/sections/Hero";
import Signal from "@/components/sections/Signal";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import SelectedWork from "@/components/sections/SelectedWork";
import Constellation from "@/components/sections/Constellation";
import Archive from "@/components/sections/Archive";
import Recognition from "@/components/sections/Recognition";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Signal />
      <Experience />
      <Education />
      <SelectedWork />
      <Constellation />
      <Archive />
      <Recognition />
      <Contact />
    </>
  );
}
