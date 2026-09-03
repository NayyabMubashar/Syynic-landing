"use client"
import {motion} from "motion/react";
import Header from "../Header/Header";
import PricingCard from "./pricingcard";

export default function Pricing(){
    return (
      <>
        <div id="pricing" className="min-h-screen bg-synniq-bg ">
          <div className="flex flex-col items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="text-syynic-secondary text-2xl md:text-4xl lg:text-6xl font-bold"
            >
              Choose the Plan
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="text-synniq-primary text-2xl md:text-4xl lg:text-6xl font-bold"
            >
              That Fits your Team
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-800 mt-4 text-center"
            >
              Powerful tools for individals,growing teams and large organization
            </motion.p>
          </div>
          <PricingCard />
        </div>
      </>
    );
}