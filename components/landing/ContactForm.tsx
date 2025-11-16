"use client";
import { IoPaperPlaneOutline } from "react-icons/io5";
import ContactTextarea from "./ContactTextarea";
import { ubuntu } from "./Main";

export default function ContactForm({}) {
  function ContactFormSubmitter(contactForm: HTMLFormElement) {
    console.log(contactForm);
  }

  return (
    <form
      className="max-w-full grid gap-15"
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        ContactFormSubmitter(e.currentTarget);
      }}
    >
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
            type="email"
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
  );
}
