import React from "react";

const HappyHour = () => {
  return (
    <div className='bg-[url("/assets/happy_hour.webp")] bg-cover bg-center bg-no-repeat paddingX h-[80vh] flex items-center justify-center'>
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="h2_title">Happy Hours</h2>
        <p className="text-center text-white font-bold text-sm md:text-base font-base">
          Monday - Friday (4:00 PM - 7:00 PM)
        </p>
      </div>
    </div>
  );
};

export default HappyHour;
