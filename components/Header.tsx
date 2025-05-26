import React from "react";
import SubHeading from "./SubHeading";
import Image from "next/image";
import images from "@/public/constants/images";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="text-white flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-32 paddingX paddingY relative">
      <div className="flex flex-1 flex-col justify-center items-start lg:pl-10">
        <SubHeading title="Chase the new Flavour" />
        <h1 className="capitalize font-base text-golden tracking-wider font-bold text-5xl leading-16 md:leading-20 sm:text-7xl md:text-8xl lg:leading-[90px] w-[70%] md:w-full">
          The key to fine dining
        </h1>
        <p className="my-4 md:my-8 font-alt text-grey text-sm md:text-base">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <Button title="Explore Menu" href="/menu" />
      </div>
      <div className="flex-1">
        <Image src={images.welcome} alt="welcome" />
      </div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 text-grey text-sm md:text-base hidden lg:flex gap-8">
        <h4>#Biryani</h4>
        <h4>#Bar</h4>
      </div>
      <div className="absolute right-0 bottom-28 items-center rotate-90  hidden lg:flex gap-2">
        <div
          style={{
            background:
              "linear-gradient(to right, #DCCA87 0%, #DCCA87 43%, rgba(220, 202, 135, 0.24) 93%)",
          }}
          className="w-10 h-[1px] "
        />
        <p className="text-golden font-base uppercase">Scroll</p>
      </div>
    </div>
  );
};

export default Hero;
