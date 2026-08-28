"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";

const heroImages = ["/building.jpg", "/building1.jpg", "/poster.jpg"];

export default function Hero() {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div
                className="relative flex  justify-center items-center px-12  bg-cover bg-center bg-no-repeat h-150 md:h-200 "
                style={{
                  backgroundImage: `url(${image})`,
                }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
                <div
                  className="relative z-10 flex flex-col items-center 
                justify-center gap-4 text-center"
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="text-3xl lg:text-6xl font-extrabold text-white "
                  >
                    Build Automate and Scale
                  </motion.h1>
                  <motion.span
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-3xl lg:text-6xl text-synniq-primary font-extrabold"
                  >
                    All in One Platform
                  </motion.span>
                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-xl lg:text-2xl text-white"
                  >
                    Synniq brings conversations, projects, documents,
                    <br /> and AI together so your team can move from ideas to
                    execution faster.
                  </motion.p>
                  <div className="flex gap-2 lg:gap-4 items-center">
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="bg-synniq-primary text-white px-3 lg:px-6 py-2 lg:py-3 mt-4  rounded-lg transform hover:scale-120 ease-in-out duration-200 font-bold hover:bg-synniq-primary/70"
                    >
                      Start Free Trial
                    </motion.button>

                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white text-synniq-primary px-3 lg:px-6 py-2 lg:py-3 mt-4  rounded-lg font-bold hover:bg-gray-200 transform hover:scale-120 ease-in-out duration-200 "
                    >
                      Get Started
                    </motion.button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
