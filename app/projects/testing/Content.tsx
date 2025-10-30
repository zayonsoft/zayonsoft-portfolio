import fs from "fs/promises";
import path from "path";
import { BsFillEmojiFrownFill } from "react-icons/bs";
import Hero from "./Hero";
import Motivation from "./Motivation";
import ProjectPics1 from "./ProjectPics1";
import ProjectPics2 from "./ProjectPics2";
import ProjectPics3 from "./ProjectPics3";
import TechStack from "./TechStack";
import Features from "./Features";
import ArchitectureDesign from "./ArchitectureDesign";
import StructureFlow from "./StructureFlow";
import DesignPrinciples from "./DesignPrinciples";
import ChallengesSolution from "./ChallengesSolutions";

type DataProps = {
  id: string;
  name: string;
  preview_image: string;
  hero_images: string[];
  year: string;
  type: string;
  overview: string;
  problem: string;
  project_images: [string[], string[], string[]];
  tech_stack_image: string[];
  features: string[];
  flow: string[];
  design_principles: string[];
  challenges_solutions: { challenge: string; solution: string }[];
  live_demo_link: string;
  source_code_link: string;
  role: { title: string; desc: string }[];
};

export default async function Content() {
  const id = "b5f1247c-1148-42f2-855d-34e74e1e08ba"; //will be dynamically gotten
  try {
    const filePath = path.join(process.cwd(), "public", "data", "data.json");
    const file = await fs.readFile(filePath, "utf-8");
    const dataset = JSON.parse(file) as DataProps[];
    const data = dataset.find((project) => project.id == id);
    console.log(data);

    if (data) {
      return (
        <section>
          <Hero
            name={data.name}
            overview={data.overview}
            type={data.type}
            year={data.year}
            hero_img1={data.hero_images[0]}
            hero_img2={data.hero_images[1]}
          />
          <Motivation problem={data.problem} />

          <div className="overflow-hidden">
            <ProjectPics1 image_urls={data.project_images[0]} />
          </div>
          <div className="overflow-hidden">
            <ProjectPics2 image_urls={data.project_images[1]} />
          </div>
          <div className="overflow-hidden">
            <ProjectPics3 image_urls={data.project_images[2]} />
          </div>
          <div>
            <TechStack stack_images={data.tech_stack_image} />
          </div>
          <div>
            <Features feature_list={data.features} />
          </div>
          <div>
            <ArchitectureDesign />
          </div>
          <div>
            <StructureFlow />
          </div>
          <div>
            <DesignPrinciples design_principles={data.design_principles} />
          </div>
          <div>
            <ChallengesSolution
              challenges_solutions={data.challenges_solutions}
            />
          </div>
        </section>
      );
    } else {
      throw new Error("Couldn't Load Data");
    }
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
