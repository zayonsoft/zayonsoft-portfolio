import fs from "fs/promises";
import path from "path";
import { BsFillEmojiFrownFill } from "react-icons/bs";
import Hero from "./Hero";

type DataProps = {
    id:string;
    name:string;
    preview_image:string;
    hero_images:string[];
    year:string;
    overview:string;
    project_images:string[];
    tech_stack_image:string[];
}

export default async function Content() {
  try {
    const filePath = path.join(process.cwd(), "public", "data", "data.json");
    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);
    console.log(data);

    return (
      <section>
        <Hero name="" overview="" type="" year="" />
      </section>
    );
  } catch {
    return (
      <h1 className="grid gap-1 justify-items-center py-20 text-[#12F7D6] text-xl">
        <span className="text-2xl">
          <BsFillEmojiFrownFill />
        </span>
        <span>Sorry, Couldn't Load the page content!</span>
      </h1>
    );
  }
}
