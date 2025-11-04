import Link from "next/link";
import { CgMail } from "react-icons/cg";
import { FiCode, FiHome, FiMonitor, FiUser } from "react-icons/fi";

export const urls = {
  home: "/#home",
  about: "/#about",
  skills: "/#skills",
  my_work: "/#my_work",
  contact: "/#contact",
};

export default function FixedBar() {
  return (
    <section className="left-3 fixed z-50 -translate-y-1/2 top-1/2 max-[701px]:hidden">
      <div className="rounded-full p-[1.3px] profile-pic">
        <section className="grid gap-5  bg-black justify-items-center rounded-full p-2.5">
          <div>
            <Link
              className="custom-transition bg-[#12F7D6] p-1.5 grid items-center justify-center rounded-full"
              href={`${urls.home}`}
            >
              <span>
                <FiHome />
              </span>
            </Link>
          </div>
          <div>
            <Link
              className="custom-transition hover:text-[#12F7D6] text-white p-1.5 grid items-center justify-center rounded-full"
              href={`${urls.about}`}
            >
              <span>
                <FiUser />
              </span>
            </Link>
          </div>
          <div>
            <Link
              className="custom-transition hover:text-[#12F7D6] text-white p-1.5 grid items-center justify-center rounded-full"
              href={`${urls.skills}`}
            >
              <span>
                <FiCode />
              </span>
            </Link>
          </div>
          <div>
            <Link
              className="custom-transition hover:text-[#12F7D6] text-white p-1.5 grid items-center justify-center rounded-full"
              href={`${urls.my_work}`}
            >
              <span>
                <FiMonitor />
              </span>
            </Link>
          </div>

          <div>
            <Link
              className="custom-transition hover:text-[#12F7D6] text-white p-1.5 grid items-center justify-center rounded-full"
              href={urls.contact}
            >
              <span>
                <CgMail size={21} />
              </span>
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
