import Image from "next/image";

export default function ArchitectureDesign({}) {
  return (
    <section>
      <Image
        src={"/architecture_image.png"}
        width={4000}
        height={2000}
        alt="Architecture & Design"
        className="w-full m-auto select-none"
        draggable={false}
      />
    </section>
  );
}
