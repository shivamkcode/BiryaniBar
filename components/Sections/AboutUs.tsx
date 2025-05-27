import images from "@/public/constants/images";
import Image from "next/image";
import React from "react";
import { Button } from "../index";

const AboutUs = () => {
  return (
    <div className='bg-[url("/assets/bg.webp")] bg-cover bg-center bg-no-repeat flex items-center justify-center paddingX paddingY relative'>
      <div className="flex flex-col items-center justify-center gap-16 z-10 lg:flex-row">
        <div className="flex flex-col justify-center items-end gap-4 lg:gap-8 text-right">
          <h2 className="h2_title">About Us</h2>
          <Image className="lg:rotate-180" src={images.spoon} alt="spoon" />
          <p className="font-alt text-grey text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <Button title="Know More" href="/about" />
        </div>
        <Image className="h-[1110px] w-auto" src={images.knife} alt="knife" />
        <div className="flex flex-col justify-center gap-4 items-start lg:gap-8">
          <h2 className="h2_title">Our History</h2>
          <Image src={images.spoon} alt="spoon" />
          <p className="font-alt text-grey text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <Button title="Know More" href="/about" />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center gap-4">
        <Image className="h-[50vh] w-auto lg:h-[70vh] opacity-50" src={images.B} alt="B" />
        <Image className="h-[50vh] w-auto lg:h-[70vh] opacity-50" src={images.B} alt="B" />
      </div>
    </div>
  );
};

export default AboutUs;
