"use client";
import FancyUnderline from "@/components/general/FancyUnderline";
import { ubuntu } from "@/components/landing/Main";
import Flow from "./Flow";
import { useEffect, useState } from "react";

type FlowProps = {
  flow: string[];
};

export default function StructureFlow({ flow }: FlowProps) {
  const [currentFlow, setCurrentFlow] = useState<number>(0);
  const [flowData, setFlowData] = useState<Record<string | number, boolean>>({
    0: true,
  });

  useEffect(() => {
    flow.map((_item, index) => {
      if (index != 0) {
        setFlowData((prev) => ({ ...prev, [index]: false }));
      }
    });
  }, []);

  useEffect(() => {
    addOpacity(currentFlow);
  }, [currentFlow]);

  function fadeAll() {
    const newData: Record<string | number, boolean> = { 0: true };
    flow.map((_item, index) => {
      if (index != 0) {
        newData[index] = false;
      }
    });
    setFlowData(newData);
    setCurrentFlow(0);
  }

  function addOpacity(index: number) {
    if (!(index > flow.length - 1)) {
      setFlowData((prevData) => ({ ...prevData, [index]: true }));
    } else {
      fadeAll();
    }
  }

  function incrementFlow() {
    setCurrentFlow((prev) => prev + 1);
  }

  useEffect(() => {
    const timerID = setInterval(() => {
      incrementFlow();
    }, 1500);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <section className="bg-[#1A1E23] relative min-h-[500px] py-20 max-[701px]:py-10">
      <div className="work-bg absolute top-0 bottom-0 left-0 right-0 opacity-30"></div>
      <div className="bg-z absolute h-[400px] w-[508px] max-[701px]:h-[276px] max-[701px]:w-[350px] -translate-y-1/2 top-1/2 right-20 max-[901px]:right-10 max-[701px]:right-5 opacity-5"></div>
      <div className="relative grid gap-20 px-20 max-[901px]:px-10 max-[701px]:px-5">
        <div className="grid gap-10">
          <div className="grid gap-3.5 justify-items-center w-fit justify-self-center">
            <h2
              className={`text-[#12F7D6] capitalize text-3xl ${ubuntu.className}`}
            >
              Structure / Flow
            </h2>
            <div className="w-full">
              <FancyUnderline />
            </div>
          </div>
        </div>
        <section className="grid gap-14 py-8">
          {flow.map((step, index, array) => (
            <Flow
              key={index}
              index={index}
              step={step}
              array={array}
              flowData={flowData}
            />
          ))}
        </section>
      </div>
    </section>
  );
}
