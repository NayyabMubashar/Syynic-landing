"use client"
import { AiOutlineArrowRight } from "react-icons/ai";
import Header from "../Header/Header";
import {motion} from "motion/react";
import {
  FaRocket,
  FaProjectDiagram,
  FaUsers,
  FaFileAlt,
  FaPlayCircle,
  FaChartLine,
} from "react-icons/fa";
const resources = [
  {
    title: "Getting Started with Synniq",
    description:
      "A step-by-step guide to help you and your team get up and running quickly.",
    icon: FaRocket,
    action: "Read Guide",
  },
  {
    title: "Building Scalable Workflows",
    description: "Learn how to automate and scale your processes with Synniq.",
    icon: FaProjectDiagram,
    action: "Read Blog",
  },
  {
    title: "5 Ways to Improve Team Collaboration",
    description: "Practical tips to enhance teamwork and boost productivity.",
    icon: FaUsers,
    action: "Read Blog",
  },
  {
    title: "Project Plan Template",
    description:
      "Use this free template to plan, track, and deliver projects better.",
    icon: FaFileAlt,
    action: "Download",
  },
  {
    title: "Synniq in 10 Minutes",
    description: "A quick overview of key features and how they work together.",
    icon: FaPlayCircle,
    action: "Watch Video",
  },
  {
    title: "How Acme Scaled with Synniq",
    description: "See how Acme improved efficiency by 40% using Synniq.",
    icon: FaChartLine,
    action: "Read Case Study",
  },
];

export default function Resources(){
    return (
      <>
        <div id="resources" className="min-h-screen bg-synniq-bg  ">
          <div className="flex flex-col  items-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="text-syynic-secondary text-2xl md:text-4xl lg:text-6xl font-bold "
            >
              Learn Grow and stay ahead
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="text-synniq-primary text-2xl md:text-4xl lg:text-6xl font-bold"
            >
              With export resources
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="text-gray-800 text-sm md:text-xl lg:text-2xl mt-6"
            >
              Explore our libraury of guides,articles,videos and tools to help
              you buil better,work smarter and achieve more.
            </motion.p>

            {/* buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 1 }}
              className="flex flex-wrap gap-2 md:gap-4 mt-2 md:mt-8"
            >
              <button className="text-syynic-secondary border-2  shadow-lg  border-blue-950  hover:shadow-blue-950  px-4 py-2 rounded-3xl">
                All Resources
              </button>
              <button className="text-syynic-secondary border-2  shadow-lg border-blue-950 hover:shadow-blue-950 px-4 py-2 rounded-3xl">
                Guides
              </button>
              <button className="text-syynic-secondary border-2  shadow-lg  border-blue-950  hover:shadow-blue-950 px-4 py-2 rounded-3xl">
                Blogs
              </button>
              <button className="text-syynic-secondary border-2  shadow-lg  border-blue-950  hover:shadow-blue-950 px-4 py-2 rounded-3xl">
                Webinars
              </button>
              <button className="text-syynic-secondary border-2  shadow-lg  border-blue-950  hover:shadow-blue-950 px-4 py-2 rounded-3xl">
                Videos
              </button>
              <button className="text-syynic-secondary border-2  shadow-lg  border-blue-950  hover:shadow-blue-950 px-4 py-2 rounded-3xl">
                Templates
              </button>
              <button className="text-syynic-secondary border-2  shadow-lg  border-blue-950  hover:shadow-blue-950 px-4 py-2 rounded-3xl">
                Case Studies
              </button>
            </motion.div>
          </div>
          {/* parag */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 px-12 mt-8">
            {resources.map((resource, index) => {
              const Icon=resource.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: 1 }}
                  key={index}
                  className="flex flex-wrap gap-2 rounded-2xl hover:scale-105 duration-200  border-2 p-4 items-center bg-syynic-secondary  justify-center mt-8"
                >
                  <div className="mt-2  px-4 md:px-6 w-full">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                      <div className="flex gap-6">
                        <Icon size={35} className="text-synniq-primary" />
                        <h1 className="text-synniq-bg text-xl md:text-2xl">
                          {resource.title}
                        </h1>
                      </div>

                      <button className="text-synniq-primary text-sm md:text-lg cursor-pointer flex items-center gap-2">
                        {resource.action}
                        <AiOutlineArrowRight size={24} />
                      </button>
                    </div>
                    <p className="md:text-xl text-lg text-gray-400 mt-4 mb-4">
                      {resource.description}
                    </p>
                  </div>
                </motion.div>
              );
             
})}
          </div>
        </div>
      </>
    );
}