import React from "react";
import Menu from "@/components/Menu";
import HappyHour from "@/components/HappyHour";
import { Gallery, Reservations } from "@/components";
import Hero from "@/components/Hero";

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
