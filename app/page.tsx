import AboutSection from "@/components/landing/AboutSection";
import Contact from "@/components/landing/Contact";
import FixedBar from "@/components/landing/FixedBar";
import Footer from "@/components/landing/Footer";
import Main from "@/components/landing/Main";
import MyWork from "@/components/landing/MyWork";
import Nav from "@/components/landing/Nav";
import Skills from "@/components/landing/Skills";

export default function Home() {
  return (
    <section>
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
      <div>
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
