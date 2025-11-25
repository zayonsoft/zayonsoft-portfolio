import FancyUnderline from "@/components/general/FancyUnderline";
import { ubuntu, ibmPlexMono } from "@/components/landing/Main";
import Image from "next/image";
import { v4 } from "uuid";

type DpProps = {
  design_principles: string[];
};

export default function DesignPrinciples({ design_principles }: DpProps) {
  return (
    <section className="grid py-15 gap-10  px-20 max-[901px]:px-10 max-[701px]:px-5">
      <div className="grid gap-3.5 justify-items-center w-fit justify-self-center">
        <h2
          className={`text-[#12F7D6] capitalize text-3xl ${ubuntu.className}`}
        >
          Design Principles
        </h2>
        <div className="w-full">
          <FancyUnderline />
        </div>
      </div>
      <div className="grid gap-15">
        {design_principles.map((principle) => (
          <section
            key={v4()}
            className="relative grid grid-cols-[auto_1fr] gap-2.5 items-start"
          >
            <div className="">
              <Image
                src={"/star_icon.svg"}
                className="w-5 h-5 select-none"
                height={100}
                width={100}
                alt="."
                draggable={false}
              />
            </div>
            <div>
              <p className={`${ibmPlexMono.className} text-white text-sm`}>
                {principle}
              </p>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
