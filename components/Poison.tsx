import React from "react";
import SubHeading from "./SubHeading";
import Image from "next/image";
import images from "@/public/constants/images";

const Poison = () => {
  return (
    <div className="paddingX paddingY flex flex-col items-center justify-center gap-16">
      <div className="flex flex-col items-center justify-center gap-2">
        <SubHeading title="Wide Range To Choose From" direction="center" />
        <h2 className="h2_title">What&apos;s Your Poison?</h2>
      </div>
      <div className="flex flex-row items-center justify-center gap-8 lg:w-[80%]">
        <div className="flex-1">
            <Image src={images.poison01} alt="poison" />
        </div>
        <div className="flex-1">
            <Image src={images.poison02} alt="poison" />
        </div>
        <div className="flex-1">
            <Image src={images.poison03} alt="poison" />
        </div>
      </div>
    </div>
  );
};

export default Poison;
