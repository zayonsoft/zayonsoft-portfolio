import Image from "next/image";
import { ibmPlexMono } from "./Main";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

type TestProps = {
  id: string;
  count: number;
  name: string;
  preview_image: string;
  year: string;
  type: string;
  overview: string;
};

export default function Project({
  id,
  count,
  name,
  overview,
  preview_image = "/test.png",
  type,
  year,
}: TestProps) {
  return (
    <section>
      <div className="grid grid-cols-2 gap-5 py-30 max-[701px]:grid-cols-1 max-[701px]:py-15 max-[701px]:gap-8">
        {/* Desc */}
        <section
          className={`${
            count % 2 == 0 ? "order-2" : ""
          } grid items-center max-[701px]:order-2`}
        >
          <div
            className={`grid items-center max-h-fit min-h-[300px] gap-2 ${ibmPlexMono.className} max-[701px]:min-h-auto max-[701px]:gap-5`}
          >
            {/* Desktoop view Title */}
            <div
              className={`${
                count % 2 == 0 ? "justify-self-end text-right" : ""
              } grid gap-0 max-[701px]:hidden`}
            >
              <p
                className={`${
                  count % 2 == 0 ? "justify-self-end" : ""
                } flex text-sm items-center gap-2 text-[#12F7D6] font-medium`}
              >
                <span>{type}</span>
                <span className="bg-[#12F7D6] h-1 w-1 rounded-full block"></span>
                <span className="">{year}</span>
              </p>
              <h2 className={`text-3xl text-white tracking-wider font-medium`}>
                {name}
              </h2>
            </div>
            {/* Desktop View Title ends */}
            <div className="relative project-text rounded-xl">
              <div className="absolute top-0 right-0 bottom-0 left-0 rounded-xl ptext-overlay"></div>
              <div className="absolute top-0 right-0 bottom-0 left-0 ptext-cover rounded-xl opacity-[8%]"></div>
              <p className="relative text-white text-sm p-4 capitalize">
                {overview}
              </p>
            </div>

            <div
              className={`${
                count % 2 == 0
                  ? "justify-self-end max-[701px]:justify-self-start"
                  : ""
              }`}
            >
              <Link
                className="flex gap-1 items-center p-2.5 bg-white w-fit text-[15px] font-medium rounded-full text-[#292F36]"
                href={`/projects/${id}`}
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
          <div
            className={`${
              count % 2 == 0 ? "justify-items-end" : ""
            } gap-0 hidden max-[701px]:grid`}
          >
            <p
              className={`flex text-sm items-center gap-2 text-[#12F7D6] font-medium`}
            >
              <span>{type}</span>
              <span className="bg-[#12F7D6] h-1 w-1 rounded-full block"></span>
              <span className="">{year}</span>
            </p>
            <h2 className={`text-3xl text-white tracking-wider font-medium`}>
              {name}
            </h2>
          </div>
          <div className="relative">
            {/* The glow at the back of the image */}
            <div className="absolute left-0 -right-[10%] -top-[25%] -bottom-[25%] overflow">
              <div className="absolute proj-gradient top-0 bottom-0 left-[-20%] right-[30%]"></div>
              <div className="absolute proj-gradient top-0 bottom-0 left-0 right-[-5%]"></div>
            </div>
            <div className="relative">
              <Image
                src={preview_image}
                className="w-full border-[1.5px] border-[#12F7D6] h-[350px] rounded-xl object-cover object-center m-auto select-none"
                alt="Project Image"
                height={2000}
                width={2000}
                draggable={false}
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
