"use client";
import { ibmPlexMono } from "@/components/landing/Main";
import Image from "next/image";

type FlowProps = {
  step: string;
  index: number;
  array: string[];
  flowData: Record<string | number, boolean>;
};
export default function Flow({ index, array, step, flowData }: FlowProps) {
  return (
    <section className="custom-transition relative grid grid-cols-[auto_1fr] gap-2.5 items-start">
      <div className="relative">
        <Image
          src={"/star_icon.svg"}
          className={`custom-transition w-5 h-5 select-none  ${
            flowData[index] ? "opacity-100" : "opacity-30"
          }`}
          height={100}
          width={100}
          alt="."
          draggable={false}
        />
      </div>
      <div className="absolute left-[45px]">
        <p className={`${ibmPlexMono.className} text-white text-sm`}>{step}</p>
      </div>
      {/* Design B4 Next Flow */}
      {array.length - 1 == index ? null : (
        <div
          className={`custom-transition absolute w-5 top-0 grid justify-center ${
            flowData[index + 1] ? "opacity-100" : "opacity-30"
          } select-none`}
        >
          <Image
            src={"/joining_line.svg"}
            className="w-[1px]"
            height={100}
            width={100}
            alt=""
            draggable={false}
          />
        </div>
      )}
    </section>
  );
}
