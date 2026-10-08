import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Cta } from "@/components/sections/Cta";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Standards } from "@/components/sections/Standards";
import { WhyUs } from "@/components/sections/WhyUs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Standards />
      <About />
      <Services />
      <Process />
      <WhyUs />
      <Industries />
      <Faq />
      <Cta />
      <Contact />
    </main>
  );
}
