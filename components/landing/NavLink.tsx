import Link from "next/link";

type LinkProps = {
  id: string;
  name: string;
  icon: React.ReactNode;
  url: string;
  asideCloser: () => void;
};

export default function NavLink({
  id,
  icon,
  name,
  url,
  asideCloser,
}: LinkProps) {
  return (
    <Link
      id={id}
      onClick={asideCloser}
      className={`custom-transition outline-none flex text-md p-2 px-3 rounded-md items-center gap-3 hover:scale-95 hover:opacity-80  hover:bg-[#494b53c6] text-white bg-transparent`}
      href={url}
    >
      <span>{icon}</span>
      <span>{name}</span>
    </Link>
  );
}
