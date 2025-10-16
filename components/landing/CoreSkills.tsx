"use client";
import Skill from "./Skill";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Image from "next/image";
import { ubuntu, ibmPlexMono } from "./Main";
import FancyUnderline from "../general/FancyUnderline";

export default function CoreSkills() {
  let skillList = [
    { name: "Coding", percentage: "90%" },
    { name: "Problem solving", percentage: "65%" },
    { name: "Critical thinking", percentage: "90%" },
    { name: "Research", percentage: "85%" },
    { name: "Innovation", percentage: "65%" },
    { name: "Presentation", percentage: "85%" },
  ];
  const [skills] = useState(skillList);
  return (
    <div className="grid gap-5">
      <section className="grid gap-10">
        <div className="relative grid gap-2 justify-items-center w-fit justify-self-center">
          <h1 className={`text-[#12F7D6] text-3xl ${ubuntu.className}`}>
            Core Skills
          </h1>
          <div className="w-full">
            <FancyUnderline />
          </div>
        </div>
        <p
          className={`mt-5 text-white ${ibmPlexMono.className} tracking-wider text-center text-sm m-auto`}
        >
          I am striving to never stop learning and improving
        </p>
      </section>
      <section className="grid gap-3 py-4 grid-cols-2 gap-y-6 gap-x-28 max-[810px]:gap-x-20 max-[601px]:grid-cols-1">
        {skills.map((skill) => (
          <Skill
            key={uuidv4()}
            name={skill.name}
            percentage={skill.percentage}
          />
        ))}
      </section>
    </div>
  );
}
