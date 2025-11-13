"use client";
import { RxDownload } from "react-icons/rx";
import { ubuntu } from "./Main";

export default function ResumeDownloadButton() {
  return (
    <button
      onClick={() => {
        window.open("https://flowcv.com/resume/m6ng1c3u76", "_blank");
      }}
      className={`cursor-pointer flex gap-3 items-center bg-white text-[#292F36] text-lg rounded-full px-6 py-2.5 ${ubuntu.className}`}
      type="button"
    >
      <span>Resume</span>
      <span>
        <RxDownload size={22} />
      </span>
    </button>
  );
}
