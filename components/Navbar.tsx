"use client";

import React, { useState } from "react";
import { Menu } from "@deemlol/next-icons";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../public/constants/images";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full flex justify-between items-center bg-black p-6 paddingX text-white">
      <div className="flex justify-start items-center">
        <Image className="w-40" src={images.gericht} alt="logo" />
      </div>
      <ul className="flex-1 hidden lg:flex justify-center items-center list-none gap-8 font-alt">
        <li className="hover:text-grey">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-grey">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-grey">
          <Link href="/menu">Menu</Link>
        </li>
        <li className="hover:text-grey">
          <Link href="/awards">Awards</Link>
        </li>
        <li className="hover:text-grey">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hidden lg:flex justify-end items-center gap-8">
        <Link
          href="/login"
          className="font-alt ease duration-500 hover:border-b border-golden"
        >
          Log In / Register
        </Link>
        <div className="w-[1px] h-7.5 bg-grey" />
        <Link
          href="/booking"
          className="font-alt ease duration-500 hover:border-b border-golden"
        >
          Book Table
        </Link>
      </div>

      <div className="flex lg:hidden ">
        <Menu
          className="cursor-pointer"
          color="white"
          size={27}
          onClick={() => setIsOpen(true)}
        />

        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black flex-col z-5 justify-center items-center ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <MdOutlineRestaurantMenu
            className="cursor-pointer absolute top-6 right-4 text-golden"
            size={27}
            onClick={() => setIsOpen(false)}
          />
          <ul className="list-none flex flex-col gap-4 text-golden font-base text-2xl">
            <li className="hover:text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/awards">Awards</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
