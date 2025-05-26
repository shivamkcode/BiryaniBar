import React from "react";
import SubHeading from "./SubHeading";
import data from "@/public/constants/data";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="flex flex-col items-center justify-center paddingX paddingY gap-10">
      <div className="flex flex-col items-center justify-center">
        <SubHeading title="Menu that fits your palatte" direction="center" />
        <h2 className="h2_title">Menu</h2>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col gap-8">
          <h3 className="text-white text-5xl lg:text-4xl font-base text-center">
            Food Menu
          </h3>
          <div className="flex flex-col gap-6">
            {data.foodMenu.map(
              (
                item: { title: string; price: string; tags: string },
                index: number
              ) => (
                <MenuItem key={index} item={item} />
              )
            )}
          </div>
        </div>
        <div
          className={`h-[1px] w-full lg:h-auto lg:w-[1px] bg-gradient-to-r lg:bg-gradient-to-b from-[rgba(250, 250, 250, .24)] from-0% via-[#dcca87c7] via-43% to-[rgba(250, 250, 250, 0)] to-98%`}
        />
        <div className="flex flex-col gap-8">
          <h3 className="text-white text-5xl lg:text-4xl font-base text-center">
            Drinks Menu
          </h3>
          <div className="flex flex-col gap-6">
            {data.drinksMenu.map(
              (
                item: { title: string; price: string; tags: string },
                index: number
              ) => (
                <MenuItem key={index} item={item} />
              )
            )}
          </div>
        </div>
        <div className="h-[1px] w-full lg:h-auto lg:w-[1px] bg-gradient-to-r lg:bg-gradient-to-b from-[rgba(250, 250, 250, .24)] from-0% via-[#dcca87] via-43% to-[rgba(250, 250, 250, 0)] to-98%" />
        <div className="flex flex-col gap-8">
          <h3 className="text-white text-5xl lg:text-4xl font-base text-center">
            Dessert Menu
          </h3>
          <div className="flex flex-col gap-6">
            {data.dessertMenu.map(
              (
                item: { title: string; price: string; tags: string },
                index: number
              ) => (
                <MenuItem key={index} item={item} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
