import images from "@/public/constants/images";
import Image from "next/image";
import React from "react";
import { SubHeading, Button, Sign } from "../index";

const About = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 paddingX paddingY bg-[url("/assets/bg.webp")] bg-cover bg-center bg-no-repeat relative'>
      <Sign direction="left" />
      <div className="flex-1 self-end">
        <Image src={images.about02} alt="about" />
      </div>
      <div className="flex flex-1 flex-col gap-8 items-start">
        <Image src={images.about01} alt="about" />
        <div className="flex flex-col gap-2">
          <SubHeading title="About Us" />
          <h2 className="text-golden text-4xl sm:text-6xl font-base tracking-wider">Food, Drinks, Entertainment In One</h2>
        </div>
        <p className="font-alt text-grey text-sm">
          At Biryani Bar, we are committed to making every dining experience
          special. Our chefs and friendly staff work together to create an
          inviting atmosphere. Each dish is crafted with love, reflecting our
          dedication to culinary excellence and making your visit Memorable.
        </p>
        <Button title="Know More" href="/about" />
      </div>
    </div>
  );
};

export default About;
