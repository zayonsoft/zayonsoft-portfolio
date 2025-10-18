import { ibmPlexMono } from "./Main";
export default function Project() {
  return (
    <section>
      <div className="grid grid-cols-2">
        {/* Desc */}
        <section>
          <div className={`grid gap-0.5 ${ibmPlexMono.className}`}>
            <p
              className={`flex text-sm items-center gap-2 text-[#12F7D6] font-medium`}
            >
              <span>Personal Project</span>
              <span className="bg-[#12F7D6] h-1 w-1 rounded-full block"></span>
              <span className="">2024</span>
            </p>
            <h1 className={`text-3xl text-white tracking-wider font-medium`}>
              CGPA Calculator
            </h1>
            <div className="relative">
              <div className="absolute top-0 right-0 bottom-0 left-0 project-text rounded-xl"></div>
              <div className="absolute top-0 right-0 bottom-0 left-0 ptext-overlay opacity-[8%]"></div>
              <p className="relative text-justify text-white text-sm p-4">
                A web-based and highly interactive application that collects the
                course information of students along with their Grades in those
                courses and uses the info to calculate the Grade Point Average
                (GPA) as well as the Cumulative Grade Point Average (CGPA)
                across Semesters and Session.
              </p>
            </div>
          </div>
        </section>

        {/* Image Section below */}
        <section></section>
      </div>
    </section>
  );
}
