import Image from "next/image";
import React from "react";

const features = [
  {
    icon: "/icons/subscription-features-1.svg",
    title: "Tell us a little about your furry friend",
    description:
      "Tell us a little about your furry friend, and we’ll design a meal plan made just for them!",
  },
  {
    icon: "/icons/subscription-features-2.svg",
    title: "Perfectly Portioned Meals",
    description:
      "Your Fur Baby’s perfectly portioned meals will be delivered straight to your doorstep.",
  },
  {
    icon: "/icons/subscription-features-3.svg",
    title: "Flexible Plans",
    description:
      "Need to pause or cancel? No problem—our plans are as flexible as your pet’s wagging tail!",
  },
];

const FeaturesItems = () => {
  return (
    <section>
      <div className="flex justify-center gap-8  container">
        {features.map((feature, index) => (
          <div
            key={index}
            className="  flex-1 text-center px-8 2xl:px-15 py-10 pt-[5%]  border border-secondary-1 rounded-lg shadow-sm "
          >
            <div  className="flex flex-col items-center mt-[-35%] ">
              <div className="w-(--space-50-99)  bg-white rounded-full relative z-[1]">
                <Image
                  src={feature.icon}
                  alt="icon"
                  fill
                  className="!static w-full object-contain"
                />
              </div>

              <p className="mt-3.5  ">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesItems;
