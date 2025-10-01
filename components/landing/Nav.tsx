import Image from "next/image";
import { IBM_Plex_Mono } from "next/font/google";
import { BsGithub, BsSearch, BsTwitterX } from "react-icons/bs";
import SocialLink from "./SocialLink";
import { FaFacebookF } from "react-icons/fa6";
import FancyMenu from "./FancyMenu";
import { HiSearch } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Nav() {
  return (
    <nav className="fixed left-0 right-0 grid grid-cols-[auto_auto] gap-8 items-center px-20 py-5 max-[901px]:px-10 max-[701px]:px-5 max-[701px]:grid-cols-[auto_1fr] max-[701px]:py-3">
      <div>
        <Image
          className="h-auto w-35 min-w-25 max-[901px]:w-28"
          src={"/page_logo.svg"}
          width={120}
          height={50}
          alt="Logo"
        />
      </div>

      {/* SEARCH AND LINKS */}
      <div
        className={`grid w-full max-w-2xl justify-self-end grid-cols-2 max-[821px]:grid-cols-[1fr_auto] max-[701px]:grid-cols-[1fr_auto] ${ibmPlexMono.className} gap-10  max-[820px]:gap-7 items-center`}
      >
        <search className="border-[#12F7D6] w-full px-3 py-[5px] rounded-full border-[1.5px] max-w-73 max-[701px]:max-w-none">
          <label className="flex gap-1.5 items-center text-sm" htmlFor="search">
            <input
              className="outline-none border w-full text-xs text-white border-none"
              type="text"
              id="search"
            />
            <span className="text-[#12F7D6]">
              <BsSearch />
            </span>
          </label>
        </search>
        {/* Social links */}
        <div className={`grid w-full justify-self-end`}>
          <div className="flex justify-evenly gap-2 items-center max-[701px]:items-center text-white">
            <span className="hidden">
              <button className="cursor-pointer outline-none" type="button">
                <FaSearch strokeWidth={2} />
              </button>
            </span>

            <span className="hidden max-[701px]:grid items-center">
              <button className="cursor-pointer outline-none">
                <FancyMenu />
              </button>
            </span>
          </div>
          <ul className="flex gap-6 justify-between max-[701px]:hidden">
            <SocialLink icon={<BsTwitterX />} name="Twitter" url="#" />
            <SocialLink icon={<FaFacebookF />} name="Facebook" url="#" />
            <SocialLink icon={<BsGithub />} name="GitHub" url="#" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
