import { ibmPlexMono } from "./Main";
type SkillsProps = {
  name: string;
  percentage: string;
};

export default function Skill({ name, percentage }: SkillsProps) {
  return (
    <div className={`col-span-1 ${ibmPlexMono.className}`}>
      <div className="grid gap-2">
        <p className="text-sm font-bold text-white">{name}</p>
        <div className="grid grid-cols-10 content-center">
          <div className="col-span-9 relative">
            <div className="absolute rounded-tl-full rounded-bl-full rounded-tr-full rounded-br-full -translate-y-1/2 top-1/2 bg-[#C2C2C2] w-[100%] h-[4px]"></div>
            <div
              style={{ width: percentage }}
              className="absolute rounded-tl-full rounded-bl-full -translate-y-1/2 top-1/2 bg-[#12F7D6] h-[4px]"
            ></div>
          </div>
          <div className="text-center col-span-1 grid content-center">
            <p className="font-bold text-sm font-montserrat self-center text-white">
              {percentage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
