import { MdGroups, MdPropaneTank,MdBusiness } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";

export default function PricingCard() {
    

    const pricingPlans = [
      {
        name: "Free",
        description: "Perfect for getting started",
        price: "$0",
        buttontext: "Get Started",
        icon: MdGroups,
        features: [
          "Up to 5 team members",
          "Basic project management",
          "Task and document sharing",
          "Standard support",
        ],
      },
      {
        name: "Pro",
        description: "For growing teams",
        price: "$12",
        buttontext: "Start free trial",
         icon:MdPropaneTank,
        features: [
          "Unlimited team members",
          "Advanced project management",
          "Team collaboration tools",
          "Analytics & insights",
          "Priority support",
        ],
      },
      {
        name: "Enterprise",
        description: "For large organizations",
        price: "Custom",
        buttontext: "Contact Sales",
        icon: MdBusiness,
        features: [
          "Everything in Pro",
          "Custom integrations",
          "Advanced security & compliance",
          "Dedicated account manager",
          "24/7 premium support",
        ],
      },
    ];
   
  return (
    <>
      <div className="mt-8  flex  flex-wrap gap-4 md:gap-9 lg:gap-12 items-center justify-center">
        {pricingPlans.map((plan) => {
              const Icon = plan.icon;
              return (
                // Cards
                <div
                  key={plan.name}
                  className="h-auto w-70 md:h-110 md:w-100 bg-gray-900 p-3 md:p-6 border-2 shadow-sm shadow-indigo-500 rounded-lg border-gray-400 hover:translate-2 hover:scale-110 hover:bg-[#1D2126] transition delay-50 duration-300"
                >
                  <div className="flex  gap-3">
                    <div className="w-8 h-8 md:w-12 md:h-12 lg:w-12 lg:h-12  rounded-xl bg-indigo-900/40 flex items-center justify-center mb-5">
                      <Icon size={40} className="text-indigo-500" />
                    </div>
                    <div>
                      <h4 className="text-white text-xl md:text-2xl lg:text-3xl">{plan.name}</h4>
                      <p className="text-xl text-gray-400">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex  gap-3">
                    <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl">
                      {plan.price}
                    </h1>
                    <p className="text-xl text-gray-400 py-2 md:py-4">/month</p>
                  </div>
                  <button className="md:text-xl text-sm border-2 shadow-md w-full py-2 border-gray-400 text-indigo-500">
                    {plan.buttontext}
                  </button>
                  <hr className="text-gray-800 mt-4" />

                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-xl text-gray-400 flex flex-col  mt-2 gap-2"
                    >
                      <div className="flex gap-2">
                        <div className="w-4 h-4 md:w-6 md:h-6 rounded-xl bg-indigo-900/40 flex items-center justify-center mt-2">
                          <TiTickOutline
                            size={50}
                            className="text-indigo-500"
                          />
                        </div>
                        <p className="mt-2 tex-xs md:text-sm">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              );
        })}
      </div>
    </>
  );
}
