import images from "@/public/constants/images";
import Image from "next/image";
import React from "react";
import { Sign, SubHeading } from "../index";

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-14 paddingX paddingY relative">
        <Sign />
      <div className="flex flex-1 flex-col items-start justify-center gap-6 w-full">
        <div className="flex flex-col items-start justify-center gap-2">
          <SubHeading title="Have a question?" />
          <h2 className="h2_title">Contact Us</h2>
        </div>
        <input
          className="border border-grey py-2 px-6 placeholder:text-gray w-full text-grey outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          className="border border-grey py-2 px-6 placeholder:text-gray w-full text-grey outline-none"
          type="email"
          placeholder="Email"
        />
        <textarea
          className="border border-grey py-2 px-6 placeholder:text-gray w-full text-grey outline-none"
          placeholder="Message"
        />
        <button className="bg-golden hover:bg-crimson font-base font-bold tracking-wider leading-5 text-base py-2 px-6 rounded-[1px] border-none outline-none cursor-pointer text-black">
          Send
        </button>
      </div>
      <Image className="flex-1" src={images.laurels} alt="laurels" />
    </div>
  );
};

export default ContactUs;
