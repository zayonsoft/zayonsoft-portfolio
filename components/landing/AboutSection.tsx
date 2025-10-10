import Image from "next/image";
import { ubuntu, ibmPlexMono } from "./Main";

export default function AboutSection() {
  return (
    <section className="bg-[#1A1E23] relative px-20 max-[901px]:px-10 max-[701px]:px-5 py-20 max-[701px]:py-10">
      <div className="absolute about-bg top-0 bottom-0 left-0 right-0 opacity-10"></div>
      <div className="grid relative">
        <section className={`max-[701px]:hidden`}>
          <Image
            src={"/section_top_icons.svg"}
            className="m-auto w-auto h-30"
            width={100}
            height={100}
            alt="Design Icon"
          ></Image>
        </section>

        <section className="grid grid-cols-2 gap-5 pt-30 items-center max-[701px]:grid-cols-1 max-[701px]:pt-0">
          <div className="grid gap-12">
            <section className="p-1 bg-[#12F7D6] w-fit rounded-full max-[701px]:m-auto">
              <h1
                className={`${ubuntu.className} capitalize w-fit bg-[#292F36] text-3xl font-light px-10 py-6 rounded-full text-white max-[701px]:text-xl max-[701px]:py-4`}
              >
                About me
              </h1>
            </section>

            <div
              className={`grid gap-3 bg-[#292F36] rounded-[40px] ${ibmPlexMono.className} text-sm text-white py-6 px-10 tracking-wider`}
            >
              <p className={`text-[#98FAEC] ${ibmPlexMono.className}`}>
                {"<p>"}
              </p>
              <p className="text-[#12F7D6]">Hello!</p>
              <p>
                My name is <b>Favour</b> and I specialize in web developement
                that utilizes <span className="text-[#12F7D6]">HTML</span>,
                <span className="text-[#12F7D6]"> CSS</span>,
                <span className="text-[#12F7D6]"> JS</span>, and
                <span className="text-[#12F7D6]"> REACT</span> etc. I am an
                <span className="text-[#12F7D6]"> astute</span> and
                <span className="text-[#12F7D6]"> diplomatic</span> professional
                with an eye for success and unwavering focus towards achieving
                goals. My<span className="text-[#12F7D6]"> versatility </span>
                makes me flexible easily adapting and responding to changes.
                With an ability to work under pressure, I am
                <span className="text-[#12F7D6]"> calm</span> and
                <span className="text-[#12F7D6]"> resilient</span> in solving
                pressing issues through
                <span className="text-[#12F7D6]"> critical thinking</span>{" "}
                skills and
                <span className="text-[#12F7D6]"> exceptional dynamism</span>. I
                am ardent about utilizing my skill-sets to promote
                <span className="text-[#12F7D6]"> organizational values </span>
                and<span className="text-[#12F7D6]"> goals</span>. I am
                enthusiastic about building and working in an
                <span className="text-[#12F7D6]"> innovation-minded </span>
                and growth driven ecosystem.
              </p>

              <p className={`text-[#98FAEC] ${ibmPlexMono.className}`}>
                {"</p>"}
              </p>
            </div>
          </div>

          <div className={``}>
            <Image
              src={"/about_image.jpg"}
              alt="About Image"
              width={1000}
              height={1000}
              className="max-w-[400px] min-w-0 w-full m-auto rounded-2xl"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
