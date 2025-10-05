import { IBM_Plex_Mono, Ubuntu } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BiDownload, BiLink } from "react-icons/bi";
import { CgBriefcase, CgMail } from "react-icons/cg";
import { RxDownload } from "react-icons/rx";
import { SlLocationPin } from "react-icons/sl";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function Main() {
  return (
    <section className="pt-27 pb-5 px-20 max-[901px]:px-10 max-[701px]:px-5">
      <div className="grid gap-1 grid-cols-[0.65fr_1fr] max-[701px]:grid-cols-1 max-[701px]:gap-8">
        <div className="pr-10 max-[701px]:pr-0">
          <div className="grid rounded-full p-[5px] profile-pic justify-self-end max-[701px]:justify-self-center">
            <div className=" relative z-10">
              <Image
                className="w-auto min-w-60 h-[85vh] rounded-full max-[701px]:min-w-auto"
                src={"/zayonsoft_pic.png"}
                height={1500}
                width={1000}
                alt="Zayonsoft's Picture"
              />
              {/* DIv for overlay for the picture */}
              <div className="grid content-end absolute pic-gradient font-normal text-center p-10 top-0 left-0 bottom-0 right-0 rounded-full">
                {/* Picture Texts goes below */}
                <div className="grid gap-5 justify-self-center">
                  <div className={`${ubuntu.className} grid gap-1.5`}>
                    <h1 className={`text-white text-4xl`}>Favour</h1>
                    <p className="text-white text-sm">Full-stack developer</p>
                  </div>
                  {/* Details Under name and role below */}
                  <div className={`grid gap-4 ${ibmPlexMono.className}`}>
                    <p className="flex gap-2 items-center">
                      <span className="text-[#12F7D6]">
                        <CgMail />
                      </span>
                      <span className={`text-white text-xs`}>
                        favourlosotu@gmail.com
                      </span>
                    </p>
                    <p className="flex gap-2 items-center">
                      <span className="text-[#12F7D6]">
                        <SlLocationPin />
                      </span>
                      <span className="text-white text-xs">Nigeria</span>
                    </p>
                    <p className="flex gap-2 items-center">
                      <span className="text-[#12F7D6]">
                        <CgBriefcase />
                      </span>
                      <span className="text-white text-xs">
                        Full-time / Freelancer
                      </span>
                    </p>
                    <p className="flex gap-2 items-center">
                      <span className="text-[#12F7D6]">
                        <BiLink />
                      </span>
                      <span className="text-white text-xs">
                        www.zayonsoft.com
                      </span>
                    </p>
                  </div>
                  <section
                    className={`flex items-center gap-1 justify-evenly text-[11px] ${ibmPlexMono.className}`}
                  >
                    <p className="bg-[#12F7D6] text-[#292F36] p-0.5 px-1.5 rounded-md">
                      HTML
                    </p>
                    <p className="bg-[#12F7D6] text-[#292F36] p-0.5 px-1.5 rounded-md">
                      CSS
                    </p>
                    <p className="bg-[#12F7D6] text-[#292F36] p-0.5 px-1.5 rounded-md">
                      JS
                    </p>
                    <p className="bg-[#12F7D6] text-[#292F36] p-0.5 px-1.5 rounded-md">
                      REACT
                    </p>
                  </section>
                  <section className="grid justify-center pt-3">
                    <button
                      className={`cursor-pointer flex gap-3 items-center bg-white text-[#292F36] text-lg rounded-full px-6 py-2.5 ${ubuntu.className}`}
                      type="button"
                    >
                      <span>Resume</span>
                      <span>
                        <RxDownload size={22} />
                      </span>
                    </button>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid content-center text-white">
          {/* Section for the text */}
          <section className={`grid gap-8 ${ubuntu.className}`}>
            <div className="grid gap-2">
              <p className={`${ibmPlexMono.className} text-xs text-[#98FAEC]`}>
                {"<h1>"}
              </p>
              <div className={`grid gap-3 pl-4  text-4xl ${ubuntu}`}>
                <h1>Hey</h1>
                <h1>
                  I'm <span className="text-[#12F7D6]">Favour</span>,
                </h1>
                <h1>
                  <span>Full-stack developer </span>
                  <span
                    className={`${ibmPlexMono.className} text-xs text-[#98FAEC]`}
                  >
                    {"</h1>"}
                  </span>
                </h1>
              </div>
            </div>
            <div className={`grid gap-2`}>
              <p className={`${ibmPlexMono.className} text-xs text-[#98FAEC]`}>
                {"<p>"}
              </p>
              <p
                className={`${ibmPlexMono.className} tracking-wider text-sm pl-4 font-normal`}
              >
                I help business grow by crafting amazing web experiences. If
                you're looking for a developer that likes to get stuff done.
              </p>
              <p className={`${ibmPlexMono.className} text-xs text-[#98FAEC]`}>
                {"</p>"}
              </p>
            </div>
            <div>
              <p className="flex gap-2 items-center capitalize text-3xl text-[#12F7D6]">
                <span className={`${ibmPlexMono.className}`}>let's talk</span>
                <span className="text-lg bg-[#43454D] p-1.5 rounded-full">
                  <Link href={"#"}>
                    <CgMail />
                  </Link>
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
