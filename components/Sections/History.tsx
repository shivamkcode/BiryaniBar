import images from "@/public/constants/images";
import Image from "next/image";
import React from "react";
import { SubHeading, Intro, Sign } from "../index";

const History = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 lg:gap-24 paddingX paddingY">
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <SubHeading title="Our History" direction="center" />
          <h2 className="h2_title">Serving Customers For Over A decade</h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-30 lg:flex-row">
          <div className="flex flex-col flex-1 items-center justify-center gap-8">
            <p className="text-sm text-gray">
              Biryani Bar is a restaurant that serves a variety of biryani
              dishes. It is a popular restaurant in the city of Hyderabad,
              Telangana, India. The restaurant is known for its delicious
              biryani and other Indian dishes.
            </p>
            <div>
              <Image src={images.history01} alt="history01" />
            </div>
          </div>
          <div className="flex flex-col flex-1 items-center justify-center gap-8">
            <Image src={images.history02} alt="history02" />
            <div className="flex flex-col gap-8 font-base text-golden">
              <h3 className="text-4xl">Over The Years</h3>
              <div className="flex flex-row justify-evenly gap-8">
                <div className="flex flex-1 flex-col justify-center gap-2">
                  <h3 className="text-4xl">30+</h3>
                  <Image src={images.spoon} alt="spoon" />
                  <h4 className="text-xl lg:text-3xl text-white">Breakfast Options</h4>
                </div>
                <div className="w-[1px] bg-gradient-to-b from-[rgba(250, 250, 250, .24)] from-0% via-[#FAFAFA] via-43% to-[rgba(250, 250, 250, 0)] to-93%" />
                <div className="flex flex-1 flex-col justify-center gap-2">
                  <h3 className="text-4xl">50+</h3>
                  <Image src={images.spoon} alt="spoon" />
                  <h4 className="text-xl lg:text-3xl text-white">Dinner Options</h4>
                </div>
                <div className="w-[1px] bg-gradient-to-b from-[rgba(250, 250, 250, .24)] from-0% via-[#FAFAFA] via-43% to-[rgba(250, 250, 250, 0)] to-93%" />
                <div className="flex flex-1 flex-col justify-center gap-2">
                  <h3 className="text-4xl">8</h3>
                  <Image src={images.spoon} alt="spoon" />
                  <h4 className="text-xl lg:text-3xl text-white">New Locations</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 relative">
        <Sign />
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <SubHeading title="About Us" direction="center" />
            <h2 className="h2_title">Happy Hours With Us</h2>
          </div>
          <p className="text-grey text-sm font-alt w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
        </div>
        <Intro src="/assets/happyHour.mp4" poster="/assets/intro02.webp" />
      </div>
    </div>
  );
};

export default History;
