"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {motion} from "motion/react";
import { CiLock, CiHeadphones } from "react-icons/ci";
import { AiOutlineSafetyCertificate, } from "react-icons/ai";
import {
  MdSecurity,
  MdGroups,
  MdAnalytics,
  MdIntegrationInstructions,
  MdVerifiedUser,
  MdSupportAgent,
} from "react-icons/md";

const enterpriseFeatures = [
  {
    title: "Advanced Security",
    description:
      "SOC 2 compliant, SSO, SCIM, and data encryption at rest and in transit.",
    icon: MdSecurity,
  },
  {
    title: "Unlimited Scale",
    description: "Add users, projects, and data as your organization grows.",
    icon: MdGroups,
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain deeper insights with custom reports and usage analytics.",
    icon: MdAnalytics,
  },
  {
    title: "Custom Integrations",
    description: "Connect Synniq with your existing tools and workflows.",
    icon: MdIntegrationInstructions,
  },
  {
    title: "Compliance Ready",
    description:
      "Built to meet industry standards and regulatory requirements.",
    icon: MdVerifiedUser,
  },
  {
    title: "Dedicated Support",
    description: "Get priority support and a dedicated account manager.",
    icon: MdSupportAgent,
  },
];
export default function Enterprise(){
    return (
      <>
        <div id="enterprise" className="min-h-screen bg-synniq-bg ">
          {/* Heading */}
          <div className=" p-18 border-b-2 border-gray-800 flex flex-col justify-center items-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="text-2xl md:text-4xl lg:text-6xl text-syynic-secondary"
            >
              Power your Organization <br />
              with <span className="text-synniq-primbg-synniq-primary">Synnic Enterprise</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="text-gray-800 text-xl md:text-2xl mt-3 md:mt-6"
            >
              Advanced security,unlimited scale,and dedicated support
              <br /> to help your organization move faster and achieve more.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="flex gap-3 md:gap-6 mt-3 md:mt-6 rounded-md"
            >
              <button className="px-2 md:px-4 py-2 md:py-3 bg-synniq-primary shadow-md rounded-md transform hover:scale-120 ease-in-out duration-200  text-white font-bold">
                Contact Sales
              </button>
              <button className="px-2 md:px-4 py-2 md:py-3 bg-syynic-secondary shadow-md  rounded-md border-2 border-gray-300 transform hover:scale-120 ease-in-out duration-200  hover:bg-gray-900 text-white font-bold">
                Schedule a Demo
              </button>
            </motion.div>
            {/* buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 1 }}
              className="flex flex-wrap mt-3 md:mt-5 lg:mt-8 gap-2 md:gap-4 lg:gap-6"
            >
              <div className="flex gap-2">
                <CiLock className="text-synniq-primbg-synniq-primary text-xl md:text-2xl" />
                <h2 className="text-xl text-gray-600">Enterprise Security</h2>
              </div>
              <div className="flex gap-2">
                <AiOutlineSafetyCertificate className="text-synniq-primbg-synniq-primary text-xl md:text-2xl" />
                <h2 className="text-xl text-gray-600">99.99% Uptime</h2>
              </div>
              <div className="flex gap-2">
                <CiHeadphones className="text-synniq-primbg-synniq-primary text-xl md:text-2xl" />
                <h2 className="text-xl text-gray-600">Deidcated Support</h2>
              </div>
            </motion.div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <h1 className="text-syynic-secbg-syynic-secondary text-2xl md:text-3xl lg:text-4xl">
              Everything you need to scale securely
            </h1>
          </div>
          {/* cards */}

          <div className="flex justify-center mt-8 ">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full max-w-6xl"
            >
              <CarouselContent className="ml-4">
                {enterpriseFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <CarouselItem
                      key={feature.title}
                      className=" basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                      <div className="bg-syynic-secondary border h-full border-indigo-900/50 rounded-xl p-2 md:p-4 lg:p-6 shadow-sm shadow-indigo-500 hover:translate-3  transition delay-50 duration-300">
                        <Icon
                          size={35}
                          className="text-synniq-primary mb-2 md:mb-5"
                        />

                        <h3 className="text-white text-lg md:text-xl font-semibold mb-3">
                          {feature.title}
                        </h3>

                        <p className="text-gray-300 text-base leading-6">
                          {feature.description}
                        </p>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>

              <CarouselPrevious className="left-0 md:-left-12 bg-syynic-secondary/20" />
              <CarouselNext className="right-0 md:-right-12 bg-syynic-secondary/20" />
            </Carousel>
          </div>
        </div>
      </>
    );
}