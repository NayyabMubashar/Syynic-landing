"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
                  className="hero-heading relative z-10 flex flex-col items-center 
                justify-center gap-4 text-center"
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
                    <button className="bg-indigo-500 text-white px-3 lg:px-6 py-2 lg:py-3 mt-4  rounded-lg transform hover:scale-120 ease-in-out duration-200 font-bold hover:bg-indigo-700">
                      Start Free Trial
                    </button>
                    <button className="bg-white text-indigo-500 px-3 lg:px-6 py-2 lg:py-3 mt-4  rounded-lg font-bold hover:bg-gray-300 transform hover:scale-120 ease-in-out duration-200 ">
                      Get Started
                    </button>
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
