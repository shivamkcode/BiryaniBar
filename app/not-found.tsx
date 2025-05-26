import { Button } from "@/components";
import images from "@/public/constants/images";
import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 relative">
      <Image className="absolute top-0 left-0 w-full h-full -z-5 opacity-50" src={images.bg} alt="bg" />
      <Image src={images.logo} alt="logo" className="absolute top-20 right-20 w-20 h-20 lg:w-36 lg:h-36" />
      <Image src={images.logo} alt="logo" className="absolute bottom-20 left-20 w-20 h-20 lg:w-36 lg:h-36" />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[150px] font-bold text-golden font-base">404</h1>
        <Image className="saturate-0 -mt-6" src={images.spoon} alt="spoon" />
      </div>
      <p className="text-2xl text-white font-base text-center w-1/2">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <Button title="Back to Home" href="/" />
    </div>
  );
};

export default NotFound;
