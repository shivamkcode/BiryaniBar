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
          <p className="font-alt text-crimson text-sm md:text-base">
            At Biryani Bar, we are committed to making every dining experience
            special. Our chefs and friendly staff work together to create an
            inviting atmosphere. Each dish is crafted with love, reflecting our
            dedication to culinary excellence and making your visit Memorable.
          </p>
          <Button title="Know More" href="/about" />
        </div>
        <Image className="h-[1110px] w-auto" src={images.knife} alt="knife" />
        <div className="flex flex-col justify-center gap-4 items-start lg:gap-8">
          <h2 className="h2_title">Our History</h2>
          <Image src={images.spoon} alt="spoon" />
          <p className="font-alt text-crimson text-sm md:text-base">
            Since 1990, Biryani Bar has been a cherished culinary spot in Santa
            Monica. Our mission: bringing people together with the joy of good
            food. From humble beginnings to becoming a renowned restaurant, we
            are proud of our rich history and community.
          </p>
          <Button title="Know More" href="/about" />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-4 w-[80vw] lg:h-[70vh]">
        <Image
          className="w-full h-full opacity-50"
          src={images.B}
          alt="B"
        />
        <Image
          className="w-full h-full opacity-50"
          src={images.B}
          alt="B"
        />
      </div>
    </div>
  );
};

export default AboutUs;
