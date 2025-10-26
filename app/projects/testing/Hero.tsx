import { ibmPlexMono } from "@/components/landing/Main";
type HeroProps = {
  name: string;
  type: string;
  year: string;
  overview: string;
};

export default function Hero({}: HeroProps) {
  return (
    <section className="grid py-10">
      <div
        className={`${ibmPlexMono.className} flex justify-between items-center`}
      >
        <p className="text-white text-3xl font-semibold">CGPA Calculator</p>
        <p
          className={`flex text-sm items-center gap-2 text-[#12F7D6] font-medium`}
        >
          <span className="[word-spacing:0.5rem]">Personal Project</span>
          <span className="bg-[#12F7D6] h-1 w-1 rounded-full block"></span>
          <span className="">2024</span>
        </p>
      </div>
      <div className="relative min-h-[60vh] w-full">
        <div className="pop-logo absolute -translate-x-1/2 left-1/2 w-full max-w-[850px] top-0 bottom-0"></div>
      </div>
    </section>
  );
}
