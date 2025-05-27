"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu } from "@deemlol/next-icons";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

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
      name: "Catering",
      href: "/catering",
    },
    {
      name: "Tiffin Service",
      href: "/tiffin_service",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 1000) {
        setIsNavbarVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsNavbarVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 flex justify-between items-center bg-black/80 backdrop-blur-sm p-6 paddingX text-white transition-all duration-1000 ${
        isNavbarVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      } gap-4`}
    >
      <Link href="/" className="flex justify-start items-center">
        <h3 className="text-4xl font-semibold font-base uppercase">
          BÍryanÍ Bar
        </h3>
      </Link>
      <div className="flex-1 hidden lg:flex items-center justify-center gap-6 font-alt">
        {navLinks.map((link, index) => (
          <Link key={index} className="hover:text-grey" href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex justify-end items-center gap-4">
        <Link
          href="/login"
          className="font-alt ease duration-500 hover:border-b border-golden text-nowrap"
        >
          Log In / Register
        </Link>
        <div className="w-[1px] h-7.5 bg-grey" />
        <Link
          href="/booking"
          className="font-alt ease duration-500 hover:border-b border-golden text-nowrap"
        >
          Book Table
        </Link>
      </div>

      <div className="flex lg:hidden">
        <Menu
          className="cursor-pointer"
          color="white"
          size={27}
          onClick={() => setIsOpen(true)}
        />

        <div
          className={`fixed top-0 w-full h-screen bg-black flex flex-col justify-center items-center z-50 ${
            isOpen
              ? "visible opacity-100 right-0 overflow-y-clip"
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
