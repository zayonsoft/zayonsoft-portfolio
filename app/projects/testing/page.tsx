import Nav from "@/components/landing/Nav";
import Content from "./Content";

export default function Test() {
  return (
    <section>
      <div className="relative z-[100000]">
        <Nav />
      </div>
      <div className="pt-23 max-[701px]:pt-15">
        <Content />
      </div>
    </section>
  );
}
