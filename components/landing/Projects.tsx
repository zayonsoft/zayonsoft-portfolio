import Project from "./Project";
import fs from "fs/promises";
import path from "path";
import { BsEmojiFrown } from "react-icons/bs";

export type DataProps = {
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
  role: { title: string; desc: string };
};

export default async function Projects() {
  try {
    const filePath = path.join(process.cwd(), "public", "data", "data.json");
    const file = await fs.readFile(filePath, "utf-8");
    const projectDataset = JSON.parse(file) as DataProps[];

    if (projectDataset) {
      return (
        <section className="text-white">
          {projectDataset.map((project, index) => (
            <Project
              key={project.id}
              count={index + 1}
              id={project.id}
              name={project.name}
              overview={project.overview}
              preview_image={project.preview_image}
              type={project.type}
              year={project.year}
            />
          ))}
        </section>
      );
    } else {
      throw new Error("Couldn't Load Data");
    }
  } catch {
    return (
      <h2 className="grid gap-1 justify-items-center py-20 text-[#12F7D6] text-xl max-[701px]:text-lg">
        <span className="text-2xl">
          <BsEmojiFrown />
        </span>
        <span>Couldn&apos;t Load Projects!</span>
      </h2>
    );
  }
}
