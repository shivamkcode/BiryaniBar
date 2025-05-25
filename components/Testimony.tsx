import React from "react";
import { SubHeading } from "./index";
import Image from "next/image";
import data from "@/public/constants/data";
import images from "@/public/constants/images";

const Testimony = () => {
  return (
    <div className="paddingX paddingY flex flex-col items-center justify-center gap-10 lg:gap-20">
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <SubHeading title="Testimony" direction="center" />
        <h2 className="h2_title">Happy Customers</h2>
      </div>
      <div className="flex flex-wrap gap-8 lg:gap-y-16 items-center justify-center">
        {data.testimony.map((item, index) => (
          <div
            key={item.id}
            className={`flex lg:w-[45%] flex-row gap-8 items-center ${index % 2 === 0 ? "flex-row-reverse text-right lg:text-left lg:flex-row" : ""}`}
          >
            <div className="flex-2 relative">
              <Image className="w-full h-full" src={item.image} alt={item.name} />
              <Image
                src={images.quote}
                alt="quote"
                className="absolute -right-4 -bottom-5 w-12 h-10"
              />
            </div>
            <div className="flex-3 flex flex-col gap-2">
              <p className="text-sm lg:text-base text-grey font-alt">{item.feedback}</p>
              <h3 className="text-4xl lg:text-5xl font-base text-golden">{item.name}</h3>
              <h4 className="text-sm lg:text-base text-crimson -mt-2">{item.to}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimony;
