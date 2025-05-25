import React from "react";
import Hero from "@/components/Hero";
import History from "@/components/History";

const page = () => {
  return (
    <div>
      <Hero title="Welcome to Biryani Bar" subtitle="About Us" />
      <History />
    </div>
  );
};

export default page;
