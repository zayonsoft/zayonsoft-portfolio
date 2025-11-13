import { ubuntu } from "@/components/landing/Main";
import Image from "next/image";

type ProjectPicsProps = {
  image_urls: string[];
};

export default function ProjectPics2({ image_urls }: ProjectPicsProps) {
  return (
    <section className="relative">
      <div className="absolute skills-bg top-0 right-0 bottom-0 left-0 opacity-[10%]"></div>
      <div className="relative grid py-15 gap-15 px-20 max-[901px]:px-10 max-[701px]:px-5 max-[701px]:py-8">
        <section className="relative">
          <div className="absolute top-0 bottom-0 right-0 left-0">
            <div className="absolute project-img-gradient -left-[15%] -top-[25%] -bottom-[20%] w-[45%]"></div>
            <div className="absolute project-img-gradient left-[15%] -top-[25%] -bottom-[20%] w-[45%]"></div>
            <div className="absolute project-img-gradient left-[45%] -top-[25%] -bottom-[20%] w-[45%]"></div>
            <div className="absolute project-img-gradient left-[65%] -top-[25%]  -bottom-[20%] w-[45%]"></div>
          </div>
          <div className="relative grid gap-10 grid-cols-[0.5fr_1fr] max-[701px]:gap-5">
            <div>
              <Image
                className="rounded-xl border-[1.5px] border-[#12F7D6] h-full object-cover object-center select-none"
                src={image_urls[0]}
                height={1000}
                width={2000}
                alt="Project Image"
                draggable={false}
              />
            </div>
            <div>
              <Image
                className="rounded-xl border-[1.5px] border-[#12F7D6] h-full object-cover object-center select-none"
                src={image_urls[1]}
                height={1000}
                width={2000}
                alt="Project Image"
                draggable={false}
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
