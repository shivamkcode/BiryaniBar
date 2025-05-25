import images from "@/public/constants/images";
import Image from "next/image";
import React from "react";
import SubHeading from "./SubHeading";
import Sign from "./Sign";
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
          Lorem ipsum dolor sit auctor sit iaculis in arcu. Vulputate nulla
          lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac
          consequat, aliquam molestie lectus eu. Congue iaculis integer
          curabitur semper sit nunc.
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
