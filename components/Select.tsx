"use client";
import React, { useState } from "react";
import { GrDown, GrUp } from "react-icons/gr";

const Select = ({ label, options, onChange }: { label: string; options: string[]; onChange: (value: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full text-nowrap">
      <label className="block mb-2 text-sm font-alt text-grey">{label}</label>
      <div
        className={`p-3 text-sm border border-grey cursor-pointer w-[25vw] lg:w-[300px] hover:bg-gray hover:text-white ${isOpen ? "border-white/80 bg-gray/50" : ""} flex justify-between items-center`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
        {isOpen ? <GrUp className="w-4 h-4" /> : <GrDown className="w-4 h-4" />}
      </div>
      {isOpen && (
        <div style={{scrollbarWidth: "none"}} className="absolute z-10 w-[25vw] lg:w-[300px] bg-black border border-grey border-t-0 shadow-lg h-[200px] overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              className="p-3 text-grey cursor-pointer hover:bg-gray hover:text-white"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;