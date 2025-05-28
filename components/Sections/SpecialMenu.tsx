import React from "react";
import images from "@/public/constants/images";
import Image from "next/image";
import data from "@/public/constants/data";
import { SubHeading, Sign, MenuItem, Button } from "../index";

const SpecialMenu = () => {
  return (
    <div className="flex flex-col gap-16 items-center justify-center paddingX paddingY relative">
      <Sign />
      <div className="flex flex-col items-center justify-center">
        <SubHeading title="Menu that fits you palatte" direction="center" />
        <h2 className="h2_title">Today&apos;s Special</h2>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row lg:px-0 justify-center items-center">
        <div className="flex flex-col gap-10 px-8 lg:px-0">
          <h3 className="text-white text-5xl lg:text-4xl font-base text-center">
            Wine & Beer
          </h3>
          {data.wines.map((wine, index) => (
            <MenuItem key={index} item={wine} />
          ))}
        </div>
        <div className="flex flex-1 w-[80vw] lg:w-full h-full">
          <Image src={images.menu} alt="menu" />
        </div>
        <div className="flex flex-col gap-10 px-8 lg:px-0">
          <h3 className="text-white text-5xl lg:text-4xl font-base text-center">
            Cocktails
          </h3>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={index} item={cocktail} />
          ))}
        </div>
      </div>
      <Button title="View More" href="/menu" />
    </div>
  );
};

export default SpecialMenu;
