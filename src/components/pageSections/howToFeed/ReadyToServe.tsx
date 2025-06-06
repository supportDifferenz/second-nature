import Typography from "@/components/atoms/typography/Typography";
import Image from "next/image";
import React from "react";

interface ReadyToServeProps {
  image: string;
  text: string;
}

const readyToServeData: ReadyToServeProps[] = [
  {
    image: "/images/thermometer-cold.svg",
    text: "Freeze",
  },
  {
    image: "/images/snow.svg",
    text: "Thaw",
  },
  {
    image: "/images/package-open.svg",
    text: "Open",
  },
  {
    image: "/images/rice-bowl.svg",
    text: "Serve",
  },
];

export default function ReadyToServe() {
  return (
    <div className="flex flex-col gap-[var(--space-30-115)]">
      <div className="relative flex flex-col justify-center items-center bg-[#FDFEFA] border border-secondary-1 rounded-2xl pt-[var(--space-68-110)] pb-[107vw] sm:pb-[24.06vw] lg:pb-[14.06vw]">
        <div className="flex flex-col items-center mb-16 sm:mb-11 lg:mb-9 w-[79%] sm:w-auto text-center">
          <Typography
            tag="h5"
            text="From Our Kitchen to Yours:"
            className="text-primary-dark"
          />
          <Typography
            tag="h2"
            className="highlight text-primary-dark"
            text="Ready-to-Serve Meals"
          />
        </div>
        <div className="flex gap-[var(--space-20-45)] mb-[var(--space-50-60)] items-center">
          {readyToServeData.map((item: ReadyToServeProps, index) => (
            <>
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-[var(--space-8-17)] items-center"
              >
                <div className="w-[var(--space-40-60)] relative ">
                  {" "}
                  <Image
                    src={item.image}
                    fill
                    alt="Transition plan for"
                    className="!static w-full h-full object-cover object-center"
                  />
                </div>
                <Typography
                  tag="h6"
                  text={item.text}
                  className="text-secondary-1"
                />
              </div>
              {index < readyToServeData.length - 1 && (
                <div className="w-[var(--space-15-30)] relative " key={index}>
                  {" "}
                  <Image
                    src="/images/rightArrow.svg"
                    fill
                    alt="Transition plan for"
                    className="!static w-full h-full object-cover object-center"
                  />
                </div>
              )}
            </>
          ))}
        </div>
        <Typography
          tag="h6"
          className="text-center w-[82%] sm:w-[65%] lg:w-[54%]"
          text="Put the Bowl packages in the freezer once they are received. We suggest thawing your pet’s meals one night in advance."
        />

        <div className="absolute bottom-[-8%] sm:bottom-[-33%] lg:bottom-[-43%] w-[114%] sm:w-[45%] lg:w-[35%]">
          <Image
            src="/images/puppy-feeding.webp"
            fill
            alt="Dog image"
            className="!static w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-7 sm:gap-0 justify-between items-center bg-[#FDFEFA] sm:border border-secondary-1 rounded-2xl sm:pt-[10.5vw] lg:pt-[17.03vw] pb-mob-60 sm:pb-[8.06vw] lg:pb-[7.08vw] lg:px-[9.79vw]">
        <div className="flex-1 border border-secondary-1 rounded-2xl sm:border-none sm:rounded-none pt-[23.8vw] sm:pt-0 pb-[14vw] sm:pb-0">
          <div className="w-fit mx-auto">
            <div className="flex flex-col gap-5 items-center justify-center px-3.5 border-b border-b-primary pb-2.5 w-[63%] sm:w-[72%] lg:w-auto mx-auto">
              <div className="w-[var(--space-80-120)] relative ">
                {" "}
                <Image
                  src="/images/thermometer-control.svg"
                  fill
                  alt="Transition plan for"
                  className="!static w-full h-full object-cover object-center"
                />
              </div>
              <Typography
                tag="h5"
                text="Tips for Thawing"
                className="text-black uppercase text-center"
              />
            </div>
            <div className="flex flex-col gap-[var(--space-30-40)] items-center justify-center mt-[var(--space-40-70)] px-3.5 w-[81%] lg:w-auto mx-auto">
              <div className="flex flex-col gap-2 lg:w-[21.35vw] items-center justify-center">
                <div className="flex gap-2.5 items-center">
                  <div className="w-[var(--space-30-40)] relative ">
                    {" "}
                    <Image
                      src="/images/thermometer-control.svg"
                      fill
                      alt="Transition plan for"
                      className="!static w-full h-full object-cover object-center"
                    />
                  </div>
                  <Typography
                    tag="h6"
                    text="Refrigerate Overnight"
                    className="text-secondary-1 font-bold"
                  />
                </div>
                <Typography
                  tag="h6"
                  text="Place the portion from the freezer
                        into the refrigerator to thaw
                        safely overnight."
                  className="text-black text-center"
                />
              </div>
              <hr className="w-[110px] border-secondary-2" />
              <div className="flex flex-col gap-2 lg:w-[21.35vw] items-center justify-center">
                <div className="flex gap-2.5 items-center">
                  <div className="w-[var(--space-30-40)] relative ">
                    {" "}
                    <Image
                      src="/images/thermometer-control.svg"
                      fill
                      alt="Transition plan for"
                      className="!static w-full h-full object-cover object-center"
                    />
                  </div>
                  <Typography
                    tag="h6"
                    text="Refrigerate Overnight"
                    className="text-secondary-1 font-bold"
                  />
                </div>
                <Typography
                  tag="h6"
                  text="Place the portion from the freezer
                        into the refrigerator to thaw
                        safely overnight."
                  className="text-black text-center"
                />
              </div>
              <hr className="w-[110px] border-secondary-2" />
              <div className="flex flex-col gap-2 lg:w-[21.35vw] items-center justify-center">
                <div className="flex gap-2.5 items-center">
                  <div className="w-[var(--space-30-40)] relative ">
                    {" "}
                    <Image
                      src="/images/thermometer-control.svg"
                      fill
                      alt="Transition plan for"
                      className="!static w-full h-full object-cover object-center"
                    />
                  </div>
                  <Typography
                    tag="h6"
                    text="Refrigerate Overnight"
                    className="text-secondary-1 font-bold"
                  />
                </div>
                <Typography
                  tag="h6"
                  text="Place the portion from the freezer
                        into the refrigerator to thaw
                        safely overnight."
                  className="text-black text-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 border border-secondary-1 rounded-2xl sm:border-none sm:rounded-none py-11 sm:py-0">
          <div className="w-fit mx-auto">
            <div className="flex flex-col gap-5 items-center justify-center px-3.5 border-b border-b-primary pb-2.5 w-[63%] sm:w-fit lg:w-auto mx-auto">
              <div className="w-[var(--space-80-120)] relative ">
                {" "}
                <Image
                  src="/images/thermometer-control.svg"
                  fill
                  alt="Transition plan for"
                  className="!static w-full h-full object-cover object-center"
                />
              </div>
              <Typography
                tag="h5"
                text="Tips for Thawing"
                className="text-black uppercase text-center"
              />
            </div>
            <div className="flex flex-col gap-[var(--space-30-40)] items-center justify-center mt-[var(--space-40-70)] px-3.5 w-[81%] lg:w-auto mx-auto">
              <div className="flex flex-col gap-2 lg:w-[21.35vw] items-center justify-center">
                <div className="flex gap-2.5 items-center">
                  <div className="w-[var(--space-30-40)] relative ">
                    {" "}
                    <Image
                      src="/images/thermometer-control.svg"
                      fill
                      alt="Transition plan for"
                      className="!static w-full h-full object-cover object-center"
                    />
                  </div>
                  <Typography
                    tag="h6"
                    text="Refrigerate Overnight"
                    className="text-secondary-1 font-bold"
                  />
                </div>
                <Typography
                  tag="h6"
                  text="Place the portion from the freezer
                        into the refrigerator to thaw
                        safely overnight."
                  className="text-black text-center"
                />
              </div>
              <hr className="w-[110px] border-secondary-2" />
              <div className="flex flex-col gap-2 lg:w-[21.35vw] items-center justify-center">
                <div className="flex gap-2.5 items-center">
                  <div className="w-[var(--space-30-40)] relative ">
                    {" "}
                    <Image
                      src="/images/thermometer-control.svg"
                      fill
                      alt="Transition plan for"
                      className="!static w-full h-full object-cover object-center"
                    />
                  </div>
                  <Typography
                    tag="h6"
                    text="Refrigerate Overnight"
                    className="text-secondary-1 font-bold"
                  />
                </div>
                <Typography
                  tag="h6"
                  text="Place the portion from the freezer
                        into the refrigerator to thaw
                        safely overnight."
                  className="text-black text-center"
                />
              </div>
              <hr className="w-[110px] border-secondary-2" />
              <div className="flex flex-col gap-2 lg:w-[21.35vw] items-center justify-center">
                <div className="flex gap-2.5 items-center">
                  <div className="w-[var(--space-30-40)] relative ">
                    {" "}
                    <Image
                      src="/images/thermometer-control.svg"
                      fill
                      alt="Transition plan for"
                      className="!static w-full h-full object-cover object-center"
                    />
                  </div>
                  <Typography
                    tag="h6"
                    text="Refrigerate Overnight"
                    className="text-secondary-1 font-bold"
                  />
                </div>
                <Typography
                  tag="h6"
                  text="Place the portion from the freezer
                        into the refrigerator to thaw
                        safely overnight."
                  className="text-black text-center"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
