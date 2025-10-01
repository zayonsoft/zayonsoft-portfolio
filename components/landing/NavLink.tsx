import Link from "next/link";

type LinkProps = {
  name: string;
  icon: React.ReactNode;
  url: string;
  active: boolean;
};

export default function NavLink({ icon, name, url, active }: LinkProps) {
  return (
    <Link
      className={`custom-transition flex text-md p-2 px-3 rounded-md items-center gap-3 hover:scale-95 hover:opacity-80 ${
        active
          ? "text-[#12F7D6] bg-black"
          : "hover:bg-[#494b53c6] text-white bg-transparent"
      }`}
      href={url}
    >
      <span>{icon}</span>
      <span>{name}</span>
    </Link>
  );
}
