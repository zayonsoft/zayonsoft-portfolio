import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
  const pathName = usePathname();
  const router = useRouter();

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView();

    if (pathName != "/") {
      router.push(`/?section=${sectionId}`);
    }
  }
  return (
    <Link
      id={id}
      onClick={(e) => {
        e.preventDefault();
        asideCloser();
        scrollToSection(url.slice(2));
      }}
      className={`custom-transition outline-none flex text-md p-2 px-3 rounded-md items-center gap-3 hover:scale-95 hover:opacity-80  hover:bg-[#494b53c6] text-white bg-transparent`}
      href={url}
    >
      <span>{icon}</span>
      <span>{name}</span>
    </Link>
  );
}
