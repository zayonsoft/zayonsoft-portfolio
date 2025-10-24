"use client";
import { useState, useEffect, useRef } from "react";
import { ubuntu } from "./Main";

export default function ContactTextarea() {
  const [value, setValue] = useState("");
  const [changed, setChanged] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  useEffect(() => {
    const textarea = textareaRef.current as HTMLTextAreaElement;
    textarea.style.height = "30px";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value]);

  return (
    <section className="grid">
      <div className={`grid gap-2.5 ${ubuntu.className} `}>
        <label
          className={`text-[#12F7D6] text-sm font-light`}
          htmlFor="message_body"
        >
          Your message *
        </label>
        <textarea
          ref={textareaRef}
          name="body"
          onInput={(e) => {
            setChanged(true);
            setValue(e.currentTarget.value);
          }}
          id="message_body"
          placeholder="Enter your name"
          value={value}
          className={`custom-transition text-area-scroll text-white resize-none h-8 font-light placeholder:text-gray-400 placeholder:text-sm placeholder:font-light py-1 pr-1 outline-none border-b-1 border-b-[#98FAEC] border-l-0`}
        />
      </div>
    </section>
  );
}
