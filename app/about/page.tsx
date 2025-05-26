import React from "react";
import Hero from "@/components/Hero";
import History from "@/components/History";
import { Chef, Gallery, Testimony } from "@/components";

const page = () => {
  return (
    <div>
      <Hero title="Welcome to Biryani Bar" subtitle="About Us" />
      <History />
      <Chef />
      <Testimony />
      <Gallery />
    </div>
  );
};

export default page;
