import AboutSection from "@/components/landing/AboutSection";
import Contact from "@/components/landing/Contact";
import FixedBar from "@/components/landing/FixedBar";
import Footer from "@/components/landing/Footer";
import Main from "@/components/landing/Main";
import MyWork from "@/components/landing/MyWork";
import Nav from "@/components/landing/Nav";
import ScrollController from "@/components/landing/ScrollController";
import Skills from "@/components/landing/Skills";

import { Suspense } from "react";

export default function Home() {
  return (
    <section>
      <Suspense fallback={null}>
        <ScrollController />
      </Suspense>

      <FixedBar />
      <div className="relative z-[100000]">
        <Nav />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <Skills />
      </div>
      <div className="relative">
        <MyWork />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
