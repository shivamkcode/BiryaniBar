import images from "@/public/constants/images";
import Image from "next/image";
import React from "react";

const SubHeading = ({ title, direction="left" }: { title: string, direction?: string }) => {
  return (
    <div className={`mb-4 flex flex-col gap-2 ${direction === "right" ? "rotate-180" : direction === "center" ? "items-center justify-center" : ""}`}>
      <p className={`font-base text-crimson`}>{title}</p>
      <Image src={images.spoon} alt="spoon" />
    </div>
  );
};

export default SubHeading;
