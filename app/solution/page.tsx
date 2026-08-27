"use client"
import Header from "../Header/Header";
import Solutioncard from "./solutioncard";
import {motion} from "motion/react";

export default function Solution() {
  return (
    <>
      <div
        id="solution"
        className="min-h-screen bg-synniq-bg flex flex-col py-8 items-center  text-center gap-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3, delay: 0.5 }}
          className="text-syynic-navy text-3xl lg:text-6xl font-semibold"
        >
          Solutions built for the way
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.6 }}
          className="text-synniq-blue font-semibold text-3xl lg:text-6xl"
        >
          your team works
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
          transition={{delay: 0.9 }}
          className="text-gray-800 text-xl lg:text-2xl"
        >
          From growing startups to large organizations, Synniq helps teams
          <br />
          collaborate, automate, and get work done in one place.
        </motion.p>

        <Solutioncard />
      </div>
    </>
  );
}