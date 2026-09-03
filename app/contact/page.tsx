"use client";
import Header from "../Header/Header"
import Link from "next/link";
import { IoPerson } from "react-icons/io5";
import { IoMdMail,  IoMdCall,IoMdTime,} from "react-icons/io";
import { MdNoteAlt } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import {motion} from "motion/react";
import Image from "next/image";

export default function Contact()  {
    return (
      <>
        <div
          id="contact"
          className=" min-h-screen flex flex-col items-center justify-center bg-synniq-bg px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-20"
        >
          {/* heading */}
          <div className="flex flex-col items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="text-syynic-secondary font-bold text-3xl md:text-4xl lg:text-6xl"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.7 }}
              className="text-gray-800 mt-6 text-lg md:text-xl lg:text-2xl text-center"
            >
              Have questions, feedback, or need support?
              <br className="hidden md:block" /> Our team is here to help.
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-stretch gap-6 lg:gap-10 w-full max-w-6xl px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="w-full lg:w-[48%] bg-synniq-secondary rounded-xl shadow-md"
            >
              <form className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-20 bg-syynic-secondary rounded-xl shadow-md">
                {/* Heading */}
                <div className="flex flex-col items-center justify-center gap-4">
                  <h1 className="text-synniq-bg text-2xl md:text-4xl lg:text-6xl font-bold">
                    Get In Touch
                  </h1>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 bg-synniq-bg border-gray-400 p-2  rounded-xl font-bold text-xl">
                    <IoPerson className="text-synniq-primary text-2xl" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="bg-synniq-bg border-gray-400 p-2 focus:outline-none  font-bold text-xl"
                      required
                    />
                  </div>
                  <div className="flex items-center gap-2 bg-synniq-bg border-gray-400 rounded-xl  p-2 font-bold text-xl">
                    <IoMdMail className="text-synniq-primary text-2xl" />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="bg-synniq-bg border-gray-400 p-2 focus:outline-none font-bold text-xl"
                      required
                    />
                  </div>
                  <div className="flex gap-2 bg-synniq-bg border-gray-400 p-2 rounded-xl font-bold text-xl">
                    <MdNoteAlt className="text-synniq-primary text-2xl" />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="bg-synniq-bg border-gray-400 p-2 focus:outline-none font-bold text-xl"
                    ></textarea>
                  </div>
                  <div className="flex flex-col gap-4">
                    <button className="py-2 px-4 text-xl bg-synniq-primary text-white font-bold rounded-md hover:bg-synniq-primary/90 focus:outline-none hover:scale-105 transition-transform duration-200 ease-in-out">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 1.2 }}
              className="w-full lg:w-[48%]  rounded-xl shadow-md px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12"
            >
              <div className="flex flex-col items-center justify-center gap-4 ">
                <h1 className="text-syynic-secondary text-2xl md:text-4xl lg:text-5xl font-bold text-center">
                  Contact Information
                </h1>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-2 bg-synniq-bg p-3 rounded-md font-bold text-xl">
                  <IoMdMail className="text-synniq-primary text-2xl shrink-0" />
                  <span className="text-2xl text-syynic-secondary">
                    Email Address
                  </span>
                </div>
                <p>contact@synniq.com</p>

                <div className="flex items-center gap-2 bg-synniq-bg p-3 rounded-md font-bold text-xl">
                  <IoMdCall className="text-synniq-primary text-2xl shrink-0" />
                  <span className="text-2xl text-syynic-secondary ">
                    Phone Number
                  </span>
                </div>
                <p>(123) 456-7890</p>

                <div className="flex items-center gap-2 bg-synniq-bg p-3 rounded-md font-bold text-xl">
                  <IoMdTime className="text-synniq-primary text-2xl shrink-0" />
                  <span className="text-2xl text-syynic-secondary ">
                    Opening Hours
                  </span>
                </div>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>

                <div className="flex items-center gap-2 bg-synniq-bg p-3 rounded-md font-bold text-xl">
                  <MdLocationPin className="text-synniq-primary text-2xl shrink-0" />
                  <span className="text-2xl text-syynic-secondary ">
                    Location
                  </span>
                </div>
                <p>123 Main Street, City, State 12345</p>
              </div>
            </motion.div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: 1.3 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-syynic-secondary mt-8"
          >
            Visit Our Office for In Person Meetings and Consultationts
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: 1.4 }}
            className="bg-[url('/map.jpg')] w-full h-96 rounded-lg shadow-md mt-4"
          ></motion.div>
        </div>
      </>
    );
}