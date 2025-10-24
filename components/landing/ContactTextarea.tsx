"use client";
import { useState, useEffect, useRef } from "react";
import { ubuntu } from "./Main";

export default function ContactTextarea() {
  const [value, setValue] = useState("");
  const [changed, setChanged] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  useEffect(() => {
    const textarea = textareaRef.current as HTMLTextAreaElement;
    const maxHeight = 300;
    if (changed) textarea.style.height = "31px";
    if (!(textarea.scrollHeight >= maxHeight)) {
      textarea.style.height = `${textarea.scrollHeight}px`;
    } else {
      textarea.style.height = `${maxHeight}px`;
    }
    if (value.trim() == "") {
      setValue("");
      textarea.style.height = "31px";
    }
  }, [checked, value]);

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
          onChange={(e) => {
            setChanged(true);
            setValue(e.currentTarget.value);
          }}
          onKeyDown={() => {
            setChecked(!checked);
          }}
          id="message_body"
          placeholder="Enter your needs"
          value={value}
          className={`text-area-scroll text-white resize-none h-8 font-light placeholder:text-gray-400 placeholder:text-sm placeholder:font-light py-1 pr-1 outline-none border-b-1 border-b-[#98FAEC] border-l-0`}
        />
      </div>
    </section>
  );
}
