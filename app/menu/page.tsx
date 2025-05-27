import React from "react";
import Menu from "@/components/Sections/Menu";
import HappyHour from "@/components/Sections/HappyHour";
import { Gallery, Reservations } from "@/components";
import Hero from "@/components/Sections/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Menu',
};

const MenuPage = () => {
  return (
    <div>
      <Hero title="What We Offer" subtitle="Menu" />
      <Menu />
      <HappyHour />
      <Reservations />
      <Gallery />
    </div>
  );
};

export default MenuPage;
