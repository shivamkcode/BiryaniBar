import images from "@/public/constants/images";
import Image from "next/image";
import React from "react";
import SubHeading from "./SubHeading";
import Button from "./Button";
import Sign from "./Sign";

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
          <h2 className="h2_title">Food, Drinks, Entertainment In One</h2>
        </div>
        <p className="font-alt text-grey text-sm">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <Button title="Know More" href="/about" />
      </div>
    </div>
  );
};

export default About;
