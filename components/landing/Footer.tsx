import Link from "next/link";
import { BsTwitterX, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { ubuntu } from "./Main";
import DevDateRange from "./DevDateRange";

const socialLinkUrls = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "",
  twitter: process.env.NEXT_PUBLIC_X_URL || "",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
};

const designerLink = process.env.NEXT_PUBLIC_DESIGNER_LINK || "";

export default function Footer() {
  return (
    <section
      className={`${ubuntu.className} border-t border-t-[#43454D] font-extralight text-sm flex justify-between items-center bg-[#1A1E23] px-20 max-[901px]:px-10 max-[701px]:px-5 py-4 max-[701px]:flex-col max-[701px]:gap-3.5`}
    >
      <div className="max-[701px]:order-2">
        <p className="text-white">
          &copy; {<DevDateRange />} ZayonSoft. All rights reserved.
        </p>
      </div>
      <div className="flex gap-5 items-center max-[701px]:order-1">
        <p>
          <Link
            className="custom-transition block text-[#292F36] p-1.5 text-sm rounded-full bg-[#98FAEC] hover:bg-[#12F7D6]"
            href={socialLinkUrls.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX />
          </Link>
        </p>
        <p>
          <Link
            className="custom-transition block text-[#292F36] p-1.5 text-sm rounded-full bg-[#98FAEC] hover:bg-[#12F7D6]"
            href={socialLinkUrls.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </Link>
        </p>
        <p>
          <Link
            className="custom-transition block text-[#292F36] p-1.5 text-sm rounded-full bg-[#98FAEC] hover:bg-[#12F7D6]"
            href={socialLinkUrls.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </Link>
        </p>
      </div>
      <div className="max-[701px]:order-3">
        <p className="text-white">
          <span>Design By </span>
          <span>
            <Link
              className="custom-transition text-[#12F7D6] hover:text-[#98FAEC]"
              href={designerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Miracle John
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
}
