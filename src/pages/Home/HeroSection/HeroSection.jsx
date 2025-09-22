import React from "react";
import heroSection from "../../../assets/Gymshark/HeroSection/heroSection.avif";
import heroSectionMob from "../../../assets/Gymshark/HeroSection/heroSectionMob.avif";
import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <div className="relative flex md:items-center items-end  lg:h-[80vh] h-[90vh] md:h-[50vh] mt-19 md:mt-19 lg:mt-0">

      <picture className="absolute inset-0">
        {/* Large screen (md and up) */}
        <source srcSet={heroSection} media="(min-width: 768px)" />
        {/* Default (small screens) */}
        <img
          src={heroSectionMob}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </picture>

      {/* Background Overlay */}
      {/* <div className="absolute inset-y-0 left-0 md:w-2/5 bg-gradient-to-r from-black/65 to-transparent"></div> */}
      <div
        className="
        absolute 
        bg-gradient-to-t from-black/65 to-transparent 
        inset-x-0 bottom-0 h-2/5   /* default: small screens, bottom overlay */
        md:inset-y-0 md:left-0 md:w-2/5 md:h-full md:bg-gradient-to-r"
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="relative flex flex-col justify-center gap-4 md:gap-6 md:px-14 px-5 py-5 md:py-20">
          <h1 className="hidden md:block text-white text-[50px] font-bold leading-tight">
            {" "}
            LAYERING SEASON <span className="block">STARTS NOW</span>
          </h1>

          <h1 className="md:hidden text-white text-[35px] font-bold leading-tight ">
            {" "}
            UP TO 50% OFF* LAST<span className="block">CHANCE LOOKS</span>
          </h1>

          <p className="text-white text-[16px] hidden md:block">
            Comfortable, versatile layers that’ll keep you moving this season.
          </p>

          <p className="text-white text-[16px] md:hidden">
          Time to pick up the gym kit you’ve been eyeing all season. Make it count. *selected styles only
          </p>



          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <Button
              variant="secondary"
              className="font-bold rounded-2xl py-5.5 px-8 cursor-pointer"
            >
              SHOP WOMEN
            </Button>
            <Button
              variant="secondary"
              className="font-bold rounded-2xl py-5.5 px-8 cursor-pointer"
            >
              SHOP MEN
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
