import Nav from "@/components/landing/Nav";
import Content from "./Content";

export default function Test() {
  return (
    <section>
      <div className="relative z-[100000]">
        <Nav />
      </div>
      <div className="pt-23 pb-10 px-20 max-[701px]:pt-15 max-[901px]:px-10 max-[701px]:px-5">
        <Content />
      </div>
    </section>
  );
}
