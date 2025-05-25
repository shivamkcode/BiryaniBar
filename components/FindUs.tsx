import Image from "next/image";
import React from "react";
import SubHeading from "./SubHeading";
import Button from "./Button";
import images from "@/public/constants/images";

const FindUs = () => {
  return (
    <div className="bg-[url('/assets/bg.webp')] bg-cover bg-center bg-no-repeat paddingX paddingY flex flex-col items-center lg:flex-row gap-20">
      <div className="flex flex-1 flex-col gap-10 items-start">
        <div className="flex flex-col gap-2">
          <SubHeading title="Contact" />
          <h2 className="h2_title">Find Us</h2>
        </div>
        <div>
          <p className="text-white text-xl font-base">
            Lane Ends Biryani, Whatshaw Lane, Stratford-upon-Avon, Warwickshire,
            CV37 6BB
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-golden text-xl font-base">Opening Hours</p>
            <p className="text-white font-alt">
              Mon - Fri: 10:00 am - 02:00 am
            </p>
            <p className="text-white font-alt">
              Sat - Sun: 10:00 am - 03:00 am
            </p>
          </div>
        </div>
        <Button title="Visit Us" href="/contact" />
      </div>
      <div className="flex-1">
        <Image src={images.findus} alt="findus" />
      </div>
    </div>
  );
};

export default FindUs;
