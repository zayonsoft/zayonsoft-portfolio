import { IBM_Plex_Mono, Ubuntu } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BiLink } from "react-icons/bi";
import { CgBriefcase, CgMail } from "react-icons/cg";
import { SlLocationPin } from "react-icons/sl";
import ResumeDownloadButton from "./ResumeDownloadButton";

export const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function Main() {
  const myMail = "favourlosotu@gmail.com";
  const numberOfLanguages =
    Number(process.env.NEXT_PUBLIC_NO_OF_LANGUAGES) || 0;
  const numberOfDevTools = Number(process.env.NEXT_PUBLIC_NO_OF_DEV_TOOLS) || 0;
  const startYear =
    Number(process.env.NEXT_PUBLIC_START_YEAR) || new Date().getFullYear();
  const currentYear = new Date().getFullYear();
  return (
    <section
      id="home"
      className="pt-27 pb-10 px-20 grid gap-16 max-[901px]:px-10 max-[701px]:px-5"
    >
      <h1 className="hidden" style={{ display: "none" }}>
        TONY-AKINLOSOTU FAVOUR ADENIRAN &apos;S WEBSITE - ZAYONSOFT
      </h1>
      <div className="grid gap-1 grid-cols-[0.65fr_1fr] max-[780px]:grid-cols-[0.7fr_1fr] max-[701px]:grid-cols-1 max-[701px]:gap-8">
        <div className="pr-10 max-[840px]:pr-0">
          <div className="grid rounded-full p-[5px] profile-pic max-w-[290px] justify-self-end max-[701px]:justify-self-center">
            <div className="relative z-10">
              <Image
                className="w-auto min-w-20 h-[90vh] rounded-full select-none object-center max-[701px]:min-w-auto max-[701px]:h-auto"
                src={"/zayonsoft_pic.png"}
                height={1500}
                width={1000}
                alt="Zayonsoft's Picture"
              />
              {/* DIv for overlay for the picture */}
              <div className="grid content-end absolute pic-gradient font-normal text-center py-10 top-0 left-0 bottom-0 right-0 rounded-full">
                {/* Picture Texts goes below */}
                <div className="grid gap-5 justify-self-center">
                  <div className={`${ubuntu.className} grid gap-1.5`}>
                    <p className={`text-white text-4xl`}>Favour</p>
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
                    <ResumeDownloadButton />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid content-center text-white">
          {/* Section for the text */}
          <section
            className={`max-[840px]:pl-10 grid gap-8 ${ubuntu.className} max-[701px]:pl-0`}
          >
            <div className="grid gap-2">
              <p className={`${ibmPlexMono.className} text-xs text-[#98FAEC]`}>
                {"<h1>"}
              </p>
              <div className={`grid gap-3 pl-4  text-4xl ${ubuntu}`}>
                <p>Hey</p>
                <p>
                  I&apos;m <span className="text-[#12F7D6]">Favour</span>,
                </p>
                <p>
                  <span>Full-stack developer </span>
                  <span
                    className={`${ibmPlexMono.className} text-xs text-[#98FAEC]`}
                  >
                    {"</h1>"}
                  </span>
                </p>
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
                you&apos;re looking for a developer that likes to get stuff
                done.
              </p>
              <p className={`${ibmPlexMono.className} text-xs text-[#98FAEC]`}>
                {"</p>"}
              </p>
              <p className="flex gap-2 items-center capitalize text-3xl text-[#12F7D6] ml-5 pt-2">
                <span className={`${ibmPlexMono.className}`}>
                  let&apos;s talk
                </span>
                <span className="text-lg bg-[#43454D] p-1.5 rounded-full">
                  <Link
                    href={`mailto:${myMail}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CgMail />
                  </Link>
                </span>
              </p>
            </div>
            <div></div>
          </section>
        </div>
      </div>
      {/* Div BElow Shows the count and experience */}
      <div
        className={`bg-black w-full p-8 max-w-[920px] m-auto rounded-full grid justify-center max-[550px]:w-auto max-[550px]:py-15  max-[550px]:px-9`}
      >
        <section
          className={`${ibmPlexMono.className} flex gap-10 max-[550px]:flex-col`}
        >
          <div className="flex items-center gap-2">
            <h2 className="text-[#12F7D6] text-5xl">{numberOfLanguages}</h2>
            <p className="text-white grid text-xs">
              <span>Programing</span>
              <span>Languages</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <h2 className="text-[#12F7D6] text-5xl">{numberOfDevTools}</h2>
            <p className="text-white grid text-xs">
              <span>Development</span>
              <span>Tools</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-[#12F7D6] text-5xl">
              {currentYear - startYear}
            </h2>
            <p className="text-white grid text-xs">
              <span>Years of</span>
              <span>Experience</span>
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
