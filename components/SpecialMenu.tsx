import React from "react";
import SubHeading from "./SubHeading";
import images from "@/public/constants/images";
import Image from "next/image";
import Button from "./Button";
import data from "@/public/constants/data";
import Sign from "./Sign";

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
            <div className="flex flex-col gap-1 lg:gap-2" key={index}>
              <div className="flex justify-between gap-2 items-center">
                <p className="text-golden text-2xl font-base">{wine.title}</p>
                <div className="flex flex-row gap-8 items-center">
                  <div className="w-30 h-[1px] bg-grey" />
                  <p className="text-white text-2xl font-base">{wine.price}</p>
                </div>
              </div>
              <p className="text-grey font-alt">{wine.tags}</p>
            </div>
          ))}
        </div>
        <div className="flex w-full h-full">
          <Image src={images.menu} alt="menu" />
        </div>
        <div className="flex flex-col gap-10 px-8 lg:px-0">
          <h3 className="text-white text-5xl lg:text-4xl font-base text-center">
            Cocktails
          </h3>
          {data.cocktails.map((cocktail, index) => (
            <div className="flex flex-col gap-1 lg:gap-2" key={index}>
              <div className="flex flex-row justify-between gap-2 items-center">
                <p className="text-golden text-2xl font-base">
                  {cocktail.title}
                </p>
                <div className="flex flex-row gap-8 items-center">
                  <div className="w-30 h-[1px] bg-grey" />
                  <p className="text-white text-2xl font-base">
                    {cocktail.price}
                  </p>
                </div>
              </div>
              <p className="text-grey font-alt">{cocktail.tags}</p>
            </div>
          ))}
        </div>
      </div>
      <Button title="View More" href="/menu" />
    </div>
  );
};

export default SpecialMenu;
