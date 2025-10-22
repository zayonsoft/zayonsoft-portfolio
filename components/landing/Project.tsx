import Image from "next/image";
import { ibmPlexMono } from "./Main";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

type TestProps = {
  count: number;
};

export default function Project({ count }: TestProps) {
  return (
    <section>
      <div className="grid grid-cols-2 gap-5 py-30 max-[701px]:grid-cols-1">
        {/* Desc */}
        <section
          className={`${
            count % 2 == 0 ? "order-2" : ""
          } grid items-center max-[701px]:order-2`}
        >
          <div
            className={`grid items-center max-h-fit min-h-[300px] gap-2 ${ibmPlexMono.className}`}
          >
            <div
              className={`${
                count % 2 == 0 ? "justify-self-end" : ""
              } grid gap-0 max-[701px]:hidden`}
            >
              <p
                className={`${
                  count % 2 == 0 ? "justify-self-end" : ""
                } flex text-sm items-center gap-2 text-[#12F7D6] font-medium`}
              >
                <span>Personal Project</span>
                <span className="bg-[#12F7D6] h-1 w-1 rounded-full block"></span>
                <span className="">2024</span>
              </p>
              <h1 className={`text-3xl text-white tracking-wider font-medium`}>
                CGPA Calculator
              </h1>
            </div>
            <div className="relative project-text rounded-xl">
              <div className="absolute top-0 right-0 bottom-0 left-0 rounded-xl ptext-overlay"></div>
              <div className="absolute top-0 right-0 bottom-0 left-0 ptext-cover rounded-xl opacity-[8%]"></div>
              <p className="relative text-justify text-white text-sm p-4 text-cap capitalize">
                A web-based and highly interactive application that collects the
                course information of students along with their Grades in those
                courses and uses the info to calculate the Grade Point Average
                (GPA) as well as the Cumulative Grade Point Average (CGPA)
                across Semesters and Session.
              </p>
            </div>

            <div className={`${count % 2 == 0 ? "justify-self-end" : ""}`}>
              <Link
                className="flex gap-1 items-center p-2.5 bg-white w-fit text-[15px] font-medium rounded-full text-[#292F36]"
                href={"#"}
              >
                <span>View Project</span>
                <span>
                  <HiOutlineExternalLink size={22} strokeWidth={1.5} />
                </span>
              </Link>
            </div>
          </div>
        </section>
        {/* Image Section below */}
        <section className="grid gap-10">
          <div className="gap-0 hidden max-[701px]:grid">
            <p
              className={`flex text-sm items-center gap-2 text-[#12F7D6] font-medium`}
            >
              <span>Personal Project</span>
              <span className="bg-[#12F7D6] h-1 w-1 rounded-full block"></span>
              <span className="">2024</span>
            </p>
            <h1 className={`text-3xl text-white tracking-wider font-medium`}>
              CGPA Calculator
            </h1>
          </div>
          <div className="relative">
            {/* The glow at the back of the image */}
            <div className="absolute left-0 -right-[10%] -top-[25%] -bottom-[25%] overflow">
              <div className="absolute proj-gradient top-0 bottom-0 left-[-20%] right-[30%]"></div>
              <div className="absolute proj-gradient top-0 bottom-0 left-0 right-[-5%]"></div>
            </div>
            <div className="relative">
              <Image
                src={"/showcase_imgs/project1.png"}
                className="w-full border-[1.5px] border-[#12F7D6] rounded-xl m-auto"
                alt="Project Image"
                height={2000}
                width={2000}
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
