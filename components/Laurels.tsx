import Image from "next/image";
import React from "react";
import images from "@/public/constants/images";
import SubHeading from "./SubHeading";
import data from "@/public/constants/data";

const Laurels = () => {
  return (
    <div className='bg-[url("/assets/bg.webp")] bg-cover bg-center bg-no-repeat paddingX paddingY flex flex-col lg:flex-row justify-center items-center gap-20'>
      <div className="flex flex-col justify-center gap-12">
        <div>
          <SubHeading title="Awards & Recognition" />
          <h2 className="h2_title">Our Laurels</h2>
        </div>
        <div className="flex gap-y-12 flex-wrap justify-between">
          {data.awards.map((award) => (
            <div className="flex items-center gap-8 w-[48%]" key={award.title}>
              <div className="w-20 h-20 flex items-center justify-center">
                <Image src={award.imgUrl} alt={award.title} />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-base text-golden text-lg">{award.title}</p>
                <p className="font-alt text-grey text-sm md:text-base">
                  {award.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full items-center justify-center">
        <Image src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
};

export default Laurels;
