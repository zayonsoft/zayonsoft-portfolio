import FancyUnderline from "@/components/general/FancyUnderline";
import { ibmPlexMono, ubuntu } from "@/components/landing/Main";
import Image from "next/image";
import Link from "next/link";
import { v4 } from "uuid";

type DLProps = {
  live_demo_link: string;
  source_code_link: string;
  role: { title: string; desc: string };
};

export default function DemoLink({
  source_code_link,
  live_demo_link,
  role,
}: DLProps) {
  return (
    <section className="relative bg-[#1A1E23]">
      <div className="absolute about-bg top-0 right-0 bottom-0 left-0 opacity-[10%]"></div>
      <div className="relative grid py-25 gap-20 px-20 max-[901px]:px-10 max-[701px]:px-5 max-[701px]:py-8">
        <div className="grid gap-3.5 justify-items-center w-fit justify-self-center">
          <h1
            className={`text-[#12F7D6] capitalize text-3xl ${ubuntu.className}`}
          >
            Demo and Links
          </h1>
          <div className="w-full">
            <FancyUnderline />
          </div>
        </div>

        <section className="relative grid gap-15">
          <div className="grid gap-2">
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
              {/* CLick Me Shouldn't show if it's unavailable */}
              <div>
                <p
                  className={`${ibmPlexMono.className} flex gap-2.5 items-center capitalize text-white font-medium text-lg`}
                >
                  <span>Live Demo</span>
                  {live_demo_link.trim() == "" ? null : (
                    <span className="text-sm bg-[#12F7D6] text-[#292F36] py-1.5 px-4 rounded-full">
                      <Link
                        className="block"
                        href={live_demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click Me
                      </Link>
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* If the project is not deployed or link unavailable */}
            {live_demo_link.trim() == "" ? (
              <div className="relative">
                <div className="absolute left-0 right-0 top-0 bottom-0">
                  <div className="absolute rounded-xl left-0 right-0 top-0 bottom-0 blur-text-bg opacity-[35%]"></div>
                  <div className="absolute rounded-xl text-bg-design left-0 right-0 top-0 bottom-0 opacity-[15%]"></div>
                </div>
                <p
                  className={`relative capitalize rounded-xl p-5 text-[#12F7D6] ${ibmPlexMono.className} font-normal text-sm max-[701px]:font-normal max-[701px]:text-[13px]`}
                >
                  Demo Link Unavailable
                </p>
              </div>
            ) : null}
          </div>

          {/* ------------------------------------------------------------------------------------------- */}

          <div className="grid gap-2">
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
              {/* CLick Me Shouldn't show if it's unavailable */}
              <div>
                <p
                  className={`${ibmPlexMono.className} flex gap-2.5 items-center capitalize text-white font-medium text-lg`}
                >
                  <span>Source Code (GitHub)</span>
                  {source_code_link.trim() == "" ? null : (
                    <span className="text-sm bg-[#12F7D6] text-[#292F36] py-1.5 px-4 rounded-full">
                      <Link
                        className="block"
                        href={source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click Me
                      </Link>
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* If the project Github link is unavailable */}

            {source_code_link.trim() == "" ? (
              <div className="relative">
                <div className="absolute left-0 right-0 top-0 bottom-0">
                  <div className="absolute rounded-xl left-0 right-0 top-0 bottom-0 blur-text-bg opacity-[35%]"></div>
                  <div className="absolute rounded-xl text-bg-design left-0 right-0 top-0 bottom-0 opacity-[15%]"></div>
                </div>
                <p
                  className={`relative capitalize rounded-xl p-5 text-[#12F7D6] ${ibmPlexMono.className} font-normal text-sm max-[701px]:font-normal max-[701px]:text-[13px]`}
                >
                  repo link coming
                </p>
              </div>
            ) : null}
          </div>

          {/* ------------------------------------------------------------------------------------------- */}
          <div className="grid gap-2">
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
                  className={`${ibmPlexMono.className} capitalize text-white font-medium text-lg`}
                >
                  <span>My Role</span>
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-0 right-0 top-0 bottom-0">
                <div className="absolute rounded-xl left-0 right-0 top-0 bottom-0 blur-text-bg opacity-[35%]"></div>
                <div className="absolute rounded-xl text-bg-design left-0 right-0 top-0 bottom-0 opacity-[15%]"></div>
              </div>
              <p
                className={`relative capitalize rounded-xl p-5 ${ibmPlexMono.className} font-normal text-sm max-[701px]:font-normal max-[701px]:text-[13px]`}
              >
                <span className="text-[#12F7D6]">{role.title}</span>
                <span className="text-white">: {role.desc}</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
