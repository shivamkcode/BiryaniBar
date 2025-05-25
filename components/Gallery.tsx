import React from "react";
import SubHeading from "./SubHeading";
import Image from "next/image";
import Button from "./Button";
import Sign from "./Sign";
const Gallery = () => {
  return (
    <div className="paddingX pr-0 paddingY flex flex-col lg:flex-row items-center gap-12 lg:gap-0 bg-black/50 relative">
      <Sign />
      <div className="flex flex-col gap-6">
        <div>
          <SubHeading title="Instagram" />
          <h2 className="h2_title">Photo Gallery</h2>
        </div>
        <div className="flex flex-col gap-6 items-start">
          <p className="font-alt text-grey text-sm lg:text-base w-[80%] font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
          <Button title="View More" href="/gallery" />
        </div>
      </div>
      <div>
        <div
          style={{ scrollbarWidth: "none" }}
          className="flex gap-8 overflow-x-scroll"
        >
          {[1, 2, 3, 4].map((item) => (
            <Image
              key={item}
              src={`/assets/gallery0${item}.png`}
              alt="gallery"
              className="border border-golden/50 hover:opacity-80 transition-opacity duration-300"
              width={300}
              height={300}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 justify-end">
          <div
            style={{
              background:
                "linear-gradient(to right, #DCCA87 0%, #DCCA87 43%, rgba(220, 202, 135, 0.24) 93%)",
            }}
            className="w-10 h-[1px] "
          />
          <p className="text-golden font-base uppercase m-4 lg:mr-20">Scroll</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
