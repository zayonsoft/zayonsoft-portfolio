import Image from "next/image";
import { ubuntu } from "./Main";

export default function Skills() {
  return (
    <section className="bg-[#292F36] relative px-20 max-[901px]:px-10 max-[701px]:px-5 py-20 max-[701px]:py-10">
      <div className="skills-bg absolute top-0 bottom-0 left-0 right-0 opacity-10"></div>
      <div>
        <section className={`max-[701px]:hidden grid gap-25`}>
          <div className="grid gap-10">
            <Image
              src={"/section_top_icons.svg"}
              className="m-auto w-auto h-30"
              width={100}
              height={100}
              alt="Design Icon"
            ></Image>
            <div className="grid gap-1 justify-items-center">
              <h1 className={`text-[#12F7D6] text-3xl ${ubuntu.className}`}>
                Skills
              </h1>
              <div>
                <Image
                  className="w-full"
                  src={"/classic_underline.svg"}
                  height={100}
                  width={100}
                  alt="Underline"
                />
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
      </div>
    </section>
  );
}
