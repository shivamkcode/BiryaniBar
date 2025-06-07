import Hero from "@/components/Sections/Hero";
import React from "react";
import images from "@/public/constants/images";
import Image from "next/image";
import { AboutUs, FindUs, Intro } from "@/components";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.welcome,
  images.poison01,
  images.about01,
  images.poison02,
  images.about02,
  images.poison03,
  images.gallery04,
];

const Gallery = () => {
  return (
    <div>
      <Hero title="Gallery" subtitle="Gallery" />
      <div className="flex flex-wrap justify-evenly gap-4 gap-y-4 lg:gap-y-8 paddingX paddingY">
        {galleryImages.map((image, index) => (
          <div key={index} className="w-[40vw] h-[40vw] flex items-center justify-center border border-golden/50 overflow-hidden ">
            <Image
              className={`w-[40vw] h-[40vw] object-cover`}
              src={image}
              alt="gallery"
            />
          </div>
        ))}
      </div>
      <AboutUs />
      <Intro src="/assets/meal.mp4" poster="/assets/intro01.webp" />
      <FindUs />
    </div>
  );
};

export default Gallery;
