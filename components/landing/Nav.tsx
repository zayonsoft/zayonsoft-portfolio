import Image from "next/image";
export default function Nav() {
  return (
    <nav className="px-4 py-2">
      <div>
        <Image src={"/page_logo.svg"} width={150} height={50} alt="Logo" />
      </div>
    </nav>
  );
}
