"use client";

import React, { useState } from "react";
import { Menu } from "@deemlol/next-icons";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../public/constants/images";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Menu",
      href: "/menu",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
    {
      name: "Catering",
      href: "/catering",
    },
    {
      name: "Tiffin Service",
      href: "/tiffin_service",
    },
    // {
    //   name: "Contact Us",
    //   href: "/contact",
    // },
  ];
  return (
    <nav className="w-full flex justify-between items-center bg-black p-6 paddingX text-white">
      <Link href="/" className="flex justify-start items-center">
        <Image className="w-40" src={images.gericht} alt="logo" />
      </Link>
      <div className="flex-1 hidden lg:flex justify-center items-center list-none gap-8 font-alt">
        {navLinks.map((link, index) => (
          <Link key={index} className="hover:text-grey" href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
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
          className={`fixed top-0 w-full h-screen bg-black flex flex-col justify-center items-center z-5 ${
            isOpen
              ? "visible opacity-100 right-0"
              : "invisible opacity-0 -right-50"
          } transition-all duration-500`}
        >
          <MdOutlineRestaurantMenu
            className="cursor-pointer absolute top-8 right-10 text-golden"
            size={27}
            onClick={() => setIsOpen(false)}
          />
          <div className="flex flex-col justify-center items-center gap-8 text-golden text-3xl font-base">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
