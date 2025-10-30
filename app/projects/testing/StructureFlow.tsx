import FancyUnderline from "@/components/general/FancyUnderline";
import { ibmPlexMono, ubuntu } from "@/components/landing/Main";
import Image from "next/image";
import { v4 } from "uuid";

export default function StructureFlow({}) {
  return (
    <section className="bg-[#1A1E23] relative min-h-[500px] py-20 max-[701px]:py-10">
      <div className="work-bg absolute top-0 bottom-0 left-0 right-0 opacity-30"></div>
      <div className="bg-z absolute h-[400px] w-[508px] max-[701px]:h-[276px] max-[701px]:w-[350px] -translate-y-1/2 top-1/2 right-20 max-[901px]:right-10 max-[701px]:right-5 opacity-5"></div>
      <div className="relative grid gap-20 px-20 max-[901px]:px-10 max-[701px]:px-5">
        <div className="grid gap-10">
          <div className="grid gap-3.5 justify-items-center w-fit justify-self-center">
            <h1 className={`text-[#12F7D6] text-3xl ${ubuntu.className}`}>
              Structure / Flow
            </h1>
            <div className="w-full">
              <FancyUnderline />
            </div>
          </div>
        </div>
        <section className="grid gap-8.5">
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
                Non-registered users will visit the registration page while
                registered users just login with their username or email and
                password
              </p>
            </div>
            {/* Design B4 Next Flow */}
            <div className="absolute w-5 top-[10px] grid justify-center">
              <Image
                src={"/joining_line.svg"}
                className="w-[1px]"
                height={100}
                width={100}
                alt=""
              />
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}
