import Image from "next/image";
import FancyUnderline from "../general/FancyUnderline";
import { ibmPlexMono, ubuntu } from "./Main";
import { IoPaperPlaneOutline } from "react-icons/io5";
import ContactTextarea from "./ContactTextarea";
export default function Contact() {
  return (
    <section className="bg-[#1A1E23] relative px-20 max-[901px]:px-10 max-[701px]:px-5 py-20 max-[701px]:py-10">
      <div className="grid gap-25">
        <div className="grid gap-10">
          <Image
            src={"/section_top_icons.svg"}
            className="max-[701px]:hidden m-auto w-auto h-30"
            width={100}
            height={100}
            alt="Design Icon"
          ></Image>
          <div className="grid gap-2 justify-items-center w-fit justify-self-center">
            <h1 className={`text-[#12F7D6] text-3xl ${ubuntu.className}`}>
              Contact
            </h1>
            <div className="w-full">
              <FancyUnderline />
            </div>
          </div>
          <p
            className={` text-white ${ibmPlexMono.className} tracking-wider text-center text-sm m-auto`}
          >
            I’m currently available for freelance work
          </p>
        </div>
        <section className="grid gap-10">
          <div>
            <p
              className={`capitalize ${ibmPlexMono.className} font-normal m-auto text-xl text-[#12F7D6] border-2 border-[#12F7D6] py-3.5 px-5 w-fit rounded-full`}
            >
              Send me a message
            </p>
          </div>
          <div className="m-auto max-w-[650px] w-[90%]">
            <form className="max-w-full grid gap-15" action="">
              <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-20 max-[701px]:gap-10">
                <div className={`grid gap-2.5 ${ubuntu.className} `}>
                  <label
                    className={`text-[#12F7D6] text-sm font-light`}
                    htmlFor="sender-name"
                  >
                    Your name *
                  </label>
                  <input
                    id="sender-name"
                    name="text"
                    type="text"
                    placeholder="Enter your name"
                    className="text-white font-light w-full placeholder:text-gray-400 placeholder:text-sm placeholder:font-light py-1 outline-none border-b-1 border-b-[#98FAEC] border-l-0"
                  />
                </div>
                <div className={`grid gap-2.5 ${ubuntu.className} `}>
                  <label
                    className={`text-[#12F7D6] text-sm w-fit font-light`}
                    htmlFor="sender-mail"
                  >
                    Your email *
                  </label>
                  <input
                    id="sender-mail"
                    name="text"
                    type="text"
                    placeholder="Enter your email"
                    className="text-white font-light placeholder:text-gray-400 placeholder:text-sm placeholder:font-light py-1 outline-none border-b-1 border-b-[#98FAEC] border-l-0"
                  />
                </div>
              </section>
              <ContactTextarea />
              <section>
                <button
                  className={`custom-transition flex cursor-pointer items-center font-normal m-auto rounded-full text-[#292F36] bg-[#12F7D6] hover:bg-[#98FAEC] py-2.5 px-6 text-lg gap-2 ${ubuntu.className}`}
                >
                  <span>Send Message</span>
                  <span>
                    <IoPaperPlaneOutline size={22} />
                  </span>
                </button>
              </section>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
}
