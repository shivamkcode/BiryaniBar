"use client";
import data from "@/public/constants/data";
import images from "@/public/constants/images";
import Image from "next/image";
import React, { useState } from "react";
import { Sign } from "../index";

const Question = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`flex flex-col gap-4 cursor-pointer p-6 text-white bg-[#242424] w-full font-base ${
        isOpen ? "border-golden border" : ""
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <h3
        className={`text-2xl transition-all duration-300 font-semibold ${
          isOpen ? "text-golden" : ""
        }`}
      >
        {question}
      </h3>
      <p className={`font-alt text-grey ${isOpen ? "block" : "hidden"}`}>
        {answer}
      </p>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 lg:gap-20 paddingX paddingY bg-[url('/assets/bg.webp')] bg-cover bg-center relative">
      <Sign direction="left" />
      <h2 className="h2_title">Frequently Asked Questions</h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="flex-1">
          <Image src={images.findus} alt="faq" />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center w-full gap-4">
          {data.faqs.map((faq, index) => (
            <Question key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
