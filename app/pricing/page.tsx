import Header from "../Header/Header";
import PricingCard from "./pricingcard";

export default function Pricing(){
    return (
      <>
        
        <div id="pricing" className="min-h-screen bg-[#1D2126] ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold">Choose the Plan</h1>
            <span className="text-indigo-500 text-2xl md:text-4xl lg:text-6xl font-bold">
              That Fits your Team
            </span>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mt-4">
              Powerful tools for individals,growing teams and large organization
            </p>
          </div>
          <PricingCard />
        </div>
      </>
    );
}