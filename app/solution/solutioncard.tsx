"use client"

import { AiOutlineArrowRight } from "react-icons/ai";
import { GoRocket } from "react-icons/go";
import { MdPersonAddAlt } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import { LuBrain } from "react-icons/lu";
import {motion} from "motion/react";
export default function Solutioncard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, delay: 1.2 }}
      className="flex flex-wrap justify-center items-center gap-8 mt-10"
    >
      <div className="bg-syynic-secondary flex flex-col rounded-4xl p-3 lg:p-6 h-70 w-72 md:h-86 md:w-94 border-2 border-gray-400 shadow-sm shadow-synntext-synniq-primary hover:translate-2 hover:scale-110  transition delay-50 duration-300">
        <div className=" w-8 h-8 lg:w-16 lg:h-16 rounded-xl bg-synniq-bg/10 flex items-center justify-center mb-5">
          <GoRocket size={40} className="text-synniq-primary" />
        </div>
        <h2 className="text-white text-xl lg:text-3xl font-semibold mb-2 lg:mb-4">
          Startups & Small Teams
        </h2>
        <p className="text-gray-300 text-sm lg:text-lg">
          Move faster with one workspace for communication, projects, tasks, and
          documents.
        </p>
        <button className="text-synniq-primary text-sm lg:text-lg mt-auto flex items-center gap-2">
          Explore for Startups
          <AiOutlineArrowRight size={24} />
        </button>
      </div>

      <div className="bg-syynic-secondary rounded-4xl p-3 flex flex-col lg:p-6 h-70 w-72 md:h-86 md:w-94 border-2 border-gray-400 shadow-sm hover:translate-2 hover:scale-110  transition delay-50 duration-300 shadow-synntext-synniq-primary">
        <div className="w-8 h-8 lg:w-16 lg:h-16  rounded-xl  bg-synniq-bg/10 flex items-center justify-center mb-5">
          <MdPersonAddAlt size={40} className="text-synniq-primary" />
        </div>

        <h2 className="text-white text-4xl lg:text-4xl font-semibold mb-4">
          Growing Teams
        </h2>
        <p className="text-gray-300 text-sm lg:text-lg text-center">
          Keep everyone aligned, manage projects effortlessly, and make
          collaboration simple as your team grows.
        </p>

        <button className="text-synniq-primary text-sm lg:text-lg mt-auto flex gap-2">
          Explore for Startups
          <AiOutlineArrowRight size={24} />
        </button>
      </div>

      <div className="bg-syynic-secondary rounded-4xl p-3 flex  flex-col lg:p-6 h-70 w-72 md:h-86 md:w-94 border-2 border-gray-400 shadow-sm shadow-synntext-synniq-primary hover:translate-2 hover:scale-110  transition delay-50 duration-300">
        <div className="w-8 h-8 lg:w-16 lg:h-16 rounded-xl  bg-synniq-bg/10 flex  items-center justify-center mb-5">
          <BsBuildings size={40} className="text-synniq-primary" />
        </div>
        <h2 className="text-white text-4xl  lg:text-4xl font-semibold mb-4">
          Enterprise
        </h2>
        <p className="text-gray-300 text-sm lg:text-lg text-center">
          Give larger organizations the tools they need to manage teams,
          workflows, and productivity at scale.
        </p>

        <button className="text-synniq-primary text-sm lg:text-lg mt-auto flex gap-2">
          Explore for Startups
          <AiOutlineArrowRight size={24} />
        </button>
      </div>

      <div className="bg-syynic-secondary rounded-4xl  p-3 flex flex-col lg:p-6 h-70 w-72 md:h-86 md:w-94 border-2 border-gray-400 shadow-sm shadow-synntext-synniq-primary hover:translate-2 hover:scale-110  transition delay-50 duration-300">
        <div className="w-8 h-8 lg:w-16 lg:h-16 rounded-xl  bg-synniq-bg/10 flex items-center justify-center mb-5">
          <LuBrain size={40} className="text-synniq-primary" />
        </div>

        <h2 className="text-white text-2xl lg:text-4xl font-semibold mb-4">
          AI-Powered Workflows
        </h2>
        <p className="text-gray-300 text-sm lg:text-lg text-center">
          Automate repetitive work, summarize information, and turn ideas into
          action with AI.
        </p>

        <button className="text-synniq-primary text-sm lg:text-lg mt-auto flex items-center gap-2">
          Explore for Startups
          <AiOutlineArrowRight size={24} />
        </button>
      </div>
    </motion.div>
  );
}
