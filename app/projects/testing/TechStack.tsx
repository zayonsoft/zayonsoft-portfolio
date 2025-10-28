import FancyUnderline from "@/components/general/FancyUnderline";
import { ubuntu } from "@/components/landing/Main";
import Image from "next/image";
import { v4 } from "uuid";

type StackProps = {
  stack_images: string[];
};

export default function TechStack({ stack_images }: StackProps) {
  return (
    <section className="relative bg-[#1A1E23]">
      <div className="absolute about-bg top-0 right-0 bottom-0 left-0 opacity-[10%]"></div>
      <div className="relative grid py-25 gap-20 px-20 max-[901px]:px-10 max-[701px]:px-5 max-[701px]:py-8">
        <div className="grid gap-3.5 justify-items-center w-fit justify-self-center">
          <h1 className={`text-[#12F7D6] text-3xl ${ubuntu.className}`}>
            Tech Stack
          </h1>
          <div className="w-full">
            <FancyUnderline />
          </div>
        </div>

        <section className="relative">
          <div className="relative flex gap-10 justify-evenly max-[701px]:gap-5 items-start">
            {stack_images.map((image_url) => (
              <div key={v4()}>
                <Image
                  className="w-full select-none"
                  src={image_url}
                  width={1000}
                  height={1000}
                  alt="Stack Image"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
