import Image from "next/image";

export default function DividingLine() {
  return (
    <section>
      <div className="grid grid-cols-[1fr] relative items-center">
        <div>
          <Image
            src={"/star_icon.svg"}
            className="absolute left-[-5px] -translate-y-1/2 top-1/2 w-5 h-5 select-none"
            height={100}
            width={100}
            alt="."
            draggable={false}
          />
        </div>
        <div>
          <hr className="block dividing-line outline-none border-none h-[1.5px] w-full" />
        </div>
        <div>
          <Image
            src={"/star_icon.svg"}
            className="absolute right-[-5px] -translate-y-1/2 top-1/2 w-5 h-5 select-none"
            height={100}
            width={100}
            alt="."
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
