import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";
import { CgHomeAlt, CgMail } from "react-icons/cg";
import { FiCode, FiHome, FiMonitor, FiUser } from "react-icons/fi";

export default function FixedBar() {
  return (
    <section className="left-3 fixed -translate-y-1/2 top-1/2">
      <div className="rounded-full p-[1px] profile-pic">
        <section className="grid gap-5 justify-self-center bg-black justify-items-center rounded-full p-2">
          <div>
            <Link
              className="bg-[#12F7D6] p-1.5 grid items-center justify-center rounded-full"
              href={"#"}
            >
              <span>
                <FiHome />
              </span>
            </Link>
          </div>
          <div>
            <Link
              className="text-white p-1.5 grid items-center justify-center rounded-full"
              href={"#"}
            >
              <span>
                <FiUser />
              </span>
            </Link>
          </div>
          <div>
            <Link
              className="text-white p-1.5 grid items-center justify-center rounded-full"
              href={"#"}
            >
              <span>
                <FiCode />
              </span>
            </Link>
          </div>
          <div>
            <Link
              className="text-white p-1.5 grid items-center justify-center rounded-full"
              href={"#"}
            >
              <span>
                <FiMonitor />
              </span>
            </Link>
          </div>

          <div>
            <Link
              className="text-white p-1.5 grid items-center justify-center rounded-full"
              href={"#"}
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
