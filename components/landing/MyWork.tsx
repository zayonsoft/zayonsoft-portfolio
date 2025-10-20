import Image from "next/image";
import FancyUnderline from "../general/FancyUnderline";
import { ibmPlexMono, ubuntu } from "./Main";
import Projects from "./Projects";

export default function MyWork() {
  return (
    <section className="bg-[#1A1E23] relative py-20 max-[701px]:py-10">
      <div className="work-bg absolute top-0 bottom-0 left-0 right-0 opacity-30"></div>
      <div className="relative grid gap-20">
        <section className={`grid gap-25`}>
          <div className="grid gap-10">
            <Image
              src={"/section_top_icons.svg"}
              className="max-[701px]:hidden m-auto w-auto h-30"
              width={100}
              height={100}
              alt="Design Icon"
            ></Image>
            <div className="grid gap-2 justify-items-center w-fit justify-self-center">
              <h1 className={`text-[#12F7D6] text-3xl ${ubuntu.className}`}>
                My Work
              </h1>
              <div className="w-full">
                <FancyUnderline />
              </div>
            </div>
            <p
              className={` text-white ${ibmPlexMono.className} tracking-wider text-center text-sm m-auto`}
            >
              I had the pleasure of working on these awesome projects
            </p>
          </div>
        </section>
        <div className="px-20 max-[901px]:px-10 max-[701px]:px-5 overflow-x-hidden">
          <Projects />
        </div>
      </div>
    </section>
  );
}
