import FixedBar from "@/components/landing/FixedBar";
import Main from "@/components/landing/Main";
import Nav from "@/components/landing/Nav";
import Image from "next/image";

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
    </section>
  );
}
