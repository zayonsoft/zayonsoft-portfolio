import { ibmPlexMono } from "@/components/landing/Main";
import Image from "next/image";
type HeroProps = {
  name: string;
  type: string;
  year: string;
  overview: string;
  hero_img1: string;
  hero_img2: string;
};

export default function Hero({
  name,
  overview,
  type,
  year,
  hero_img1,
  hero_img2,
}: HeroProps) {
  return (
    <section className="grid gap-10 py-10">
      <div
        className={`${ibmPlexMono.className} flex justify-between items-center max-[701px]:grid max-[701px]:justify-stretch max-[701px]:gap-1`}
      >
        <p className="text-white text-2xl font-semibold">{name}</p>
        <p
          className={`flex justify-self-end text-sm items-center gap-2 text-[#12F7D6] font-medium`}
        >
          <span className="[word-spacing:0.5rem]">{type}</span>
          <span className="bg-[#12F7D6] h-1 w-1 rounded-full block"></span>
          <span className="">{year}</span>
        </p>
      </div>
      <div className="relative w-full">
        <div className="pop-logo absolute -translate-x-1/2 left-1/2 w-full max-w-[780px] -top-6 -bottom-10"></div>
        <div className="relative grid gap-30 grid-cols-2 max-[901px]:gap-20 max-[701px]:gap-10 max-[701px]:grid-cols-1">
          <div>
            <Image
              className="h-auto rounded-xl border-[#12F7D6] border-[1.5px]"
              src={hero_img1}
              width={10000}
              height={1000}
              alt="Hero Image 1"
            />
          </div>
          <div>
            <Image
              className="h-auto rounded-xl border-[#12F7D6] border-[1.5px]"
              src={hero_img2}
              width={10000}
              height={1000}
              alt="Hero Image 2"
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <p
          className={`text-white ${ibmPlexMono.className} tracking-wide font-medium text-sm max-[701px]:font-normal max-[701px]:text-[13px]`}
        >
          {overview}
        </p>
      </div>
    </section>
  );
}
