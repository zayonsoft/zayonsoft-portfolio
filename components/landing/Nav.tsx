"use client";
import Image from "next/image";
import { IBM_Plex_Mono } from "next/font/google";
import { BsGithub, BsSearch, BsTwitterX } from "react-icons/bs";
import SocialLink from "./SocialLink";
import { FaFacebookF } from "react-icons/fa6";
import FancyMenu from "./FancyMenu";
import { FaSearch } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import Link from "next/link";
import NavLink from "./NavLink";
import { FiCode, FiHome, FiMonitor, FiUser } from "react-icons/fi";
import { BiCopyright } from "react-icons/bi";
import { useState } from "react";
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Nav() {
  const [sideOpened, setSideOpened] = useState<boolean>(false);

  function closeAside() {
    setSideOpened(false);
  }

  function openAside() {
    setSideOpened(true);
  }

  function closeAsideWhenClicked(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target == e.currentTarget) {
      closeAside();
    }
  }

  return (
    // header deals with horizontal padding and nav deals with vertical
    <header className="fixed left-0 right-0 px-20 max-[901px]:px-10 max-[701px]:px-5">
      <nav className="grid grid-cols-[auto_auto] gap-8 items-center max-[701px]:grid-cols-[auto_1fr] py-5 max-[701px]:py-3  max-[701px]:border-b-2 max-[701px]:border-b-[#43454D]">
        <div>
          <Link href={"/"}>
            <Image
              className="h-auto outline-none w-33 min-w-25 max-[901px]:w-28"
              src={"/page_logo.svg"}
              width={120}
              height={50}
              alt="Logo"
            />
          </Link>
        </div>

        {/* SEARCH AND LINKS */}
        <div
          className={`grid w-full max-w-2xl justify-self-end grid-cols-2 max-[821px]:grid-cols-[1fr_auto] max-[701px]:grid-cols-[1fr_auto] ${ibmPlexMono.className} gap-10  max-[820px]:gap-7 items-center`}
        >
          <div className="m-auto w-full grid justify-center">
            <search className="border-[#12F7D6] w-full px-3 py-[5px] rounded-full border-[1.5px] min-[701px]:min-w-60 max-w-73 max-[701px]:max-w-60 max-[500px]:hidden">
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
            {/* MOBILE VIEW ICONS */}
            <div className="flex justify-evenly gap-4 items-center max-[701px]:items-center text-white">
              <span className="hidden max-[500px]:grid items-center">
                <button
                  className="cursor-pointer outline-none hover:bg-[#1c1c1cc4] hover:text-[#12F7D6]  p-1.5 rounded-full"
                  type="button"
                >
                  <FaSearch strokeWidth={1.5} />
                </button>
              </span>

              <span className="hidden max-[701px]:grid items-center">
                <button
                  className="cursor-pointer outline-none hover:bg-[#1c1c1cc4] hover:text-[#12F7D6] p-1.5 rounded-full"
                  onClick={openAside}
                >
                  <FancyMenu />
                </button>
              </span>
            </div>
            {/* MOBILE VIEW ICONS END */}

            <ul className="flex gap-6 justify-between max-[701px]:hidden">
              <SocialLink icon={<BsTwitterX />} name="Twitter" url="#" />
              <SocialLink icon={<FaFacebookF />} name="Facebook" url="#" />
              <SocialLink icon={<BsGithub />} name="GitHub" url="#" />
            </ul>
          </div>

          {/* Mobile View Side bar overlay */}
          <div
            onClick={(e) => closeAsideWhenClicked(e)}
            className={`hidden max-[701px]:grid custom-transition z-50 fixed left-0 right-0 top-0 h-screen bg-[#64646478] ${
              !sideOpened ? "translate-x-full" : ""
            }`}
          >
            {/* The inner div that slides in */}
            <div className="absolute grid gap-3 content-start right-0 w-11/12 max-w-80 px-4 top-0 bottom-0 bg-[#292F36]">
              <section className="">
                <div className="grid items-center py-6">
                  <button
                    className="cursor-pointer text-white text-2xl"
                    onClick={closeAside}
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
              <section className="absolute grid left-0 right-0 bottom-0 px-4">
                <div className="grid justify-center  border-t border-t-[#494b53]">
                  <p className="flex items-center gap-2 py-2 text-center text-gray-500 text-sm">
                    <span>
                      <BiCopyright />
                    </span>
                    <span>ZayonSoft 2025.</span>
                  </p>
                </div>
                <div className="grid text-[#12F7D6] border-t border-t-[#494b53] justify-center py-2">
                  <div className="flex gap-5 items-center">
                    <Link
                      className="custom-transition hover:bg-black p-2 rounded-full"
                      href={"#"}
                    >
                      <BsTwitterX />
                    </Link>
                    <Link
                      className="custom-transition hover:bg-black p-2 rounded-full"
                      href={"#"}
                    >
                      <FaFacebookF />
                    </Link>
                    <Link
                      className="custom-transition hover:bg-black p-2 rounded-full"
                      href={"#"}
                    >
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
