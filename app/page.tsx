import Image from "next/image";
import Header from "./Header/Header";
import Solution from "./solution/page";
import Pricing from "./pricing/page";
import Resources from "./resources/page";
import Enterprise from "./enterprise/page";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <>
      <div className=" min-h-screen bg-[#1D2126]">
        <Header />
        <div className="relative flex  justify-center items-center px-12 bg-[url('/building.jpg')] bg-cover bg-center bg-no- h-150 md:h-200">
          
          <div className="absolute inset-0 bg-black/60"></div>
          <div
            className="flex flex-col items-center z-10
          justify-center mt-12 gap-4"
          >
            <h1 className="text-3xl lg:text-6xl font-extrabold text-white ">
              Build Automate and Scale
            </h1>
            <span className="text-3xl lg:text-6xl text-indigo-500 font-extrabold">
              All in One Platform
            </span>
            <p className="text-xl lg:text-2xl text-white">
              Synniq brings conversations, projects, documents,
              <br /> and AI together so your team can move from ideas to
              execution faster.
            </p>
            <div className="flex gap-2 lg:gap-4 items-center">
              <button className="bg-indigo-500 text-white px-3 lg:px-6 py-2 lg:py-3 mt-4  rounded-lg font-bold hover:bg-indigo-500">
                Start Free Trial
              </button>
              <button className="bg-white text-indigo-500 px-3 lg:px-6 py-2 lg:py-3 mt-4  rounded-lg font-bold hover:bg-gray-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Solution />
      <Pricing />
      <Resources />
      <Enterprise />
      <Footer />
    </>
  );
}
