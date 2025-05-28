import images from "@/public/constants/images";
import Image from "next/image";
import React from "react";
import { SubHeading, Sign } from "../index";

const Chef = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 paddingX paddingY bg-[url('/assets/bg.webp')] bg-cover bg-center bg-no-repeat relative">
      <Sign direction="left" />
      <div>
        <Image src={images.chef} alt="chef" />
      </div>
      <div className="flex flex-col gap-12 justify-center">
        <div className="flex flex-col gap-2">
          <SubHeading title="Chef's Word" />
          <h2 className="h2_title">What We Believe In</h2>
        </div>
        <p className="font-base text-grey">
          <span className="font-base inline-block">
            <Image className="w-10 h-10" src={images.quote} alt="quote" />
          </span>{" "}
          Cooking is my passion, and Biryani Bar is my canvas. I believe in crafting dishes that not only satisfy your hunger but also tell a story. Our team uses the freshest ingredients and combines them with creativity and love to create unforgettable dining experiences. Come, be a part of our journey and let us share our story with you, one dish at a time.
        </p>
        <div className="flex flex-col lg:flex-row gap-2">
          <p className="text-golden text-2xl font-base">Kevin Luo</p>
          <p className="text-gray font-alt">Chef & Founder</p>
        </div>
        <Image className="w-60" src={images.sign} alt="sign" />
      </div>
    </div>
  );
};

export default Chef;
