import React from "react";
import { SubHeading } from "../index";
import Image from "next/image";
import images from "@/public/constants/images";

const Poison = () => {
  return (
    <div className="paddingX paddingY flex flex-col items-center justify-center gap-16">
      <div className="flex flex-col items-center justify-center gap-2">
        <SubHeading title="Wide Range To Choose From" direction="center" />
        <h2 className="h2_title">What&apos;s Your Poison?</h2>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 lg:gap-8 lg:w-[80%]">
        <div className="flex-1 relative">
          <Image src={images.poison01} alt="beer" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-5 cursor-pointer">
            <p className="text-white font-base font-semibold text-2xl lg:text-4xl">
              Beer
            </p>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image src={images.poison02} alt="wine" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-5 cursor-pointer">
            <p className="text-white font-base font-semibold text-2xl lg:text-4xl">
              Wine
            </p>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image src={images.poison03} alt="cocktail" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-5 cursor-pointer">
            <p className="text-white font-base font-semibold text-2xl lg:text-4xl">
              Cocktail
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poison;
