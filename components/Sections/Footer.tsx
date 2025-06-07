import React from "react";
import SubHeading from "../components/SubHeading";
import Button from "../components/Button";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "@deemlol/next-icons";
import images from "@/public/constants/images";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[url('/assets/bg.webp')] bg-cover bg-center bg-no-repeat paddingX paddingY relative flex flex-col gap-10 lg:gap-30 mt-60 lg:mt-70">
      <div className="flex flex-col gap-10 items-center justify-center bg-black border border-golden/20 py-10 px-6 -mt-60 lg:-mt-70">
        <div className="flex flex-col gap-6 text-center">
          <div className="flex flex-col gap-2">
            <SubHeading title="Newsletter" direction="center" />
            <h2 className="h2_title capitalize">Subscribe to Our Newsletter</h2>
          </div>
          <p className="text-white text-sm">And never miss latest Updates!</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 items-center w-[80%] lg:w-[60%]">
          <input
            className="border border-white py-2 px-6 placeholder:text-gray w-full text-grey outline-none"
            type="email"
            placeholder="Your Email Address"
          />
          <Button title="Subscribe" href="/" />
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex flex-col gap-6 flex-1 items-center justify-center">
            <h3 className="text-crimson text-3xl font-base">Contact Us</h3>
            <div className="flex flex-col gap-2 font-alt text-grey text-sm text-center">
              <p>825 Saginaw Pkwy Unit #4, Cambridge, ON N1T 0E2</p>
              <p>+1 212-344-1230</p>
              <p>+1 212-344-1230</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 flex-1 items-center justify-center">
            <Link
              href="/"
              className="h2_title uppercase font-semibold text-center"
            >
              Biryani Bar
            </Link>
            <div className="flex flex-col gap-4 items-center justify-center text-center">
              <p className="text-white">
                &quot;The best way to find yourself is to lose yourself in the
                service of others.&quot;
              </p>
              <Image src={images.spoon} alt="spoon" />
              <div className="flex gap-4 text-white">
                <Link href="https://www.facebook.com/" target="_blank">
                  <Facebook />
                </Link>
                <Link href="https://www.twitter.com/" target="_blank">
                  <Twitter />
                </Link>
                <Link href="https://www.instagram.com/" target="_blank">
                  <Instagram />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 flex-1 items-center justify-center">
            <h3 className="text-crimson text-3xl font-base">Working Hours</h3>
            <div className="flex flex-col gap-2 font-alt text-grey text-sm text-center">
              <p>Monday - Friday:</p>
              <p>08:00 am - 12:00 am</p>
              <p>Saturday - Sunday:</p>
              <p>07:00 am - 11:00 pm</p>
            </div>
          </div>
        </div>
        <h6 className="text-grey text-sm">
          Copyright © 2025 Biryani Bar. All rights reserved.
        </h6>
      </div>
      <div className="absolute right-0 top-1/4 items-center rotate-90 hidden lg:flex gap-2">
        <div
          style={{
            background:
              "linear-gradient(to right, #DCCA87 0%, #DCCA87 43%, rgba(220, 202, 135, 0.24) 93%)",
          }}
          className="w-10 h-[1px] "
        />
        <p className="text-golden font-base uppercase">Top</p>
      </div>
    </div>
  );
};

export default Footer;
