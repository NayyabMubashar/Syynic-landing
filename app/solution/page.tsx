import Header from "../Header/Header";
import Solutioncard from "./solutioncard";

export default function Solution() {
  return (
    <>
  
      <div id="solution" className="min-h-screen bg-[#1D2126] flex flex-col py-8 items-center  text-center gap-4">
        <h1 className="text-white text-3xl lg:text-6xl font-semibold">
          Solutions built for the way
        </h1>
        <span className="text-indigo-500 font-semibold text-3xl lg:text-6xl">
          your team works
        </span>
        <p className="text-gray-300 text-xl lg:text-2xl">
          From growing startups to large organizations, Synniq helps teams<br/>
          collaborate, automate, and get work done in one place.
        </p>

        <Solutioncard />
      </div>
    </>
  );
}