import Image from "next/image";
import { ubuntu } from "./Main";
import CoreSkills from "./CoreSkills";
import FancyUnderline from "../general/FancyUnderline";

export default function Skills() {
  return (
    <section className="bg-[#292F36] relative px-20 max-[901px]:px-10 max-[701px]:px-5 py-20 max-[701px]:py-10">
      <div className="skills-bg absolute top-0 bottom-0 left-0 right-0 opacity-10"></div>
      <div className="relative grid gap-50">
        <section className={`max-[701px]:hidden grid gap-25`}>
          <div className="grid gap-10">
            <Image
              src={"/section_top_icons.svg"}
              className="m-auto w-auto h-30"
              width={100}
              height={100}
              alt="Design Icon"
            ></Image>
            <div className="grid gap-2 justify-items-center w-fit justify-self-center">
              <h1 className={`text-[#12F7D6] text-3xl ${ubuntu.className}`}>
                Skills
              </h1>
              <div className="w-full">
                <FancyUnderline />
              </div>
            </div>
          </div>
          <div>
            <Image
              src={"/skills_image.svg"}
              height={1000}
              width={1000}
              className="w-full h-auto max-w-[850px] m-auto"
              alt="Skills Image"
            />
          </div>
        </section>
        <CoreSkills />
      </div>
    </section>
  );
}
