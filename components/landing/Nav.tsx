import Image from "next/image";
import { IBM_Plex_Mono } from "next/font/google";
import { BsGithub, BsSearch, BsTwitterX } from "react-icons/bs";
import SocialLink from "./SocialLink";
import { FaFacebookF } from "react-icons/fa6";
import FancyMenu from "./FancyMenu";
import { FaSearch } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import Link from "next/link";
import { BiCode, BiCodeAlt, BiHome, BiUser } from "react-icons/bi";
import NavLink from "./NavLink";
import { FiCode, FiHome, FiMonitor, FiUser } from "react-icons/fi";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Nav() {
  return (
    // header deals with horizontal padding and nav deals with vertical
    <header className="fixed left-0 right-0 px-20 max-[901px]:px-10 max-[701px]:px-4">
      <nav className="grid grid-cols-[auto_auto] gap-8 items-center max-[701px]:grid-cols-[auto_1fr] py-5 max-[701px]:py-4 max-[701px]:border-b-2 max-[701px]:border-b-[#43454D]">
        <div>
          <Image
            className="h-auto w-33 min-w-25 max-[901px]:w-28"
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
          <div className="m-auto w-full grid justify-center">
            <search className="border-[#12F7D6] w-full px-3 py-[5px] rounded-full border-[1.5px] min-[701px]:min-w-60 max-w-73 max-[701px]:max-w-60 max-[451px]:hidden">
              <label
                className="flex gap-1.5 items-center text-sm"
                htmlFor="search"
              >
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
          </div>

          {/* Social links */}
          <div className={`grid w-full justify-self-end`}>
            <div className="flex justify-evenly gap-3 items-center max-[701px]:items-center text-white">
              <span className="hidden max-[451px]:grid items-center">
                <button className="cursor-pointer outline-none" type="button">
                  <FaSearch strokeWidth={1.5} />
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

          {/* Mobile View Side bar overlay */}
          <div
            className={`hidden max-[701px]:grid fixed left-0 right-0 top-0 h-screen bg-[#c1c1c141]`}
          >
            {/* The inner div that slides in */}
            <div className="absolute grid gap-3 content-start right-0 w-11/12 max-w-80 px-4 top-0 bottom-0 bg-[#292F36]">
              <section className="">
                <div className="grid items-center py-6">
                  <button
                    className="cursor-pointer text-white text-2xl"
                    type="button"
                  >
                    <HiX />
                  </button>
                </div>
              </section>
              <ul className="grid gap-3">
                <li>
                  <NavLink
                    icon={<FiHome />}
                    url="#"
                    name="Home"
                    active={true}
                  />
                </li>
                <li>
                  <NavLink
                    icon={<FiUser />}
                    url="#"
                    name="About"
                    active={false}
                  />
                </li>
                <li>
                  <NavLink
                    icon={<FiCode />}
                    url="#"
                    name="Skills"
                    active={false}
                  />
                </li>
                <li>
                  <NavLink
                    icon={<FiMonitor />}
                    url="#"
                    name="My Work"
                    active={false}
                  />
                </li>
              </ul>
              <section className="absolute grid left-0 right-0 bottom-0 px-4 text-[#12F7D6]">
                <div className="grid border-t border-t-[#494b53] justify-center py-5">
                  <div className="flex gap-5 items-center">
                    <Link href={"#"}>
                      <BsTwitterX />
                    </Link>
                    <Link href={"#"}>
                      <FaFacebookF />
                    </Link>
                    <Link href={"#"}>
                      <BsGithub />
                    </Link>
                  </div>
                </div>
              </section>
            </div>
            {/* Inner Side bar ends above */}
          </div>
        </div>
      </nav>
    </header>
  );
}
