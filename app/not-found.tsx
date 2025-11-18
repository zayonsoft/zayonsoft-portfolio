import { ubuntu } from "@/components/landing/Main";
import Nav from "@/components/landing/Nav";
import { BsFillEmojiFrownFill } from "react-icons/bs";
export default function NotFound() {
  return (
    <section>
      <div className="relative z-[100000]">
        <Nav />
      </div>
      <section className="pt-20 pb-10 px-20 max-[901px]:px-10 max-[701px]:px-5">
        <div className={`${ubuntu.className}`}>
          <h1 className="grid gap-1 justify-items-center py-20 text-[#12F7D6] text-xl">
            <span className="text-2xl">
              <BsFillEmojiFrownFill />
            </span>
            <span>
              Sorry, the page you&#39;re looking for could not be found!
            </span>
          </h1>
        </div>
      </section>
    </section>
  );
}
