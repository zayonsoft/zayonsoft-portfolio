import Link from "next/link";

export type LinkProps = {
  name: string;
  icon: React.ReactNode;
  url: string;
};
export default function SocialLink({ name, icon, url }: LinkProps) {
  return (
    <Link className="flex items-center gap-1.5 text-[14px]" href={url}>
      <span className="text-[#12F7D6]">{icon}</span>
      <span className="text-white font-light tracking-wide">{name}</span>
    </Link>
  );
}
