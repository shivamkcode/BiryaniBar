import React from "react";
import { GoChevronRight } from "react-icons/go";

const Hero = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <main className="bg-[url('/assets/menuHero.webp')] bg-cover bg-center bg-no-repeat h-[100vh] relative">
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <h1 className="font-base text-golden text-center text-6xl lg:text-7xl tracking-wider font-semibold mb-6">
          {title}
        </h1>
        <div className="flex justify-center items-center gap-2 text-white font-base text-xl">
          <p>Home</p>
          <GoChevronRight />
          <p>{subtitle}</p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
