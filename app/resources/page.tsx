import { AiOutlineArrowRight } from "react-icons/ai";
import Header from "../Header/Header";

const resources = [
  {
    title: "Getting Started with Synniq",
    description:
      "A step-by-step guide to help you and your team get up and running quickly.",
  
    action: "Read Guide",
   
  },
  {
    title: "Building Scalable Workflows",
    description: "Learn how to automate and scale your processes with Synniq.",
    action: "Read Blog",
    
  },
  {
    title: "5 Ways to Improve Team Collaboration",
    description: "Practical tips to enhance teamwork and boost productivity.",

    action: "Read Blog",
  
  },
  {
    title: "Project Plan Template",
    description:
      "Use this free template to plan, track, and deliver projects better.",
   
    action: "Download",
  
  },
  {
    title: "Synniq in 10 Minutes",
    description: "A quick overview of key features and how they work together.",

    action: "Watch Video",
  
  },
  {
    title: "How Acme Scaled with Synniq",
    description: "See how Acme improved efficiency by 40% using Synniq.",
   
    action: "Read Case Study",
    
  },
];

export default function Resources(){
    return (
      <>
        <div id="resources" className="min-h-screen bg-[#1D2126]  ">
          <div className="flex flex-col  items-center">
            <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold ">
              Learn Grow and stay ahead
            </h1>
            <h1 className="text-indigo-500 text-2xl md:text-4xl lg:text-6xl font-bold">
              With export resources
            </h1>
            <p className="text-gray-400 text-sm md:text-xl lg:text-2xl mt-6">
              Explore our libraury of guides,articles,videos and tools to help
              you buil better,work smarter and achieve more.
            </p>

            {/* buttons */}
            <div className="flex flex-wrap gap-2 md:gap-4 mt-2 md:mt-8">
              <button className="text-white border-2 border-indigo-500 shadow-lg hover:shadow-indigo-400 hover:border-indigo-700 px-4 py-2 rounded-3xl">
                All Resources
              </button>
              <button className="text-white border-2 border-indigo-500 shadow-lg hover:shadow-indigo-400 hover:border-indigo-700 px-4 py-2 rounded-3xl">
                Guides
              </button>
              <button className="text-white border-2 border-indigo-500 shadow-lg hover:shadow-indigo-400 hover:border-indigo-700 px-4 py-2 rounded-3xl">
                Blogs
              </button>
              <button className="text-white border-2 border-indigo-500 shadow-lg hover:shadow-indigo-400 hover:border-indigo-700 px-4 py-2 rounded-3xl">
                Webinars
              </button>
              <button className="text-white border-2 border-indigo-500 shadow-lg hover:shadow-indigo-400 hover:border-indigo-700 px-4 py-2 rounded-3xl">
                Videos
              </button>
              <button className="text-white border-2 border-indigo-500 shadow-lg hover:shadow-indigo-400 hover:border-indigo-700 px-4 py-2 rounded-3xl">
                Templates
              </button>
              <button className="text-white border-2 border-indigo-500 shadow-lg hover:shadow-indigo-400 hover:border-indigo-700 px-4 py-2 rounded-3xl">
                Case Studies
              </button>
            </div>
          </div>
          {/* parag */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 px-12 mt-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="flex flex-wrap gap-2  justify-center mt-8"
              >
                <div className="mt-2  px-4 md:px-6 w-full">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <h1 className="text-white text-xl md:text-2xl">
                      {resource.title}
                    </h1>
                    <button className="text-indigo-500 text-sm md:text-lg cursor-pointer flex items-center gap-2">
                      {resource.action}
                      <AiOutlineArrowRight size={24} />
                    </button>
                  </div>
                  <p className="md:text-xl text-lg text-gray-400 mt-4 mb-4">
                    {resource.description}
                  </p>
<div className="border-t-2 border-gray-600"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}