"use client";
import { useEffect, useState } from "react";

export const urls: Record<string, string> = {
  home: "/#home",
  about: "/#about",
  skills: "/#skills",
  my_work: "/#my_work",
  contact: "/#contact",
};

type MapProps = { short: string; long: string };

// The ids for each sections link
// short - Desktop, long-mobile in the sidebar
const sectionIconMapping: Record<string, MapProps> = {
  home: { short: "home-icon", long: "home-mobile-icon" },
  about: { short: "about-icon", long: "about-mobile-icon" },
  skills: { short: "skills-icon", long: "skills-mobile-icon" },
  my_work: { short: "my_work-icon", long: "my_work-mobile-icon" },
  contact: { short: "contact-icon", long: "contact-mobile-icon" },
};

type ControlProps = {
  id: string;
  top: number;
  screen_portion: number;
};

export default function ScrollController({}) {
  const [currentSectionId, setCurrentSectionId] = useState<string>("home");

  useEffect(() => {
    const section = sectionIconMapping[currentSectionId];
    console.log(section);
  }, [currentSectionId]);

  useEffect(() => {
    function elementControl(elementId: string): ControlProps {
      const fixedHeader = document.getElementById("header");
      const headerHeight = fixedHeader?.getBoundingClientRect().height || 0;

      let element = document.getElementById(elementId);
      const elementTop = element?.getBoundingClientRect().top || 0;
      const elementHeight = element?.getBoundingClientRect().height || 0;
      let calculatedTop = elementTop - headerHeight;
      let screenPortion = elementHeight + calculatedTop;
      //negative screen portion means it has been totally scrolled past
      return {
        id: elementId,
        top: calculatedTop,
        screen_portion: screenPortion,
      };
    }

    /* The scrollDetector function  finds the two possible sections that can be on the screen
    One is highest Negative offset Top
    (meaning the element whose top has been scrolled past but is the closest to the current view)
    The other is the smallest positive offset top
    The smallest Positive offset top is the offset top of the next element to the currrent one in view
    When these two have been identified a comparison is made to find out which of the two sections should be termed active.
    If the upper element (largestNegative) has greater than 35% of the screen it'll be termed active else the lower element is active
    */
    function scrollDetector() {
      let largestNegative = elementControl("home").top;
      let smallestPositive = 100000000000 * 1000000000000 * 10000000000;
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

      let screenHeight = window.innerHeight;

      // If the upper section covers 35% of the screen then it'll be considered the active section
      if (largestNegativeData.screen_portion > screenHeight * 0.35) {
        setCurrentSectionId(largestNegativeData.id);
      } else {
        // The second option is the active section
        setCurrentSectionId(smallestPositiveData.id);
      }
    }

    document.addEventListener("scroll", () => {
      scrollDetector();
    });
  }, []);
  return null;
}
