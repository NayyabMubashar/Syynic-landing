import Header from "../Header/Header";

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
        <div id="enterprise" className="min-h-screen bg-[#1D2126] ">
          {/* Heading */}
          <div className=" p-18 border-b-2 border-gray-800 flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-4xl lg:text-6xl text-white">
              Power your Organization <br />
              with <span className="text-indigo-600">Synnic Enterprise</span>
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl mt-3 md:mt-6">
              Advanced security,unlimited scale,and dedicated support
              <br /> to help your organization move faster and achieve more.
            </p>
            <div className="flex gap-3 md:gap-6 mt-3 md:mt-6 rounded-md">
              <button className="px-2 md:px-4 py-2 md:py-3 bg-indigo-600 shadow-md rounded-md  text-white font-bold">
                Contact Sales
              </button>
              <button className="px-2 md:px-4 py-2 md:py-3 bg-transparent shadow-md  rounded-md border-2 border-gray-300 text-white font-bold">
                Schedule a Demo
              </button>
            </div>
            {/* buttons */}
            <div className="flex flex-wrap mt-3 md:mt-5 lg:mt-8 gap-2 md:gap-4 lg:gap-6">
              <div className="flex gap-2">
                <CiLock className="text-indigo-600 text-xl md:text-2xl" />
                <h2 className="text-xl text-gray-400">Enterprise Security</h2>
              </div>
              <div className="flex gap-2">
                <AiOutlineSafetyCertificate className="text-indigo-600 text-xl md:text-2xl" />
                <h2 className="text-xl text-gray-400">99.99% Uptime</h2>
              </div>
              <div className="flex gap-2">
                <CiHeadphones className="text-indigo-600 text-xl md:text-2xl" />
                <h2 className="text-xl text-gray-400">Deidcated Support</h2>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <h1 className="text-white text-xl md:text-2xl lg:text-3xl">
              Everything you need to scale securely
            </h1>
          </div>
          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6 mt-8">
            {enterpriseFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="bg-gray-900/50 border border-indigo-900/50 rounded-xl p-2 md:p-4 lg:p-6"
                >
                  <Icon size={35} className="text-indigo-500 mb-2 md:mb-5" />

                  <h3 className="text-white text-lg md:text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-base leading-6">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
}