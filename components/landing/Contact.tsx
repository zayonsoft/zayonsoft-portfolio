import Image from "next/image";
import FancyUnderline from "../general/FancyUnderline";
import { ibmPlexMono, ubuntu } from "./Main";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-m-[69px] max-[701px]:scroll-m-[62px] bg-[#1A1E23] relative px-20 max-[901px]:px-10 max-[701px]:px-5 py-20 max-[701px]:py-10"
    >
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
            I'm currently available for freelance work
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
            <ContactForm />
          </div>
        </section>
      </div>
    </section>
  );
}
