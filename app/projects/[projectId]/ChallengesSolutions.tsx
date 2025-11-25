import DividingLine from "@/components/general/DividingLine";
import FancyUnderline from "@/components/general/FancyUnderline";
import { ubuntu, ibmPlexMono } from "@/components/landing/Main";
import Image from "next/image";
import { v4 } from "uuid";

type CSProps = {
  challenges_solutions: { challenge: string; solution: string }[];
};

export default function ChallengesSolution({ challenges_solutions }: CSProps) {
  return (
    <section className="grid py-15 gap-10  px-20 max-[901px]:px-10 max-[701px]:px-5">
      <div className="grid gap-3.5 justify-items-center w-fit justify-self-center">
        <h2
          className={`text-[#12F7D6] capitalize text-3xl ${ubuntu.className}`}
        >
          Challenges and Solutions
        </h2>
        <div className="w-full">
          <FancyUnderline />
        </div>
      </div>
      {challenges_solutions.map(
        (
          cs,
          index: number,
          array: { challenge: string; solution: string }[]
        ) => (
          <div className="grid gap-15" key={v4()}>
            {/* Challenge */}
            <section className="grid gap-1">
              <div
                key={v4()}
                className="relative grid grid-cols-[auto_1fr] gap-2.5 items-center"
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
                  <p
                    className={`${ibmPlexMono.className} capitalize text-[#12F7D6] font-medium text-lg`}
                  >
                    Challenge
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute rounded-xl text-bg-design left-0 right-0 top-0 bottom-0 opacity-[8%]"></div>
                <p
                  className={`relative rounded-xl p-5 text-white ${ibmPlexMono.className} font-normal text-sm max-[701px]:font-normal max-[701px]:text-[13px]`}
                >
                  {cs.challenge}
                </p>
              </div>
            </section>

            {/* Solution */}
            <section className="grid gap-1">
              <div className="relative grid grid-cols-[auto_1fr] gap-2.5 items-center">
                <div>
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
                  <p
                    className={`${ibmPlexMono.className} capitalize text-[#12F7D6] font-medium text-lg`}
                  >
                    Solution
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute rounded-xl text-bg-design left-0 right-0 top-0 bottom-0 opacity-[8%]"></div>
                <p
                  className={`relative rounded-xl p-5 text-white ${ibmPlexMono.className} font-normal text-sm max-[701px]:font-normal max-[701px]:text-[13px]`}
                >
                  {cs.solution}
                </p>
              </div>
            </section>

            {/* The dividing Line Shouldn't show after the last element has been rendered */}

            {index == array.length - 1 ? null : <DividingLine />}
          </div>
        )
      )}
    </section>
  );
}
