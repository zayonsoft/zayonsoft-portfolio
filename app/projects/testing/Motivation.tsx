import FancyUnderline from "@/components/general/FancyUnderline";
import { ibmPlexMono, ubuntu } from "@/components/landing/Main";

type MotivationProps = {
  problem: string;
};
export default function Motivation({ problem }: MotivationProps) {
  return (
    <section className="grid py-15 gap-10  px-20 max-[901px]:px-10 max-[701px]:px-5">
      <div className="grid gap-3.5 justify-items-center w-fit justify-self-center">
        <h1 className={`text-[#12F7D6] text-3xl ${ubuntu.className}`}>
          Problem / Motivation
        </h1>
        <div className="w-full">
          <FancyUnderline />
        </div>
      </div>
      <div className="relative">
        <div className="absolute rounded-xl text-bg-design left-0 right-0 top-0 bottom-0 opacity-[8%]"></div>
        <p
          className={`relative rounded-xl p-5 text-white ${ibmPlexMono.className} font-normal text-sm max-[701px]:font-normal max-[701px]:text-[13px]`}
        >
          {problem}
        </p>
      </div>
    </section>
  );
}
