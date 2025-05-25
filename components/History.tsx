import images from "@/public/constants/images";
import Image from "next/image";
import React from "react";
import SubHeading from "./SubHeading";

const History = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 paddingX paddingY">
      <div className="flex flex-col items-center justify-center text-center gap-2">
        <SubHeading title="Our History" direction="center" />
        <h2 className="h2_title">Serving Customers For Over A decade</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 lg:gap-30 lg:flex-row">
        <div className="flex flex-col flex-1 items-center justify-center gap-8">
          <p className="text-sm text-gray">
            Biryani Bar is a restaurant that serves a variety of biryani dishes.
            It is a popular restaurant in the city of Hyderabad, Telangana,
            India. The restaurant is known for its delicious biryani and other
            Indian dishes.
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
                <h4 className="text-3xl text-white">Breakfast Options</h4>
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(250, 250, 250, .24) 0%, #FAFAFA 43%, rgba(250, 250, 250, 0) 93%)",
                }}
                className="w-[1px] my-6"
              />
              <div className="flex flex-1 flex-col justify-center gap-2">
                <h3 className="text-4xl">50+</h3>
                <Image src={images.spoon} alt="spoon" />
                <h4 className="text-3xl text-white">Dinner Options</h4>
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(250, 250, 250, .24) 0%, #FAFAFA 43%, rgba(250, 250, 250, 0) 93%)",
                }}
                className="w-[1px] my-6"
              />
              <div className="flex flex-col justify-center gap-2">
                <h3 className="text-4xl">8</h3>
                <Image src={images.spoon} alt="spoon" />
                <h4 className="text-3xl text-white">New Locations</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
