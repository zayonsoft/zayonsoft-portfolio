"use client";
import { useEffect, useState } from "react";

export const urls: Record<string, string> = {
  home: "/#home",
  about: "/#about",
  skills: "/#skills",
  my_work: "/#my_work",
  contact: "/#contact",
};

type ControlProps = {
  id: string;
  top: number;
  screen_portion: number;
};

export default function ScrollController({}) {
  const [currentSection, setCurrentSection] = useState();
  useEffect(() => {
    function elementControl(elementId: string): ControlProps {
      const fixedHeader = document.getElementById("header");
      const headerHeight = fixedHeader?.getBoundingClientRect().height || 0;

      let element = document.getElementById(elementId);
      const elementTop = element?.getBoundingClientRect().top || 0;
      const elementHeight = element?.getBoundingClientRect().height || 0;
      const elementBottom = element?.getBoundingClientRect().bottom || 0;
      // console.log(`Element Height: ${elementHeight}`);
      let calculatedTop = elementTop - headerHeight;
      let screenPortion = elementHeight + calculatedTop;
      // console.log(`Section '${elementId}' Top: ${calculatedTop}`);
      // console.log(`Section '${elementId}' Bottom: ${elementBottom}`);
      // console.log(`Section '${elementId}' Screen Portion: ${screenPortion}`);
      //negative screen portion means it has been scrolled past
      console.log(window.innerHeight);
      return {
        id: elementId,
        top: calculatedTop,
        screen_portion: screenPortion,
      };
    }

    document.addEventListener("scroll", () => {
      let largestNegative = elementControl("home").top;
      let smallestPositive = 100000000000 * 1000000000000 * 1000000000;
      // Declaring the objects variable they'll be used to decide which of the closest two has more screen portion
      let smallestPositiveData: ControlProps = elementControl("home");
      let largestNegativeData: ControlProps = elementControl("home");
      for (var i in urls) {
        let specificUrl = urls[i];
        let sectionId = specificUrl.slice(2);
        const sectionData = elementControl(sectionId);
        // Finding the Largest Negative
        if (sectionData.top < 0 && sectionData.top > largestNegative) {
          largestNegative = sectionData.top;
          largestNegativeData = sectionData;
        }
        // Finding the Smallest Positive
        if (sectionData.top > 0 && sectionData.top < smallestPositive) {
          smallestPositive = sectionData.top;
          smallestPositiveData = sectionData;
        }
        // console.log(sectionData);
      }
      console.log(
        `Smallest Positive Object: ${JSON.stringify(smallestPositiveData)}`
      );
      console.log(
        `Largest Negative Object: ${JSON.stringify(largestNegativeData)}`
      );
    });
  }, []);
  return null;
}
