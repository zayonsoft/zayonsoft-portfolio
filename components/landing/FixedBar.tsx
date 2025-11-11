import Link from "next/link";
import { CgMail } from "react-icons/cg";
import { FiCode, FiHome, FiMonitor, FiUser } from "react-icons/fi";

const urls = {
  home: { url: "/#home", id: "home-icon" },
  about: { url: "/#about", id: "about-icon" },
  skills: { url: "/#skills", id: "skills-icon" },
  my_work: { url: "/#my_work", id: "my_work-icon" },
  contact: { url: "/#contact", id: "contact-icon" },
};

export default function FixedBar() {
  return (
    <section className="left-3 fixed z-50 -translate-y-1/2 top-1/2 max-[701px]:hidden">
      <div className="rounded-full p-[1.3px] profile-pic">
        <section className="grid gap-5  bg-black justify-items-center rounded-full p-2.5">
          <div>
            <Link
              className="custom-transition bg-[#12F7D6] p-1.5 grid items-center justify-center rounded-full"
              id={urls.home.id}
              href={`${urls.home.url}`}
            >
              <span>
                <FiHome />
              </span>
            </Link>
          </div>
          <div>
            <Link
              className="custom-transition hover:scale-[0.9] hover:text-[#12F7D6] text-white p-1.5 grid items-center justify-center rounded-full"
              id={urls.about.id}
              href={`${urls.about.url}`}
            >
              <span>
                <FiUser />
              </span>
            </Link>
          </div>
          <div>
            <Link
              className="custom-transition hover:scale-[0.9] hover:text-[#12F7D6] text-white p-1.5 grid items-center justify-center rounded-full"
              id={urls.skills.id}
              href={urls.skills.url}
            >
              <span>
                <FiCode />
              </span>
            </Link>
          </div>
          <div>
            <Link
              className="custom-transition hover:scale-[0.9] hover:text-[#12F7D6] text-white p-1.5 grid items-center justify-center rounded-full"
              id={urls.my_work.id}
              href={urls.my_work.url}
            >
              <span>
                <FiMonitor />
              </span>
            </Link>
          </div>

          <div>
            <Link
              className="custom-transition hover:scale-[0.9] hover:text-[#12F7D6] text-white p-1.5 grid items-center justify-center rounded-full"
              id={urls.contact.id}
              href={urls.contact.url}
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
